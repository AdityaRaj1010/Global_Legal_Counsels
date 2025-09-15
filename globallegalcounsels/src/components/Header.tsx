"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Civil Litigation", slug: "civil-litigation" },
  { title: "Family Law", slug: "family-law" },
  { title: "Criminal Defense", slug: "criminal-defense" },
  { title: "Employment & Labor", slug: "employment-labor" },
  { title: "Business & Corporate", slug: "business-corporate" },
  { title: "Real Estate", slug: "real-estate" },
  { title: "Immigration", slug: "immigration" },
  { title: "Estate Planning & Probate", slug: "estate-planning" },
  { title: "Intellectual Property", slug: "intellectual-property" },
  { title: "Personal Injury", slug: "personal-injury" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBgClass = scrolled ? "bg-white text-gray-800 shadow" : "bg-transparent text-white";

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-smooth ${headerBgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="">Global Legal Counsels</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium items-center relative">
          <NavLink href="/">Home</NavLink>
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/#services">
              <button className="cursor-pointer" onClick={scrollToServices}>Services</button>
            </Link>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="absolute left-0 mt-2 w-56 rounded-md bg-white text-gray-800 shadow-lg"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-2 hover:bg-gray-100">
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/legal/privacy">Privacy</NavLink>
          <NavLink href="/legal/terms">Terms</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((s) => !s)}
            className={`p-2 rounded-md border transition-smooth ${scrolled ? 'bg-white text-gray-800' : 'bg-white/10 text-white'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow"
            initial={{ opacity: 0, scale: 0.98, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-4 py-4 space-y-3">
              <MobileLink href="/">Home</MobileLink>
              <div onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                <button
                  onClick={scrollToServices}
                  className="block px-3 py-2 rounded hover:bg-gray-50 text-gray-800 w-full text-left"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  Services
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 rounded-md bg-white text-gray-800 shadow-lg"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      {services.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-2 hover:bg-gray-100">
                          {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <MobileLink href="/about">About</MobileLink>
              <MobileLink href="/contact">Contact</MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="">
      {children}
    </Link>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-3 py-2 rounded hover:bg-gray-50 text-gray-800">
      {children}
    </Link>
  );
}

