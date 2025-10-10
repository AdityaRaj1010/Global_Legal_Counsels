import React from 'react';
import Link from 'next/link';
import { AlertCircle, Shield, FileText, Scale, Mail, Calendar, Globe, Lock, User, Info, AlertTriangle, Copyright, Gavel, CheckCircle } from 'lucide-react';

const TermsOfUsePage = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Keeping same as provided */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Use</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            Please read these Terms of Use carefully
          </p>
        </div>
      </section>

      {/* Last Updated Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Last Updated: October 10, 2025</span>
          </div>
          <span className="text-sm">Effective immediately upon posting</span>
        </div>
      </div>

      {/* Table of Contents Sidebar + Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  <a href="#acceptance" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">1. Acceptance of Terms</a>
                  <a href="#modifications" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">2. Modifications</a>
                  <a href="#general-info" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">3. General Information</a>
                  <a href="#property-rights" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">5. Property Rights</a>
                  <a href="#prohibited-use" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">7. Prohibited Activities</a>
                  <a href="#liability" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">14. Liability & Indemnification</a>
                  <a href="#copyright" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">15-16. Copyright</a>
                  <a href="#governance" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">21. Governing Law</a>
                  <a href="#contact" className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3 py-2 transition">Contact Information</a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Critical Notice */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-red-900 mb-2">Important Legal Agreement</h2>
                  <p className="text-red-800 leading-relaxed">
                    By accessing or using the Global Legal Counsels website, you agree to be legally bound by these Terms of Use. 
                    If you do not agree with any part of these terms, you must immediately discontinue use of our website and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Acceptance */}
            <section id="acceptance" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This Terms of Use Agreement sets forth the terms and conditions governing your access to and use of the 
                  Global Legal Counsels (&quot;the Website&quot;). By accessing or using the Website or any content made available 
                  through it, including but not limited to RSS feeds (collectively, the &quot;Content&quot;), you agree to be bound 
                  by this Agreement.
                </p>
              </div>
            </section>

            {/* Section 2: Modifications */}
            <section id="modifications" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-gray-900">Modifications & Revisions</h2>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    Global Legal Counsels may update or revise these Terms of Use at any time by posting the revised version 
                    on the Website. Your continued use of the Website following such changes shall constitute acceptance of 
                    the revised terms. Such revisions will not apply retrospectively.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3-4: General Information & Disclaimer */}
            <section id="general-info" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-gray-900">General Information & Disclaimers</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex gap-3">
                      <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Legal Advice</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The Website is provided as a complimentary resource for clients, colleagues, and other users, 
                          offering general information only. The Content does not constitute legal or professional advice, 
                          nor does it establish an attorney-client relationship or solicitation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex gap-3">
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Liability</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Global Legal Counsels and its partners, employees, consultants, agents, and affiliates assume 
                          no liability for any loss or damage arising from reliance on or use of the Website or its Content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <p className="text-gray-600 italic">
                      Global Legal Counsels may modify the Website, its Content, and/or the services described on it 
                      at any time, without prior notice.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5-6: Property Rights */}
            <section id="property-rights" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property Rights</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                    <div className="flex gap-3">
                      <Copyright className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Exclusive Property</h3>
                        <p className="text-gray-700 mb-4">
                          The Website and all Content are the exclusive property of Global Legal Counsels and/or its licensors.
                        </p>
                        <div className="bg-white p-4 rounded">
                          <p className="text-sm text-gray-600 font-medium mb-2">Restrictions:</p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• You may NOT reproduce, duplicate, or copy content for commercial purposes</li>
                            <li>• You may NOT sell, resell, or exploit any portion of the Website</li>
                            <li>• Express written permission required for any commercial use</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited Personal Use</h3>
                    <p className="text-gray-700">
                      Subject to compliance with this Agreement, Global Legal Counsels permits you to view and/or print 
                      a single copy of Content for personal use. You must not remove or alter any acknowledgements, 
                      disclaimers, or notices.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Prohibited Activities */}
            <section id="prohibited-use" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
                </div>
                
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <p className="text-gray-700 font-semibold mb-4">You agree NOT to:</p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-red-600 mt-1">✕</span>
                      <p className="text-gray-700">Access the Website through means other than standard web browsers</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-red-600 mt-1">✕</span>
                      <p className="text-gray-700">Damage, alter, disable, overburden, or impair the Website</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-red-600 mt-1">✕</span>
                      <p className="text-gray-700">Interfere with the use and enjoyment of the Website by others</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8-9: Browser Storage & Content Accuracy */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Security & Content Recommendations</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Shared Device Usage</h3>
                    <p className="text-gray-700 text-sm">
                      If you access the Website on a shared device, we recommend clearing your browsing history, 
                      cookies, and cache to re-access the Website afresh. Global Legal Counsels disclaims responsibility 
                      for issues arising from failure to follow this recommendation.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Accuracy</h3>
                    <p className="text-gray-700 text-sm">
                      Content is provided for general informational purposes only. We do not guarantee accuracy, 
                      completeness, or reliability and encourage independent verification.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10-11: External Links */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">External Links Policy</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-gray-700">
                      The Website may provide links to third-party websites. Accessing these is at your own risk. 
                      Global Legal Counsels does not control or endorse such sites and disclaims liability for their 
                      content or use.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-700 font-medium">
                      ⚠️ You may not link to our Website without prior written permission from Global Legal Counsels.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12-13: Trademarks & Warranties */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Trademarks & Warranties</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Trademark Protection</h3>
                    <p className="text-gray-700">
                      Unauthorized use of Global Legal Counsels&#39; trademarks, service marks, or logos is prohibited 
                      and may violate applicable trademark laws.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">No Warranties</h3>
                    <p className="text-gray-700 mb-3">
                      The Website and Content are provided without warranties of any kind, whether express or implied, including:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Merchantability</li>
                      <li>• Fitness for a particular purpose</li>
                      <li>• Non-infringement</li>
                      <li>• Uninterrupted or error-free operation</li>
                      <li>• Virus-free access</li>
                      <li>• Accuracy of Content</li>
                    </ul>
                    <p className="text-gray-700 mt-4 font-medium">
                      You assume full responsibility for verifying Content and safeguarding against harmful code.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 14: Liability & Indemnification */}
            <section id="liability" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">14</div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability & Indemnification</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Limitation of Liability</h3>
                    <p className="text-gray-700">
                      To the fullest extent permitted by law, Global Legal Counsels disclaims all liability for direct, 
                      indirect, incidental, consequential, or special damages arising from access to or use of the Website 
                      and Content.
                    </p>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Indemnification</h3>
                    <p className="text-gray-700">
                      You agree to indemnify, defend, and hold harmless Global Legal Counsels, its affiliates, partners, 
                      consultants, and employees from any claims, liabilities, or expenses (including attorneys&#39; fees) 
                      arising from your use of the Website or breach of this Agreement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 15-16: Copyright */}
            <section id="copyright" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Copyright className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Copyright Protection</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-700 font-medium mb-2">
                      Copyright © {currentYear} Global Legal Counsels. All rights reserved.
                    </p>
                    <p className="text-gray-600">
                      The Website is protected under copyright law. You may not copy, modify, or distribute any part 
                      of the Website without prior written consent from Global Legal Counsels.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Copyright Infringement Notice</h3>
                    <p className="text-gray-700 mb-4">
                      If you believe your work has been used in a manner that infringes your copyright or intellectual 
                      property rights, please submit a written notice including:
                    </p>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>✓ Authorized signature of the rights holder or representative</li>
                      <li>✓ Description of the copyrighted work claimed to be infringed</li>
                      <li>✓ Location of the infringing material (URL, etc.)</li>
                      <li>✓ Statement of good faith belief that the use is unauthorized</li>
                      <li>✓ Statement under penalty of perjury that the information is accurate</li>
                    </ul>
                    <div className="bg-white p-4 rounded">
                      <p className="text-sm font-semibold text-gray-700">Send notices to:</p>
                      <p className="text-sm text-gray-700">Office of the Global Legal Counsels</p>
                      <p className="text-sm text-gray-600">Kazipur, Road No. 4, Rajendra Nagar, Patna, Bihar, India - 800004</p>
                      <p className="text-sm text-blue-600">
                        Email: <a href="mailto:raj@globallegalcounsels.com" className="hover:underline">raj@globallegalcounsels.com</a>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Subject Line: &quot;Copyright Infringement&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 17: Dispute Resolution */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Dispute Resolution</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  In the event of any dispute, controversy, or claim arising out of or relating to these Terms of Use, 
                  the parties agree to first attempt to resolve the matter through good faith negotiations. If the dispute 
                  cannot be resolved within 30 days, the parties may pursue resolution through the appropriate legal channels 
                  as set forth in the Governing Law and Jurisdiction clause.
                </p>
              </div>
            </section>

            {/* Section 18-20: Age, Severability, Waiver */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">General Provisions</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Age Requirements</h3>
                    <p className="text-gray-700">
                      By using this Website, you represent and warrant that you are at least 18 years of age and have 
                      the legal capacity to enter into these Terms of Use. If accessing on behalf of an organization, 
                      you represent that you have authority to bind that organization.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Severability</h3>
                    <p className="text-gray-700">
                      If any provision of these Terms is held invalid or unenforceable, such provision shall be modified 
                      to the minimum extent necessary or severed. The remaining provisions shall continue in full force 
                      and effect.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Waiver</h3>
                    <p className="text-gray-700">
                      No waiver by Global Legal Counsels of any breach shall be deemed a waiver of any subsequent breach. 
                      Failure to enforce any provision shall not constitute a waiver.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 21: Governing Law */}
            <section id="governance" className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Governing Law & Jurisdiction</h2>
                </div>
                
                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    These Terms of Use shall be governed by and construed in accordance with the laws of India.
                  </p>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700">
                      <span className="font-semibold">Exclusive Jurisdiction:</span> Any disputes arising out of or relating 
                      to these Terms shall be subject to the exclusive jurisdiction of the courts located in Patna, Bihar, India. 
                      By using this Website, you consent to the jurisdiction and venue of such courts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 22-23: Privacy & Entire Agreement */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-gray-700" />
                  <h2 className="text-2xl font-bold text-gray-900">Privacy & Complete Agreement</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy Policy</h3>
                    <p className="text-gray-700">
                      By using the Website, you acknowledge and agree to Global Legal Counsels&#39; Privacy Policy, 
                      available on the Website, which governs collection, use, and disclosure of your information.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Entire Agreement</h3>
                    <p className="text-gray-700">
                      These Terms of Use, together with our Privacy Policy, constitute the entire agreement between 
                      you and Global Legal Counsels regarding your use of the Website and supersede all prior agreements 
                      and understandings, whether written or oral, relating to the subject matter herein.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                
                <p className="mb-6">
                  For any queries, concerns, or feedback regarding this Agreement, please contact:
                </p>
                
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Global Legal Counsels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:raj@globallegalcounsels.com" className="hover:underline">
                        raj@globallegalcounsels.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      <Link href="tel:+916204770237" className="hover:underline">
                        +91 6204770237
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Acknowledgment */}
            <section>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Your Agreement & Acknowledgment</h3>
                </div>
                <p className="leading-relaxed">
                  By continuing to use the Global Legal Counsels website, you acknowledge that you have read, 
                  understood, and agree to be bound by all these Terms of Use. You understand that these terms 
                  create legal obligations and affect your legal rights.
                </p>
              </div>
            </section>
            
          </main>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © {currentYear} Global Legal Counsels. All rights reserved. | Terms effective immediately upon posting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;