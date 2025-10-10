import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section - Kept Same */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            Confidentiality is fundamental to the Attorney-Client relationship
          </p>
        </div>
      </section>

      {/* Last Updated Badge */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">Last Updated: October 10, 2025</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 mb-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Your Privacy Matters to Us</h2>
          <p className="text-lg leading-relaxed opacity-95">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information 
            when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-xl">
            <p className="text-sm">
              By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Interpretation & Definitions Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Interpretation & Definitions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Key Definitions
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Account:</span>
                  <span className="text-gray-600 ml-2">A unique account created for You to access our Service</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Law Firm:</span>
                  <span className="text-gray-600 ml-2">Global Legal Counsels, Kazipur, Road No. 4, Rajendra Nagar, Patna, Bihar, India - 800004</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Country:</span>
                  <span className="text-gray-600 ml-2">India</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Website:</span>
                  <span className="text-gray-600 ml-2">www.globallegalcounsels.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                Data Definitions
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Personal Data:</span>
                  <span className="text-gray-600 ml-2">Information relating to an identified individual</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Usage Data:</span>
                  <span className="text-gray-600 ml-2">Data collected automatically from Service use</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Device:</span>
                  <span className="text-gray-600 ml-2">Any device that can access the Service</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Service:</span>
                  <span className="text-gray-600 ml-2">Legal service provided by the Law Firm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Data Collection */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Collecting Your Personal Data</h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <p className="text-gray-700 mb-6">
              While using our Service, We may ask You to provide Us with certain personally identifiable information:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'First name and Last name',
                'Phone number', 
                'Email address',
                'Address, State, Province',
                'ZIP/Postal code, City',
                'Usage Data (automatic)'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use of Personal Data */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">How We Use Your Personal Data</h2>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Eligibility & Access', desc: 'To confirm Your eligibility to access and use the Website and its services, and enhance your online experience' },
              { title: 'Legal Services', desc: 'Process data to deliver legal advice, online solutions, or other services requested by You or Your organization' },
              { title: 'Relationship Management', desc: 'Manage and administer your relationship including billing, collections, payments processing, accounting, and auditing' },
              { title: 'Legal Compliance', desc: 'Fulfill legal and regulatory obligations including record-keeping, compliance screenings, anti-money laundering frameworks' },
              { title: 'Quality Improvement', desc: 'Analyse and improve the quality of Our services and communications with you' },
              { title: 'Security & Fraud Prevention', desc: 'Maintain security of premises, IT systems, websites, and detect/prevent security risks or criminal activity' },
              { title: 'Insurance Purposes', desc: 'Your Personal Information may be used for insurance-related purposes' },
              { title: 'Internal Compliance', desc: 'Monitor and evaluate compliance with our internal standards, policies, and procedures' },
              { title: 'Identity Verification', desc: 'Identify individuals authorized to act or trade on behalf of clients, suppliers, and service providers' },
              { title: 'Regulatory Obligations', desc: 'Meet national or international legal obligations, respond to regulators, undergo audits, provide reports' },
              { title: 'Service Subscriptions', desc: 'Identity verification, payment handling, IT infrastructure, website hosting, analytics, customer service' },
              { title: 'Legal Rights', desc: 'Disclosed in compliance with court orders or to exercise and defend Global Legal Counsels legal rights' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
            <p className="text-gray-700 mb-6 font-medium">We may share Your personal information in the following situations:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Internal Sharing
                </h4>
                <p className="text-gray-600 text-sm">Shared confidentially within other entities of our Law Firm for legal advice, services, administrative, billing purposes</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Client Services
                </h4>
                <p className="text-gray-600 text-sm">Disclosed to the client concerned when collected during legal services, and to others as required for delivering services</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Feedback Collection
                </h4>
                <p className="text-gray-600 text-sm">Contact details provided to third-party agencies to collect feedback on service quality and enhance client experience</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Compliance & Legal
                </h4>
                <p className="text-gray-600 text-sm">Shared with organizations for anti-money laundering checks, fraud prevention, credit risk assessments, courts, regulators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Security & Compliance</h2>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">IT Act Compliance</h3>
              <p className="text-gray-700 mb-4">
                Global Legal Counsels employs security measures consistent with the requirements under:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Information Technology Act, 2000</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Important Notice</h4>
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    By sharing information through internet, mobile, or data networks, You acknowledge the inherent risks involved. 
                    Global Legal Counsels shall not be held liable for any security breach unless it results from gross and wilful negligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grievance Officer */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Grievance Officer
              </h2>
              <p className="text-white/90 mb-6">
                In accordance with IT Act 2000, we have appointed a Grievance Officer to address your concerns:
              </p>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Name</p>
                    <p className="text-white font-semibold">Raj Aryan</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Designation</p>
                    <p className="text-white font-semibold">Founder and CEO</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold">raj@globallegalcounsels.com</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold">+91-6204770237</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/90 text-sm">
                    The Grievance Officer shall redress your grievances within one month from the date of receipt of the complaint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Provisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Provisions</h2>
          
          <div className="space-y-6">
            {/* Force Majeure */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Force Majeure Events
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Global Legal Counsels will not be liable for any loss, damage, or misuse of your Personal Information resulting from 
                Force Majeure Events including acts of God, natural disasters, sabotage, fire, floods, explosions, civil unrest, 
                strikes, riots, war, government actions, hacking, unauthorized data access, system crashes, or breaches of security and encryption.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Data Retention
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We retain your Personal Information only for as long as necessary to fulfill the purposes for which it was collected, 
                comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Your Rights
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                You have the right to access, review, correct, update, or request deletion of your Personal Information at any time. 
                To exercise these rights, please submit a written request to our Grievance Officer at raj@globallegalcounsels.com.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 text-xs">
                  We will respond within 30 days and may require verification of your identity. You can withdraw consent for processing 
                  Sensitive Personal Information anytime.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Children&apos;s Privacy
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our services are not directed to individuals under 18 years. We do not knowingly collect Personal Information 
                from children without parental consent. If you believe we have inadvertently collected information from a minor, 
                please contact us immediately at raj@globallegalcounsels.com.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Third-Party Services & Cookies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">External Links</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our Website may contain links to third-party websites that are not operated by Global Legal Counsels. 
                This Privacy Policy does not apply to such external websites.
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">
                  We recommend reviewing the privacy policies of any third-party websites you visit.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Providers</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We use third-party service providers including website hosting, payment gateways, email services, 
                and analytics tools like Google Analytics.
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">
                  These providers access your data only for specific tasks and maintain security standards.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Cookie Policy
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our Website uses cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand user preferences. Cookies are small text files stored on 
                your device that help us remember your preferences and provide personalized services. 
                You may disable cookies through your browser settings.
              </p>
            </div>
          </div>
        </section>

        {/* Data Breach Notification */}
        <section className="mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Data Breach Notification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In the event of a data breach that compromises the security, confidentiality, or integrity of your Personal Information, 
              we will notify you and the relevant authorities as required under applicable law. Such notification will be made without 
              unreasonable delay and will include information about the nature of the breach, the data affected, and the measures 
              we are taking to address the breach and mitigate any potential harm.
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              This Policy may be revised from time to time in response to changes in business practices, legal requirements, 
              or regulatory guidelines. Updated versions will be published online, and reasonable efforts will be made to 
              notify you of significant changes.
            </p>
            <div className="bg-white/70 backdrop-blur rounded-xl p-4">
              <p className="text-gray-600 text-sm">
                You are advised to periodically review the Policy for updates. Discontinuing use of the Website does not 
                affect the applicability of the Policy to information provided earlier.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                Global Legal Counsels welcomes your feedback on the Website and this Policy. You may reach us with queries 
                or comments:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">raj@globallegalcounsels.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Global Legal Counsels, Kazipur, Road No. 4, Rajendra Nagar, Patna, Bihar, India - 800004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;