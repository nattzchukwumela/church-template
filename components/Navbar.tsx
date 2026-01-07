import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-900">
              Haven City<span className="text-indigo-600">.</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              About
            </Link>
            <Link
              href="/sermons"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Sermons
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Contact
            </Link>
            <Link
              href="/give"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Give
            </Link>
          </div>
          {/* Mobile menu button placeholder - implement logic as needed */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-700">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
