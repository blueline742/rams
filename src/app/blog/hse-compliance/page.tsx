import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HSE Compliance for UK Construction 2025 | Complete Guide',
  description: 'Everything UK tradespeople need to know about HSE compliance. Legal requirements, regulations, and how to stay compliant in 2025.',
  openGraph: {
    title: 'HSE Compliance for UK Construction 2025 | Complete Guide',
    description: 'Everything UK tradespeople need to know about HSE compliance. Legal requirements, regulations, and how to stay compliant in 2025.',
  },
};

export default function HSECompliancePage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-900">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">HSE Compliance</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            HSE Compliance for UK Construction: Complete 2025 Guide
          </h1>
          <p className="text-xl text-gray-900 mb-6">
            Everything tradespeople need to know about Health and Safety Executive compliance, regulations, and avoiding penalties
          </p>
          <div className="flex items-center text-sm text-gray-900">
            <time dateTime="2025-01-03">Updated January 2025</time>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-900 mb-6">
              If you're a tradesperson working in UK construction, <strong>HSE compliance</strong> isn't optional—it's the law. The Health and Safety Executive (HSE) enforces regulations that protect workers, and failing to comply can result in hefty fines, prosecution, or even imprisonment.
            </p>

            <p className="text-gray-900 mb-6">
              In 2025, HSE compliance requirements are stricter than ever. Whether you're an electrician, plumber, builder, or scaffolder, understanding what the HSE expects from you is critical to running a legal, successful trade business.
            </p>

            <p className="text-gray-900">
              This guide breaks down everything you need to know about <strong>HSE compliance</strong> in plain English, including what documents you need, common violations, and how to stay on the right side of the law.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Need compliant RAMS documents?</p>
              <p className="text-gray-900 mb-4">Generate HSE-compliant Risk Assessments and Method Statements in minutes.</p>
              <Link
                href="/create"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors no-underline"
              >
                Create RAMS Document - £12.99
              </Link>
            </div>
          </section>

          {/* What is HSE Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is HSE Compliance?</h2>

            <p className="mb-4 text-gray-900">
              <strong>HSE compliance</strong> means following the health and safety laws enforced by the Health and Safety Executive, the UK's independent regulator for workplace safety.
            </p>

            <p className="mb-6 text-gray-900">
              For construction and trades, this primarily involves complying with:
            </p>

            <ul className="mb-6 space-y-3 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Health and Safety at Work Act 1974</strong> - The foundation of UK workplace safety law</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Construction (Design and Management) Regulations 2015 (CDM 2015)</strong> - Specific rules for construction work</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Management of Health and Safety at Work Regulations 1999</strong> - Risk assessment requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Work at Height Regulations 2005</strong> - Rules for working above ground level</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Control of Substances Hazardous to Health (COSHH) 2002</strong> - Managing dangerous substances</span>
              </li>
            </ul>

            <p className="text-gray-900">
              The HSE has the power to inspect any workplace, issue enforcement notices, stop work immediately, and prosecute businesses or individuals who break health and safety laws.
            </p>
          </section>

          {/* Why HSE Compliance Matters */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why HSE Compliance Matters for Tradespeople</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legal Consequences</h3>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">Serious Penalties</p>
              <p className="text-gray-900 mb-4">
                HSE enforcement action can include:
              </p>
              <ul className="space-y-2 text-gray-900">
                <li>• <strong>Improvement Notices:</strong> Legal requirement to fix safety issues within a set timeframe</li>
                <li>• <strong>Prohibition Notices:</strong> Immediate work stoppage until issues are resolved</li>
                <li>• <strong>Fines:</strong> Unlimited fines for serious breaches (average £20,000-£50,000+)</li>
                <li>• <strong>Prosecution:</strong> Criminal charges for serious violations</li>
                <li>• <strong>Imprisonment:</strong> Up to 2 years for major safety failures</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Impact</h3>

            <p className="mb-4 text-gray-900">Beyond legal penalties, poor HSE compliance affects your business:</p>

            <ul className="mb-6 space-y-2 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Loss of contracts:</strong> Principal contractors won't hire you without proper documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Insurance issues:</strong> Insurers may refuse claims or cancel policies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Reputation damage:</strong> HSE prosecutions are public and easily searchable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Work stoppages:</strong> Prohibition notices stop your earning immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Personal liability:</strong> Directors and sole traders can be held personally responsible</span>
              </li>
            </ul>
          </section>

          {/* Essential HSE Compliance Documents */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential HSE Compliance Documents for Tradespeople</h2>

            <p className="mb-6 text-gray-900">
              To demonstrate <strong>HSE compliance</strong>, you need specific documentation. Here's what the HSE expects you to have:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Risk Assessments and Method Statements (RAMS)</h3>
                <p className="text-gray-900 mb-3">
                  <strong>Required by:</strong> Management of Health and Safety at Work Regulations 1999, CDM 2015
                </p>
                <p className="text-gray-900 mb-3">
                  Risk assessments identify hazards in your work and evaluate the risks they pose. Method statements explain how you'll carry out work safely.
                </p>
                <p className="text-gray-900 font-semibold">
                  When needed: Before starting any construction work, especially on commercial sites
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Health and Safety Policy</h3>
                <p className="text-gray-900 mb-3">
                  <strong>Required by:</strong> Health and Safety at Work Act 1974
                </p>
                <p className="text-gray-900 mb-3">
                  If you employ 5+ people, you must have a written health and safety policy outlining your commitment to safety and how you'll manage it.
                </p>
                <p className="text-gray-900 font-semibold">
                  When needed: As soon as you employ your 5th person
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. COSHH Assessments</h3>
                <p className="text-gray-900 mb-3">
                  <strong>Required by:</strong> Control of Substances Hazardous to Health Regulations 2002
                </p>
                <p className="text-gray-900 mb-3">
                  Required if you work with hazardous substances (paints, solvents, adhesives, cement, silica dust, etc.). Documents how you'll prevent exposure.
                </p>
                <p className="text-gray-900 font-semibold">
                  When needed: Whenever you use or create hazardous substances
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Training Records</h3>
                <p className="text-gray-900 mb-3">
                  <strong>Required by:</strong> Various regulations including CDM 2015
                </p>
                <p className="text-gray-900 mb-3">
                  Evidence that you and your workers are competent. Includes CSCS cards, trade qualifications, health and safety training certificates.
                </p>
                <p className="text-gray-900 font-semibold">
                  When needed: Always have current training records available
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Accident and Incident Records</h3>
                <p className="text-gray-900 mb-3">
                  <strong>Required by:</strong> RIDDOR (Reporting of Injuries, Diseases and Dangerous Occurrences Regulations) 2013
                </p>
                <p className="text-gray-900 mb-3">
                  Log of all workplace accidents and near misses. Serious incidents must be reported to HSE within specific timeframes.
                </p>
                <p className="text-gray-900 font-semibold">
                  When needed: Keep records for minimum 3 years
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Equipment Inspection Records</h3>
                <p className="text-gray-900 mb-3">
                  <strong>Required by:</strong> Provision and Use of Work Equipment Regulations (PUWER) 1998
                </p>
                <p className="text-gray-900 mb-3">
                  Evidence that tools and equipment are maintained and inspected. Includes PAT testing for electrical equipment, ladder inspections, etc.
                </p>
                <p className="text-gray-900 font-semibold">
                  When needed: Regular inspections as specified for each equipment type
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Get HSE-Compliant RAMS in Minutes</h3>
            <p className="text-lg mb-6 text-white">
              Don't risk HSE penalties with inadequate documentation
            </p>
            <Link
              href="/create"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors no-underline text-lg"
            >
              Generate Compliant RAMS - £12.99
            </Link>
          </div>

          {/* Common HSE Compliance Violations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common HSE Compliance Violations in Construction</h2>

            <p className="mb-6 text-gray-900">
              Based on HSE enforcement data, these are the most common violations that result in penalties:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Falls from Height</h3>
                <p className="text-gray-900 mb-2">
                  The biggest killer in construction. Working at height without proper equipment, risk assessments, or training.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: No edge protection, unsafe ladders, no fall arrest systems
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Missing or Inadequate Risk Assessments</h3>
                <p className="text-gray-900 mb-2">
                  No RAMS documents, generic templates that don't match actual work, or risk assessments not reviewed/updated.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: Using downloaded templates unchanged, no trade-specific hazards identified
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Inadequate Welfare Facilities</h3>
                <p className="text-gray-900 mb-2">
                  No access to toilets, washing facilities, drinking water, or rest areas on site.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: Assuming client will provide facilities, not planning for site welfare
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Poor Electrical Safety</h3>
                <p className="text-gray-900 mb-2">
                  Using damaged equipment, inadequate protection from live parts, no isolation procedures.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: Damaged extension leads, working on live circuits, no PAT testing
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Asbestos Exposure</h3>
                <p className="text-gray-900 mb-2">
                  Working on pre-2000 buildings without checking for asbestos, disturbing asbestos materials without proper procedures.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: No asbestos survey, no training, inadequate control measures
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Incompetent Workers</h3>
                <p className="text-gray-900 mb-2">
                  Workers lacking necessary training, qualifications, or experience for the tasks they're performing.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: No CSCS cards, expired qualifications, no safety training records
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">7. Poor Traffic Management</h3>
                <p className="text-gray-900 mb-2">
                  Vehicles and pedestrians not separated, no banksmen, poor site access arrangements.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Common issues: No vehicle movement plan, no designated walkways, reversing without spotters
                </p>
              </div>
            </div>
          </section>

          {/* How to Stay HSE Compliant */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Stay HSE Compliant in 2025</h2>

            <p className="mb-6 text-gray-900">
              Follow these practical steps to maintain <strong>HSE compliance</strong> and avoid enforcement action:
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Create Proper RAMS Documents</h3>
                <p className="text-gray-900 mb-3">
                  Don't use generic templates. Your risk assessments and method statements must be specific to your trade and the actual work you're doing.
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>• Identify all trade-specific hazards</li>
                  <li>• Evaluate risks properly (likelihood × severity)</li>
                  <li>• Document realistic control measures you can actually implement</li>
                  <li>• Review and update annually or when work methods change</li>
                  <li>• Keep copies on site and available for inspection</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Maintain Training and Competence</h3>
                <p className="text-gray-900 mb-3">
                  Ensure you and your workers have relevant, current qualifications:
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>• Valid CSCS or trade-specific cards</li>
                  <li>• Health and safety awareness training (refreshed every 3-5 years)</li>
                  <li>• Task-specific training (working at height, first aid, etc.)</li>
                  <li>• Keep digital or physical copies of all certificates</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Conduct Site-Specific Inductions</h3>
                <p className="text-gray-900 mb-3">
                  Before starting work on any new site:
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>• Review site-specific risks with your team</li>
                  <li>• Identify emergency procedures and assembly points</li>
                  <li>• Confirm welfare facilities location</li>
                  <li>• Brief on traffic routes and exclusion zones</li>
                  <li>• Document the induction (sign-in sheet)</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Inspect and Maintain Equipment</h3>
                <p className="text-gray-900 mb-3">
                  Regular inspections prevent equipment failures:
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>• Visual checks before each use</li>
                  <li>• Formal inspections at specified intervals</li>
                  <li>• PAT testing for electrical equipment</li>
                  <li>• Tag or label equipment with inspection dates</li>
                  <li>• Remove defective equipment from service immediately</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Report and Record Incidents</h3>
                <p className="text-gray-900 mb-3">
                  Proper incident management demonstrates compliance:
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>• Report serious injuries to HSE within required timeframes (RIDDOR)</li>
                  <li>• Record all accidents, injuries, and near misses</li>
                  <li>• Investigate incidents to prevent recurrence</li>
                  <li>• Review risk assessments after incidents</li>
                  <li>• Keep records for minimum 3 years</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Provide Appropriate PPE</h3>
                <p className="text-gray-900 mb-3">
                  Personal protective equipment is the last line of defense:
                </p>
                <ul className="space-y-2 text-gray-900">
                  <li>• Provide PPE free of charge to workers</li>
                  <li>• Ensure PPE is suitable for the task and fits properly</li>
                  <li>• Train workers on correct use and maintenance</li>
                  <li>• Replace damaged or worn PPE immediately</li>
                  <li>• Enforce PPE use (it's a legal requirement)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What to Expect in HSE Inspection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect During an HSE Inspection</h2>

            <p className="mb-6 text-gray-900">
              HSE inspectors can visit any workplace without notice. Here's what happens during an inspection:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">Your Rights</p>
              <ul className="space-y-2 text-gray-900">
                <li>• Inspectors must show identification</li>
                <li>• They can enter premises without permission</li>
                <li>• They can talk to workers privately</li>
                <li>• They can take photographs and samples</li>
                <li>• They can inspect documents and take copies</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">During the Inspection</h3>

            <p className="mb-4 text-gray-900">Inspectors will typically:</p>

            <ul className="mb-6 space-y-2 text-gray-900">
              <li>1. <strong>Speak to the person in control</strong> - Owner, director, site manager</li>
              <li>2. <strong>Tour the site</strong> - Looking for immediate dangers and poor practices</li>
              <li>3. <strong>Review documentation</strong> - RAMS, training records, accident logs, equipment inspections</li>
              <li>4. <strong>Interview workers</strong> - Checking competence and awareness of risks</li>
              <li>5. <strong>Provide feedback</strong> - Verbal or written, depending on findings</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Possible Outcomes</h3>

            <ul className="mb-6 space-y-3 text-gray-900">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span><strong>Verbal advice:</strong> Minor issues, inspector provides guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">!</span>
                <span><strong>Improvement Notice:</strong> Must fix issues within specified timeframe (usually 21 days)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span><strong>Prohibition Notice:</strong> Immediate stop of dangerous activities until fixed</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span><strong>Prosecution:</strong> Criminal charges for serious breaches</span>
              </li>
            </ul>

            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <p className="font-semibold text-gray-900 mb-2">Pro Tip:</p>
              <p className="text-gray-900">
                Cooperate fully with inspectors. Being defensive or obstructive makes matters worse. If you've made genuine efforts toward compliance, inspectors often work with you to improve rather than immediately prosecuting.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Stay HSE Compliant in 2025</h2>

            <p className="text-lg text-white mb-6">
              <strong>HSE compliance</strong> protects you legally, financially, and professionally. With proper documentation, training, and procedures, you can work confidently knowing you're meeting legal requirements.
            </p>

            <ul className="mb-8 space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Avoid fines, prosecution, and work stoppages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Win more contracts with proper documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Protect your workers and your business</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Demonstrate professionalism to clients</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Generate HSE-Compliant RAMS Documents</h3>
              <p className="text-lg mb-2 text-blue-50">Trade-Specific • Legally Compliant • Instant Download</p>
              <p className="text-3xl font-bold mb-6">£12.99 per document</p>
              <Link
                href="/create"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors no-underline text-lg mb-4"
              >
                Create Your RAMS Now
              </Link>
              <p className="text-sm text-white mt-4">
                CDM 2015 compliant • Accepted by HSE • No subscription required
              </p>
            </div>
          </section>

          {/* Article Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "HSE Compliance for UK Construction: Complete 2025 Guide",
              "description": "Everything tradespeople need to know about Health and Safety Executive compliance, regulations, and avoiding penalties",
              "author": {
                "@type": "Organization",
                "name": "FastRAMS"
              },
              "publisher": {
                "@type": "Organization",
                "name": "FastRAMS",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://fastrams.co.uk/logo.jpg"
                }
              },
              "datePublished": "2025-01-03",
              "dateModified": "2025-01-03"
            })}
          </script>
        </div>

        {/* Related Articles Section */}
        <aside className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/what-is-rams" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">What is a RAMS Document?</h3>
              <p className="text-sm text-gray-900">Complete guide to Risk Assessments and Method Statements for UK tradespeople</p>
            </Link>
            <Link href="/blog/cdm-regulations" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">CDM 2015 Regulations Explained</h3>
              <p className="text-sm text-gray-900">Understanding Construction Design and Management regulations for contractors</p>
            </Link>
          </div>
        </aside>

      </div>
    </article>
  );
}
