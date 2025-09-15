"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Mail, Phone, /*MapPin, Clock,*/ Send, AlertTriangle } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'normal',
    agreedToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // replace your handleInputChange with this (no types on the param)
  // For form input/textarea/select
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked // safely cast only for checkboxes
        : value,
    }));
  };


  // For form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formData.agreedToTerms) {
    alert('Please acknowledge the terms before submitting your message.');
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        urgency: "normal",
        agreedToTerms: false,
      });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};




  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Legal Team</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            Ready to discuss your legal needs? We&apos;re here to provide the guidance and representation you deserve.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Important Notice */}
        <section className="mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice About Communications</h2>
                <div className="text-yellow-700 space-y-2 text-sm">
                  <p>
                    <strong>Contacting us does not create an attorney-client relationship.</strong> Please do not include
                    confidential or sensitive information in your message until we have confirmed our representation of you in writing.
                  </p>
                  <p>
                    Electronic communications are not secure. Information sent through this form may be intercepted and is not
                    protected by attorney-client privilege until a formal relationship is established.
                  </p>
                  <p>
                    For urgent matters requiring immediate attention, please call our office directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Matter Urgency
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent (within 24 hours)</option>
                    <option value="emergency">Emergency (immediate)</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className='text-red-500'>*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                >
                  <option value="">Please select a subject</option>
                  <option value="Business Law">Business Law</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Estate Planning">Estate Planning</option>
                  <option value="Litigation">Litigation</option>
                  <option value="Regulatory Compliance">Regulatory Compliance</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your legal matter or question. Remember: do not include confidential or sensitive information."
                />
              </div>

              {/* Terms Agreement */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I acknowledge that I have read and understand the notice above regarding the limitations on
                    attorney-client relationships and confidentiality. I understand that submitting this form does
                    not create an attorney-client relationship and that my communication is not confidential or
                    privileged until a formal attorney-client relationship is established. <span className='text-red-500'>*</span>
                  </span>
                </label>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Thank you for your message! We have received your inquiry and will respond within 1-2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        We&apos;re sorry, but there was an error sending your message. Please try again or contact us directly by phone.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreedToTerms}
                  className="w-full md:w-auto flex items-center justify-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <Link href={"tel:+916204770237"}>+91 6204770237</Link>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Available for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <Link href={"mailto:raj@globallegalcounsels.com"}>raj@globallegalcounsels.com</Link>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <div className="text-gray-600">
                      <p>[Your Street Address]</p>
                      <p>[City, State ZIP Code]</p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <div className="text-gray-600 text-sm">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="mt-2 text-teal-600">Emergency consultations available by appointment</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-teal-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Need Immediate Legal Assistance?</h3>
              <p className="text-teal-100 mb-4">
                If you&apos;re facing an urgent legal matter that requires immediate attention, don&apos;t wait.
                Call us now to speak with an attorney.
              </p>
              <a
                href="tel:+916204770237"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91 6204770237
              </a>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Interactive Map</p>
                <p className="text-xs">(Add Google Maps or similar)</p>
              </div>
            </div> */}

            {/* Additional Resources */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Resources</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  Learn About Our Team
                </a>
                <a href="/services" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  Our Legal Services
                </a>
                <a href="/privacy" className="block text-teal-600 hover:text-teal-700 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;