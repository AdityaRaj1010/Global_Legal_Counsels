import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          {/* <p className="text-lg text-gray-300">
            Effective Date: [Insert Date] | Last Updated: [Insert Date]
          </p> */}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy is Our Priority</h2>
            <p className="text-gray-700 leading-relaxed">
              At Global Legal Counsels, we understand that confidentiality is fundamental to the attorney-client relationship. 
              This Privacy Policy explains how we collect, use, protect, and disclose information when you visit our website 
              or engage our legal services. We are committed to maintaining the highest standards of confidentiality and 
              data protection in accordance with applicable laws and professional ethical obligations.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <div className="text-gray-700 space-y-2 ml-6">
                <p>• Contact us through our website contact forms or email</p>
                <p>• Schedule consultations or appointments</p>
                <p>• Engage our legal services and become a client</p>
                <p>• Subscribe to our newsletters or legal updates</p>
                <p>• Participate in surveys or provide feedback</p>
              </div>
              <p className="text-gray-700 mt-4">
                This information may include your name, email address, phone number, mailing address, 
                and any other information you choose to share with us in communications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain technical information, including:
              </p>
              <div className="text-gray-700 space-y-2 ml-6">
                <p>• IP address and general location information</p>
                <p>• Browser type and version</p>
                <p>• Operating system information</p>
                <p>• Pages visited and time spent on our website</p>
                <p>• Referring websites and search terms used</p>
                <p>• Device information and screen resolution</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h3>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand user preferences. You can control cookie settings 
                through your browser preferences, though disabling cookies may affect website functionality.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-6">
              We use the information we collect for legitimate business purposes, including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Services</h4>
                  <p className="text-gray-600 text-sm">
                    Providing legal representation, advice, and counsel as requested by clients
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                  <p className="text-gray-600 text-sm">
                    Responding to inquiries, scheduling consultations, and maintaining client relationships
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Website Improvement</h4>
                  <p className="text-gray-600 text-sm">
                    Analyzing website usage to improve functionality, content, and user experience
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Meeting professional obligations and regulatory requirements
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                  <p className="text-gray-600 text-sm">
                    Protecting against fraud, security threats, and unauthorized access
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing</h4>
                  <p className="text-gray-600 text-sm">
                    Sending legal updates and firm news (with your consent)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attorney-Client Confidentiality */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Attorney-Client Confidentiality</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-800 mb-2">Important Legal Notice</h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  Information shared with our firm may be subject to attorney-client privilege once a formal 
                  attorney-client relationship is established. However, initial communications through our website 
                  or contact forms do not automatically create this privileged relationship. Confidential or 
                  sensitive information should not be transmitted through this website until we have confirmed 
                  our representation of you in writing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information only in the following limited circumstances:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">With Your Consent</h4>
                <p className="text-gray-600 text-sm">When you explicitly agree to share information with third parties</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Service Providers</h4>
                <p className="text-gray-600 text-sm">With trusted third-party service providers who assist in website operations (subject to confidentiality agreements)</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                <p className="text-gray-600 text-sm">When required by law, court order, or legal process (subject to applicable privilege protections)</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Business Protection</h4>
                <p className="text-gray-600 text-sm">To protect our rights, property, or safety, or that of our clients or others</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p>• SSL encryption for data transmission</p>
                <p>• Secure server infrastructure</p>
                <p>• Regular security assessments</p>
              </div>
              <div>
                <p>• Access controls and authentication</p>
                <p>• Employee confidentiality training</p>
                <p>• Incident response procedures</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              However, no method of transmission over the internet or electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          <p className="text-gray-700 mb-6">
            Depending on your location and applicable laws, you may have certain rights regarding your personal information:
          </p>
          <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-gray-700">
            <p><strong>Access:</strong> Request access to the personal information we hold about you</p>
            <p><strong>Correction:</strong> Request correction of inaccurate or incomplete information</p>
            <p><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</p>
            <p><strong>Portability:</strong> Request transfer of your information to another service provider</p>
            <p><strong>Objection:</strong> Object to certain processing of your information</p>
            <p><strong>Restriction:</strong> Request restriction of processing in certain circumstances</p>
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites or services. We are not responsible for the 
            privacy practices or content of these external sites. We encourage you to review the privacy policies 
            of any third-party sites you visit.
          </p>
        </section>

        {/* Updates to Policy */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
            legal requirements, or other factors. We will notify you of any material changes by posting the updated 
            policy on our website with a new effective date. Your continued use of our website after such updates 
            constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Global Legal Counsels</strong></p>
              {/* <p>[Your Address]</p> */}
              {/* <p>[City, State, ZIP Code]</p> */}
              <p>Phone: +91-8051161374</p>
              <p>Email: Raj@globallegalcounsels.com</p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t pt-8">
          <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
            <p className="font-semibold mb-2">Legal Disclaimer:</p>
            <p>
              This Privacy Policy is provided for informational purposes and should be reviewed by qualified 
              legal counsel to ensure compliance with applicable privacy laws and regulations in your jurisdiction. 
              Laws vary by location and may change over time.
            </p>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;