export const metadata = {
  title: "VinylHub | Custom Vinyl Decals & Stickers | UK",
  description: "Premium JDM & Car Culture Decals. Precision die-cut in Cambridgeshire, UK. 7,500+ designs. 1-3 day dispatch.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0a' }}>
        {children}
      </body>
    </html>
  );
}