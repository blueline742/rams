import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plumber RAMS Document | Professional Plumbing Risk Assessments & Method Statements',
  description: 'Generate compliant RAMS documents for plumbers in minutes. Covers all plumbing hazards, water safety, and legionella risks. Only £12.99 with instant download.',
  openGraph: {
    title: 'Plumber RAMS Document | Professional Plumbing Risk Assessments & Method Statements',
    description: 'Generate compliant RAMS documents for plumbers in minutes. Covers all plumbing hazards, water safety, and legionella risks. Only £12.99 with instant download.',
    type: 'website',
  },
};

export default function PlumberRAMS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-cyan-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            FastRAMS
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional RAMS Documents for Plumbers
          </h1>
          <p className="text-xl text-cyan-200 mb-8">
            Generate fully compliant plumbing RAMS in minutes. Covers everything from hot works to legionella prevention.
          </p>
          <Link
            href="/create"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Create Your Plumbing RAMS - £12.99
          </Link>
          <p className="text-sm text-cyan-300 mt-4">Instant PDF download • HSE compliant • CDM 2015 ready</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 sm:p-12 text-white space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Why Plumbers Need Proper RAMS Documents</h2>
            <p className="text-lg leading-relaxed mb-4">
              As a plumber working on commercial sites, new builds, or refurbishments, you'll face a simple reality: <strong>no RAMS, no work</strong>. Principal contractors, site managers, and even many private clients won't let you on site without a proper Risk Assessment and Method Statement.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Plumbing involves multiple serious hazards - from burns and scalds to legionella risks, not to mention manual handling, working at height, and coordination with other trades. The HSE takes water safety incredibly seriously, especially after high-profile legionella cases.
            </p>
            <p className="text-lg leading-relaxed">
              FastRAMS helps you create professional, comprehensive plumbing RAMS documents in minutes. Built specifically for UK plumbers and covering all the hazards you actually face on site.
            </p>
          </section>

          {/* CTA Box */}
          <div className="bg-cyan-600/20 border-2 border-cyan-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-cyan-300">Ready to create your plumbing RAMS?</h3>
            <p className="mb-4">Generate a fully compliant RAMS document in under 5 minutes. Only £12.99 with instant PDF download.</p>
            <Link
              href="/create"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Start Creating Your RAMS
            </Link>
          </div>

          {/* Plumbing Hazards Covered */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Plumbing Hazards We Cover</h2>
            <p className="text-lg mb-6">
              Our plumbing RAMS template includes comprehensive risk assessments for all common plumbing hazards:
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 border-l-4 border-red-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-red-300">Hot Works - Soldering, Brazing & Welding</h3>
                <p>Using blowtorches and hot work equipment creates serious fire risks. We cover hot work permits, fire extinguisher requirements, fire watch procedures, and safe distances from combustible materials.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-blue-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-300">Legionella & Water Safety</h3>
                <p>One of the biggest regulatory concerns in plumbing. Our RAMS covers legionella risk assessments, temperature control requirements, dead leg prevention, and water sampling procedures.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-orange-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-300">Burns & Scalds</h3>
                <p>Working with hot water systems, steam pipes, and heating equipment. We detail proper PPE, isolation procedures, and cooling-down times before working on systems.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-yellow-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Manual Handling</h3>
                <p>Boilers, radiators, copper cylinders, and cast iron baths are heavy. Our RAMS includes proper lifting techniques, when to use mechanical aids, and team lifting procedures.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-purple-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-purple-300">Working at Height</h3>
                <p>Installing soil stacks, roof penetrations, and gutter systems. We cover ladder safety, scaffold requirements, and fall protection for roof work.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-green-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-green-300">Confined Spaces</h3>
                <p>Plant rooms, service ducts, and underground chambers. Our RAMS details gas monitoring, ventilation requirements, rescue procedures, and permit systems.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-pink-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-pink-300">Asbestos Exposure</h3>
                <p>Common in older plumbing systems. We cover identification, when to stop work, and proper procedures for suspected asbestos materials.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-indigo-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-indigo-300">Chemical Hazards</h3>
                <p>Flux, jointing compounds, cleaners, and descaling chemicals. Our RAMS includes COSHH assessments, PPE requirements, and emergency procedures for chemical exposure.</p>
              </div>
            </div>
          </section>

          {/* Hot Works Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Hot Works Safety Procedures</h2>
            <p className="text-lg mb-6">
              Soldering and brazing are essential plumbing skills, but they're also major fire risks. Our RAMS documents include comprehensive hot works procedures:
            </p>

            <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold mb-1">Obtain Hot Work Permit</h4>
                  <p className="text-sm text-gray-300">Most sites require a formal permit before you can use blowtorches or other hot work equipment</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold mb-1">Clear the area of combustibles</h4>
                  <p className="text-sm text-gray-300">Remove or protect any flammable materials within 10 meters of the hot work</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold mb-1">Fire extinguisher ready</h4>
                  <p className="text-sm text-gray-300">Appropriate fire extinguisher within arm's reach before starting hot work</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold mb-1">Use heat protection mats</h4>
                  <p className="text-sm text-gray-300">Fireproof mats behind work area to protect walls, floors, and other materials</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h4 className="font-bold mb-1">Monitor during work</h4>
                  <p className="text-sm text-gray-300">Constant awareness of surroundings and potential ignition sources</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold">6</span>
                <div>
                  <h4 className="font-bold mb-1">Fire watch after completion</h4>
                  <p className="text-sm text-gray-300">Monitor the area for at least 60 minutes after hot work finishes - fires can start hours later</p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">⚠️ Hot Works Fires Are Common</h3>
              <p>According to HSE data, hot works cause around 1,000 fires per year in the UK, with total costs exceeding £100 million. Many of these are from plumbing work. Don't become a statistic - follow proper hot works procedures every time.</p>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-cyan-600/20 border-2 border-cyan-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-cyan-300">Stop wasting time on RAMS documents</h3>
            <p className="mb-4">Get back to earning. Create your professional plumbing RAMS in minutes, not hours.</p>
            <Link
              href="/create"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Create RAMS Now - £12.99
            </Link>
          </div>

          {/* Legionella Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Legionella Risk & Water Safety</h2>
            <p className="text-lg mb-6">
              Legionella is taken extremely seriously in the UK, especially after cases like the Barrow-in-Furness outbreak. As a plumber, you have specific responsibilities:
            </p>

            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 text-cyan-200">What is Legionella?</h3>
              <p className="mb-3">Legionella bacteria grow in water systems between 20-45°C. When water is aerosolized (showers, cooling towers, taps), people can breathe in the bacteria and develop Legionnaires' disease - a potentially fatal pneumonia.</p>
              <p>Around 300-400 cases occur in the UK each year, with a 10% fatality rate. The HSE prosecutes companies and individuals for legionella breaches, with fines reaching six figures.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Temperature Control</h3>
                <p>Hot water should be stored at 60°C+ and distributed at 50°C+ (within 1 minute). Cold water must be below 20°C. Our RAMS includes proper temperature monitoring procedures.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Dead Legs & Stagnant Water</h3>
                <p>Pipework that doesn't flow regularly is a legionella risk. Remove dead legs where possible, or ensure regular flushing. Our RAMS covers dead leg identification and management.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Water System Commissioning</h3>
                <p>New installations must be flushed, disinfected, and properly commissioned. Our RAMS includes chlorination procedures and water sampling requirements.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">HSG274 Compliance</h3>
                <p>The definitive guidance on legionella control. Our RAMS documents reference HSG274 requirements and ensure your plumbing work complies with current best practice.</p>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">HSE & CDM 2015 Compliance for Plumbers</h2>
            <p className="text-lg mb-6">
              As a plumber, you're bound by several pieces of legislation:
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">CDM Regulations 2015</h3>
                <p>On construction sites, you're a "contractor" under CDM. You must plan your work, manage risks, and coordinate with other trades. <Link href="/blog/cdm-regulations" className="text-cyan-400 hover:text-cyan-300 underline">Read our complete CDM 2015 guide</Link>.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Health & Safety at Work Act 1974</h3>
                <p>Your overarching legal duty to work safely and protect others. A proper RAMS document is your evidence of compliance. <Link href="/blog/hse-compliance" className="text-cyan-400 hover:text-cyan-300 underline">Learn more about HSE compliance</Link>.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Water Supply Regulations 2016</h3>
                <p>Ensures drinking water safety and prevents contamination. Covers backflow prevention, materials in contact with water, and notification requirements.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Gas Safety (Installation and Use) Regulations 1998</h3>
                <p>If you're Gas Safe registered and working on gas appliances, these regulations apply alongside your plumbing work.</p>
              </div>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">⚠️ Penalties for Non-Compliance</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li><strong>Improvement Notices:</strong> Stop work until issues are rectified</li>
                <li><strong>Prohibition Notices:</strong> Immediate halt to dangerous activities</li>
                <li><strong>Unlimited Fines:</strong> Serious breaches can result in six-figure fines</li>
                <li><strong>Prison Sentences:</strong> Up to 2 years for serious safety breaches</li>
                <li><strong>Legionella Prosecutions:</strong> The HSE actively prosecutes legionella failures</li>
              </ul>
            </div>
          </section>

          {/* What's Included */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">What's Included in Your Plumbing RAMS</h2>
            <p className="text-lg mb-6">
              When you create a RAMS document with FastRAMS, you get a complete, professional document that includes:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Comprehensive Hazard Identification</h4>
                <p className="text-sm text-gray-300">All plumbing hazards specific to your type of work</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Risk Assessment Matrix</h4>
                <p className="text-sm text-gray-300">Likelihood vs severity ratings for each hazard</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Hot Works Procedures</h4>
                <p className="text-sm text-gray-300">Complete fire safety and hot work permit requirements</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Legionella Risk Assessment</h4>
                <p className="text-sm text-gray-300">Water safety, temperature control, and HSG274 compliance</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ PPE Requirements</h4>
                <p className="text-sm text-gray-300">Exactly what protective equipment is needed</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Emergency Procedures</h4>
                <p className="text-sm text-gray-300">What to do if something goes wrong</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Method Statements</h4>
                <p className="text-sm text-gray-300">Detailed step-by-step work procedures</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-cyan-200">✓ Isolation & Lockout Procedures</h4>
                <p className="text-sm text-gray-300">Safe water and power isolation before starting work</p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-cyan-600/20 border-2 border-cyan-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-cyan-300">Professional RAMS in Under 5 Minutes</h3>
            <p className="mb-4">Answer a few questions about your plumbing work, and we'll generate a complete, compliant RAMS document ready to submit.</p>
            <Link
              href="/create"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started - Only £12.99
            </Link>
          </div>

          {/* Common Plumbing Jobs */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Common Plumbing Jobs Requiring RAMS</h2>
            <p className="text-lg mb-6">
              Most commercial and construction plumbing work requires a RAMS document. Common jobs include:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>New build first fix and second fix plumbing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Commercial bathroom installations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Heating system installations and boiler replacements</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Underground drainage and pipework</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Water main connections and modifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Plant room installations and maintenance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Commercial kitchen plumbing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Hospital and healthcare facility plumbing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Swimming pool and spa installations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Rainwater harvesting systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Fire sprinkler system installations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">🔧</span>
                <span>Industrial process pipework</span>
              </li>
            </ul>
          </section>

          {/* Why Choose FastRAMS */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Why Plumbers Choose FastRAMS</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">🔧 Built for Real Plumbing Work</h3>
                <p>We understand plumbing because we've been in the trade. Our RAMS cover actual plumbing hazards, not generic construction risks.</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">🔧 5 Minutes, Not 5 Hours</h3>
                <p>Stop spending your evenings writing paperwork. Answer a few questions, download your RAMS, and get back to earning.</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">🔧 Legionella & Water Safety Covered</h3>
                <p>Our RAMS include proper legionella risk assessments and HSG274 compliance - the stuff that gets plumbers prosecuted if you get it wrong.</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">🔧 Accepted Nationwide</h3>
                <p>Our RAMS documents work on major construction sites, commercial projects, and with local authorities across the UK.</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">🔧 Only £12.99</h3>
                <p>Less than two hours' labour. One RAMS that could win you a £10,000 contract. No subscriptions, no hidden fees.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Plumbing RAMS?</h2>
            <p className="text-xl mb-6">Join hundreds of UK plumbers who've already switched to FastRAMS</p>
            <Link
              href="/create"
              className="inline-block bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Generate Your RAMS Document - £12.99
            </Link>
            <p className="text-sm text-cyan-100 mt-4">Instant download • Professional PDF • Fully compliant</p>
          </div>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Do I need a RAMS for domestic plumbing work?</h3>
                <p>Generally not for straightforward domestic work. However, if the property is part of a construction site subject to CDM 2015, or if you're doing complex work like plant room installations, then yes.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">What about legionella in domestic properties?</h3>
                <p>Domestic properties where the householder lives are exempt from the legionella regulations. However, landlords have duties under the regulations, and any commercial or healthcare premises absolutely require legionella risk assessments.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Can I use one RAMS for all my plumbing jobs?</h3>
                <p>No. Each RAMS should be specific to the actual job and site conditions. However, FastRAMS makes it so quick to generate job-specific RAMS that there's no excuse for generic templates.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Do I need a hot work permit every time I solder?</h3>
                <p>On most commercial sites and construction projects, yes. The site will have their own hot work permit system. You still need to include hot works procedures in your RAMS document.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">What if I find asbestos while working?</h3>
                <p>STOP WORK IMMEDIATELY. Don't disturb it further. Inform the site manager or building owner. Only licensed asbestos contractors can remove asbestos. Our RAMS includes asbestos procedures, but the key rule is: if you suspect asbestos, stop work.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-200">Will this RAMS cover Gas Safe work?</h3>
                <p>Our plumbing RAMS can include gas work if you're Gas Safe registered. However, gas installations have additional specific requirements under the Gas Safety Regulations which you must also comply with.</p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/what-is-rams" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-cyan-200 mb-2">What is a RAMS Document?</h3>
                <p className="text-sm text-gray-300">Complete beginner's guide to Risk Assessments and Method Statements in UK construction.</p>
              </Link>
              <Link href="/blog/hse-compliance" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-cyan-200 mb-2">HSE Compliance Guide 2025</h3>
                <p className="text-sm text-gray-300">Everything UK tradespeople need to know about Health & Safety Executive compliance.</p>
              </Link>
              <Link href="/blog/cdm-regulations" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-cyan-200 mb-2">CDM 2015 Regulations Explained</h3>
                <p className="text-sm text-gray-300">Your legal duties under the Construction Design and Management Regulations 2015.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 FastRAMS. All rights reserved.</p>
            <p className="mt-2 text-sm">Professional RAMS documents for UK tradespeople.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
