"use client";
import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin, Clock, ChevronRight, Facebook, Instagram, Twitter, ArrowUp, Award, Users, Scale, Briefcase } from 'lucide-react';
// import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  // const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const handleNewsletterSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle newsletter submission
  //   console.log("Newsletter signup:", email);
  //   setEmail("");
  //   // Show success message
  //   alert("Thank you for subscribing to our newsletter!");
  // };

  const services = [
    { name: "Family Law", href: "/services/family-law" },
    { name: "Immigration Law", href: "/services/immigration" },
    { name: "Employment Law", href: "/services/employment-labor" },
    { name: "Corporate Law", href: "/services/business-corporate" },
    { name: "Criminal Defense", href: "/services/criminal-defense" },
    { name: "Intellectual Property", href: "/services/intellectual-property" },
    { name: "Real Estate Law", href: "/services/real-estate" },
    { name: "Civil Litigation", href: "/services/civil-litigation" },
    { name: "Personal Injury", href: "/services/personal-injury" },
    { name: "Estate Planning", href: "/services/estate-planning" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/#services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    // { name: "FAQ", href: "/faq" },
    // { name: "Blog", href: "/blog" },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Clients Served" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Scale, value: "99%", label: "Success Rate" },
    { icon: Briefcase, value: "200+", label: "Cases Won" },
  ];

  return (
    <>
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-20'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Stats Section */}
        <div className="relative border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    GLC
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Global Legal</h2>
                    <p className="text-xs text-gray-400">Counsels & Associates</p>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed text-gray-300 mb-6">
                  Providing trusted legal counseling across multiple domains. 
                  Empowering you with clarity, guidance, and expert solutions for over 5 years.
                </p>

                {/* Social Links */}
                <div className="flex gap-3 mb-6">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/globallegalcounsels/" },
                    { Icon: Instagram, href: "https://www.instagram.com/globallegalcounsels/" },
                    { Icon: Twitter, href: "https://x.com/globallegalcounsels/" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/raj-aryan-901797343" }
                  ].map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700/50 hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>

                {/* Certifications */}
                {/* <div className="flex items-center gap-4">
                  <Link href="https://www.upwork.com/freelancers/rajaryan">
                    <Image 
                      width={80} 
                      height={30} 
                      src='/images/upwork-svg.png' 
                      alt='Upwork Certified'
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </div> */}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600" />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600" />
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {services.slice(0, 8).map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={service.href}
                        className="text-sm text-gray-300 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
                        {service.name}
                      </Link>
                    </motion.li>
                  ))}
                  <li>
                    <Link
                      href="/#services"
                      className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                      View All Services →
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600" />
                  Get in Touch
                </h3>
                
                <div className="space-y-4 mb-8">
                  <a
                    href="tel:+916204770237"
                    className="flex items-start gap-3 text-sm text-gray-300 hover:text-yellow-500 transition-colors group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-yellow-500/70 group-hover:text-yellow-500" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p>+91 6204770237</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:raj@globallegalcounsels.com"
                    className="flex items-start gap-3 text-sm text-gray-300 hover:text-yellow-500 transition-colors group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-yellow-500/70 group-hover:text-yellow-500" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="break-all">raj@globallegalcounsels.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mt-0.5 text-yellow-500/70" />
                    <div>
                      <p className="font-medium">Office Location</p>
                      <p>Patna, Bihar, India</p>
                      <p className="text-xs mt-1 text-gray-400">Serving US / UK / NZ / AUS / IND</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <Clock className="w-4 h-4 mt-0.5 text-yellow-500/70" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p>Mon - Sun: 24/7 Support</p>
                      {/* <p className="text-xs mt-1 text-gray-400">24/7 Emergency Support</p> */}
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                {/* <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <h4 className="text-sm font-bold text-white mb-3">Subscribe to Newsletter</h4>
                  <p className="text-xs text-gray-400 mb-4">Get legal updates and tips directly in your inbox</p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                    <motion.button
                      type="submit"
                      className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Subscribe</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                </div> */}
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Global Legal Counsels. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Designed with excellence • Built with integrity
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/legal/privacy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/legal/terms" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Terms of Service
                </Link>
                {/* <span className="text-gray-600">•</span>
                <Link href="/sitemap" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Sitemap
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/legal/cookies" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Cookie Policy
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-600/10 rounded-full blur-3xl" />
      </footer>
    </>
  );
};

export default Footer;