import React from 'react';
import { Home, Building, FileCheck, MapPin, DollarSign, Shield } from 'lucide-react';
import Link from 'next/link';

const RealEstatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Real Estate Law</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Expert legal guidance for all real estate transactions, from residential purchases
            to complex commercial developments, ensuring your property investments are protected
            and transactions proceed smoothly.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Navigating Real Estate with Confidence</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Real estate transactions represent some of life&apos;s most significant financial decisions.
                Whether you&apos;re purchasing your first home, investing in commercial property, or developing
                land, having experienced legal counsel ensures your interests are protected at every stage.
                Our real estate attorneys combine deep knowledge of property law with practical transaction
                experience to guide clients through even the most complex deals.
              </p>
              <p className="mb-6">
                We understand that real estate matters often involve tight deadlines, substantial investments,
                and emotional considerations. Our team provides responsive, thorough service that addresses
                both the legal and practical aspects of property transactions. From title searches to closing
                documentation, we handle the details so you can focus on your investment goals. Our attorneys
                stay current with evolving real estate regulations, market trends, and financing options to
                provide comprehensive counsel that goes beyond basic transaction services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Comprehensive Real Estate Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Home className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Residential Transactions</h3>
              <p className="text-gray-600">
                We guide homebuyers and sellers through purchase agreements, negotiate terms, review
                mortgage documents, and ensure clear title transfer. Our attorneys protect your interests
                from offer to closing, making your home transaction stress-free.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Commercial Real Estate</h3>
              <p className="text-gray-600">
                Handle complex commercial transactions including office buildings, retail spaces,
                industrial properties, and multi-family units. We structure deals, negotiate leases,
                and manage due diligence for maximum return on investment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <FileCheck className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Title & Closing Services</h3>
              <p className="text-gray-600">
                Ensure clean title transfer with comprehensive title searches, resolution of liens
                and encumbrances, title insurance coordination, and professional closing services
                that protect against future claims.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Land Use & Zoning</h3>
              <p className="text-gray-600">
                Navigate complex zoning laws, obtain variances and special permits, handle subdivision
                applications, and represent clients before planning boards to maximize property
                development potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <DollarSign className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real Estate Finance</h3>
              <p className="text-gray-600">
                Structure creative financing solutions including conventional mortgages, hard money
                loans, seller financing, and joint ventures. We review loan documents and negotiate
                terms that align with your financial strategy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Landlord-Tenant Law</h3>
              <p className="text-gray-600">
                Protect property owners&apos; rights while ensuring legal compliance. We draft leases,
                handle evictions, resolve disputes, and advise on fair housing laws to maintain
                profitable, compliant rental operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Real Estate Transaction Journey</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation & Strategy</h3>
                  <p className="text-gray-600">
                    We begin by understanding your real estate goals, whether buying, selling, or developing.
                    Our attorneys assess your situation, explain the legal process, and develop a strategic
                    approach tailored to your objectives and timeline. We identify potential issues early
                    and create solutions before they become problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Due Diligence & Investigation</h3>
                  <p className="text-gray-600">
                    Our team conducts thorough property investigations including title searches, survey reviews,
                    environmental assessments, and zoning verification. We uncover hidden issues that could
                    affect value or usability, giving you complete information for informed decision-making.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contract Negotiation & Documentation</h3>
                  <p className="text-gray-600">
                    We draft and negotiate purchase agreements, leases, and financing documents that protect
                    your interests. Our attorneys ensure favorable terms, appropriate contingencies, and clear
                    provisions that minimize risk while maximizing value in your transaction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Closing & Post-Transaction Support</h3>
                  <p className="text-gray-600">
                    We manage all closing logistics, review final documents, coordinate with lenders and title
                    companies, and ensure smooth fund transfers. After closing, we remain available for ongoing
                    property matters, lease issues, or future transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Specialized Real Estate Practice Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Real Estate Development</h3>
                <p className="text-gray-600 mb-3">
                  From raw land to finished projects, we guide developers through the entire process:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Land acquisition and assemblage</li>
                  <li>• Construction contracts and mechanics liens</li>
                  <li>• Joint venture agreements</li>
                  <li>• Condominium and HOA formation</li>
                  <li>• Environmental compliance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Real Estate Investment</h3>
                <p className="text-gray-600 mb-3">
                  Maximize returns with strategic legal counsel for investment properties:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 1031 tax-deferred exchanges</li>
                  <li>• Real estate syndications</li>
                  <li>• REITs and investment funds</li>
                  <li>• Property management agreements</li>
                  <li>• Portfolio acquisitions and dispositions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Distressed Properties</h3>
                <p className="text-gray-600 mb-3">
                  Navigate challenging property situations with experienced guidance:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Foreclosure defense and workouts</li>
                  <li>• Short sales and deed-in-lieu</li>
                  <li>• REO acquisitions</li>
                  <li>• Tax lien properties</li>
                  <li>• Bankruptcy-related real estate</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Property Disputes</h3>
                <p className="text-gray-600 mb-3">
                  Resolve conflicts efficiently to protect your property rights:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Boundary and easement disputes</li>
                  <li>• Breach of purchase agreements</li>
                  <li>• Construction defect claims</li>
                  <li>• Quiet title actions</li>
                  <li>• Partition proceedings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Choose Our Real Estate Team</h2>
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Market Knowledge</h3>
                  <p className="text-gray-700">
                    Our attorneys combine legal expertise with deep understanding of local real estate markets.
                    We know property values, development trends, and investment opportunities, providing counsel
                    that goes beyond legal technicalities to include practical market insights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Transaction Experience</h3>
                  <p className="text-gray-700">
                    With hundreds of successful closings, we&apos;ve seen every possible scenario. This experience
                    allows us to anticipate problems, negotiate effectively, and close deals efficiently,
                    saving you time and money while avoiding common pitfalls.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Full-Service Support</h3>
                  <p className="text-gray-700">
                    From initial property search through post-closing matters, we provide comprehensive legal
                    support. Our relationships with realtors, lenders, inspectors, and other professionals
                    ensure you have a complete team working for your success.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-800">Responsive Communication</h3>
                  <p className="text-gray-700">
                    Real estate moves fast, and we keep pace. Our attorneys respond quickly to inquiries,
                    meet tight deadlines, and keep you informed throughout your transaction. We&apos;re available
                    when you need us, including evenings and weekends for urgent matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Make Your Next Real Estate Move with Confidence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether buying, selling, or investing, our experienced real estate attorneys ensure
            your transaction proceeds smoothly and your interests are fully protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white cursor-pointer text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Property Consultation
            </button> */}
            <Link href="/contact">
              <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;