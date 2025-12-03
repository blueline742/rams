import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CDM 2015 Regulations Explained | UK Construction Compliance Guide',
  description: 'Complete guide to CDM 2015 regulations for UK tradespeople. Understand your legal duties, who they apply to, and how to stay compliant.',
  openGraph: {
    title: 'CDM 2015 Regulations Explained | UK Construction Compliance Guide',
    description: 'Complete guide to CDM 2015 regulations for UK tradespeople. Understand your legal duties, who they apply to, and how to stay compliant.',
  },
};

export default function CDMRegulationsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-900">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">CDM 2015 Regulations</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            CDM 2015 Regulations Explained: Complete Guide for UK Tradespeople
          </h1>
          <p className="text-xl text-gray-900 mb-6">
            Understanding Construction Design and Management Regulations 2015 and your legal duties as a contractor
          </p>
          <div className="flex items-center text-sm text-gray-900">
            <time dateTime="2025-01-03">Updated January 2025</time>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-900 mb-6">
              The <strong>Construction (Design and Management) Regulations 2015</strong>—commonly known as <strong>CDM 2015</strong>—are the primary health and safety regulations for construction work in the UK. If you're a tradesperson working on commercial sites, domestic projects, or managing construction work, CDM 2015 directly affects you.
            </p>

            <p className="text-gray-900 mb-6">
              Unlike the previous 2007 regulations, <strong>CDM 2015</strong> simplified many requirements and extended duties to a broader range of projects. Whether you're an electrician, plumber, builder, or scaffolder, understanding these regulations is essential to working legally and avoiding HSE enforcement action.
            </p>

            <p className="text-gray-900">
              This guide breaks down CDM 2015 in plain English: who it applies to, what your specific duties are, and how to demonstrate compliance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Need CDM 2015 compliant RAMS?</p>
              <p className="text-gray-900 mb-4">Generate legally compliant Risk Assessments and Method Statements that meet CDM 2015 requirements.</p>
              <Link
                href="/create"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors no-underline"
              >
                Create RAMS Document - £12.99
              </Link>
            </div>
          </section>

          {/* What is CDM 2015 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are the CDM 2015 Regulations?</h2>

            <p className="mb-4 text-gray-900">
              <strong>CDM 2015</strong> are UK legal regulations that aim to protect workers and anyone affected by construction work. They replaced the CDM 2007 regulations on 6 April 2015.
            </p>

            <p className="mb-6 text-gray-900">
              The regulations cover the entire construction process from initial design through to completion, placing specific duties on everyone involved: clients, designers, principal designers, principal contractors, contractors, and workers.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Changes from CDM 2007</h3>

            <ul className="mb-6 space-y-3 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>CDM Coordinator removed:</strong> Replaced by "Principal Designer" role with clearer responsibilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Simpler notification:</strong> Only projects lasting more than 30 days or 500 person-days need HSE notification</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>More client duties:</strong> Clients have greater responsibility to ensure competent contractors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Domestic clients:</strong> Principal contractor can take on client duties for domestic projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Clearer definitions:</strong> What counts as "construction work" is more clearly defined</span>
              </li>
            </ul>
          </section>

          {/* Who Does CDM Apply To */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Do CDM 2015 Regulations Apply To?</h2>

            <p className="mb-6 text-gray-900">
              CDM 2015 applies to ALL construction work, with very few exceptions. Here's how it breaks down:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">Definition of Construction Work</p>
              <p className="text-gray-900 mb-3">
                CDM 2015 defines construction work as:
              </p>
              <ul className="space-y-2 text-gray-900">
                <li>• Building, altering, maintaining, or demolishing structures</li>
                <li>• Installing or removing services (electrical, plumbing, heating, etc.)</li>
                <li>• Painting and decorating</li>
                <li>• Scaffolding erection and dismantling</li>
                <li>• Site preparation and clearance</li>
                <li>• Ground works and excavations</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projects Covered by CDM 2015</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Commercial Projects</h4>
                <p className="text-gray-900 mb-3">
                  <strong>Full CDM 2015 applies.</strong> All duty holders must fulfill their responsibilities.
                </p>
                <p className="text-gray-900">
                  Examples: Offices, shops, factories, schools, hospitals, public buildings
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Domestic Projects (Homeowners)</h4>
                <p className="text-gray-900 mb-3">
                  <strong>Client duties transfer to contractors.</strong> Domestic clients are not expected to understand CDM, so contractors take on these responsibilities.
                </p>
                <p className="text-gray-900">
                  Examples: House extensions, loft conversions, new kitchens, rewiring homes
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Mixed-Use Projects</h4>
                <p className="text-gray-900 mb-3">
                  <strong>Depends on the nature of work.</strong> If work affects commercial parts of a building, full CDM applies.
                </p>
                <p className="text-gray-900">
                  Examples: Flats above shops, work in communal areas of residential buildings
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exemptions (Very Limited)</h3>

            <p className="mb-4 text-gray-900">Only a few types of work are excluded from CDM 2015:</p>

            <ul className="mb-6 space-y-2 text-gray-900">
              <li>• Work that doesn't involve construction (e.g., pure maintenance like changing a lightbulb)</li>
              <li>• Domestic clients managing their own DIY work (but contractors they hire are still covered)</li>
              <li>• Archaeological excavations</li>
            </ul>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
              <p className="text-gray-900">
                If you're a tradesperson doing ANY construction work—commercial or domestic—CDM 2015 affects you. You have legal duties under these regulations.
              </p>
            </div>
          </section>

          {/* Your Duties as a Contractor */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Duties as a Contractor Under CDM 2015</h2>

            <p className="mb-6 text-gray-900">
              Most tradespeople fall into the "contractor" category under CDM 2015. Here are your specific legal duties:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Plan, Manage, and Monitor Your Work</h3>
                <p className="text-gray-900 mb-3">
                  You must plan your work so it can be carried out safely, from start to finish.
                </p>
                <p className="text-sm text-gray-900 italic mb-3">
                  <strong>Practical steps:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• Create risk assessments and method statements (RAMS) before starting work</li>
                  <li>• Identify hazards specific to your trade and the site</li>
                  <li>• Plan the sequence of work to minimize risks</li>
                  <li>• Monitor work to ensure procedures are followed</li>
                  <li>• Adapt plans if conditions change</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Ensure Workers Are Competent and Properly Supervised</h3>
                <p className="text-gray-900 mb-3">
                  Only use workers who have the skills, knowledge, and experience for their tasks.
                </p>
                <p className="text-sm text-gray-900 italic mb-3">
                  <strong>Practical steps:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• Verify qualifications (CSCS, trade cards, Gas Safe, etc.)</li>
                  <li>• Provide task-specific training where needed</li>
                  <li>• Supervise inexperienced workers appropriately</li>
                  <li>• Keep records of competence (certificates, training logs)</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Provide Information to Workers</h3>
                <p className="text-gray-900 mb-3">
                  Workers must understand the risks and how to work safely.
                </p>
                <p className="text-sm text-gray-900 italic mb-3">
                  <strong>Practical steps:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• Conduct site inductions covering site-specific hazards</li>
                  <li>• Provide RAMS to your team and brief them on content</li>
                  <li>• Explain emergency procedures and welfare facilities</li>
                  <li>• Ensure workers know how to report hazards or incidents</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Cooperate with Other Duty Holders</h3>
                <p className="text-gray-900 mb-3">
                  Share information and coordinate with other contractors and the principal contractor.
                </p>
                <p className="text-sm text-gray-900 italic mb-3">
                  <strong>Practical steps:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• Provide your RAMS to the principal contractor before starting work</li>
                  <li>• Attend site meetings and safety briefings</li>
                  <li>• Report hazards you identify to the principal contractor</li>
                  <li>• Coordinate with other trades to avoid creating risks</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Provide Welfare Facilities</h3>
                <p className="text-gray-900 mb-3">
                  Ensure workers have access to toilets, washing facilities, drinking water, and rest areas.
                </p>
                <p className="text-sm text-gray-900 italic mb-3">
                  <strong>Practical steps:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• Check welfare provision before starting work</li>
                  <li>• If working alone on domestic sites, agree arrangements with the client</li>
                  <li>• On larger sites, principal contractor usually provides facilities</li>
                  <li>• Don't assume facilities are available—confirm beforehand</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Report Obvious Risks</h3>
                <p className="text-gray-900 mb-3">
                  If you identify risks that affect others, report them immediately.
                </p>
                <p className="text-sm text-gray-900 italic mb-3">
                  <strong>Practical steps:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• Report hazards to the principal contractor or client</li>
                  <li>• Don't assume someone else has noticed the risk</li>
                  <li>• If immediate danger exists, stop work and alert others</li>
                  <li>• Document reports (email or site diary entry)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Meet Your CDM 2015 Duties with Proper RAMS</h3>
            <p className="text-lg mb-6 text-white">
              Generate trade-specific, CDM-compliant documentation in minutes
            </p>
            <Link
              href="/create"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors no-underline text-lg"
            >
              Create Compliant RAMS - £12.99
            </Link>
          </div>

          {/* Principal Contractor Duties */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Principal Contractor Duties (If You Manage Multiple Contractors)</h2>

            <p className="mb-6 text-gray-900">
              If you're the main contractor managing a project with multiple contractors, you're the <strong>principal contractor</strong> under CDM 2015. You have additional duties:
            </p>

            <ul className="mb-6 space-y-3 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">1.</span>
                <span><strong>Plan, manage, and monitor the project:</strong> Coordinate all construction work to ensure it's carried out safely</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">2.</span>
                <span><strong>Prepare the construction phase plan:</strong> Document how the work will be managed safely</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">3.</span>
                <span><strong>Organize cooperation between contractors:</strong> Hold meetings, share information, coordinate activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">4.</span>
                <span><strong>Ensure contractors provide RAMS:</strong> Review and approve before work starts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">5.</span>
                <span><strong>Check contractor competence:</strong> Only engage contractors with appropriate skills and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">6.</span>
                <span><strong>Provide welfare facilities:</strong> Toilets, washing, drinking water, and rest areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">7.</span>
                <span><strong>Display HSE notification:</strong> If project requires notification (over 30 days/500 person-days)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">8.</span>
                <span><strong>Provide information to HSE:</strong> Respond to inspections and requests for documentation</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="font-semibold text-gray-900 mb-2">Important for Domestic Work</p>
              <p className="text-gray-900">
                On domestic projects (work for homeowners), the principal contractor automatically takes on the client's duties as well. This means you're responsible for ensuring the principal designer is appointed (if needed) and that pre-construction information is provided.
              </p>
            </div>
          </section>

          {/* Common CDM Violations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common CDM 2015 Violations and How to Avoid Them</h2>

            <p className="mb-6 text-gray-900">
              HSE inspectors frequently find these breaches during site inspections:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. No Risk Assessments or Method Statements</h3>
                <p className="text-gray-900 mb-2">
                  Starting work without RAMS or using generic templates that don't match the actual work being done.
                </p>
                <p className="text-sm text-gray-900 italic">
                  <strong>Fix:</strong> Create trade-specific RAMS before starting any job. They must reflect actual site conditions and work methods.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Incompetent or Untrained Workers</h3>
                <p className="text-gray-900 mb-2">
                  Workers lacking necessary qualifications, training, or supervision for their tasks.
                </p>
                <p className="text-sm text-gray-900 italic">
                  <strong>Fix:</strong> Verify and record all worker competence. Maintain copies of CSCS cards, certificates, and training records.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Poor Coordination Between Contractors</h3>
                <p className="text-gray-900 mb-2">
                  Multiple contractors working on the same site without communicating or coordinating activities, creating overlapping risks.
                </p>
                <p className="text-sm text-gray-900 italic">
                  <strong>Fix:</strong> Hold regular coordination meetings. Share RAMS with all contractors. Agree on sequencing to avoid clashes.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. No Construction Phase Plan (Principal Contractors)</h3>
                <p className="text-gray-900 mb-2">
                  Principal contractors failing to create or maintain a construction phase plan.
                </p>
                <p className="text-sm text-gray-900 italic">
                  <strong>Fix:</strong> Document site rules, emergency procedures, welfare arrangements, and how work will be coordinated. Keep it updated.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Inadequate Welfare Facilities</h3>
                <p className="text-gray-900 mb-2">
                  No toilets, washing facilities, or drinking water available to workers.
                </p>
                <p className="text-sm text-gray-900 italic">
                  <strong>Fix:</strong> Confirm welfare provision before work starts. On domestic sites, agree arrangements with clients beforehand.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Not Reporting Notifiable Projects</h3>
                <p className="text-gray-900 mb-2">
                  Failing to notify HSE of projects lasting more than 30 working days or involving more than 500 person-days of work.
                </p>
                <p className="text-sm text-gray-900 italic">
                  <strong>Fix:</strong> Principal contractors must submit F10 notification to HSE before work begins on notifiable projects.
                </p>
              </div>
            </div>
          </section>

          {/* Demonstrating Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Demonstrate CDM 2015 Compliance</h2>

            <p className="mb-6 text-gray-900">
              When HSE inspectors visit your site or clients/principal contractors ask for evidence, you need to show:
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Your Planning</h3>
                <ul className="space-y-2 text-gray-900">
                  <li>• Written risk assessments and method statements</li>
                  <li>• Site-specific induction records (signed by workers)</li>
                  <li>• Briefing records showing RAMS discussed with team</li>
                  <li>• Inspection logs for equipment and site conditions</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prove Competence</h3>
                <ul className="space-y-2 text-gray-900">
                  <li>• Copies of CSCS or trade-specific cards</li>
                  <li>• Certificates for task-specific training (working at height, first aid, etc.)</li>
                  <li>• Evidence of relevant qualifications (NVQs, City & Guilds, Gas Safe, etc.)</li>
                  <li>• Records of supervision arrangements for less experienced workers</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Show Cooperation</h3>
                <ul className="space-y-2 text-gray-900">
                  <li>• Emails providing RAMS to principal contractors</li>
                  <li>• Meeting attendance records</li>
                  <li>• Reports of hazards shared with other duty holders</li>
                  <li>• Agreements on work sequencing and coordination</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence Monitoring</h3>
                <ul className="space-y-2 text-gray-900">
                  <li>• Site diaries recording daily safety checks</li>
                  <li>• Toolbox talk records</li>
                  <li>• Photographs of safety measures implemented</li>
                  <li>• Incident/near-miss reports and follow-up actions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Penalties for CDM 2015 Breaches</h2>

            <p className="mb-6 text-gray-900">
              CDM 2015 is criminal law. Breaches can result in serious consequences:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-3">Potential Penalties:</p>
              <ul className="space-y-3 text-gray-900">
                <li><strong>Improvement Notices:</strong> Legal requirement to fix issues within set timeframe (typically 21 days)</li>
                <li><strong>Prohibition Notices:</strong> Immediate work stoppage until issues resolved (stops your income)</li>
                <li><strong>Fines:</strong> Unlimited for serious breaches. Average fines: £20,000-£100,000+ depending on severity</li>
                <li><strong>Prosecution:</strong> Criminal record affecting future contracts and reputation</li>
                <li><strong>Imprisonment:</strong> Up to 2 years for serious violations causing death or major injury</li>
              </ul>
            </div>

            <p className="text-gray-900 mb-4">
              <strong>Real-world example:</strong> In 2024, a small electrical contractor received a £35,000 fine after a worker was seriously injured due to inadequate risk assessments and poor supervision. The company had no RAMS in place and couldn't demonstrate worker competence.
            </p>

            <p className="text-gray-900">
              HSE takes CDM 2015 breaches seriously. Claiming ignorance is not a defense—you're expected to know and follow the regulations.
            </p>
          </section>

          {/* Final CTA */}
          <section className="mb-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Stay CDM 2015 Compliant</h2>

            <p className="text-lg text-white mb-6">
              Understanding <strong>CDM 2015</strong> is just the start—you must demonstrate compliance with proper documentation, competent workers, and safe working practices.
            </p>

            <ul className="mb-8 space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Meet your legal duties as a contractor</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Avoid HSE enforcement action and penalties</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Win contracts with compliant documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">✓</span>
                <span>Protect your workers and your business</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Generate CDM 2015 Compliant RAMS</h3>
              <p className="text-lg mb-2 text-blue-50">Trade-Specific • Legally Compliant • Instant Download</p>
              <p className="text-3xl font-bold mb-6">£12.99 per document</p>
              <Link
                href="/create"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors no-underline text-lg mb-4"
              >
                Create Your RAMS Now
              </Link>
              <p className="text-sm text-white mt-4">
                Meets all CDM 2015 requirements • Accepted by principal contractors • No subscription
              </p>
            </div>
          </section>

          {/* Article Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "CDM 2015 Regulations Explained: Complete Guide for UK Tradespeople",
              "description": "Understanding Construction Design and Management Regulations 2015 and your legal duties as a contractor",
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
            <Link href="/blog/hse-compliance" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">HSE Compliance for Construction</h3>
              <p className="text-sm text-gray-900">Everything you need to know about Health and Safety Executive compliance</p>
            </Link>
          </div>
        </aside>

      </div>
    </article>
  );
}
