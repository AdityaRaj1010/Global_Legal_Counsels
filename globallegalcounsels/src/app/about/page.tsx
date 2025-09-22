import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stone-900 to-stone-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Firm</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            Dedicated to providing exceptional legal counsel with integrity, expertise, and unwavering commitment to our clients&apos; success.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-stone-600">
            <p className="text-lg text-gray-700 leading-relaxed">
              At our legal counseling practice, we are committed to providing personalized, strategic legal solutions that protect our clients&apos; interests and help them navigate complex legal challenges. We believe that every client deserves dedicated attention, clear communication, and zealous advocacy tailored to their unique circumstances.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centered Focus</h3>
                  <p className="text-gray-600">
                    We prioritize understanding your specific needs, goals, and concerns to develop legal strategies that align with your objectives and values.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear Communication</h3>
                  <p className="text-gray-600">
                    Legal matters can be complex, but our explanations don&apos;t have to be. We ensure you understand every aspect of your case and the options available to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Thinking</h3>
                  <p className="text-gray-600">
                    We combine deep legal knowledge with practical business sense to develop comprehensive strategies that consider both immediate needs and long-term implications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ethical Excellence</h3>
                  <p className="text-gray-600">
                    Our practice is built on the highest ethical standards, ensuring integrity, confidentiality, and professional excellence in every client interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Areas of Expertise</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our comprehensive legal counseling services span multiple practice areas, allowing us to provide holistic support for our clients&apos; diverse legal needs. We combine specialized knowledge with a collaborative approach to deliver optimal outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Law</h3>
              <p className="text-gray-600">Corporate formation, contracts, compliance, and strategic business counseling.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employment Law</h3>
              <p className="text-gray-600">Workplace policies, employment agreements, and regulatory compliance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Estate</h3>
              <p className="text-gray-600">Property transactions, leasing, development, and real estate litigation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Estate Planning</h3>
              <p className="text-gray-600">Wills, trusts, succession planning, and wealth preservation strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Litigation</h3>
              <p className="text-gray-600">Civil litigation, dispute resolution, and alternative dispute resolution.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Industry regulations, compliance programs, and government relations.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Firm</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience & Expertise</h3>
              <p className="text-gray-700 mb-6">
                Our team brings decades of combined experience across diverse legal disciplines. We stay current with evolving laws and regulations to provide our clients with cutting-edge legal strategies and solutions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-700">
                We understand that every client&apos;s situation is unique. Our approach emphasizes personal attention, customized solutions, and building long-term relationships based on trust and results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-700 mb-6">
                Our success is measured by our clients&apos; achievements. We have helped numerous individuals, businesses, and organizations successfully navigate complex legal challenges and achieve their objectives.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible & Responsive</h3>
              <p className="text-gray-700">
                Legal issues don&apos;t always arise during business hours. We pride ourselves on being accessible when our clients need us most, providing timely responses and proactive communication throughout the legal process.
              </p>
            </div>
          </div>
        </section>

        {/* Founder & CEO Section - Placeholder for your content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership</h2>

          {/* Founder/CEO Content Area - You'll add the vertical image and content here */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">

              {/* Image Placeholder - Replace with your founder's image */}
              <div className="flex-shrink-0 w-full lg:w-80">
                <div className="h-96 w-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    <Image className="rounded-full" width={400} height={500} src={'https://media.licdn.com/dms/image/v2/D4E03AQGfZZD2nk_edA/profile-displayphoto-shrink_400_400/B4EZVOet5zHUAo-/0/1740778430574?e=1760572800&v=beta&t=krQ0wbQhYE1FvH6htFnrFQayq_d_pXyOLn3E6Jm_jQs'} alt={''}></Image>
                  </span>
                </div>

              </div>

              {/* Content Area - Replace with founder's bio and details */}
              <div className="flex-1">
                <div className='flex justify-between'>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Raj Aryan</h3>
                  <span className='text-gray-500 font-semibold text-lg'>5+ Years of Experience</span>
                  <span className='flex gap-3'>
                    <Link href={"https://www.linkedin.com/in/raj-aryan-901797343"}>
                      <Linkedin />
                    </Link>
                    <Link href={"https://www.upwork.com/freelancers/rajaryan"}>
                      <Image width={30} height={15} src={'/images/upwork-svg.png'} alt='upwork'></Image>
                    </Link>
                  </span>
                </div>
                <h4 className="text-xl text-stone-600 mb-3">Founder & CEO of Global Legal Counsels</h4>
                <h5 className='mb-6 text-pretty text-base'>Legal Consultant <strong>|</strong> Litigation & Advisory <strong>|</strong> Expertise Across USA <strong>|</strong> Australia <strong>|</strong> UK <strong>|</strong> New Zealand <strong>|</strong> Lawyer & Paralegal Professional <strong>|</strong> Arbitration, Mediation & Compliance Solutions</h5>
                <p className="text-gray-700 leading-relaxed">
                  {/* [Add founder&apos;s bio here - education, experience, specializations, achievements, philosophy, etc.] */}
                  I, Raj Aryan, have worked over with 16 Law Firms & Companies (on short & long term contractual, project basis), 130 Pro Se Clients and over 350+ cases in State and District Court, Appeal and Supreme Court, Federal Courts, Bankruptcy Court, Family Court, Small Claims Court, Arbitration, and Mediation across USA, Australia, UK, and Newzland on matters and disputes pertaining to Civil, Criminal, Corporate, Consumer, Debt Recovery, Family, Real Estate, Personal Injury, Employment, Insurance, Immigration, Mediclaim via providing paralegal services, namely research, drafting, filing, and guiding throughout the court procedures and ensuring legal compliance and preparing contracts.
                </p>
                <div className='text-gray-700 mb-6'>Herein also, prepared Privacy Policy, Terms & Conditions, Return & Exchange Policy for Clients. Along with all these, I have acted in conscious regard with regard to the particular disputes and provided legal advice and drafted appropriate legal document as and when required as per the issue.</div>
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    <strong>Education:</strong> BA LLB, Lloyd Law College<br />
                    {/* <strong>Bar Admissions:</strong> [State bars]<br /> */}
                    <strong>Specializations:</strong>
                    <span className='flex flex-wrap'>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Draft Documentation</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Legal Research</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Legal Writing</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Document Review</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Legal Drafting</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Real Estate</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Legal Assistance</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Family Law</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Litigation</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Employment Law</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Legal Agreement</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Case Law</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Arbitration</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Human & Civil Rights</span>
                      <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Legal Pleadings</span>
                    </span>
                  </p>
                </div>
                <div className="text-gray-700 leading-relaxed mb-3 border-t pt-6">
                  <div><strong>Law Firms I have worked with</strong></div>
                  <div><i>Based in USA</i></div>
                  <span className='flex flex-wrap'>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Law Offices of John Cowan</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Klie Law Offices</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>The Cowlitzlaw Group</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>The Mines Law Firm</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Law Offices of Maro Burunsuzyan</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>National Debt Relief, LLC</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Offices of Journey Law</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Law Offices of Philip H. Dyson</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Ironclad Law</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Empire Global</span>
                  </span>
                  <div><i>Based in Australia</i></div>
                  <span className='flex flex-wrap'>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Erudite Legal</span>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>i-Global Lawyers</span>
                  </span>
                  <div><i>Based in New Zealand</i></div>
                  <span className='flex flex-wrap'>
                    <span className='m-1 p-2 rounded-3xl bg-gray-300 text-stone-600 font-semibold'>Platinum Legal</span>
                  </span>
                  {/* [Additional biographical information, career highlights, community involvement, etc.] */}
                </div>

                <strong>Phone:</strong> <Link href={"tel:+916204770237"}>+91 6204770237</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Recent Works</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-stone-200"></div>
              <div className="space-y-12">
                <div className="flex items-center"> 
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-800">Maryland No Trespassing Signs</h3>
                    <p className="text-gray-600 mt-2">
                      ⭐⭐⭐⭐⭐ | Jan 4, 2025 - Apr 4, 2025
                    </p>
                    <p className="text-gray-600 mt-2">
                      &quot;Great Job&quot;
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-stone-600 rotate-45 rounded-xs flex items-center justify-center text-white font-bold z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-stone-600 rotate-45 rounded-xs flex items-center justify-center text-white font-bold z-10"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-semibold text-gray-800">Partial Motion for Default Judgment</h3>
                    <p className="text-gray-600 mt-2">
                      ⭐⭐⭐⭐⭐ | Mar 27, 2025 - Apr 7, 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-800">Henderson, NV - Small Claims Court - Opposition to Motion to Dismiss</h3>
                    <p className="text-gray-600 mt-2">
                      ⭐⭐⭐⭐⭐ | Jun 15, 2024 - Apr 15, 2025
                    </p>
                    <p className="text-gray-600 mt-2">
                      &quot;Raj is great, I love his thoroughness and approach to helping me with my issue. I would 100% rehire Raj in a heartbeat if I had any legal issues.&quot;
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-stone-600 rotate-45 rounded-xs flex items-center justify-center text-white font-bold z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-stone-600 rotate-45 rounded-xs flex items-center justify-center text-white font-bold z-10"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-semibold text-gray-800">Legal Drafting - Immigration Law</h3>
                    <p className="text-gray-600 mt-2">
                      ⭐⭐⭐⭐⭐ | Apr 22, 2025 - May 2, 2025
                    </p>
                    <p className="text-gray-600 mt-2">
                      &quot;Raj is an amazing freelancer who is quick and delivers quality work.&quot;
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-800">Pro Se / Pre-Trial Assistance</h3>
                    <p className="text-gray-600 mt-2">
                      ⭐⭐⭐⭐⭐ | Nov 12, 2024 - Jul 11, 2025
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-stone-600 rotate-45 rounded-xs flex items-center justify-center text-white font-bold z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Team Members Section - Placeholder for employee details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our experienced team of legal professionals is dedicated to providing exceptional service and achieving outstanding results for our clients.
          </p>

          {/* Team Grid - You'll populate this with your employee information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Team Member Template - Duplicate and modify for each employee */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="bg-gray-200 h-48 w-full rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Employee Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">[Employee Name]</h3>
              <h4 className="text-stone-600 mb-3">[Title/Position]</h4>
              <p className="text-gray-600 text-sm mb-4">
                [Brief description of role, experience, specializations]
              </p>
              <div className="text-xs text-gray-500">
                <p><strong>Education:</strong> [Degree/School]</p>
                <p><strong>Experience:</strong> [Years/Background]</p>
              </div>
            </div>

            {/* Add more team member cards as needed */}

          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-stone-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a consultation and discover how our experienced legal team can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white text-stone-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button> */}
            <Link href="/contact">
              <button className="border-2 border-white cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stone-600 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;