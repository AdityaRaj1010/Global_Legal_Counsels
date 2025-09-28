import React from 'react';
import { CheckCircle, Clock, Shield, Users, FileText, Award/*, Phone, Mail*/ } from 'lucide-react';

const ArbitrationMediationPage: React.FC = () => {
    return (
        <div className="arbitration-mediation-page">
            {/* Hero Section */}
            <section className="hero-section bg-gradient-to-r from-stone-900 to-gray-900 text-white py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Arbitration & Mediation Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                        Resolve disputes efficiently and cost-effectively with our expert alternative dispute resolution services
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Overview Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Arbitration & Mediation?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-600 mb-4">Arbitration</h3>
                                <p className="text-gray-700 mb-4">
                                    Arbitration is a private dispute resolution process where parties present their case to
                                    an impartial arbitrator who makes a binding decision. It&apos;s faster and more cost-effective
                                    than traditional court litigation while maintaining legal enforceability.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-600 mb-4">Mediation</h3>
                                <p className="text-gray-700 mb-4">
                                    Mediation involves a neutral mediator who facilitates communication between parties
                                    to help them reach a mutually acceptable settlement. The mediator doesn&apos;t make decisions
                                    but guides parties toward their own resolution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose ADR?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Time Efficient</h3>
                            <p className="text-gray-600">
                                Resolve disputes in weeks or months, not years. Flexible scheduling that works around your timeline.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
                            <p className="text-gray-600">
                                Significantly lower costs compared to traditional litigation, with reduced legal fees and expenses.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Confidential</h3>
                            <p className="text-gray-600">
                                Private proceedings that protect sensitive business information and maintain professional relationships.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services We Provide */}
                <section className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our ADR Services</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Commercial Arbitration</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Contract disputes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Partnership disagreements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Employment disputes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Construction conflicts</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mediation Services</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Family law matters</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Business negotiations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Real estate disputes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Insurance claims</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">Initial Consultation</h3>
                            <p className="text-gray-600 text-sm">
                                We assess your case and recommend the best ADR approach
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Agreement to Proceed</h3>
                            <p className="text-gray-600 text-sm">
                                All parties agree to the ADR process and rules
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">Proceedings</h3>
                            <p className="text-gray-600 text-sm">
                                Structured sessions to present cases and explore solutions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">4</span>
                            </div>
                            <h3 className="font-semibold mb-2">Resolution</h3>
                            <p className="text-gray-600 text-sm">
                                Binding award (arbitration) or settlement agreement (mediation)
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Our Firm?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Certified Experts</h3>
                                <p className="text-gray-600">
                                    Our attorneys are certified arbitrators and mediators with extensive experience
                                </p>
                            </div>
                            <div className="text-center">
                                <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                                <p className="text-gray-600">
                                    Successfully resolved hundreds of disputes across various industries
                                </p>
                            </div>
                            <div className="text-center">
                                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Client-Focused</h3>
                                <p className="text-gray-600">
                                    Tailored solutions that prioritize your specific needs and objectives
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-blue-900 text-white rounded-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Resolve Your Dispute?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Don&apos;t let conflicts drag on. Our expert arbitrators and mediators are here to help you
                        find efficient, cost-effective solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="cursor-pointer border-white border-2 bg-blue-900 hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
                        >
                            {/* <Phone className="h-5 w-5 mr-2" /> */}
                            Contact Us
                        </a>
                        {/* <a
                            href="mailto:contact@lawfirm.com"
                            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 flex items-center"
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            Email Consultation
                        </a> */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ArbitrationMediationPage;