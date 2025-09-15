import React from 'react';
import { Scale, FileText, Users, Shield, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CivilLitigationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Civil Litigation Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive legal representation in civil disputes, protecting your rights and interests through skilled negotiation and courtroom advocacy.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Civil Litigation</h2>
              <p className="text-gray-600 mb-4">
                Civil litigation encompasses legal disputes between individuals, businesses, or organizations seeking monetary compensation or specific performance rather than criminal sanctions. Our experienced civil litigation attorneys guide you through every stage of the legal process, from initial consultation through trial and appeal if necessary.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you&apos;re pursuing a claim or defending against one, civil litigation can be complex and overwhelming. Our legal team combines deep knowledge of procedural law with strategic thinking to achieve the best possible outcomes for our clients. We understand that each case is unique and requires a tailored approach based on your specific circumstances and objectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Common Civil Litigation Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Contract disputes and breach of contract claims</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Property disputes and boundary issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Partnership and shareholder disputes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Tort claims including negligence and defamation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Consumer protection and fraud cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Our Legal Counselors Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Case Evaluation & Strategy</h3>
              <p className="text-gray-600">
                We thoroughly analyze your case, identifying strengths and weaknesses while developing a comprehensive legal strategy. Our attorneys assess the merits of your claim, potential damages, and likelihood of success to provide honest, practical advice about your options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Negotiation & Mediation</h3>
              <p className="text-gray-600">
                Many civil disputes can be resolved without going to trial. Our skilled negotiators work to achieve favorable settlements through direct negotiation or alternative dispute resolution methods like mediation and arbitration, saving you time and expenses while achieving your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Courtroom Representation</h3>
              <p className="text-gray-600">
                When litigation is necessary, our experienced trial attorneys provide aggressive representation in court. We handle all aspects of the litigation process, from filing pleadings and conducting discovery to presenting compelling arguments at trial and handling appeals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Civil Litigation Process</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation & Case Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive consultation to understand your situation, review relevant documents, and assess the legal merits of your case. During this phase, we explain your rights, potential claims or defenses, and provide an honest evaluation of your options and likely outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pre-Litigation Investigation & Demand</h3>
                  <p className="text-gray-600">
                    Before filing a lawsuit, we conduct thorough investigation to gather evidence, interview witnesses, and build a strong foundation for your case. We often attempt to resolve disputes through demand letters and pre-litigation negotiation, which can lead to faster, less expensive resolutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Filing & Discovery Phase</h3>
                  <p className="text-gray-600">
                    If litigation becomes necessary, we prepare and file all required legal documents with precision. During discovery, we use depositions, interrogatories, document requests, and other tools to uncover crucial evidence that supports your case while protecting you from overly burdensome requests from opposing parties.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Motion Practice & Settlement Negotiations</h3>
                  <p className="text-gray-600">
                    We strategically file motions to strengthen your position or eliminate weak claims from the opposing side. Throughout the litigation, we continue exploring settlement opportunities, often participating in mediation or settlement conferences to achieve favorable resolutions without the uncertainty of trial.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trial & Post-Trial Proceedings</h3>
                  <p className="text-gray-600">
                    If your case proceeds to trial, our experienced litigators present compelling arguments, examine witnesses effectively, and advocate forcefully for your interests. After trial, we handle any necessary post-trial motions, collection efforts for judgments, or appeals to protect and enforce your rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Our Civil Litigation Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Shield className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Our attorneys have successfully represented clients in hundreds of civil litigation matters, securing favorable verdicts and settlements. We bring decades of combined experience and a deep understanding of civil procedure to every case we handle.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Efficient Case Management</h3>
                <p className="text-gray-600">
                  We understand that litigation can be time-consuming and stressful. Our team employs efficient case management strategies to move your case forward promptly while keeping you informed at every stage of the process.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Client-Centered Approach</h3>
                <p className="text-gray-600">
                  Your goals and concerns are our priority. We maintain open communication, provide regular updates, and ensure you understand all aspects of your case. Our attorneys are always accessible to answer questions and address concerns.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Scale className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategic Litigation Planning</h3>
                <p className="text-gray-600">
                  We develop comprehensive litigation strategies tailored to your specific situation, considering both immediate needs and long-term objectives. Our strategic approach maximizes your chances of success while managing costs effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Rights?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don&apos;t navigate civil litigation alone. Our experienced attorneys are ready to advocate for your interests and guide you through the legal process with confidence and skill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                Contact Us
            </button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CivilLitigationPage;