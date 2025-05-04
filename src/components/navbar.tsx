import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo links to home */}
      <Link href="/" className="text-xl font-bold hover:opacity-80">
        CSA-UK
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        {/* Scroll-to sections on the homepage */}
        <Link href="/#about" className="hover:underline">
          About
        </Link>
        <Link href="/#events" className="hover:underline">
          Events
        </Link>

        {/* Separate page for committee */}
        <Link href="/committee" className="hover:underline">
          Committee
        </Link>

        {/* Now points at the footer */}
        <Link href="/#footer" className="hover:underline">
          Contacts
        </Link>
      </div>
    </nav>
  );
}
