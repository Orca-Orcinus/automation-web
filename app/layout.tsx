import "./globals.css";

export const metadata = {
  title: "Orcinus Automation - Industrial Solutions",
  description: "Next-gen industrial automation, robotics, and machine control.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-50">
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
              ORCINUS<span className="text-slate-900 dark:text-white"> AUTOMATION</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="/industries" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Industries</a>
              <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="/contact" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-white font-bold mb-4">Orcinus Automation</div>
              <p>Engineering the future of manufacturing through intelligent automation.</p>
            </div>
            <div>
              <div className="text-white font-bold mb-4">Services</div>
              <ul className="space-y-2">
                <li><a href="/services#design" className="hover:text-white">Machine Design</a></li>
                <li><a href="/services#robotics" className="hover:text-white">Robotics</a></li>
                <li><a href="/services#vision" className="hover:text-white">Vision Systems</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-bold mb-4">Company</div>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/projects" className="hover:text-white">Projects</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-bold mb-4">Contact</div>
              <p>79,Jalan Ekoflora 5/23,</p>
              <p>Taman Ekoflora, Johor Bahru,</p>
              <p>Johor 81100</p>
              <p>gemsiang@gmail.com</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
