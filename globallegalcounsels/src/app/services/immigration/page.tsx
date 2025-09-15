import React from 'react';
import { Globe, Plane, Users, Briefcase, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

const ImmigrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Immigration Law</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Compassionate and experienced immigration counsel helping individuals, families, 
            and businesses navigate the complex U.S. immigration system to achieve their 
            American dream with confidence and dignity.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Journey to Legal Status Starts Here</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Immigration law is one of the most complex and constantly evolving areas of legal practice. 
                Whether you&apos;re seeking to reunite with family, pursue educational or career opportunities, 
                or escape persecution, the path to legal status in the United States requires careful 
                navigation of intricate regulations, strict deadlines, and extensive documentation. Our 
                immigration attorneys combine deep legal knowledge with genuine compassion, understanding 
                that behind every case is a human story of hope, courage, and determination.
              </p>
              <p className="mb-6">
                We recognize that immigration matters affect not just individuals but entire families and 
                communities. Our multilingual team provides culturally sensitive representation, ensuring 
                you feel heard, understood, and supported throughout your immigration journey. From visa 
                applications to deportation defense, we stand with you at every step, fighting for your 
                right to build a life in America. Our attorneys stay current with policy changes, court 
                decisions, and administrative updates to provide the most effective representation possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Comprehensive Immigration Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Family-Based Immigration</h3>
              <p className="text-gray-600">
                Reunite with loved ones through family petitions, including immediate relative visas, 
                preference categories, K-1 fiancé visas, and adjustment of status. We handle complex 
                cases involving aging-out children, priority dates, and consular processing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Employment-Based Immigration</h3>
              <p className="text-gray-600">
                Secure work authorization through H-1B specialty occupations, L-1 transfers, O-1 
                extraordinary ability visas, PERM labor certification, and employment-based green 
                cards. We guide both employers and employees through the process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Citizenship & Naturalization</h3>
              <p className="text-gray-600">
                Achieve the dream of U.S. citizenship with comprehensive support through the 
                naturalization process, including eligibility assessment, application preparation, 
                interview preparation, and oath ceremony guidance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Deportation Defense</h3>
              <p className="text-gray-600">
                Protect against removal with aggressive defense strategies including cancellation 
                of removal, asylum claims, adjustment applications, prosecutorial discretion requests, 
                and appeals to the Board of Immigration Appeals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Humanitarian Relief</h3>
              <p className="text-gray-600">
                Seek protection through asylum, refugee status, Temporary Protected Status (TPS), 
                U visas for crime victims, T visas for trafficking victims, and Violence Against 
                Women Act (VAWA) self-petitions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Plane className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Business Immigration</h3>
              <p className="text-gray-600">
                Support business growth with investor visas (E-2, EB-5), entrepreneur options, 
                corporate compliance, I-9 audits, and strategic planning for international workforce 
                needs and expansions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">How We Guide Your Immigration Journey</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Case Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a detailed consultation to understand your immigration history, family 
                    situation, and goals. Our attorneys analyze all potential pathways to legal status, 
                    identifying the strongest options while being transparent about challenges and timelines. 
                    We consider factors like priority dates, country quotas, and eligibility requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Planning & Documentation</h3>
                  <p className="text-gray-600">
                    We develop a customized strategy tailored to your specific circumstances, gathering 
                    essential documents, preparing compelling personal statements, and organizing evidence 
                    that strengthens your case. Our team ensures every form is accurately completed and 
                    every requirement is met before submission.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Application Filing & Advocacy</h3>
                  <p className="text-gray-600">
                    We file your applications with meticulous attention to detail, tracking deadlines and 
                    responding promptly to any requests for evidence. Our attorneys advocate with USCIS, 
                    consulates, and immigration courts, presenting your case in the most favorable light 
                    while maintaining complete honesty and integrity.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview Preparation & Representation</h3>
                  <p className="text-gray-600">
                    We thoroughly prepare you for interviews with immigration officials, conducting mock 
                    interviews, reviewing potential questions, and ensuring you&apos;re confident and ready. 
                    When permitted, our attorneys accompany you to interviews, providing support and 
                    advocacy when you need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Specialized Immigration Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">DACA & Dreamers</h3>
                <p className="text-gray-600 mb-3">
                  Supporting young immigrants brought to the U.S. as children:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Initial DACA applications</li>
                  <li>• Renewal processing</li>
                  <li>• Advance parole travel documents</li>
                  <li>• Path to permanent status options</li>
                  <li>• Education and employment authorization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Asylum & Refugee Protection</h3>
                <p className="text-gray-600 mb-3">
                  Protecting those fleeing persecution:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Affirmative asylum applications</li>
                  <li>• Defensive asylum in removal proceedings</li>
                  <li>• Withholding of removal</li>
                  <li>• Convention Against Torture claims</li>
                  <li>• Work authorization during proceedings</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Investment Immigration</h3>
                <p className="text-gray-600 mb-3">
                  Options for entrepreneurs and investors:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• EB-5 investor green cards</li>
                  <li>• E-2 treaty investor visas</li>
                  <li>• L-1A executive transfers</li>
                  <li>• Regional center investments</li>
                  <li>• Direct investment strategies</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Waivers & Appeals</h3>
                <p className="text-gray-600 mb-3">
                  Overcoming obstacles to immigration:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• I-601 hardship waivers</li>
                  <li>• I-212 reentry permission</li>
                  <li>• Criminal inadmissibility waivers</li>
                  <li>• BIA and federal court appeals</li>
                  <li>• Motion to reopen/reconsider</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Families Trust Our Immigration Team</h2>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">Multilingual & Multicultural</h3>
                  <p className="text-gray-700">
                    Our diverse team speaks multiple languages and understands the cultural nuances that 
                    matter in immigration cases. We communicate in your preferred language, ensuring nothing 
                    is lost in translation and you fully understand every aspect of your case.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">Compassionate Advocacy</h3>
                  <p className="text-gray-700">
                    We know immigration is personal. Our attorneys treat every client with dignity and respect, 
                    providing emotional support alongside legal expertise. We celebrate your victories and 
                    stand by you through challenges, never forgetting the human side of immigration law.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">Success-Driven Results</h3>
                  <p className="text-gray-700">
                    With thousands of successful cases, we&apos;ve helped families reunite, professionals advance 
                    careers, and refugees find safety. Our track record speaks to our commitment to achieving 
                    positive outcomes through meticulous preparation and strategic advocacy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">Transparent Communication</h3>
                  <p className="text-gray-700">
                    Immigration timelines can be lengthy and uncertain. We keep you informed at every stage, 
                    explaining processes clearly, setting realistic expectations, and promptly updating you 
                    on any developments in your case or changes in immigration law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Your American Dream Is Within Reach</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward securing your future in America. Our experienced immigration 
            attorneys are ready to guide you through every challenge and opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Immigration Consultation
            </button>
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition">
                Contact Us
            </button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPage;