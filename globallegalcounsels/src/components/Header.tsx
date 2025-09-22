"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Facebook, Instagram, Twitter, ChevronDown, Phone, MapPin, Clock, Menu, X } from "lucide-react";

const services = [
  { title: "Civil Litigation", slug: "civil-litigation", icon: "⚖️" },
  { title: "Family Law", slug: "family-law", icon: "👨‍👩‍👧‍👦" },
  { title: "Criminal Defense", slug: "criminal-defense", icon: "🛡️" },
  { title: "Employment & Labor", slug: "employment-labor", icon: "💼" },
  { title: "Business & Corporate", slug: "business-corporate", icon: "🏢" },
  { title: "Real Estate", slug: "real-estate", icon: "🏠" },
  { title: "Immigration", slug: "immigration", icon: "✈️" },
  { title: "Estate Planning & Probate", slug: "estate-planning", icon: "📋" },
  { title: "Intellectual Property", slug: "intellectual-property", icon: "💡" },
  { title: "Personal Injury", slug: "personal-injury", icon: "🏥" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      
      setScrolled(scrollY > 10);
      setScrollProgress(progress);
    }
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const headerBgClass = scrolled 
    ? "bg-white/95 backdrop-blur-md text-gray-800 shadow-lg" 
    : "bg-gradient-to-b from-black/50 to-transparent text-white";

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    setDropdownOpen(false);
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden lg:flex py-2 fixed left-0 right-0 top-0 z-[60] justify-between items-center px-8 xl:px-20 text-white bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"
      >
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 hover:text-yellow-100 transition-colors">
            <Clock className="w-4 h-4" />
            <span>Mon-Sun: 24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow-100 transition-colors">
            <MapPin className="w-4 h-4" />
            <span>Patna, India | Serving US / UK / NZ / AUS / IND</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/globallegalcounsels/" },
              { Icon: Instagram, href: "https://www.instagram.com/globallegalcounsels/" },
              { Icon: Twitter, href: "https://x.com/globallegalcounsels/" }
            ].map(({ Icon, href }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={href} className="hover:text-yellow-100 transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <Link 
            href="mailto:raj@globallegalcounsels.com" 
            className="flex gap-2 items-center hover:text-yellow-100 transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="text-sm">raj@globallegalcounsels.com</span>
          </Link>
          
          <Link 
            href="tel:+916204770237"
            className="flex gap-2 items-center bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+91 6204770237</span>
          </Link>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="fixed top-0 lg:top-[44px] left-0 right-0 h-[2px] bg-gray-200 z-[70]">
        <motion.div 
          className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header className={`fixed left-0 right-0 top-0 lg:top-[38px] z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="container mx-auto px-4 sm:px-6 xl:px-20 py-4 flex items-center justify-between">
          <Link href="/" className="group">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-12 h-12 rounded-lg ${scrolled ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' : 'bg-white/20 backdrop-blur'} flex items-center justify-center text-white font-bold text-xl transition-all duration-300`}>
                GLC
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                  Global Legal
                  Counsels
                </h1>
                {/* <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-white/80'} transition-colors`}>
                </p> */}
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { href: "/", label: "Home" },
              { 
                href: "/#services", 
                label: "Services", 
                dropdown: true,
                onClick: scrollToServices
              },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item, i) => (
              <div key={i} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={item.onClick}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                        scrolled 
                          ? 'hover:bg-gray-100 text-gray-700 hover:text-gray-900' 
                          : 'hover:bg-white/10 text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="max-h-[70vh] overflow-y-auto">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block px-4 py-3 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 transition-all duration-200 border-b border-gray-50 last:border-0"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{service.icon}</span>
                                  <div>
                                    <p className="font-medium text-gray-800">{service.title}</p>
                                    <p className="text-xs text-gray-500">Expert legal assistance</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 block ${
                      scrolled 
                        ? 'hover:bg-gray-100 text-gray-700 hover:text-gray-900' 
                        : 'hover:bg-white/10 text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                scrolled
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-yellow-50'
              }`}
            >
              Consult Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={scrollToServices}
                    className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                  >
                    Services
                  </button>
                  <div className="mt-2 ml-4 space-y-1">
                    {services.slice(0, 5).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        <span>{service.icon}</span>
                        <span>{service.title}</span>
                      </Link>
                    ))}
                    <Link
                      href="/#services"
                      onClick={scrollToServices}
                      className="block px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                    >
                      View all services →
                    </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    href="/consultation"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center rounded-full font-medium hover:shadow-lg transition-all"
                  >
                    Get Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}