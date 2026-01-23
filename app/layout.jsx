import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Himalayan Trekking",
  description: "Best trekking experiences in the mountains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        
        {/* Navbar */}
        <header>
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-700">
              Himalayan Trek
            </h1>
            <div className="space-x-6 flex flex-col sm:flex-row">
              <Link href="/" className="hover:text-green-700">Home</Link>
              <Link href="/about" className="hover:text-green-700">About</Link>
              <Link href="/services" className="hover:text-green-700">Services</Link>
              <Link href="/contact" className="hover:text-green-700">Contact</Link>
              <Link href="/blog" className="hover:text-green-700">Blog</Link>
            </div>
          </div>
        </nav>
</header>
        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-green-700 text-white text-center py-4 mt-12">
          © {new Date().getFullYear()} Himalayan Trekking
        </footer>

      </body>
    </html>
  );
}
