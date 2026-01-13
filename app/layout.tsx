import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black via-red-900 to-amber-900 text-white min-h-screen">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/projects">PORJECTS</a>
          <a href="/contact">CONTACT</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
