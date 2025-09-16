// PersonalInjuryPage.tsx
import Link from 'next/link';
import React from 'react';

const PersonalInjuryPage: React.FC = () => {
    return (
        <div className="personal-injury-page">
            {/* Hero Section with compelling headline */}
            <section className="hero-section bg-gradient-to-r from-gray-900 to-amber-900 text-white py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Personal Injury Legal Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                        When accidents change your life, we fight for the justice and compensation you deserve. No fees unless we win your case.
                    </p>
                </div>
            </section>

            {/* Introduction Section - Understanding Personal Injury Law */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">
                                Fighting for Your Rights After an Injury
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                When you&apos;ve been injuamber due to someone else&apos;s negligence, the physical pain is just the beginning.
                                Medical bills pile up, work becomes impossible, and insurance companies seem more interested in
                                protecting their profits than helping you recover. You need an advocate who understands both the
                                legal complexities and the human impact of your situation.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Our personal injury attorneys have dedicated their careers to standing up for accident victims.
                                We understand that behind every case is a person facing uncertainty, pain, and financial stress.
                                That&apos;s why we handle every aspect of your legal claim while you focus on healing, ensuring you
                                receive the full compensation you&apos;re entitled to under the law.
                            </p>
                            <p className="text-lg text-gray-700">
                                With decades of combined experience and millions recoveamber for our clients, we have the knowledge,
                                resources, and determination to take on insurance companies and negligent parties. We work on a
                                contingency fee basis—you pay nothing unless we win your case.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-50 to-amber-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">The Reality of Injuries</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-amber-600 mr-2">⚠️</span>
                                    <span className="text-gray-700">Every 7 seconds, a worker is injuamber on the job</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-600 mr-2">⚠️</span>
                                    <span className="text-gray-700">38,000+ people die in traffic accidents annually</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-600 mr-2">⚠️</span>
                                    <span className="text-gray-700">Medical errors are the 3rd leading cause of death</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-600 mr-2">⚠️</span>
                                    <span className="text-gray-700">$1.4 trillion annual cost of injuries in the U.S.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-600 mr-2">⚠️</span>
                                    <span className="text-gray-700">95% of personal injury cases settle before trial</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Cases We Handle */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Types of Personal Injury Cases We Handle
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Case Type 1 - Auto Accidents */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Motor Vehicle Accidents</h3>
                            <p className="text-gray-700 mb-4">
                                From minor fender-benders to catastrophic collisions, we handle all types of vehicle
                                accident claims with expertise and compassion.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Car and truck accidents</li>
                                <li>• Motorcycle crashes</li>
                                <li>• Pedestrian injuries</li>
                                <li>• Bicycle accidents</li>
                                <li>• Rideshare accidents (Uber/Lyft)</li>
                                <li>• Hit and run cases</li>
                                <li>• Drunk driving accidents</li>
                            </ul>
                        </div>

                        {/* Case Type 2 - Workplace */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Workplace Injuries</h3>
                            <p className="text-gray-700 mb-4">
                                When workplace accidents occur, we ensure you receive proper workers&apos; compensation
                                and pursue third-party claims when applicable.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Construction site accidents</li>
                                <li>• Industrial accidents</li>
                                <li>• Repetitive stress injuries</li>
                                <li>• Toxic exposure claims</li>
                                <li>• Equipment failures</li>
                                <li>• Falls from heights</li>
                                <li>• Electrical injuries</li>
                            </ul>
                        </div>

                        {/* Case Type 3 - Medical */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Medical Malpractice</h3>
                            <p className="text-gray-700 mb-4">
                                When healthcare providers fail to meet the standard of care, we hold them accountable
                                for the harm caused to patients.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Surgical errors</li>
                                <li>• Misdiagnosis or delayed diagnosis</li>
                                <li>• Medication errors</li>
                                <li>• Birth injuries</li>
                                <li>• Anesthesia errors</li>
                                <li>• Hospital negligence</li>
                                <li>• Emergency room mistakes</li>
                            </ul>
                        </div>

                        {/* Case Type 4 - Premises */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Premises Liability</h3>
                            <p className="text-gray-700 mb-4">
                                Property owners have a duty to maintain safe conditions. We pursue claims when
                                their negligence causes injuries.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Slip and fall accidents</li>
                                <li>• Inadequate security</li>
                                <li>• Dog bites and animal attacks</li>
                                <li>• Swimming pool accidents</li>
                                <li>• Elevator/escalator injuries</li>
                                <li>• Negligent maintenance</li>
                                <li>• Retail store accidents</li>
                            </ul>
                        </div>

                        {/* Case Type 5 - Products */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Product Liability</h3>
                            <p className="text-gray-700 mb-4">
                                When defective products cause harm, we pursue manufacturers and distributors
                                responsible for putting dangerous items in the marketplace.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Defective auto parts</li>
                                <li>• Dangerous pharmaceuticals</li>
                                <li>• Faulty medical devices</li>
                                <li>• Toxic consumer products</li>
                                <li>• Children&apos;s toy recalls</li>
                                <li>• Food contamination</li>
                                <li>• Industrial equipment failures</li>
                            </ul>
                        </div>

                        {/* Case Type 6 - Catastrophic */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Catastrophic Injuries</h3>
                            <p className="text-gray-700 mb-4">
                                Life-altering injuries require comprehensive legal representation to secure
                                lifetime care and compensation.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Traumatic brain injuries</li>
                                <li>• Spinal cord injuries</li>
                                <li>• Paralysis cases</li>
                                <li>• Severe burns</li>
                                <li>• Amputations</li>
                                <li>• Multiple trauma cases</li>
                                <li>• Wrongful death claims</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help - Comprehensive Process */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        How We Fight for Your Recovery
                    </h2>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Immediate Response & Free Consultation</h3>
                                <p className="text-gray-700">
                                    Available 24/7, we respond immediately to your call. During your free consultation, we listen
                                    to your story, assess your case, and explain your legal options without any obligation. We
                                    understand you&apos;re dealing with pain and stress, so we come to you if needed—whether at home,
                                    in the hospital, or another convenient location. Our goal is to provide clarity and hope during
                                    a difficult time.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Thorough Investigation & Evidence Gathering</h3>
                                <p className="text-gray-700">
                                    We immediately launch a comprehensive investigation, preserving crucial evidence before it
                                    disappears. This includes visiting accident scenes, photographing conditions, interviewing
                                    witnesses, obtaining surveillance footage, securing police reports, and working with accident
                                    reconstruction experts. We build an ironclad case that proves liability and demonstrates the
                                    full extent of your damages.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Medical Care Coordination</h3>
                                <p className="text-gray-700">
                                    Your health is the top priority. We connect you with top medical specialists who understand
                                    injury cases and can provide the treatment you need, often with no upfront costs. We work
                                    with your doctors to fully document your injuries, treatment needs, and prognosis. This medical
                                    evidence becomes crucial in demonstrating the impact of your injuries and future care requirements.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Insurance Company Negotiations</h3>
                                <p className="text-gray-700">
                                    Insurance companies have teams of lawyers working to minimize payouts. We level the playing field,
                                    handling all communications and negotiations on your behalf. We counter their tactics, reject
                                    lowball offers, and fight for every dollar you deserve. Our reputation for taking cases to trial
                                    gives us leverage to secure maximum settlements without the need for lengthy litigation.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                5
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Damage Calculation & Documentation</h3>
                                <p className="text-gray-700">
                                    We meticulously calculate all your damages—not just current medical bills and lost wages, but
                                    future medical needs, diminished earning capacity, pain and suffering, emotional distress, and
                                    loss of life enjoyment. We work with economists, vocational experts, and life care planners to
                                    ensure no aspect of your loss is overlooked or undervalued.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                6
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Trial Preparation & Litigation</h3>
                                <p className="text-gray-700">
                                    While most cases settle, we prepare every case as if it&apos;s going to trial. This thorough preparation
                                    often leads to better settlements. If a fair settlement isn&apos;t offeamber, we&apos;re ready to present your
                                    case to a jury. Our trial attorneys are skilled courtroom advocates who know how to tell your story
                                    compellingly and secure favorable verdicts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Compensation */}
            <section className="py-16 px-6 bg-amber-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Compensation You May Be Entitled To
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Economic Damages</h3>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Medical Expenses</h4>
                                    <p className="text-sm text-gray-700">Emergency care, surgeries, rehabilitation, medications,
                                        medical equipment, and all future medical needs related to your injury.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Lost Income</h4>
                                    <p className="text-sm text-gray-700">Current lost wages, future earning capacity, lost
                                        benefits, and lost business opportunities due to your injuries.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Property Damage</h4>
                                    <p className="text-sm text-gray-700">Vehicle repairs or replacement, damaged personal
                                        belongings, and other property losses from the incident.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Care & Assistance</h4>
                                    <p className="text-sm text-gray-700">Home modifications, in-home care, transportation
                                        to medical appointments, and household services you can no longer perform.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Non-Economic Damages</h3>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Pain & Suffering</h4>
                                    <p className="text-sm text-gray-700">Physical pain, discomfort, and the ongoing impact
                                        of living with your injuries, both now and in the future.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Emotional Distress</h4>
                                    <p className="text-sm text-gray-700">Anxiety, depression, PTSD, sleep disturbances, and
                                        other psychological impacts resulting from your trauma.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Loss of Enjoyment</h4>
                                    <p className="text-sm text-gray-700">Inability to participate in hobbies, sports, and
                                        activities that brought joy and fulfillment to your life.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Loss of Consortium</h4>
                                    <p className="text-sm text-gray-700">Impact on relationships with spouse and family,
                                        including loss of companionship, affection, and support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 bg-amber-100 border-l-4 border-amber-600 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Punitive Damages</h3>
                        <p className="text-gray-700">
                            In cases involving gross negligence, recklessness, or intentional misconduct, additional punitive
                            damages may be awarded to punish the wrongdoer and deter similar behavior. These can significantly
                            increase your total compensation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Why Injury Victims Choose Our Firm
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">No Win, No Fee</h3>
                            <p className="text-gray-700">
                                You pay absolutely nothing unless we win your case. No upfront costs, no hourly fees,
                                no financial risk to you.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚖️</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Proven Track Record</h3>
                            <p className="text-gray-700">
                                Millions recoveamber for clients, with a history of securing maximum compensation through
                                settlements and verdicts.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏥</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Medical Network</h3>
                            <p className="text-gray-700">
                                Access to top doctors and specialists who can provide treatment with no upfront costs
                                while your case is pending.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🛡️</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Insurance Fighters</h3>
                            <p className="text-gray-700">
                                We know insurance company tactics and won&apos;t let them take advantage of you during
                                your vulnerable time.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📞</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">24/7 Availability</h3>
                            <p className="text-gray-700">
                                Accidents don&apos;t follow business hours. We&apos;re available around the clock to help when
                                you need us most.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">❤️</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Compassionate Care</h3>
                            <p className="text-gray-700">
                                We treat you like family, not a case number. Your recovery and wellbeing are our
                                primary concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        What Our Clients Say
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex mb-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                &quot;After my accident, I didn&apos;t know where to turn. This firm not only got me the compensation
                                I deserved but also connected me with excellent doctors. They handled everything while I
                                focused on recovery.&quot;
                            </p>
                            <p className="text-sm text-gray-600">— Sarah M., Car Accident Victim</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex mb-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                &quot;The insurance company offeamber me $5,000 for my injuries. My attorney fought for me and
                                secuamber $150,000. I couldn&apos;t have done this without their expertise and dedication.&quot;
                            </p>
                            <p className="text-sm text-gray-600">— Michael R., Workplace Injury</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions */}
            {/* Call to Action */}
            <section className="py-20 bg-amber-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Get the Compensation You Deserve</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Injuamber due to someone else&apos;s negligence? Our dedicated personal injury legal team is here to fight
                        for your rights and help you recover physically, emotionally, and financially.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* <button className="bg-white cursor-pointer text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Schedule Free Case Evaluation
                        </button> */}
                        <Link href="/contact">
                            <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default PersonalInjuryPage;