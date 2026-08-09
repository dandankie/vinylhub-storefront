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
    <div style={{ background: '#0a0a0a', color: '#fafafa', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      {/* Marquee */}
      <div style={{ background: '#dc2626', color: '#fff', padding: '8px 0', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
        <div style={{ display: 'inline-flex', animation: 'marquee 20s linear infinite' }}>
          {Array(6).fill("🔥 MIDNIGHT SALE — 78% OFF — LIMITED TIME — ORDER NOW — FREE UK DELIVERY — ").map((t, i) => (
            <span key={i} style={{ padding: '0 32px' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #262626', position: 'sticky', top: 0, background: '#0a0a0a', zIndex: 50 }}>
        <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>VINYL<span style={{ color: '#dc2626' }}>HUB</span></div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a3a3a3' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Track Outlines</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>JDM Decals</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Caliper</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Custom</a>
        </div>
        <button style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '8px 16px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '4px' }}>Cart (0)</button>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '56px 20px 40px' }}>
        <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#dc2626', marginBottom: '16px' }}>◢◤ UK's #1 Car Decal Shop ◤◢</p>
        <h1 style={{ fontSize: 'clamp(40px, 10vw, 72px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 0.95, marginBottom: '12px' }}>
          Stick It<br /><span style={{ color: '#dc2626', textShadow: '0 0 30px rgba(220,38,38,0.4)' }}>Your Way</span>
        </h1>
        <p style={{ color: '#a3a3a3', fontSize: '16px', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.5 }}>
          Premium JDM & Car Culture Decals. Precision die-cut in Cambridgeshire, UK. 7,500+ designs shipped.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ background: '#dc2626', color: '#fff', padding: '14px 32px', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', borderRadius: '4px', textDecoration: 'none' }}>Shop The Sale</a>
          <a href="#" style={{ border: '2px solid #dc2626', color: '#dc2626', padding: '14px 32px', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', borderRadius: '4px', textDecoration: 'none' }}>Custom Builder</a>
        </div>
      </section>

      {/* Trust Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', padding: '14px 20px', borderTop: '1px solid #262626', borderBottom: '1px solid #262626', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#737373', flexWrap: 'wrap' }}>
        {['⚡ 1–3 Day Dispatch', '🇬🇧 UK Manufactured', '🛡️ 8 Year Outdoor Rated', '📦 Free UK Delivery £30+', '⭐ 25,000+ Orders'].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      {/* Products */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>Top Picks</h2>
          <div style={{ flex: 1, height: '1px', background: '#262626' }} />
          <a href="#" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dc2626', textDecoration: 'none', whiteSpace: 'nowrap' }}>View All →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
          {products.map((p) => (
            <a key={p.id} href="#" style={{ background: '#171717', border: '1px solid #262626', borderRadius: '8px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block' }}>
              <span style={{ position: 'absolute', top: '8px', left: '8px', background: '#dc2626', color: '#fff', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '3px', zIndex: 2 }}>SALE</span>
              {p.soldOut && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                  <span style={{ background: '#262626', color: '#a3a3a3', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', padding: '4px 12px', borderRadius: '3px' }}>Sold Out</span>
                </div>
              )}
              <div style={{ aspectRatio: '1', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={p.img} alt={p.title} style={{ width: '80%', height: '80%', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div style={{ padding: '10px 12px 12px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#d4d4d4', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '32px' }}>{p.title}</h3>
                <div style={{ marginTop: '6px', display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#dc2626' }}>{p.price}</span>
                  <span style={{ fontSize: '11px', color: '#525252', textDecoration: 'line-through' }}>{p.old}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Custom Builder CTA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 32px' }}>
        <div style={{ background: '#171717', border: '1px solid #262626', borderRadius: '10px', padding: '40px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#dc2626', marginBottom: '12px' }}>⚡ Your Text · Premium Vinyl · Instant Design</p>
          <h3 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px', marginBottom: '8px' }}>Design Your Own <span style={{ color: '#dc2626' }}>Decal</span></h3>
          <p style={{ color: '#a3a3a3', fontSize: '14px', maxWidth: '400px', margin: '0 auto 20px' }}>Type your name, choose your colour and size — we cut and ship it to your door. Starting from just £1.99.</p>
          <a href="#" style={{ background: '#dc2626', color: '#fff', padding: '14px 32px', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}>Go To Full Designer →</a>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>What People Say</h2>
          <div style={{ flex: 1, height: '1px', background: '#262626' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: '#171717', border: '1px solid #262626', borderRadius: '8px', padding: '20px' }}>
              <div style={{ color: '#dc2626', fontSize: '14px', letterSpacing: '2px', marginBottom: '10px' }}>★★★★★</div>
              <p style={{ fontSize: '13px', color: '#d4d4d4', lineHeight: 1.5, marginBottom: '12px', fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.author} · {r.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #262626', padding: '32px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 900, marginBottom: '4px' }}>VINYL<span style={{ color: '#dc2626' }}>HUB</span></p>
        <p style={{ fontSize: '11px', color: '#525252', marginBottom: '16px' }}>Precision Die-Cut Decals · Cambridgeshire, UK · Est. 2020</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#737373', marginBottom: '16px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Custom</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Shipping</a>
        </div>
        <p style={{ fontSize: '11px', color: '#525252' }}>© 2026 VinylHub. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}