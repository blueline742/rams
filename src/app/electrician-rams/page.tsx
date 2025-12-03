import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electrician RAMS Document | Fast & Compliant Electrical Risk Assessments',
  description: 'Generate professional RAMS documents for electricians in minutes. Covers all electrical hazards, isolation procedures, and HSE compliance. Only £12.99 with instant download.',
  openGraph: {
    title: 'Electrician RAMS Document | Fast & Compliant Electrical Risk Assessments',
    description: 'Generate professional RAMS documents for electricians in minutes. Covers all electrical hazards, isolation procedures, and HSE compliance. Only £12.99 with instant download.',
    type: 'website',
  },
};

export default function ElectricianRAMS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            FastRAMS
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional RAMS Documents for Electricians
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Generate fully compliant electrical RAMS in minutes. Covers all hazards from isolation to arc flash protection.
          </p>
          <Link
            href="/create"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Create Your Electrical RAMS - £12.99
          </Link>
          <p className="text-sm text-blue-300 mt-4">Instant PDF download • HSE compliant • CDM 2015 ready</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 sm:p-12 text-white space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Why Electricians Need Proper RAMS Documents</h2>
            <p className="text-lg leading-relaxed mb-4">
              As an electrician in the UK, you're working with one of the most dangerous workplace hazards every single day. The HSE reports that electrical incidents cause around <strong>1,000 electrical accidents at work each year</strong>, many of which could be prevented with proper risk assessment and safe working methods.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Whether you're doing domestic installations, commercial fit-outs, or industrial maintenance, clients and principal contractors <em>will</em> ask for your RAMS document. Without one, you won't get on site. It's that simple.
            </p>
            <p className="text-lg leading-relaxed">
              FastRAMS helps you create professional, comprehensive electrical RAMS documents in minutes - not hours. Our system is built specifically for UK tradespeople and covers all the electrical hazards you face.
            </p>
          </section>

          {/* CTA Box */}
          <div className="bg-blue-600/20 border-2 border-blue-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-blue-300">Ready to create your electrical RAMS?</h3>
            <p className="mb-4">Generate a fully compliant RAMS document in under 5 minutes. Only £12.99 with instant PDF download.</p>
            <Link
              href="/create"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Start Creating Your RAMS
            </Link>
          </div>

          {/* Electrical Hazards Covered */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Electrical Hazards We Cover</h2>
            <p className="text-lg mb-6">
              Our electrical RAMS template includes comprehensive risk assessments for all common electrical hazards:
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 border-l-4 border-yellow-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Electric Shock & Electrocution</h3>
                <p>The primary killer. We cover safe isolation procedures, voltage testing, proving units, and the critical importance of following the "dead" working principle wherever possible.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-orange-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-300">Arc Flash & Arc Blast</h3>
                <p>Often overlooked but incredibly dangerous. Our RAMS includes arc-rated PPE requirements, safe working distances, and when specialist arc flash studies are needed.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-red-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-red-300">Burns from Electrical Contacts</h3>
                <p>Both thermal burns and electrical burns can cause severe injuries. We detail proper PPE, insulated tools, and safe working procedures.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-blue-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-300">Working at Height</h3>
                <p>Many electrical tasks require ladder work or access equipment. Our RAMS covers fall protection, safe use of ladders, and when scaffolding is required.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-purple-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-purple-300">Manual Handling</h3>
                <p>Distribution boards, cable drums, and equipment can be heavy. We include manual handling risk assessments and safe lifting techniques.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-green-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-green-300">Fire Risks</h3>
                <p>Electrical work creates fire hazards through hot work and potential short circuits. Our RAMS covers fire prevention, hot work permits, and emergency procedures.</p>
              </div>
            </div>
          </section>

          {/* Safe Isolation Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Safe Isolation Procedures</h2>
            <p className="text-lg mb-6">
              The cornerstone of electrical safety is proper isolation. Our RAMS documents include the complete safe isolation procedure:
            </p>

            <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold mb-1">Identify the circuit</h4>
                  <p className="text-sm text-gray-300">Confirm exactly which circuit you're working on using drawings, labels, or testing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold mb-1">Isolate the supply</h4>
                  <p className="text-sm text-gray-300">Switch off and physically isolate using appropriate isolation devices</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold mb-1">Secure the isolation</h4>
                  <p className="text-sm text-gray-300">Lock off the isolation point and display warning notices</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold mb-1">Test the circuit is dead</h4>
                  <p className="text-sm text-gray-300">Use a properly calibrated voltage tester - NEVER assume it's dead</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h4 className="font-bold mb-1">Prove the tester</h4>
                  <p className="text-sm text-gray-300">Test on a known live source before AND after testing the dead circuit</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">6</span>
                <div>
                  <h4 className="font-bold mb-1">Begin work</h4>
                  <p className="text-sm text-gray-300">Only start work after all six steps are complete</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-blue-600/20 border-2 border-blue-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-blue-300">Stop wasting time on RAMS documents</h3>
            <p className="mb-4">Get back on the tools faster. Create your professional electrical RAMS in minutes, not hours.</p>
            <Link
              href="/create"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Create RAMS Now - £12.99
            </Link>
          </div>

          {/* Compliance Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">HSE & CDM 2015 Compliance for Electricians</h2>
            <p className="text-lg mb-6">
              As an electrician, you have specific legal duties under multiple regulations:
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-200">Electricity at Work Regulations 1989</h3>
                <p>The primary legislation for electrical safety. Requires you to assess risks, use safe systems of work, and ensure equipment is suitable and maintained.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-200">CDM Regulations 2015</h3>
                <p>If you're working on construction sites, you're a "contractor" under CDM. This means you must plan, manage and monitor your work, and coordinate with other contractors. <Link href="/blog/cdm-regulations" className="text-blue-400 hover:text-blue-300 underline">Read our complete CDM 2015 guide</Link>.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-200">Health & Safety at Work Act 1974</h3>
                <p>The overarching safety law. You must ensure your work doesn't put yourself or others at risk. A proper RAMS document is your evidence of compliance. <Link href="/blog/hse-compliance" className="text-blue-400 hover:text-blue-300 underline">Learn more about HSE compliance</Link>.</p>
              </div>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">⚠️ Penalties for Non-Compliance</h3>
              <p className="mb-3">The HSE doesn't mess around with electrical safety:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li><strong>Improvement Notices:</strong> Stop work until you fix the issues</li>
                <li><strong>Prohibition Notices:</strong> Immediate stop to dangerous activities</li>
                <li><strong>Unlimited Fines:</strong> Serious breaches can lead to six-figure fines</li>
                <li><strong>Prison Sentences:</strong> Up to 2 years for serious safety breaches</li>
                <li><strong>Manslaughter Charges:</strong> If someone dies due to gross negligence</li>
              </ul>
            </div>
          </section>

          {/* What's Included */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">What's Included in Your Electrical RAMS</h2>
            <p className="text-lg mb-6">
              When you create a RAMS document with FastRAMS, you get a complete, professional document that includes:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Comprehensive Hazard Identification</h4>
                <p className="text-sm text-gray-300">All electrical hazards specific to your type of work</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Risk Assessment Matrix</h4>
                <p className="text-sm text-gray-300">Likelihood vs severity ratings for each hazard</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Control Measures</h4>
                <p className="text-sm text-gray-300">Specific actions to reduce or eliminate each risk</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Safe Isolation Procedures</h4>
                <p className="text-sm text-gray-300">Step-by-step electrical isolation process</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ PPE Requirements</h4>
                <p className="text-sm text-gray-300">Exactly what protective equipment is needed</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Emergency Procedures</h4>
                <p className="text-sm text-gray-300">What to do if something goes wrong</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Method Statements</h4>
                <p className="text-sm text-gray-300">Detailed step-by-step work procedures</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-blue-200">✓ Permit to Work Templates</h4>
                <p className="text-sm text-gray-300">When required for high-risk electrical work</p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-blue-600/20 border-2 border-blue-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-blue-300">Professional RAMS in Under 5 Minutes</h3>
            <p className="mb-4">Answer a few questions about your electrical work, and we'll generate a complete, compliant RAMS document ready to submit.</p>
            <Link
              href="/create"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started - Only £12.99
            </Link>
          </div>

          {/* Common Electrical Jobs */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Common Electrical Jobs Requiring RAMS</h2>
            <p className="text-lg mb-6">
              Virtually any commercial or industrial electrical work requires a RAMS document. Common jobs include:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>New electrical installations in commercial buildings</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Distribution board upgrades or replacements</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Emergency lighting installation and testing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Industrial machinery wiring and motor controls</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>High voltage electrical work</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Data center and server room electrical systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Fire alarm system installation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Solar panel electrical connections</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>EV charging point installations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Periodic inspection and testing (EICR)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Retail and office fit-outs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">⚡</span>
                <span>Underground cable installations</span>
              </li>
            </ul>
          </section>

          {/* Why Choose FastRAMS */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Why Electricians Choose FastRAMS</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-2 text-blue-200">⚡ Built by Tradespeople, for Tradespeople</h3>
                <p>We understand electrical work because we've been there. No corporate nonsense, just practical RAMS documents that work in the real world.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-2 text-blue-200">⚡ 5 Minutes, Not 5 Hours</h3>
                <p>Stop wasting half your evening writing RAMS documents. Answer a few questions, and we'll generate a complete document instantly.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-2 text-blue-200">⚡ Fully HSE & CDM Compliant</h3>
                <p>Our RAMS documents meet all UK legal requirements. They've been accepted by major contractors, local authorities, and private clients across the country.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-2 text-blue-200">⚡ Instant PDF Download</h3>
                <p>No waiting around. Generate your RAMS, download the professional PDF, and submit it to your client or principal contractor immediately.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-2 text-blue-200">⚡ Only £12.99</h3>
                <p>Less than an hour's labour charge. One RAMS document that could win you a £5,000 contract. No subscriptions, no hidden fees.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Electrical RAMS?</h2>
            <p className="text-xl mb-6">Join hundreds of UK electricians who've already switched to FastRAMS</p>
            <Link
              href="/create"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Generate Your RAMS Document - £12.99
            </Link>
            <p className="text-sm text-blue-100 mt-4">Instant download • Professional PDF • Fully compliant</p>
          </div>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">Do I need a RAMS document for domestic electrical work?</h3>
                <p>Generally no, unless the domestic property is part of a larger construction site where CDM 2015 applies. However, having a RAMS shows professionalism and many high-end domestic clients appreciate it.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">Can I use the same RAMS for every electrical job?</h3>
                <p>No. Each RAMS should be specific to the actual work you're doing and the site conditions. However, FastRAMS makes it quick to generate job-specific RAMS documents, so there's no excuse to use generic templates.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">What's the difference between a Risk Assessment and a Method Statement?</h3>
                <p>A Risk Assessment identifies hazards and evaluates risks. A Method Statement describes HOW you'll do the work safely. RAMS combines both into one document - which is what most clients and contractors expect.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">Will this RAMS be accepted by principal contractors?</h3>
                <p>Yes. Our RAMS documents are comprehensive and meet the standards expected by major contractors, local authorities, and private clients across the UK. We've had electricians use FastRAMS on everything from small commercial jobs to major infrastructure projects.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">Do I need different RAMS for 18th Edition compliance?</h3>
                <p>The 18th Edition (BS 7671:2018) covers electrical installation standards, which is different from RAMS. However, your RAMS should reference compliance with BS 7671 where relevant, which our documents do automatically.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-200">What if I'm working on high voltage systems?</h3>
                <p>High voltage work (over 1000V AC or 1500V DC) has additional requirements. FastRAMS includes specific high voltage control measures, but you'll also need specialized training, equipment, and possibly a permit to work system.</p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/what-is-rams" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-blue-200 mb-2">What is a RAMS Document?</h3>
                <p className="text-sm text-gray-300">Complete beginner's guide to Risk Assessments and Method Statements in UK construction.</p>
              </Link>
              <Link href="/blog/hse-compliance" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-blue-200 mb-2">HSE Compliance Guide 2025</h3>
                <p className="text-sm text-gray-300">Everything UK tradespeople need to know about Health & Safety Executive compliance.</p>
              </Link>
              <Link href="/blog/cdm-regulations" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-blue-200 mb-2">CDM 2015 Regulations Explained</h3>
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
