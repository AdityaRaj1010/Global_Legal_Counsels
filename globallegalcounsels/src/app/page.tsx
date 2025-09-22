"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const scrollToSuccessStories = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById("success-stories");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Service data with enhanced structure
const services = [
  {
    id: 1,
    title: "Civil Litigation",
    slug: "civil-litigation",
    icon: "/images/Civil-Litigation.webp",
    color: "from-blue-500 to-indigo-600",
    description: "Expert resolution of disputes through strategic legal action. We handle contract disputes, property matters, and personal injury cases with a proven track record.",
    features: ["Contract Disputes", "Property Law", "Personal Injury"],
    // stats: "200+ Cases Won"
  },
  {
    id: 2,
    title: "Family Law",
    slug: "family-law",
    icon: "/images/Family-Law.jpg",
    color: "from-purple-500 to-pink-600",
    description: "Compassionate guidance through life's most challenging transitions. Our team provides sensitive support for divorce, custody, adoption, and support matters.",
    features: ["Divorce & Separation", "Child Custody", "Adoption Services"],
    // stats: "99% Client Satisfaction"
  },
  {
    id: 3,
    title: "Criminal Defense",
    slug: "criminal-defense",
    icon: "/images/Criminal-Defense.jpg",
    color: "from-red-500 to-orange-600",
    description: "Aggressive defense protecting your rights and freedom. We ensure fair treatment in the justice system with experienced courtroom advocacy.",
    features: ["Federal Crimes", "State Charges", "Appeals"],
    // stats: "24/7 Support"
  },
  {
    id: 4,
    title: "Employment & Labor",
    slug: "employment-labor",
    icon: "/images/Employment.jpeg",
    color: "from-green-500 to-teal-600",
    description: "Protecting workers' rights and resolving workplace disputes. We handle discrimination, wrongful termination, and wage disputes.",
    features: ["Workplace Rights", "Discrimination Cases", "Wage Disputes"],
    // stats: "$10M+ Recovered"
  },
  {
    id: 5,
    title: "Business & Corporate",
    slug: "business-corporate",
    icon: "/images/Business-Corporate.webp",
    color: "from-indigo-500 to-blue-600",
    description: "Strategic business counsel from formation through growth. We handle M&A, intellectual property, contracts, and regulatory compliance.",
    features: ["Business Formation", "M&A Support", "IP Protection"],
    // stats: "200+ Businesses Served"
  },
  {
    id: 6,
    title: "Real Estate",
    slug: "real-estate",
    icon: "/images/Real-Estate.jpeg",
    color: "from-amber-500 to-orange-600",
    description: "Complete property law services for all real estate matters. From purchases to disputes, we protect your property interests.",
    features: ["Property Transactions", "Title Issues", "Landlord-Tenant"],
    // stats: "$500M+ in Transactions"
  },
  {
    id: 7,
    title: "Immigration",
    slug: "immigration",
    icon: "/images/Immigration.webp",
    color: "from-cyan-500 to-blue-600",
    description: "Navigate complex immigration laws with confidence. Expert guidance on visas, green cards, asylum, and citizenship proceedings.",
    features: ["Visa Applications", "Green Cards", "Citizenship"],
    // stats: "99% Approval Rate"
  },
  {
    id: 8,
    title: "Estate Planning",
    slug: "estate-planning",
    icon: "/images/Estate-Planning.jpg",
    color: "from-violet-500 to-purple-600",
    description: "Protect your legacy with comprehensive estate planning. We create wills, trusts, and handle probate matters with care.",
    features: ["Wills & Trusts", "Probate", "Asset Protection"],
    // stats: "200+ Families Protected"
  },
  {
    id: 9,
    title: "Intellectual Property",
    slug: "intellectual-property",
    icon: "/images/Intellectual.jpeg",
    color: "from-pink-500 to-rose-600",
    description: "Safeguard your innovations and creative works. We handle copyright, trademark, patent, and trade secret protection.",
    features: ["Patents", "Trademarks", "Copyrights"],
    // stats: "200+ IP Assets Protected"
  },
  {
    id: 10,
    title: "Personal Injury",
    slug: "personal-injury",
    icon: "/images/hero-foreground.jpg",
    color: "from-red-500 to-pink-600",
    description: "Maximum compensation for accident victims. We fight for your rights in personal injury, medical malpractice, and negligence cases.",
    features: ["Auto Accidents", "Medical Malpractice", "Slip & Fall"],
    // stats: "$50M+ Recovered"
  }
];

export default function Home() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax effect for hero
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  if (!windowSize) return null; // Optionally render a fallback while waiting for window size

  return (
    <main className="relative overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <motion.section
        aria-label="Hero"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero-legal.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Animated particles background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,  // Use windowSize here
                y: Math.random() * windowSize.height, // Use windowSize here
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero content with animations */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
          style={{ y }}
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Trusted by 200+ Clients
            </span>
          </motion.div>

          {/* Main heading with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Voice</span>
            <br />
            Gets Heard
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/80 mb-4"
          >
            5+ Years of Excellence in Legal Representation
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {[
              { value: "99%", label: "Success Rate" },
              { value: "200+", label: "Cases Won" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <button onClick={scrollToSuccessStories} className="cursor-pointer px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              View Success Stories
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="services" ref={servicesRef}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Our Practice Areas
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert legal representation across all major practice areas, tailored to your unique needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image Section */}
                <motion.div
                  className="flex-1 relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div
                      className="h-[300px] lg:h-[400px] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.icon})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />

                    {/* Overlay content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={false}
                        animate={{ scale: activeService === service.id ? 1.2 : 1 }}
                        className="text-center text-white"
                      >
                        {/* <div className="text-5xl font-bold mb-2">{service.id}</div> */}
                        {/* <div className="text-lg font-medium uppercase tracking-wider opacity-90">
                          {service.stats}
                        </div> */}
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full opacity-20 blur-2xl`} />
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr ${service.color} rounded-full opacity-20 blur-2xl`} />
                </motion.div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <motion.h3
                    className="text-3xl sm:text-4xl font-bold text-gray-900"
                    whileHover={{ x: 10 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span id="success-stories" className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real experiences from real clients who trusted us with their legal matters
            </p>
          </motion.div>

          <Testimonials />

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Reviews", value: "4.9/5" },
              { label: "Years Experience", value: "5+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Cases Won", value: "200+" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-white/60 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Rights?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert legal representation today. Your first consultation is completely free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+916204770237"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 6204770237
              </a>
            </motion.div>
          </div>

          <p className="text-white/70 mt-6">Available 24/7 for You</p>
        </motion.div>
      </section>
    </main>
  );
}