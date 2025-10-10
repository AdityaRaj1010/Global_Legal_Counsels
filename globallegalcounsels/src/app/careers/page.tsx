"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { User, Mail, Phone, Briefcase, Award, FileText, Upload, CheckCircle, XCircle, Sparkles } from "lucide-react";

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  qualification: string;
  resume: File | null;
}

export default function CareersPage() {
  const [formData, setFormData] = useState<CareerFormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    qualification: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "resume" && value instanceof File) {
          formDataToSend.append("resume", value);
        } else if (typeof value === "string") {
          formDataToSend.append(key, value);
        }
      });

      const res = await fetch("/api/send-career", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await res.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          experience: "",
          qualification: "",
          resume: null,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting career form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative flex flex-col items-center justify-center py-20 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>We're Hiring</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented individuals to join our legal team.
            Take the first step towards an exciting career with us.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20">
          <div className="space-y-6">
            {/* Personal Info Section */}
            <div className="space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                    required
                  />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Professional Info Section */}
            <div className="space-y-4 pt-2">
              <div className="relative group">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                <input
                  type="text"
                  name="role"
                  placeholder="Position/Role Applied For"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                  required
                />
              </div>

              <div className="relative group">
                <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                <textarea
                  name="experience"
                  placeholder="Work Experience / Skills"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all min-h-32 resize-none"
                  required
                />
              </div>

              <div className="relative group">
                <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                <input
                  type="text"
                  name="qualification"
                  placeholder="Educational Qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* File Upload Section */}
            <div className="pt-2">
              <label className="block cursor-pointer">
                <div className="relative group">
                  <div className="flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-300 rounded-xl hover:border-indigo-500 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 transition-all">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">
                        {formData.resume ? (
                          <span className="text-indigo-600">{formData.resume.name}</span>
                        ) : (
                          <>
                            <span className="text-indigo-600">Click to upload</span> or drag and drop
                          </>
                        )}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={(e) => {
                e.preventDefault();
                const form = e.currentTarget.closest('.space-y-6')?.querySelector('input[type="text"]')?.closest('div')?.parentElement?.parentElement;
                if (form) {
                  const mockEvent = { preventDefault: () => {} } as FormEvent<HTMLFormElement>;
                  handleSubmit(mockEvent);
                }
              }}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-700 font-medium">
                  Application submitted successfully! We'll be in touch soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-red-700 font-medium">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-8 text-center max-w-xl">
          By submitting this form, you agree to our privacy policy and terms of service.
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
}