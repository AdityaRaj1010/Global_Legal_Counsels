// IntellectualPropertyPage.tsx
import Link from 'next/link';
import React from 'react';

const IntellectualPropertyPage: React.FC = () => {
  return (
    <div className="intellectual-property-page">
      {/* Hero Section with compelling headline */}
      <section className="hero-section bg-gradient-to-r from-gray-900 to-violet-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Intellectual Property Law Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Transform your innovative ideas into valuable assets with comprehensive IP protection strategies that safeguard your competitive advantage.
          </p>
        </div>
      </section>

      {/* Introduction Section - Why IP protection matters */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Your Ideas Are Your Most Valuable Assets
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                In today&apos;s knowledge-driven economy, intellectual property represents the core value of many businesses. 
                Whether you&apos;re an entrepreneur launching a startup, an artist protecting creative works, or an established 
                company defending market position, proper IP protection is essential for long-term success.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our intellectual property attorneys combine deep technical knowledge with strategic business insight to 
                help you identify, protect, and monetize your intangible assets. We understand that each innovation is 
                unique and requires a tailored approach to maximize its value and protection.
              </p>
              <p className="text-lg text-gray-700">
                From initial concept to commercialization and enforcement, we provide comprehensive legal support that 
                transforms your intellectual capital into sustainable competitive advantages.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Industry Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">◆</span>
                  <span className="text-gray-700">IP-intensive industries account for 45% of U.S. GDP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">◆</span>
                  <span className="text-gray-700">90% of a company&apos;s value is now in intangible assets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">◆</span>
                  <span className="text-gray-700">IP theft costs businesses $600 billion annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">◆</span>
                  <span className="text-gray-700">Patents can increase startup funding by 76%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core IP Services - Detailed breakdown */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Comprehensive Intellectual Property Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - Patents */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Patent Protection</h3>
              <p className="text-gray-700 mb-4">
                Secure exclusive rights to your inventions and innovations with strategic patent filing and 
                prosecution services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Patent searches and landscape analysis</li>
                <li>• Utility and design patent applications</li>
                <li>• Patent prosecution and office actions</li>
                <li>• International patent filing (PCT)</li>
                <li>• Patent portfolio management</li>
                <li>• Freedom-to-operate opinions</li>
              </ul>
            </div>

            {/* Service Card 2 - Trademarks */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trademark Services</h3>
              <p className="text-gray-700 mb-4">
                Build and protect your brand identity through comprehensive trademark registration and 
                enforcement strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Trademark searches and clearance</li>
                <li>• Federal trademark registration</li>
                <li>• International trademark filing</li>
                <li>• Opposition and cancellation proceedings</li>
                <li>• Brand portfolio management</li>
                <li>• Domain name disputes</li>
              </ul>
            </div>

            {/* Service Card 3 - Copyrights */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Copyright Protection</h3>
              <p className="text-gray-700 mb-4">
                Safeguard your creative works and digital content with robust copyright registration and 
                licensing frameworks.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Copyright registration and deposits</li>
                <li>• Software and source code protection</li>
                <li>• Creative work licensing agreements</li>
                <li>• DMCA takedown notices</li>
                <li>• Fair use analysis and guidance</li>
                <li>• Work-for-hire agreements</li>
              </ul>
            </div>

            {/* Service Card 4 - Trade Secrets */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trade Secret Protection</h3>
              <p className="text-gray-700 mb-4">
                Protect valuable confidential information and proprietary processes through comprehensive 
                security measures and agreements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Trade secret identification and audits</li>
                <li>• Non-disclosure agreements (NDAs)</li>
                <li>• Employee confidentiality agreements</li>
                <li>• Trade secret policies and procedures</li>
                <li>• Misappropriation litigation</li>
                <li>• Competitive intelligence protection</li>
              </ul>
            </div>

            {/* Service Card 5 - Licensing */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">IP Licensing & Transactions</h3>
              <p className="text-gray-700 mb-4">
                Maximize the value of your IP through strategic licensing agreements and technology 
                transfer arrangements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• License agreement drafting and negotiation</li>
                <li>• Technology transfer agreements</li>
                <li>• Joint venture and collaboration agreements</li>
                <li>• Franchise agreements</li>
                <li>• IP acquisition and due diligence</li>
                <li>• Royalty structuring and audits</li>
              </ul>
            </div>

            {/* Service Card 6 - Enforcement */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">IP Enforcement & Litigation</h3>
              <p className="text-gray-700 mb-4">
                Defend your intellectual property rights against infringement and unfair competition 
                through aggressive enforcement strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infringement analysis and opinions</li>
                <li>• Cease and desist letters</li>
                <li>• Federal court litigation</li>
                <li>• PTAB proceedings</li>
                <li>• International dispute resolution</li>
                <li>• Anti-counterfeiting measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Industry-Specific IP Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-violet-50 rounded-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Technology & Software</h3>
              <p className="text-sm text-gray-700">
                Software patents, SaaS agreements, open source compliance, API licensing
              </p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Life Sciences</h3>
              <p className="text-sm text-gray-700">
                Biotech patents, FDA regulatory, clinical trial agreements, pharma licensing
              </p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Creative Industries</h3>
              <p className="text-sm text-gray-700">
                Entertainment law, media rights, publishing agreements, digital content
              </p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Manufacturing</h3>
              <p className="text-sm text-gray-700">
                Industrial designs, process patents, trade dress, supply chain IP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help - Process explanation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Strategic IP Process
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">IP Audit & Discovery</h3>
                <p className="text-gray-700">
                  We begin by conducting a comprehensive audit of your existing and potential intellectual property. 
                  Our attorneys work closely with your team to identify all protectable innovations, creative works, 
                  and proprietary information. This discovery phase reveals hidden IP assets you may not have 
                  recognized and identifies gaps in your current protection strategy.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Strategic Planning & Risk Assessment</h3>
                <p className="text-gray-700">
                  Based on your business goals and competitive landscape, we develop a customized IP strategy that 
                  aligns protection efforts with commercial objectives. This includes freedom-to-operate analysis, 
                  competitive intelligence gathering, and risk assessment to ensure your innovations don&apos;t infringe 
                  on existing rights while maximizing your own protection.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Protection Implementation</h3>
                <p className="text-gray-700">
                  Our experienced attorneys execute your IP protection strategy through precise drafting and filing 
                  of patents, trademarks, and copyrights. We handle all interactions with patent and trademark offices, 
                  respond to office actions, and navigate the complex registration process to secure the strongest 
                  possible protection for your intellectual property.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Commercialization Support</h3>
                <p className="text-gray-700">
                  We help you extract maximum value from your IP through strategic licensing, technology transfer, 
                  and partnership agreements. Our team structures deals that generate revenue streams while maintaining 
                  control over your core assets, negotiating favorable terms that support your business growth objectives.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Monitoring & Enforcement</h3>
                <p className="text-gray-700">
                  Protection doesn&apos;t end with registration. We continuously monitor the marketplace for potential 
                  infringement, manage your IP portfolio renewals and maintenance, and take swift action against 
                  unauthorized use. Our enforcement strategies range from negotiated settlements to aggressive 
                  litigation when necessary to defend your rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-violet-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Proven Results for Our Clients
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-violet-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Patents Filed</p>
              <p className="text-sm text-gray-600 mt-2">Successfully prosecuted across multiple industries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-violet-600 mb-2">1,200+</div>
              <p className="text-gray-700 font-semibold">Trademarks Registered</p>
              <p className="text-sm text-gray-600 mt-2">Protecting brands nationally and internationally</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-violet-600 mb-2">$50M+</div>
              <p className="text-gray-700 font-semibold">License Revenue Generated</p>
              <p className="text-sm text-gray-600 mt-2">Through strategic IP monetization</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-violet-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold">Dispute Success Rate</p>
              <p className="text-sm text-gray-600 mt-2">In IP enforcement and defense matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Professional IP Counsel Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Strategic Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-600 rounded-full mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Edge</h4>
                    <p className="text-gray-700">Create barriers to entry and establish market dominance through 
                    exclusive rights to your innovations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-600 rounded-full mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Investment Attraction</h4>
                    <p className="text-gray-700">Strong IP portfolios significantly increase company valuation 
                    and investor confidence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-600 rounded-full mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Revenue Generation</h4>
                    <p className="text-gray-700">Transform intangible assets into licensing revenue streams 
                    and strategic partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Risk Mitigation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Infringement Prevention</h4>
                    <p className="text-gray-700">Avoid costly litigation through comprehensive freedom-to-operate 
                    analysis and proactive clearance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Trade Secret Security</h4>
                    <p className="text-gray-700">Protect confidential information from theft and misappropriation 
                    through robust legal frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Protection</h4>
                    <p className="text-gray-700">Navigate complex international IP laws to secure protection 
                    in key markets worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-violet-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Ideas Into Protected Assets
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let competitors copy your innovations. Schedule a confidential consultation with our 
            IP attorneys to develop a protection strategy tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule IP Consultation
            </button>
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors">
                Contact Us
            </button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntellectualPropertyPage;