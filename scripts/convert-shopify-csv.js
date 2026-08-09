const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(process.cwd(), 'data', 'shopify-export.csv');
const OUT_PATH = path.join(process.cwd(), 'lib', 'products.ts');

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = parseLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = parseLine(lines[i]);
    if (vals.length < 2) continue;
    const row = {};
    headers.forEach((h, idx) => row[h] = vals[idx] || '');
    rows.push(row);
  }
  return rows;
}

function parseLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function cleanPrice(val) {
  if (!val) return 0;
  const n = parseFloat(String(val).replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

function main() {
  if (!fs.existsSync(CSV_PATH)) {
    console.log('No CSV found at data/shopify-export.csv — using placeholder products');
    fs.writeFileSync(OUT_PATH, `export const products = [];\n`);
    return;
  }

  const text = fs.readFileSync(CSV_PATH, 'utf-8');
  const rows = parseCSV(text);

  const productMap = new Map();

  for (const row of rows) {
    const handle = row.Handle || '';
    if (!handle) continue;

    if (!productMap.has(handle)) {
      productMap.set(handle, {
        handle,
        title: row.Title || '',
        description: row['Body (HTML)'] || '',
        tags: (row.Tags || '').split(',').map(t => t.trim()).filter(Boolean),
        images: [],
        variants: [],
      });
    }

    const product = productMap.get(handle);
    const imgSrc = row['Image Src'] || '';
    if (imgSrc && !product.images.includes(imgSrc)) {
      product.images.push(imgSrc);
    }

    const opt1Name = (row['Option1 Name'] || '').toLowerCase();
    const variant = {
      id: row['Variant ID'] || `${handle}-${product.variants.length}`,
      colour: opt1Name.includes('size') ? (row['Option2 Value'] || 'Default') : (row['Option1 Value'] || 'Default'),
      size: opt1Name.includes('size') ? (row['Option1 Value'] || 'Default') : (row['Option2 Value'] || 'Default'),
      price: cleanPrice(row['Variant Price']),
      comparePrice: cleanPrice(row['Variant Compare At Price']),
      sku: row['Variant SKU'] || '',
    };

    product.variants.push(variant);
  }

  const products = [];
  let idCounter = 1;

  for (const [handle, p] of productMap) {
    if (p.variants.length === 0) continue;
    const prices = p.variants.map(v => v.price).filter(v => v > 0);
    const comparePrices = p.variants.map(v => v.comparePrice).filter(v => v > 0);

    const priceFrom = prices.length ? Math.min(...prices) : 0;
    const priceTo = prices.length ? Math.max(...prices) : 0;
    const comparePriceFrom = comparePrices.length ? Math.min(...comparePrices) : undefined;

    let badge = undefined;
    if (comparePriceFrom && comparePriceFrom > priceFrom) {
      const discount = Math.round((1 - priceFrom / comparePriceFrom) * 100);
      if (discount >= 50) badge = `SALE ${discount}% OFF`;
      else if (discount > 0) badge = 'SALE';
    }

    const mainImage = p.images[0] || '';
    const imageFilename = mainImage ? `/products/${mainImage.split('/').pop()?.split('?')[0] || 'placeholder.jpg'}` : '/products/placeholder.jpg';

    products.push({
      id: idCounter++,
      handle,
      title: p.title,
      description: p.description,
      image: imageFilename,
      images: p.images,
      tags: p.tags,
      badge,
      soldOut: false,
      priceFrom,
      priceTo,
      comparePriceFrom,
      variants: p.variants,
    });
  }

  const tsContent = `export interface Variant {
  id: string;
  colour: string;
  size: string;
  price: number;
  comparePrice?: number;
  sku: string;
}

export interface Product {
  id: number;
  handle: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  badge?: string;
  soldOut: boolean;
  priceFrom: number;
  priceTo: number;
  comparePriceFrom?: number;
  variants: Variant[];
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

  fs.writeFileSync(OUT_PATH, tsContent);
  console.log(`✅ Converted ${products.length} products with ${products.reduce((s, p) => s + p.variants.length, 0)} variants to lib/products.ts`);
}

main();