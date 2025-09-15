import React from 'react';
import { Heart, Users, Home, Shield, HandHeart, FileText, Scale, Clock } from 'lucide-react';
import Link from 'next/link';

const FamilyLawPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Family Law Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Compassionate legal guidance through life&apos;s most challenging family transitions, protecting your interests and your children&apos;s future with sensitivity and expertise.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Navigating Family Legal Matters with Care</h2>
              <p className="text-gray-600 mb-4">
                Family law encompasses some of the most personal and emotionally charged legal matters individuals face. Our experienced family law attorneys understand that behind every case are real people experiencing significant life changes. We combine legal expertise with genuine compassion to guide you through divorce, custody disputes, adoption, and other family-related legal issues.
              </p>
              <p className="text-gray-600 mb-4">
                We recognize that family law matters affect not just your legal status but your emotional well-being, financial security, and most importantly, your children&apos;s futures. Our approach balances aggressive advocacy when needed with collaborative problem-solving when possible, always keeping your family&apos;s best interests at the forefront of our strategy.
              </p>
              <p className="text-gray-600">
                Whether you&apos;re facing a contentious divorce or seeking an amicable separation, dealing with complex custody arrangements or straightforward adoptions, our team provides the steady, knowledgeable guidance you need during these challenging times.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Family Law Practice Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Divorce and legal separation proceedings</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Child custody and visitation arrangements</span>
                </li>
                <li className="flex items-start">
                  <Home className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Property division and asset protection</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Prenuptial and postnuptial agreements</span>
                </li>
                <li className="flex items-start">
                  <HandHeart className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Adoption and guardianship proceedings</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Domestic violence protection orders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Our Family Law Attorneys Support You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Support & Guidance</h3>
              <p className="text-gray-600">
                We understand the emotional toll family legal matters take. Our attorneys provide not just legal counsel but also emotional support, helping you make clear-headed decisions during difficult times. We connect you with counselors, financial advisors, and other professionals when needed.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Child-Focused Solutions</h3>
              <p className="text-gray-600">
                In matters involving children, their well-being is paramount. We advocate for custody and support arrangements that serve your children&apos;s best interests while protecting your parental rights. Our approach minimizes conflict and promotes healthy co-parenting relationships whenever possible.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fair & Strategic Negotiation</h3>
              <p className="text-gray-600">
                Whether negotiating property division, spousal support, or custody arrangements, we fight for fair outcomes that protect your future. Our attorneys are skilled negotiators who know when to compromise and when to stand firm, always keeping your long-term interests in focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Comprehensive Family Law Services</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">Divorce & Separation</h3>
              <p className="text-gray-600 mb-4">
                Divorce is never easy, but having the right legal representation can make the process smoother and less contentious. We handle both contested and uncontested divorces, working to resolve issues of property division, spousal support, and child-related matters efficiently. Our attorneys explore all options, from mediation and collaborative divorce to litigation when necessary, ensuring your rights and interests are protected throughout the process.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Uncontested Divorce</h4>
                  <p className="text-sm text-gray-600">Streamlined process for couples who agree on major issues, saving time and reducing costs.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">High-Asset Divorce</h4>
                  <p className="text-sm text-gray-600">Complex property division involving businesses, investments, and substantial assets.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">Child Custody & Support</h3>
              <p className="text-gray-600 mb-4">
                Child custody decisions profoundly impact both parents and children. We help you navigate the complexities of custody law, advocating for arrangements that serve your children&apos;s best interests while preserving your parental rights. Our team handles all aspects of child-related matters, from initial custody determinations to modifications of existing orders, always prioritizing stability and well-being for your children.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="text-center p-4 bg-purple-50 rounded">
                  <h4 className="font-semibold text-gray-800">Physical Custody</h4>
                  <p className="text-sm text-gray-600 mt-2">Determining where children will live and parenting time schedules.</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded">
                  <h4 className="font-semibold text-gray-800">Legal Custody</h4>
                  <p className="text-sm text-gray-600 mt-2">Decision-making authority for education, healthcare, and welfare.</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded">
                  <h4 className="font-semibold text-gray-800">Child Support</h4>
                  <p className="text-sm text-gray-600 mt-2">Ensuring fair financial support based on state guidelines.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">Adoption & Guardianship</h3>
              <p className="text-gray-600 mb-4">
                Building or expanding your family through adoption is a joyful but legally complex process. Our attorneys guide you through every step, from home studies to finalization, ensuring all legal requirements are met. We handle domestic and international adoptions, stepparent adoptions, and adult adoptions. For guardianship matters, we help establish legal authority to care for minors or incapacitated adults, protecting vulnerable family members.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">Prenuptial & Postnuptial Agreements</h3>
              <p className="text-gray-600 mb-4">
                Protecting your assets and clarifying financial expectations before or during marriage isn&apos;t unromantic—it&apos;s practical. We draft comprehensive prenuptial and postnuptial agreements that protect both parties&apos; interests while complying with state law. These agreements can address property division, spousal support, debt allocation, and inheritance rights, providing peace of mind and preventing future disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Family Law Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold text-gray-800">Initial Consultation</h3>
                  <p className="text-gray-600 mt-2">
                    We listen to your story, understand your goals, and explain your legal options. This confidential meeting helps us develop a strategy tailored to your unique situation.
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">1</div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2"></div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">2</div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-gray-800">Filing & Response</h3>
                  <p className="text-gray-600 mt-2">
                    We prepare and file all necessary legal documents, ensuring accuracy and timeliness. We handle service of process and respond to any filings from opposing parties.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold text-gray-800">Discovery & Negotiation</h3>
                  <p className="text-gray-600 mt-2">
                    We gather essential information, document assets, and negotiate with opposing counsel. Many cases resolve during this phase through settlement agreements.
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2"></div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">4</div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-gray-800">Resolution or Trial</h3>
                  <p className="text-gray-600 mt-2">
                    Most cases settle through negotiation or mediation. If trial is necessary, we provide strong courtroom advocacy to protect your interests.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-semibold text-gray-800">Post-Judgment Support</h3>
                  <p className="text-gray-600 mt-2">
                    We help implement court orders, handle modifications when circumstances change, and enforce orders if the other party doesn&apos;t comply.
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">5</div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Families Trust Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">25+ Years Experience</h3>
              <p className="text-sm text-gray-600">Decades of family law expertise in complex and sensitive cases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <HandHeart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Compassionate Approach</h3>
              <p className="text-sm text-gray-600">We understand the emotional challenges you&apos;re facing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fierce Advocacy</h3>
              <p className="text-sm text-gray-600">We fight relentlessly for your rights and your children&apos;s future.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Collaborative Solutions</h3>
              <p className="text-sm text-gray-600">We seek amicable resolutions while prepared for litigation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Take the First Step Toward Resolution</h2>
          <p className="text-xl mb-8 text-purple-100">
            You don&apos;t have to face family legal challenges alone. Our compassionate attorneys are here to guide you toward a brighter future for you and your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition">
                Contact Us
            </button>
              </Link>
          </div>
          <p className="mt-6 text-purple-200 text-sm">
            Confidential consultations available. Evening and weekend appointments offered.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FamilyLawPage;