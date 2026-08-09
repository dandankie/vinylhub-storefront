export const metadata = {
  title: "VinylHub | Custom Vinyl Decals & Stickers | UK",
  description: "Premium JDM & Car Culture Decals. Precision die-cut in Cambridgeshire, UK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased m-0 p-0">
        {children}
      </body>
    </html>
  );
}