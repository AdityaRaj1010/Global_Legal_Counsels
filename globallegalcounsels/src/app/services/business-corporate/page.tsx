import React from 'react';
import { Building2, Briefcase, FileSignature, TrendingUp, Shield, Users } from 'lucide-react';
import Link from 'next/link';

const BusinessCorporatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-slate-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Business & Corporate Law</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Strategic legal counsel for businesses at every stage, from startup formation
            to complex corporate transactions, ensuring your enterprise thrives within
            legal frameworks while maximizing growth opportunities.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Comprehensive Business Legal Solutions</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                In today&apos;s complex business environment, having experienced legal counsel isn&apos;t just
                advisable—it&apos;s essential for sustainable success. Our business and corporate law practice
                provides comprehensive legal services that protect your interests, minimize risks, and
                position your company for growth. We serve as trusted advisors to startups, small businesses,
                and established corporations, offering practical solutions tailored to your industry and goals.
              </p>
              <p className="mb-6">
                Our attorneys understand that every business decision has legal implications. We take time
                to understand your business model, market position, and strategic objectives, allowing us
                to provide proactive counsel that prevents problems before they arise. From entity formation
                to exit strategies, we&apos;re your partners in navigating the legal landscape of business ownership
                and operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Business Law Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building2 className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Entity Formation & Structure</h3>
              <p className="text-gray-600">
                We guide you through selecting the optimal business structure—LLC, corporation, partnership,
                or other entities—considering liability protection, tax implications, and operational
                flexibility. Our team handles all formation documents, operating agreements, and bylaws.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <FileSignature className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Contract Drafting & Negotiation</h3>
              <p className="text-gray-600">
                Every business runs on contracts. We draft, review, and negotiate vendor agreements,
                customer contracts, partnership agreements, and service contracts that protect your
                interests while fostering profitable relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <TrendingUp className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mergers & Acquisitions</h3>
              <p className="text-gray-600">
                Navigate complex M&A transactions with confidence. We conduct due diligence, structure
                deals, negotiate terms, and manage regulatory compliance to ensure smooth transitions
                that maximize value and minimize risk.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Stay ahead of regulatory requirements with our compliance expertise. We help establish
                internal policies, navigate industry-specific regulations, and respond to government
                inquiries, keeping your business on the right side of the law.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate Governance</h3>
              <p className="text-gray-600">
                Maintain proper corporate structure with our governance services. We assist with board
                meetings, shareholder relations, executive compensation, and fiduciary duty compliance,
                ensuring transparent and effective leadership.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Commercial Litigation</h3>
              <p className="text-gray-600">
                When disputes arise, we provide aggressive representation in breach of contract claims,
                partnership disputes, unfair competition cases, and other commercial litigation,
                protecting your business interests in and out of court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Industry-Specific Expertise</h2>
            <p className="text-gray-600 mb-8">
              Our attorneys bring deep knowledge across multiple industries, understanding the unique
              challenges and opportunities in your sector. This specialized insight allows us to provide
              more relevant, effective legal strategies.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-semibold mb-2">Technology & Software</h3>
                <p className="text-gray-600">
                  From SaaS agreements to data privacy compliance, we understand the fast-paced tech
                  landscape and help companies protect IP while scaling rapidly.
                </p>
              </div>
              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-semibold mb-2">Healthcare & Life Sciences</h3>
                <p className="text-gray-600">
                  Navigate HIPAA, FDA regulations, and complex healthcare transactions with attorneys
                  who understand the regulatory framework of medical businesses.
                </p>
              </div>
              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-semibold mb-2">Manufacturing & Distribution</h3>
                <p className="text-gray-600">
                  Manage supply chain agreements, product liability, and international trade issues
                  with counsel experienced in manufacturing operations.
                </p>
              </div>
              <div className="border-l-4 border-slate-600 pl-6">
                <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
                <p className="text-gray-600">
                  Ensure compliance with SEC, FINRA, and banking regulations while structuring
                  transactions that meet fiduciary standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">How We Support Your Business Journey</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-700">Startup Phase</h3>
                <p className="text-gray-600 mb-3">
                  We help entrepreneurs transform ideas into legally sound businesses. Our services include
                  entity selection and formation, founder agreements, initial funding documentation, employment
                  agreements, and intellectual property protection strategies.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Choose optimal business structure</li>
                  <li>• Draft founder and partnership agreements</li>
                  <li>• Establish equity structures</li>
                  <li>• Create employee handbooks and policies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-700">Growth Phase</h3>
                <p className="text-gray-600 mb-3">
                  As your business expands, we provide ongoing counsel for operational challenges, including
                  commercial contracts, regulatory compliance, employment law issues, and dispute resolution.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Negotiate vendor and customer contracts</li>
                  <li>• Manage regulatory compliance</li>
                  <li>• Handle employment and HR legal issues</li>
                  <li>• Protect intellectual property assets</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-700">Maturity & Exit Phase</h3>
                <p className="text-gray-600 mb-3">
                  When it&apos;s time for transitions, we facilitate mergers, acquisitions, succession planning,
                  or dissolution, ensuring maximum value realization and smooth ownership transfers.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Structure and negotiate M&A transactions</li>
                  <li>• Develop succession plans</li>
                  <li>• Manage due diligence processes</li>
                  <li>• Optimize tax strategies for exits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">The Strategic Advantage of Our Counsel</h2>
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Proactive Risk Management</h3>
                  <p className="text-gray-600">
                    We don&apos;t just react to problems—we anticipate them. Our attorneys identify potential
                    legal issues before they become costly disputes, implementing preventive measures
                    that protect your bottom line.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Business-Minded Approach</h3>
                  <p className="text-gray-600">
                    We speak your language. Our attorneys have business backgrounds and understand that
                    legal advice must align with commercial objectives, providing practical solutions
                    that support your goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Scalable Services</h3>
                  <p className="text-gray-600">
                    Whether you need ongoing general counsel services or project-specific assistance,
                    we offer flexible engagement models that match your needs and budget, growing
                    with your business.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Network of Resources</h3>
                  <p className="text-gray-600">
                    Beyond legal services, we connect you with trusted accountants, bankers, consultants,
                    and other professionals, creating a comprehensive support network for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Your Business Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with attorneys who understand business. Schedule a consultation to discuss
            how we can support your company&apos;s legal needs and strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Business Consultation
            </button>
            <Link href="/contact">
              <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCorporatePage;