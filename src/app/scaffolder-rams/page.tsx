import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scaffolder RAMS Document | Professional Scaffolding Risk Assessments',
  description: 'Generate compliant RAMS documents for scaffolders in minutes. Covers all scaffolding hazards, working at height, and TG20 compliance. Only £12.99 with instant download.',
  openGraph: {
    title: 'Scaffolder RAMS Document | Professional Scaffolding Risk Assessments',
    description: 'Generate compliant RAMS documents for scaffolders in minutes. Covers all scaffolding hazards, working at height, and TG20 compliance. Only £12.99 with instant download.',
    type: 'website',
  },
};

export default function ScaffolderRAMS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-orange-400 transition-colors">
            FastRAMS
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional RAMS Documents for Scaffolders
          </h1>
          <p className="text-xl text-orange-200 mb-8">
            Generate fully compliant scaffolding RAMS in minutes. Covers all working at height hazards and TG20:13 requirements.
          </p>
          <Link
            href="/create"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Create Your Scaffolding RAMS - £12.99
          </Link>
          <p className="text-sm text-orange-300 mt-4">Instant PDF download • HSE compliant • CDM 2015 ready</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 sm:p-12 text-white space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Why Scaffolders Need Proper RAMS Documents</h2>
            <p className="text-lg leading-relaxed mb-4">
              Falls from height are the <strong>biggest killer in UK construction</strong>, accounting for around 40% of all construction fatalities. Scaffolding work is inherently high-risk, and the HSE scrutinizes scaffolding operations more than almost any other trade.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Whether you're erecting independent scaffold, installing temporary roofs, or doing mobile tower work - you won't get on site without a proper RAMS document. Principal contractors and site managers demand comprehensive risk assessments that demonstrate you understand the hazards and have control measures in place.
            </p>
            <p className="text-lg leading-relaxed">
              FastRAMS helps you create professional, TG20:13-compliant scaffolding RAMS documents in minutes. Built specifically for UK scaffolders, covering all the working at height regulations and industry best practices.
            </p>
          </section>

          {/* CTA Box */}
          <div className="bg-orange-600/20 border-2 border-orange-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-orange-300">Ready to create your scaffolding RAMS?</h3>
            <p className="mb-4">Generate a fully compliant RAMS document in under 5 minutes. Only £12.99 with instant PDF download.</p>
            <Link
              href="/create"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Start Creating Your RAMS
            </Link>
          </div>

          {/* Scaffolding Hazards Covered */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Scaffolding Hazards We Cover</h2>
            <p className="text-lg mb-6">
              Our scaffolding RAMS template includes comprehensive risk assessments for all scaffolding hazards:
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 border-l-4 border-red-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-red-300">Falls from Height</h3>
                <p>The primary killer. We cover edge protection requirements, temporary guardrails during erection, scaffold inspection regimes, and safe access/egress at all times.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-orange-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-300">Falling Objects</h3>
                <p>Materials, tools, and scaffold components falling from height can kill those below. Our RAMS includes toe boards, brick guards, debris netting, exclusion zones, and banksman requirements.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-yellow-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Manual Handling</h3>
                <p>Scaffold tubes, boards, and fittings are heavy and awkward. We detail team lifting, mechanical aids, safe working heights to minimize lifting, and proper lifting techniques.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-purple-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-purple-300">Structural Collapse</h3>
                <p>Improper design, inadequate foundations, or wrong assembly can cause collapse. Our RAMS covers TG20:13 compliance, foundation inspections, tie patterns, and load ratings.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-blue-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-300">Adverse Weather</h3>
                <p>Wind, ice, and storms create serious risks. We include weather monitoring, wind speed limits, securing loose materials, and suspension of works procedures.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-green-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-green-300">Overhead Power Lines</h3>
                <p>Contact with power lines is often fatal. Our RAMS covers safe distances, exclusion zones, HSE guidance note GS6, and emergency procedures.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-pink-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-pink-300">Ground Conditions & Foundations</h3>
                <p>Inadequate foundations cause many scaffold collapses. We detail ground surveys, load-bearing capacity checks, sole boards, base plates, and adjustable base requirements.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-indigo-500 p-4">
                <h3 className="text-xl font-bold mb-2 text-indigo-300">Vehicle / Plant Interaction</h3>
                <p>Construction vehicles and plant striking scaffold. Our RAMS includes impact protection, barriers, exclusion zones, and banksmen when loading/unloading.</p>
              </div>
            </div>
          </section>

          {/* Working at Height Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Working at Height Regulations 2005</h2>
            <p className="text-lg mb-6">
              The Work at Height Regulations 2005 are the cornerstone of scaffolding safety law in the UK. Every scaffolder must understand and comply with these regulations:
            </p>

            <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold mb-1">Avoid work at height where possible</h4>
                  <p className="text-sm text-gray-300">The hierarchy of control starts with avoiding working at height altogether if there's an alternative</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold mb-1">Use existing work equipment</h4>
                  <p className="text-sm text-gray-300">Where work at height is necessary, use existing safe structures before installing new scaffold</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold mb-1">Prevent falls using collective measures</h4>
                  <p className="text-sm text-gray-300">Guardrails, toe boards, and edge protection - protect everyone, not just the person working</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold mb-1">Minimize distance and consequences of a fall</h4>
                  <p className="text-sm text-gray-300">Personal fall protection, safety nets, and airbags where collective protection isn't possible</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h4 className="font-bold mb-1">Instruction and training</h4>
                  <p className="text-sm text-gray-300">All workers must be competent - CISRS cards for scaffolders, site-specific inductions for scaffold users</p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">⚠️ Falls from Height Statistics</h3>
              <p className="mb-3">The HSE reports sobering statistics:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>40% of construction deaths are falls from height</li>
                <li>Average of 40 fatal falls per year in UK construction</li>
                <li>Scaffold-related fatalities are consistently among the top causes</li>
                <li>Most falls are from heights under 6 meters - "it's not that high" kills people</li>
              </ul>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-orange-600/20 border-2 border-orange-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-orange-300">Stop wasting time on RAMS documents</h3>
            <p className="mb-4">Get back to earning. Create your professional scaffolding RAMS in minutes, not hours.</p>
            <Link
              href="/create"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Create RAMS Now - £12.99
            </Link>
          </div>

          {/* TG20:13 Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">TG20:13 Compliance</h2>
            <p className="text-lg mb-6">
              TG20:13 is the industry bible for scaffold design. Published by the National Access and Scaffolding Confederation (NASC), it provides guidance on good practice and compliant scaffold structures:
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">What is TG20:13?</h3>
                <p>TG20:13 "Guide to Good Practice for Scaffolding with Tubes and Fittings" provides standard designs for common scaffold configurations. If you follow TG20:13, you're demonstrating industry best practice and compliance with CDM 2015.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">When is TG20:13 Not Enough?</h3>
                <p>Complex structures, high scaffolds, heavy loadings, or unusual configurations require a full scaffold design by a qualified scaffold designer. Don't try to adapt TG20:13 beyond its intended use.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Scaffold Inspections</h3>
                <p>TG20:13 covers inspection requirements, but the law is clear: scaffolds must be inspected:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                  <li>Before first use</li>
                  <li>After any event likely to affect stability (weather, impacts, alterations)</li>
                  <li>At regular intervals (every 7 days minimum)</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Scaffold Tags & Handover</h3>
                <p>Every scaffold needs a tag showing its inspection status. Our RAMS documents include handover certificate requirements and tag systems (red/amber/green or equivalent).</p>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">HSE & CDM 2015 Compliance for Scaffolders</h2>
            <p className="text-lg mb-6">
              As a scaffolder, you're a contractor under CDM 2015, and you have specific legal duties:
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">CDM Regulations 2015</h3>
                <p>Scaffolders are "contractors" under CDM. You must plan your work, manage risks, and coordinate with other contractors. Scaffold is often on the critical path - your safety affects everyone on site. <Link href="/blog/cdm-regulations" className="text-orange-400 hover:text-orange-300 underline">Read our complete CDM 2015 guide</Link>.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Work at Height Regulations 2005</h3>
                <p>The primary legislation for scaffolding work. Requires hierarchy of control, competent workers, proper equipment, inspection regimes, and emergency procedures.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Health & Safety at Work Act 1974</h3>
                <p>Your overarching legal duty to work safely. A proper RAMS document is your evidence of compliance. <Link href="/blog/hse-compliance" className="text-orange-400 hover:text-orange-300 underline">Learn more about HSE compliance</Link>.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2 text-orange-200">NASC Guidance & SG4:15</h3>
                <p>The National Access and Scaffolding Confederation publishes extensive guidance. SG4:15 "Preventing Falls in Scaffolding Operations" is essential reading for all scaffolders.</p>
              </div>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-3 text-red-300">⚠️ Penalties for Non-Compliance</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li><strong>Improvement Notices:</strong> Stop work until you fix the issues</li>
                <li><strong>Prohibition Notices:</strong> Immediate stop to dangerous scaffolding activities</li>
                <li><strong>Unlimited Fines:</strong> Working at height breaches regularly result in six-figure fines</li>
                <li><strong>Prison Sentences:</strong> Up to 2 years for serious safety breaches</li>
                <li><strong>Corporate Manslaughter:</strong> Companies have been prosecuted after fatal scaffold collapses</li>
              </ul>
            </div>
          </section>

          {/* What's Included */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">What's Included in Your Scaffolding RAMS</h2>
            <p className="text-lg mb-6">
              When you create a RAMS document with FastRAMS, you get a complete, professional document that includes:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ Comprehensive Hazard Identification</h4>
                <p className="text-sm text-gray-300">All scaffolding hazards specific to your type of work</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ Work at Height Hierarchy of Control</h4>
                <p className="text-sm text-gray-300">Demonstrating compliance with WAH Regulations 2005</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ TG20:13 References</h4>
                <p className="text-sm text-gray-300">Industry best practice and standard scaffold designs</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ Inspection Requirements</h4>
                <p className="text-sm text-gray-300">7-day inspection schedules and handover procedures</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ PPE Requirements</h4>
                <p className="text-sm text-gray-300">Exactly what protective equipment is needed</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ Emergency Procedures</h4>
                <p className="text-sm text-gray-300">Rescue plans and emergency response for falls from height</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ Method Statements</h4>
                <p className="text-sm text-gray-300">Step-by-step erection, alteration, and dismantling procedures</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-orange-200">✓ Exclusion Zones & Barriers</h4>
                <p className="text-sm text-gray-300">Protecting the public and other trades from falling objects</p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-orange-600/20 border-2 border-orange-400 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-orange-300">Professional RAMS in Under 5 Minutes</h3>
            <p className="mb-4">Answer a few questions about your scaffolding work, and we'll generate a complete, compliant RAMS document ready to submit.</p>
            <Link
              href="/create"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started - Only £12.99
            </Link>
          </div>

          {/* Common Scaffolding Jobs */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Scaffolding Work Requiring RAMS</h2>
            <p className="text-lg mb-6">
              All commercial scaffolding work requires a RAMS document. Common jobs include:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Independent tied scaffold for new builds</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Putlog scaffold for refurbishment work</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Mobile tower scaffolds</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Temporary roof systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Loading bays and material hoists</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Cantilever scaffolds</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Slung and suspended scaffolds</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Temporary staircases and access towers</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Edge protection systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Gantries and walkways</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>Scaffolding for demolition work</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">🏗️</span>
                <span>System scaffold installations</span>
              </li>
            </ul>
          </section>

          {/* Why Choose FastRAMS */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Why Scaffolders Choose FastRAMS</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold mb-2 text-orange-200">🏗️ Built by People Who Understand Scaffolding</h3>
                <p>We know the difference between independent and putlog scaffold. We know TG20:13. We know what the HSE looks for. Our RAMS documents reflect real scaffolding work.</p>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold mb-2 text-orange-200">🏗️ 5 Minutes, Not 5 Hours</h3>
                <p>Scaffolding is physically demanding. You don't want to spend your evenings doing paperwork. Get your RAMS done in minutes and get home to your family.</p>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold mb-2 text-orange-200">🏗️ TG20:13 & NASC Compliant</h3>
                <p>Our RAMS documents reference industry best practice and demonstrate compliance with TG20:13 and NASC guidance.</p>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold mb-2 text-orange-200">🏗️ Accepted on Major Sites</h3>
                <p>Our RAMS have been used on major construction projects across the UK. If you're working for tier 1 contractors, our documents meet their requirements.</p>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold mb-2 text-orange-200">🏗️ Only £12.99</h3>
                <p>Less than two hours on the tools. One RAMS that could win you a £20,000 scaffold contract. No subscriptions, no hidden fees.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Scaffolding RAMS?</h2>
            <p className="text-xl mb-6">Join hundreds of UK scaffolders who've already switched to FastRAMS</p>
            <Link
              href="/create"
              className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Generate Your RAMS Document - £12.99
            </Link>
            <p className="text-sm text-orange-100 mt-4">Instant download • Professional PDF • Fully compliant</p>
          </div>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-orange-300">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Do I need a CISRS card to erect scaffold?</h3>
                <p>For commercial work, absolutely yes. The CISRS (Construction Industry Scaffolders Record Scheme) card proves you're competent. Labourers need CISRS Part 1, scaffolders need CISRS card, and advanced scaffolders need Advanced card. It's illegal to work on scaffold without proper training and competence.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-200">When do I need a full scaffold design?</h3>
                <p>If the scaffold doesn't fit within TG20:13 standard configurations, you need a scaffold design by a qualified designer. This includes complex structures, high scaffolds (over 12m on some systems), heavy loadings, cantilevers, and anything non-standard.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Can I use the same RAMS for all scaffold jobs?</h3>
                <p>No. Each RAMS should be specific to the actual scaffold and site. However, FastRAMS makes it so quick to generate job-specific RAMS that there's no excuse for generic templates.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-200">Who can inspect scaffold?</h3>
                <p>Scaffold inspections must be done by a competent person. This usually means a CISRS Advanced Scaffolder or someone with CISRS Scaffold Inspection Training Scheme (SITS) qualification. The inspector must be independent from the erection gang.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-200">What wind speed do I stop work?</h3>
                <p>General guidance is to stop scaffold erection/dismantling when wind speeds exceed 17 mph (Force 5 on the Beaufort scale). However, specific site conditions and scaffold type may require lower limits. Always check your company's policy and risk assessment.</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-200">What about temporary edge protection during erection?</h3>
                <p>This is critical. The SG4:15 guidance covers temporary guardrails, advance guardrails, and other methods to maintain edge protection during erection and dismantling. You must have a system - most scaffold fatalities happen during erection/dismantling, not during use.</p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/what-is-rams" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-orange-200 mb-2">What is a RAMS Document?</h3>
                <p className="text-sm text-gray-300">Complete beginner's guide to Risk Assessments and Method Statements in UK construction.</p>
              </Link>
              <Link href="/blog/hse-compliance" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-orange-200 mb-2">HSE Compliance Guide 2025</h3>
                <p className="text-sm text-gray-300">Everything UK tradespeople need to know about Health & Safety Executive compliance.</p>
              </Link>
              <Link href="/blog/cdm-regulations" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                <h3 className="font-bold text-orange-200 mb-2">CDM 2015 Regulations Explained</h3>
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
