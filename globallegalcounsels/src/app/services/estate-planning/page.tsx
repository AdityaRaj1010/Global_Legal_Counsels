// EstatePlanningPage.tsx
import Link from 'next/link';
import React from 'react';

const EstatePlanningPage: React.FC = () => {
  return (
    <div className="estate-planning-page">
      {/* Hero Section with compelling headline */}
      <section className="hero-section bg-gradient-to-r from-gray-900 to-sky-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Estate Planning & Probate Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Secure your family&apos;s future and protect your legacy with comprehensive estate planning solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Introduction Section - Why estate planning matters */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Protecting What Matters Most to You
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Estate planning isn&apos;t just about wealth distribution—it&apos;s about ensuring your wishes are honored, 
                your loved ones are protected, and your legacy continues according to your vision. Whether you&apos;re 
                planning for the future or navigating the probate process, our experienced legal team provides 
                compassionate, thorough guidance every step of the way.
              </p>
              <p className="text-lg text-gray-700">
                Many people postpone estate planning, thinking it&apos;s only for the wealthy or elderly. In reality, 
                everyone benefits from having a well-structured estate plan that addresses healthcare decisions, 
                asset distribution, and family protection.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">70% of Americans don&apos;t have an updated will</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Probate can take 6-24 months without proper planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Estate planning can significantly reduce tax burdens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Detailed breakdown */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Comprehensive Estate Planning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Wills & Living Trusts</h3>
              <p className="text-gray-700 mb-4">
                We draft clear, legally binding documents that ensure your assets are distributed according 
                to your wishes while minimizing probate costs and delays.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Simple and complex wills</li>
                <li>• Revocable living trusts</li>
                <li>• Pour-over wills</li>
                <li>• Trust amendments and restatements</li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare Directives</h3>
              <p className="text-gray-700 mb-4">
                Maintain control over your medical care decisions even if you become unable to communicate 
                them yourself.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Living wills</li>
                <li>• Healthcare power of attorney</li>
                <li>• HIPAA authorizations</li>
                <li>• Do Not Resuscitate orders</li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Power of Attorney</h3>
              <p className="text-gray-700 mb-4">
                Designate trusted individuals to make financial and legal decisions on your behalf if 
                you become incapacitated.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Durable power of attorney</li>
                <li>• Limited power of attorney</li>
                <li>• Financial power of attorney</li>
                <li>• Springing power of attorney</li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Probate Administration</h3>
              <p className="text-gray-700 mb-4">
                Navigate the complex probate process with experienced guidance, ensuring efficient 
                estate settlement and distribution.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Executor/administrator guidance</li>
                <li>• Asset inventory and valuation</li>
                <li>• Creditor claim resolution</li>
                <li>• Court filing assistance</li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tax Planning</h3>
              <p className="text-gray-700 mb-4">
                Minimize estate and gift taxes through strategic planning, preserving more wealth 
                for your beneficiaries.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Estate tax minimization strategies</li>
                <li>• Gift tax planning</li>
                <li>• Generation-skipping trusts</li>
                <li>• Charitable giving strategies</li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Special Needs Planning</h3>
              <p className="text-gray-700 mb-4">
                Protect loved ones with disabilities while preserving their eligibility for 
                government benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Special needs trusts</li>
                <li>• ABLE accounts</li>
                <li>• Guardianship planning</li>
                <li>• Benefit preservation strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help - Process explanation */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How Our Legal Team Helps You
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Initial Consultation & Assessment</h3>
                <p className="text-gray-700">
                  We begin with a comprehensive review of your family situation, assets, and goals. Our attorneys 
                  listen carefully to understand your unique circumstances, concerns, and wishes for the future. 
                  This initial meeting helps us identify the most appropriate estate planning tools for your needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Customized Strategy Development</h3>
                <p className="text-gray-700">
                  Based on your consultation, we develop a tailored estate planning strategy that addresses your 
                  specific objectives. This includes selecting the right combination of wills, trusts, and other 
                  legal instruments to protect your assets and ensure your wishes are carried out effectively.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Document Preparation & Review</h3>
                <p className="text-gray-700">
                  Our experienced attorneys draft all necessary legal documents with meticulous attention to detail. 
                  We ensure every document is legally sound, clearly written, and accurately reflects your intentions. 
                  You&apos;ll have the opportunity to review and discuss each document before finalization.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Implementation & Asset Transfer</h3>
                <p className="text-gray-700">
                  We guide you through the proper execution of all documents and assist with transferring assets 
                  into trusts when necessary. Our team ensures all formalities are properly observed to make your 
                  estate plan legally binding and effective.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Ongoing Support & Updates</h3>
                <p className="text-gray-700">
                  Estate planning isn&apos;t a one-time event. We provide ongoing support as your life circumstances 
                  change, helping you update your plan to reflect marriages, divorces, births, deaths, or 
                  significant changes in assets or tax laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Professional Estate Planning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Peace of Mind</h3>
                <p className="text-gray-700">
                  Know that your loved ones will be cared for and your wishes will be honored, regardless of 
                  what the future holds.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Asset Protection</h3>
                <p className="text-gray-700">
                  Shield your estate from unnecessary taxes, creditors, and legal challenges that could 
                  diminish your legacy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Family Harmony</h3>
                <p className="text-gray-700">
                  Prevent family disputes and confusion by clearly documenting your intentions and wishes.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Legal Compliance</h3>
                <p className="text-gray-700">
                  Ensure all documents meet state legal requirements and will stand up to any potential challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Cost Savings</h3>
                <p className="text-gray-700">
                  Proper planning can save your estate thousands in taxes, court costs, and administrative expenses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Customized Solutions</h3>
                <p className="text-gray-700">
                  Receive personalized strategies that address your unique family dynamics and financial situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-sky-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Protecting Your Legacy Today
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t leave your family&apos;s future to chance. Schedule a confidential consultation with our 
            experienced estate planning attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button> */}
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
            </button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstatePlanningPage;