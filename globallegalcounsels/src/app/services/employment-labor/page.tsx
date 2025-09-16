import React from 'react';
import { Shield, Users, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const EmploymentLaborPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Sets the professional tone and introduces the service */}
      <section className="bg-gradient-to-br from-gray-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Employment & Labor Law</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Protecting your rights in the workplace with comprehensive legal representation 
            for employees and employers navigating complex labor laws and regulations.
          </p>
        </div>
      </section>

      {/* Overview Section - Explains what employment law encompasses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Understanding Employment & Labor Law</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Employment and labor law governs the complex relationship between employers and employees, 
                establishing rights, responsibilities, and protections for both parties. Our experienced 
                legal team specializes in navigating these intricate regulations to ensure fair treatment, 
                compliance, and resolution of workplace disputes.
              </p>
              <p className="mb-6">
                Whether you&apos;re an employee facing discrimination, wrongful termination, or wage disputes, 
                or an employer seeking guidance on compliance and policy development, our attorneys provide 
                strategic counsel tailored to your specific situation. We understand that workplace issues 
                can be emotionally and financially challenging, which is why we approach each case with 
                both legal expertise and genuine compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Details specific areas we handle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How We Help You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Scale className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Workplace Discrimination</h3>
              <p className="text-gray-600">
                We vigorously defend against discrimination based on race, gender, age, disability, 
                religion, or any protected characteristic. Our attorneys gather evidence, file EEOC 
                complaints, and pursue litigation when necessary to protect your civil rights.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <AlertCircle className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wrongful Termination</h3>
              <p className="text-gray-600">
                If you&apos;ve been illegally fired, we&apos;ll investigate your case thoroughly, examining 
                employment contracts, company policies, and termination circumstances to build a 
                strong claim for reinstatement or compensation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FileText className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wage & Hour Disputes</h3>
              <p className="text-gray-600">
                We help recover unpaid wages, overtime compensation, and address minimum wage 
                violations. Our team understands complex wage laws and fights to ensure you 
                receive every dollar you&apos;ve earned.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Harassment & Retaliation</h3>
              <p className="text-gray-600">
                We provide strong advocacy for victims of workplace harassment and retaliation, 
                helping document incidents, navigate internal complaints, and pursue legal action 
                to stop harmful behavior and secure compensation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Union & Collective Bargaining</h3>
              <p className="text-gray-600">
                Our attorneys represent both unions and employers in negotiations, grievances, 
                and arbitrations, ensuring fair collective bargaining agreements and protecting 
                organizational rights.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Employment Contracts</h3>
              <p className="text-gray-600">
                We draft, review, and negotiate employment agreements, non-compete clauses, and 
                severance packages, protecting your interests whether you&apos;re hiring or being hired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Explains our approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Approach to Your Case</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation & Case Evaluation</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive consultation to understand your situation, review relevant 
                    documents, and assess the strength of your case. This initial meeting helps us identify 
                    the best legal strategies and provide honest guidance about potential outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Investigation & Evidence Gathering</h3>
                  <p className="text-gray-600">
                    Our legal team conducts thorough investigations, collecting employment records, witness 
                    statements, company policies, and other crucial evidence. We leave no stone unturned in 
                    building a compelling case that supports your claims.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Negotiation</h3>
                  <p className="text-gray-600">
                    Many employment disputes can be resolved through skilled negotiation. We leverage our 
                    experience to negotiate favorable settlements, saving you time and stress while achieving 
                    your goals without the need for lengthy litigation.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aggressive Litigation When Necessary</h3>
                  <p className="text-gray-600">
                    If negotiation fails, we&apos;re prepared to take your case to court. Our trial attorneys have 
                    extensive courtroom experience and will advocate forcefully for your rights before judges 
                    and juries, pursuing maximum compensation and justice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Clients Trust Our Employment Law Team</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Extensive Experience:</strong>
                    <span className="text-gray-600"> Over two decades representing both employees and employers 
                    in complex labor disputes, giving us unique insight into both perspectives.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Proven Track Record:</strong>
                    <span className="text-gray-600"> Successfully recovered millions in wages, settlements, and 
                    verdicts for clients facing workplace injustices.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Personalized Attention:</strong>
                    <span className="text-gray-600"> Every case receives dedicated attention from senior attorneys 
                    who understand the personal and professional stakes involved.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Contingency Fee Options:</strong>
                    <span className="text-gray-600"> For many employment cases, we work on contingency, meaning 
                    you pay nothing unless we win your case.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Comprehensive Support:</strong>
                    <span className="text-gray-600"> From initial consultation through appeals, we provide 
                    continuous guidance and aggressive advocacy at every stage.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Take Action to Protect Your Rights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t let workplace injustices go unchallenged. Contact our experienced employment law 
            attorneys today for a confidential consultation about your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white cursor-pointer text-cyan-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Free Consultation
            </button> */}
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition">
                Contact Us
            </button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentLaborPage;