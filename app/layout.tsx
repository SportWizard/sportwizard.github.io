import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navContent = ["home", "about", "projects", "contact"]

  return (
    <html lang="en">
      <body className="bg-linear-to-br from-red-800 via-orange-800 to-amber-800 text-white min-h-screen">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          {navContent.map((content, idx) => {
            return (
              content !== "home" ?
                <a className="transition-transform duration-300 hover:scale-150" key={idx} href={`/${content.toLowerCase()}`}>
                  {content.toUpperCase()}
                </a>
                :
                <a className="transition-transform duration-300 hover:scale-150" key={idx} href="/">
                  {content.toUpperCase()}
                </a>
            );
          })}
        </nav>

        <main className="max-w-7xl mx-auto">
          {children}
        </main>

        <footer className="w-full text-center">
          © 2026 Henry Ye Cao
        </footer>
      </body>
    </html>
  );
}
