// src/components/Footer.tsx
"use client";
import Link from "next/link";
import { Linkedin } from 'lucide-react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">LegalCounsel</h2>
          <p className="text-sm leading-relaxed">
            Providing trusted legal counseling across multiple domains.
            Empowering you with clarity, guidance, and expert solutions.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-4">Get in Touch</h2>
          <p className="text-sm leading-relaxed">
            Phone: <Link href={"tel:+916204770237"}>+91 6204770237</Link><br />
            Email: <Link href={"mailto:raj@globallegalcounsels.com"}>raj@globallegalcounsels.com</Link><br />
          </p>
        </div>

        {/* Navigate section */}
        <div className="text-left md:text-center">
          <h3 className="text-lg font-semibold mb-4">Navigate</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#services" scroll={true} className="hover:text-white transition">Services</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-white transition">Privacy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white transition">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services section */}
        <div className="text-left md:text-center">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/services/family-law" className="hover:text-white transition">Family Law</Link></li>
            <li><Link href="/services/immigration-law" className="hover:text-white transition">Immigration Law</Link></li>
            <li><Link href="/services/employment-law" className="hover:text-white transition">Employment Law</Link></li>
            <li><Link href="/services/corporate-law" className="hover:text-white transition">Corporate Law</Link></li>
            <li><Link href="/services/criminal-defense" className="hover:text-white transition">Criminal Defense</Link></li>
            <li><Link href="/services/intellectual-property" className="hover:text-white transition">Intellectual Property</Link></li>
            <li><Link href="/services/real-estate-law" className="hover:text-white transition">Real Estate Law</Link></li>
            <li><Link href="/services/civil-litigation" className="hover:text-white transition">Civil Litigation</Link></li>
            <li><Link href="/services/personal-injury" className="hover:text-white transition">Personal Injury</Link></li>
            <li><Link href="/services/estate-planning" className="hover:text-white transition">Estate Planning</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <span>
          © {new Date().getFullYear()} LegalCounsel. All rights reserved.
        </span>
        <span className='flex gap-3'>
          <Link href={"https://www.linkedin.com/in/raj-aryan-901797343"}>
            <Linkedin />
          </Link>
          <Link href={"https://www.upwork.com/freelancers/rajaryan"}>
            <Image width={30} height={15} src={'/images/upwork-svg.png'} alt='upwork'></Image>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
