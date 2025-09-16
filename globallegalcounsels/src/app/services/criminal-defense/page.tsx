import React from 'react';
import { Shield, Gavel, Clock, AlertTriangle, Users, FileText, Lock} from 'lucide-react';
import Link from 'next/link';

const CriminalDefensePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Criminal Defense Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Aggressive defense of your rights and freedom when facing criminal charges. Available 24/7 because your liberty can&apos;t wait.
          </p>
          {/* <div className="mt-8 bg-red-800 bg-opacity-50 p-4 rounded-lg inline-block">
            <p className="font-semibold flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline: Available 24/7 for urgent matters
            </p>
          </div> */}
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Freedom Is Our Priority</h2>
              <p className="text-gray-600 mb-4">
                Being accused of a crime is one of the most frightening experiences anyone can face. The stakes couldn&apos;t be higher—your freedom, reputation, career, and future are all on the line. Our criminal defense attorneys understand the gravity of your situation and are committed to providing the aggressive, strategic defense you need to protect your rights and fight the charges against you.
              </p>
              <p className="text-gray-600 mb-4">
                From the moment you contact us, we begin building your defense. We scrutinize every aspect of the prosecution&apos;s case, challenge improper evidence, and ensure law enforcement followed proper procedures. Our experienced team has successfully defended clients against charges ranging from minor misdemeanors to serious felonies, and we bring that expertise to your case.
              </p>
              <p className="text-gray-600">
                Remember: You are innocent until proven guilty. We make sure the prosecution is held to their burden of proof while protecting your constitutional rights throughout the legal process.
              </p>
            </div>
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="text-xl font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Know Your Rights
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• You have the right to remain silent</li>
                  <li>• You have the right to an attorney</li>
                  <li>• You have the right to refuse searches without a warrant</li>
                  <li>• You have the right to a fair and speedy trial</li>
                  <li>• You have the right to confront witnesses against you</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Cases We Handle</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">• DUI/DWI</div>
                  <div className="text-sm text-gray-600">• Drug Offenses</div>
                  <div className="text-sm text-gray-600">• Assault & Battery</div>
                  <div className="text-sm text-gray-600">• Theft & Burglary</div>
                  <div className="text-sm text-gray-600">• White Collar Crimes</div>
                  <div className="text-sm text-gray-600">• Domestic Violence</div>
                  <div className="text-sm text-gray-600">• Sex Crimes</div>
                  <div className="text-sm text-gray-600">• Federal Crimes</div>
                  <div className="text-sm text-gray-600">• Homicide</div>
                  <div className="text-sm text-gray-600">• Weapons Charges</div>
                  <div className="text-sm text-gray-600">• Probation Violations</div>
                  <div className="text-sm text-gray-600">• Juvenile Crimes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Defend You */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How We Build Your Defense</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Immediate Action</h3>
              <p className="text-gray-600">
                Time is critical in criminal cases. We immediately begin preserving evidence, interviewing witnesses, and challenging the prosecution&apos;s case. Early intervention often leads to charges being reduced or dismissed before trial. We&apos;re available 24/7 because arrests don&apos;t follow business hours.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Thorough Investigation</h3>
              <p className="text-gray-600">
                We conduct independent investigations, working with private investigators and expert witnesses to uncover facts the prosecution may have missed or ignored. We examine police reports for inconsistencies, challenge the validity of evidence, and identify constitutional violations that could lead to case dismissal.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Defense</h3>
              <p className="text-gray-600">
                Every case requires a unique strategy. Whether negotiating plea agreements, filing pretrial motions to suppress evidence, or taking your case to trial, we develop defense strategies tailored to the specific facts and circumstances of your case, always focused on achieving the best possible outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Strategies Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Defense Strategies We Employ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Lock className="w-6 h-6 text-red-600 mr-2" />
                Constitutional Violations
              </h3>
              <p className="text-gray-600">
                We meticulously review every aspect of your arrest and the investigation for constitutional violations. Illegal searches, Miranda rights violations, and improper police procedures can result in evidence being thrown out or charges being dismissed entirely. We hold law enforcement accountable for following the law.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FileText className="w-6 h-6 text-red-600 mr-2" />
                Evidence Challenges
              </h3>
              <p className="text-gray-600">
                We challenge the reliability and admissibility of evidence against you. This includes questioning forensic evidence, challenging eyewitness identification, exposing flaws in police investigations, and demonstrating breaks in the chain of custody. Weak evidence means weak cases.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Users className="w-6 h-6 text-red-600 mr-2" />
                Witness Testimony
              </h3>
              <p className="text-gray-600">
                We thoroughly investigate all witnesses, including those for the prosecution. We uncover biases, inconsistencies, and credibility issues while identifying and preparing defense witnesses who support your case. Effective cross-examination often reveals the truth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Shield className="w-6 h-6 text-red-600 mr-2" />
                Affirmative Defenses
              </h3>
              <p className="text-gray-600">
                When appropriate, we assert affirmative defenses such as self-defense, alibi, entrapment, necessity, or insanity. These defenses can completely negate criminal liability even when the prosecution can prove you committed the alleged act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Process Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">The Criminal Justice Process</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Arrest & Booking</h3>
                <p className="text-gray-600">
                  If you&apos;re arrested, invoke your right to remain silent and request an attorney immediately. We can often intervene at this stage to protect your rights and begin building your defense. Never make statements to police without your attorney present.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bail & Release</h3>
                <p className="text-gray-600">
                  We fight for your release on reasonable bail or your own recognizance. We present compelling arguments about your ties to the community, lack of flight risk, and absence of danger to others. Getting you home allows you to better assist in your defense.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Arraignment & Plea</h3>
                <p className="text-gray-600">
                  At your arraignment, you&apos;ll be formally charged and enter a plea. We advise you on the best plea to enter based on the circumstances and begin negotiations with prosecutors. This is often where we first test the strength of the prosecution&apos;s case.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pretrial Motions & Discovery</h3>
                <p className="text-gray-600">
                  We file strategic motions to suppress illegally obtained evidence, dismiss charges for lack of probable cause, and compel the prosecution to share all evidence. This phase often determines whether a case goes to trial or gets dismissed.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Plea Negotiations</h3>
                <p className="text-gray-600">
                  Many cases resolve through plea negotiations. We leverage weaknesses in the prosecution&apos;s case to negotiate reduced charges, alternative sentencing, or dismissals. We ensure you understand all options and consequences before making any decisions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">6</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Trial</h3>
                <p className="text-gray-600">
                  If trial is necessary, we provide aggressive courtroom advocacy. We select favorable juries, deliver compelling opening and closing arguments, cross-examine prosecution witnesses effectively, and present strong defense cases. Our trial experience gives you the best chance at acquittal.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">7</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sentencing & Appeals</h3>
                <p className="text-gray-600">
                  If convicted, we fight for the most lenient sentence possible, presenting mitigating factors and alternative sentencing options. We also evaluate grounds for appeal and can continue fighting for your freedom through the appellate process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Charges */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Defending Against All Criminal Charges</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Misdemeanors</h3>
              <p className="text-gray-600 mb-3">
                Though less serious than felonies, misdemeanors can still result in jail time, fines, and a criminal record that affects employment and housing opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Simple assault</li>
                <li>• Petty theft</li>
                <li>• First-time DUI</li>
                <li>• Disorderly conduct</li>
                <li>• Minor drug possession</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Felonies</h3>
              <p className="text-gray-600 mb-3">
                Felony charges carry severe consequences including lengthy prison sentences, substantial fines, and lifelong consequences. Aggressive defense is critical.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Armed robbery</li>
                <li>• Drug trafficking</li>
                <li>• Aggravated assault</li>
                <li>• Fraud & embezzlement</li>
                <li>• Serious sex offenses</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Federal Crimes</h3>
              <p className="text-gray-600 mb-3">
                Federal charges involve different courts, procedures, and sentencing guidelines. Our attorneys are admitted to federal court and experienced in federal defense.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wire & mail fraud</li>
                <li>• Tax evasion</li>
                <li>• Interstate drug crimes</li>
                <li>• RICO violations</li>
                <li>• Federal weapons charges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Our Criminal Defense Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Gavel className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Former Prosecutors on Staff</h3>
                <p className="text-gray-600">
                  Our team includes former prosecutors who understand how the other side thinks and operates. This insider knowledge helps us anticipate prosecution strategies and build stronger defenses.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Trial Experience</h3>
                <p className="text-gray-600">
                  While many attorneys push clients to plea deals, we&apos;re prepared to fight in court. Our trial experience means prosecutors know we&apos;re willing to go the distance, often leading to better plea offers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  Criminal charges don&apos;t wait for business hours. We&apos;re available around the clock for emergencies because immediate action can make the difference between freedom and incarceration.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Defense Team</h3>
                <p className="text-gray-600">
                  We work with private investigators, forensic experts, and other specialists to build the strongest possible defense. No stone is left unturned in protecting your freedom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don&apos;t Wait - Your Freedom Depends on Acting Now</h2>
          <p className="text-xl mb-8 text-gray-100">
            Every moment matters when facing criminal charges. The sooner you have experienced counsel on your side, the better your chances of a favorable outcome. Contact us immediately for a confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white cursor-pointer text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Emergency Consultation
            </button> */}
              <Link href="/contact">
            <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition">
                Contact Us
            </button>
              </Link>
          </div>
          <p className="mt-6 text-gray-300 text-sm">
            All consultations are strictly confidential and protected by attorney-client privilege.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CriminalDefensePage;