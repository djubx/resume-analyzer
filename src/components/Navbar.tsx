import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Resume Checkers
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/resume-analyzer">Analyze</NavLink>
            <NavLink href="/ats-score">ATS Score</NavLink>
            <NavLink href="/resume-checklist">Checklist</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/resume-analyzer">Analyze</MobileNavLink>
            <MobileNavLink href="/ats-score">ATS Score</MobileNavLink>
            <MobileNavLink href="/resume-checklist">Checklist</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  );
}