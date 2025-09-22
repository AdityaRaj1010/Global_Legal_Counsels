import Link from 'next/link';
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            {/* Effective Date: [Insert Date] | Last Updated: [Insert Date] */}
            Please read these Terms of Service carefully
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-medium text-red-800 mb-2">Important Legal Notice</h2>
                <p className="text-red-700 text-sm leading-relaxed">
                  Please read these Terms of Service carefully before using our website or services. By accessing 
                  or using our website, you agree to be bound by these terms. If you do not agree with any part 
                  of these terms, you must not use our website or services.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by [Your Firm Name] 
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and any legal services we may provide. These Terms constitute a legally 
            binding agreement between you and our firm.
          </p>
        </section>

        {/* No Attorney-Client Relationship */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">No Attorney-Client Relationship Created</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Critical Understanding Required</h3>
                <div className="text-yellow-700 space-y-3">
                  <p className="font-medium">
                    Browsing our website, reading our content, or contacting us through our website does NOT 
                    create an attorney-client relationship between you and our firm.
                  </p>
                  <p>
                    An attorney-client relationship is established only when both parties have signed a written 
                    retainer agreement that explicitly defines the scope of representation, fees, and other terms 
                    of engagement.
                  </p>
                  <p>
                    Until such a formal relationship exists, any communications between you and our firm are not 
                    protected by attorney-client privilege and may not be confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Content Disclaimer */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Website Content and Information</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Information Only</h3>
              <p className="text-gray-700 leading-relaxed">
                The content on this website, including but not limited to text, graphics, images, videos, and other 
                materials, is provided for general informational purposes only. This information is not intended to 
                constitute legal advice and should not be relied upon as such for any specific situation.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Substitute for Professional Counsel</h3>
              <p className="text-gray-700 leading-relaxed">
                Legal matters are highly fact-specific and jurisdiction-dependent. The information provided on this 
                website cannot and does not take into account your individual circumstances, the specific facts of 
                your situation, or the laws applicable in your jurisdiction. You should always consult with qualified 
                legal counsel before making any legal decisions or taking any legal actions.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Warranty of Accuracy</h3>
              <p className="text-gray-700 leading-relaxed">
                While we strive to keep the information on our website current and accurate, laws change frequently, 
                and legal interpretations evolve. We make no representations or warranties regarding the accuracy, 
                completeness, or timeliness of any information on this website. Use of this information is at your own risk.
              </p>
            </div>
          </div>
        </section>

        {/* Confidentiality Warning */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Communications and Confidentiality</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Confidentiality Warning</h3>
            <div className="text-red-700 space-y-3">
              <p>
                <strong>Do not send confidential or sensitive information through this website, email, 
                or any other electronic communication until we have confirmed our representation of you in writing.</strong>
              </p>
              <p>
                Electronic communications are not secure and may be intercepted by unauthorized parties. 
                Additionally, communications sent before establishing an attorney-client relationship may not be 
                protected by attorney-client privilege.
              </p>
              <p>
                If you need to discuss sensitive legal matters, please contact us by telephone to schedule 
                a confidential consultation.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Form Submissions</h3>
            <p className="text-gray-700 leading-relaxed">
              When you submit information through our contact forms, you acknowledge and agree that such 
              communications are not confidential and do not create an attorney-client relationship. We may, 
              but are not obligated to, respond to such inquiries. Any response should not be construed as 
              legal advice or as creating an attorney-client relationship.
            </p>
          </div>
        </section>

        {/* Acceptable Use */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptable Use of Our Website</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Permitted Uses</h3>
            <p className="text-gray-700 mb-4">You may use our website for the following purposes:</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="space-y-2 text-gray-700">
                <p>• Learning about our firm and legal services</p>
                <p>• Reading general legal information and educational content</p>
                <p>• Contacting us to inquire about potential representation</p>
                <p>• Accessing resources and materials we have made publicly available</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">You agree NOT to use our website for:</p>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="space-y-2 text-red-700 text-sm">
                <p>• Any unlawful purpose or in violation of applicable laws or regulations</p>
                <p>• Transmitting spam, viruses, or other harmful code</p>
                <p>• Attempting to gain unauthorized access to our systems or data</p>
                <p>• Impersonating our firm or our attorneys</p>
                <p>• Violating intellectual property rights</p>
                <p>• Disrupting the normal functioning of the website</p>
                <p>• Collecting user information without consent</p>
                <p>• Commercial purposes without our written permission</p>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Content</h3>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, images, audio clips, videos, 
                digital downloads, and software, is the property of [Your Firm Name] or its licensors and 
                is protected by United States and international copyright, trademark, and other intellectual 
                property laws.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limited License</h3>
              <p className="text-gray-700 leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use this website 
                for personal, non-commercial purposes only. This license does not include the right to download 
                (except for temporary caching), modify, reproduce, distribute, or create derivative works from 
                our content without our express written permission.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trademark Notice</h3>
              <p className="text-gray-700 leading-relaxed">
                [Your Firm Name] and our logo are trademarks of our firm. Other trademarks, service marks, 
                and logos used on this website are the property of their respective owners.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers and Limitations</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide this website &quot;as is&quot; and make no representations or warranties regarding its availability, 
                functionality, or freedom from errors. We reserve the right to modify, suspend, or discontinue the 
                website at any time without notice.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Links</h3>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites for your convenience. We do not endorse, 
                control, or assume responsibility for the content, privacy policies, or practices of any third-party 
                websites. Your use of third-party websites is at your own risk.
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, [Your Firm Name] and its attorneys shall not be liable 
                for any direct, indirect, incidental, special, or consequential damages arising from your use of 
                this website or reliance on any information contained herein, even if we have been advised of the 
                possibility of such damages.
              </p>
            </div>
          </div>
        </section>

        {/* Jurisdiction and Governing Law */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Jurisdiction</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of [Your State], 
              without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts 
              located in [Your County], [Your State]. You consent to personal jurisdiction and venue in these courts.
            </p>
          </div>
        </section>

        {/* Professional Licensing */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Licensing and Regulation</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              The attorneys of [Your Firm Name] are licensed to practice law in [Your State(s)]. We are subject 
              to the rules and regulations of the [Your State] State Bar and other applicable professional 
              regulatory bodies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you are located outside of [Your State], the information on this website may not be applicable 
              to your jurisdiction. Legal requirements vary significantly between jurisdictions, and you should 
              consult with local counsel familiar with the laws in your area.
            </p>
          </div>
        </section>

        {/* Modifications */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Modifications to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Any changes will be effective 
            immediately upon posting on this website. Your continued use of the website after any such changes 
            constitutes your acceptance of the new Terms of Service. We encourage you to review these Terms 
            periodically to stay informed of any updates.
          </p>
        </section>

        {/* Severability */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Severability</h2>
          <p className="text-gray-700 leading-relaxed">
            If any provision of these Terms of Service is deemed invalid, illegal, or unenforceable by a court 
            of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make 
            it valid and enforceable, or if such modification is not possible, such provision shall be severed 
            from these Terms. The remaining provisions shall continue in full force and effect.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About These Terms</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Global Legal Counsels</strong></p>
              {/* <p>[Your Address]</p>
              <p>[City, State, ZIP Code]</p> */}
              <p>Phone: <Link href={"tel:+916204770237"}>+91 6204770237</Link></p>
              <p>Email: <Link href={"mailto:raj@globallegalcounsels.com"}>raj@globallegalcounsels.com</Link></p> 
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="border-t pt-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Acknowledgment of Terms</h3>
            <p className="leading-relaxed">
              By using this website, you acknowledge that you have read, understood, and agree to be bound by 
              these Terms of Service. You also acknowledge that you understand the limitations on attorney-client 
              relationships and confidentiality described herein.
            </p>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default TermsOfServicePage;