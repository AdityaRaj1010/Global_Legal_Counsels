
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  const servicesRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="relative">
      {/* HERO: fixed background that covers whole viewport; content scrolls over it */}
      <section
        aria-label="Hero"
        className="relative h-screen hero-bg hero-bg-fixed"
        style={{ backgroundImage: "url('/images/hero-legal.jpg')" }}
      >
        {/* Overlay to darken background for readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Navbar sits on top — header component is fixed, but we still give spacing so hero content sits under it visually */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold text-white leading-tight"
            >
              Global Legal Counsels
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-white/90"
            >
              Templates, guides and compliance tools that scale with your business.
            </motion.p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:shadow-lg transition">
                Get in touch
              </Link>
              {/* <Link href="/legal/privacy" className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold border border-white/30 hover:bg-white hover:text-indigo-600 transition">
                Privacy Policy
              </Link> */}
            </div>
          </div>
        </div>

        {/* Foreground stretched image: decorative illustration (stretches full width). It sits at bottom of hero and will be full-bleed */}
        {/* <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <div className="full-bleed">
            <Image src="/images/hero-foreground.jpg" alt="scales" width={1600} height={240} className="w-full h-auto object-cover" priority />
          </div>
        </div> */}
      </section>

      {/* CONTENT: below hero, these sections slide over the fixed background when you scroll */}
      <section className="container mx-auto px-4 sm:px-6 -mt-24 relative z-20" id="services" ref={servicesRef}>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-center mt-5">What we offer</h2>

          <div className="mt-6 flex flex-wrap gap-6 align-center justify-center">
            <Feature icon="/images/Civil-Litigation.webp" title="Civil Litigation" description="Legal disputes between individuals or entities that seek monetary damages or specific performance rather than criminal sanctions. This includes contract disputes, property disputes, and more." slug="civil-litigation" />
            <Feature icon="/images/Family-Law.jpg" title="Family Law" description="Covers legal matters related to family relationships, including divorce, child custody, adoption, alimony, and domestic violence issues." slug="family-law" />
            <Feature icon="/images/Criminal-Defense.jpg" title="Criminal Defense" description="Involves representing individuals or organizations accused of committing crimes, working to protect their rights and ensure a fair trial." slug="criminal-defense" />
            <Feature icon="/images/Employment.jpeg" title="Employment & Labor" description="Focuses on issues between employers and employees, such as workplace discrimination, wrongful termination, wage disputes, and labor union matters." slug="employment-labor" />
            <Feature icon="/images/Business-Corporate.webp" title="Business & Corporate" description="Deals with the formation, governance, and operation of businesses. Includes contracts, mergers and acquisitions, compliance, and corporate structuring." slug="business-corporate" />
            <Feature icon="/images/Real-Estate.jpeg" title="Real Estate" description="Covers legal issues related to property, including buying/selling real estate, zoning, leasing, landlord-tenant disputes, and land use." slug="real-estate" />
            <Feature icon="/images/Immigration.webp" title="Immigration" description="Assists individuals and businesses with visas, green cards, citizenship, deportation defense, and other immigration-related matters." slug="immigration" />
            <Feature icon="/images/Estate-Planning.jpg" title="Estate Planning & Probate" description="Helps clients plan for the distribution of their assets after death through wills, trusts, and powers of attorney, and handles probate processes." slug="estate-planning" />
            <Feature icon="/images/Intellectual.jpeg" title="Intellectual Property" description="Protects creations of the mind, such as inventions, trademarks, copyrights, and trade secrets, and enforces related rights." slug="intellectual-property" />
            <Feature icon="/images/hero-foreground.jpg" title="Personal Injury" description="Represents individuals injured due to negligence or misconduct, including car accidents, medical malpractice, and slip-and-fall cases." slug="personal-injury" />
          </div>
        </div>
      </section>

      {/* Extra spacing so footer doesn't overlap */}
      <div className="h-24" />
    </main>
  );
}

function Feature({ icon, title, description, slug }: { icon: string; title: string; description: string; slug: string }) {
  return (
    <Link href={`/services/${slug}`}>
      <motion.div whileHover={{ y: -6 }} className="h-[250px] w-[350px] justify-center border-2 rounded-lg p-6 text-center shadow hover:shadow-lg hero-bg" style={{ backgroundImage: `url(${icon})` }}>
        <div className="border-4 border-white rounded-lg content">
          <strong>
            <h3 className="mt-4 font-bold w-full text-black">{title}</h3>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
          </strong>
        </div>
      </motion.div>
    </Link>
  );
}