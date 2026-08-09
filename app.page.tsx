export default function Home() {
  const products = [
    { id: 1, title: "Nürburgring Full Circuit Track Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/nurburgring.png" },
    { id: 2, title: "Spa-Francorchamps Eau Rouge Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/spa.png" },
    { id: 3, title: "Monaco Grand Prix Circuit Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/monaco.png" },
    { id: 4, title: "Le Mans Circuit de la Sarthe Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/lemans.png" },
    { id: 5, title: "Silverstone GP Circuit Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/silverstone.png" },
    { id: 6, title: "Monza Autodrome Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/monza.png" },
    { id: 7, title: "Isle of Man TT Course Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/tt.png" },
    { id: 8, title: "Hockenheimring Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/hockenheim.png", soldOut: true },
    { id: 9, title: "Catalunya Circuit Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/catalunya.png" },
    { id: 10, title: "Mugello Circuit Decal", price: "£3.99", old: "£17.99", img: "https://cdn.shopify.com/s/files/1/0623/2388/0834/files/mugello.png" },
  ];

  const reviews = [
    { text: "Insane quality for the price. Ordered Monday, had them Wednesday. Looks absolutely mint.", author: "Tom B.", source: "Google" },
    { text: "The custom text sticker came out perfect. Exactly the font I wanted. Will 100% order again.", author: "CurvyKaz", source: "Facebook" },
    { text: "Best sticker shop in the UK, no question. I've tried others and the quality doesn't compare.", author: "Dan_GoesLow", source: "Instagram" },
    { text: "Fast, great communication, stickers went on perfectly with zero bubbles. Absolutely spot on.", author: "Jakub M.", source: "Trustpilot" },
    { text: "Got the side line pack for my Civic and it looks unreal. Proper head turner.", author: "Sophie T.", source: "Google" },
    { text: "Cheapest stickers I've found, and the quality slaps. Three people at the meet asked where I got them.", author: "CurvyKaz", source: "Facebook" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Marquee */}
      <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          {Array(6).fill("🔥 MIDNIGHT SALE — 78% OFF — LIMITED TIME — ORDER NOW — FREE UK DELIVERY — ").map((t, i) => (
            <span key={i} className="px-8 text-xs font-extrabold uppercase tracking-[0.15em]">{t}</span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 sticky top-0 bg-neutral-950 z-50">
        <div className="text-xl font-black tracking-tight">VINYL<span className="text-red-600">HUB</span></div>
        <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-[0.08em] text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Track Outlines</a>
          <a href="#" className="hover:text-white transition-colors">JDM Decals</a>
          <a href="#" className="hover:text-white transition-colors">Caliper</a>
          <a href="#" className="hover:text-white transition-colors">Custom</a>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] rounded">Cart (0)</button>
      </nav>

      {/* Hero */}
      <section className="text-center px-5 pt-14 pb-10">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600 mb-4">◢◤ UK&apos;s #1 Car Decal Shop ◤◢</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-3">
          Stick It<br /><span className="text-red-600" style={{textShadow:'0 0 30px rgba(220,38,38,0.4)'}}>Your Way</span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-lg mx-auto mb-6 leading-relaxed">
          Premium JDM & Car Culture Decals. Precision die-cut in Cambridgeshire, UK. 7,500+ designs shipped.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] rounded transition-colors">Shop The Sale</a>
          <a href="#" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] rounded transition-all">Custom Builder</a>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="flex flex-wrap justify-center gap-6 px-5 py-3.5 border-y border-neutral-800 text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500">
        <span>⚡ 1–3 Day Dispatch</span>
        <span>🇬🇧 UK Manufactured</span>
        <span>🛡️ 8 Year Outdoor Rated</span>
        <span>📦 Free UK Delivery £30+</span>
        <span>⭐ 25,000+ Orders</span>
      </div>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-xl font-black uppercase tracking-tight whitespace-nowrap">Top Picks</h2>
          <div className="flex-1 h-px bg-neutral-800" />
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.1em] text-red-500 hover:text-red-400 whitespace-nowrap">View All →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {products.map((p) => (
            <a key={p.id} href="#" className="group relative bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-all block">
              <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[9px] font-extrabold uppercase tracking-[0.08em] px-2 py-1 rounded">SALE</span>
              {p.soldOut && (
                <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center">
                  <span className="bg-neutral-800 text-neutral-400 text-[10px] font-extrabold uppercase tracking-[0.15em] px-3 py-1 rounded">Sold Out</span>
                </div>
              )}
              <div className="aspect-square bg-white flex items-center justify-center">
                <img src={p.img} alt={p.title} className="w-[80%] h-[80%] object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-neutral-300 line-clamp-2 leading-snug min-h-[32px]">{p.title}</h3>
                <div className="mt-1.5 flex gap-2 items-baseline">
                  <span className="text-sm font-extrabold text-red-500">{p.price}</span>
                  <span className="text-[11px] text-neutral-600 line-through">{p.old}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Custom Builder CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-10 sm:p-14 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-500 mb-3">⚡ Your Text · Premium Vinyl · Instant Design</p>
          <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">Design Your Own <span className="text-red-600">Decal</span></h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-5">Type your name, choose your colour and size — we cut and ship it to your door. Starting from just £1.99.</p>
          <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] rounded transition-colors">Go To Full Designer →</a>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-xl font-black uppercase tracking-tight whitespace-nowrap">What People Say</h2>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reviews.map((r, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
              <div className="text-red-500 text-sm tracking-[0.15em] mb-2.5">★★★★★</div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-500">{r.author} · {r.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center">
        <p className="text-lg font-black mb-1">VINYL<span className="text-red-600">HUB</span></p>
        <p className="text-[11px] text-neutral-600 mb-4">Precision Die-Cut Decals · Cambridgeshire, UK · Est. 2020</p>
        <div className="flex justify-center gap-5 text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-4">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">Custom</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Shipping</a>
        </div>
        <p className="text-[11px] text-neutral-600">© 2026 VinylHub. All rights reserved.</p>
      </footer>
    </div>
  );
}