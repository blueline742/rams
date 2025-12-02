import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is a RAMS Document? Complete UK Guide 2025 | FastRAMS',
  description: 'Everything UK tradespeople need to know about RAMS documents. Learn what a risk assessment method statement is, who needs one, and how to create yours in minutes.',
  openGraph: {
    title: 'What is a RAMS Document? Complete UK Guide 2025',
    description: 'Everything UK tradespeople need to know about RAMS documents in 2025.',
    type: 'article',
  },
};

export default function WhatIsRAMSPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-900">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">What is a RAMS Document?</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What is a RAMS Document? Complete UK Guide 2025
          </h1>
          <p className="text-xl text-gray-900 mb-6">
            Everything UK tradespeople need to know about risk assessment method statements
          </p>
          <div className="flex items-center text-sm text-gray-900">
            <time dateTime="2025-01-02">Updated January 2025</time>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-900 leading-relaxed mb-4">
              Picture this: You've just landed a major contract on a commercial site. Everything's sorted—tools, materials, team. Then the site manager asks for your RAMS document. You freeze. You don't have one.
            </p>

            <p className="text-xl text-gray-900 leading-relaxed mb-4">
              Within minutes, you're off the job. The contract goes to someone else. This scenario plays out daily across UK construction sites.
            </p>

            <p className="text-xl text-gray-900 leading-relaxed mb-6">
              A <strong>RAMS document</strong> (Risk Assessment and Method Statement) is a legal document that outlines the hazards involved in your work and the safe methods you'll use to complete it. In 2025, it's not optional—it's essential for any tradesperson working on commercial sites, local authority projects, or larger residential jobs.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Need a RAMS document today?</p>
              <p className="text-gray-900 mb-4">Create a professional, trade-specific RAMS document in under 5 minutes.</p>
              <Link
                href="/create"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors no-underline"
              >
                Generate Your RAMS Now - £12.99
              </Link>
            </div>
          </section>

          {/* What is a RAMS Document */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a RAMS Document?</h2>

            <p className="mb-4 text-gray-900">
              A <strong>RAMS document</strong> combines two critical health and safety components into a single document that demonstrates how you'll carry out work safely and legally.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Two Components:</h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Risk Assessment (RA)</h4>
              <p className="text-gray-900 mb-4">
                The <strong>risk assessment</strong> identifies potential hazards in your work environment and evaluates the likelihood and severity of harm. It covers everything from working at height to electrical hazards, manual handling risks, and environmental dangers.
              </p>
              <p className="text-gray-900">
                Under the Health and Safety at Work Act 1974 and Management of Health and Safety at Work Regulations 1999, UK employers and self-employed tradespeople must conduct risk assessments for their work activities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Method Statement (MS)</h4>
              <p className="text-gray-900 mb-4">
                The <strong>method statement</strong> is your step-by-step plan for completing the work safely. It details the specific procedures, equipment, and control measures you'll implement to eliminate or reduce the risks identified in your risk assessment.
              </p>
              <p className="text-gray-900">
                Think of it as your safety playbook—it tells everyone on site exactly how the job will be done, from start to finish, in the safest way possible.
              </p>
            </div>

            <p className="mb-4 text-gray-900">
              Together, these create a <strong>risk assessment method statement</strong> that satisfies UK legal requirements under the Construction (Design and Management) Regulations 2015 (CDM 2015) and demonstrates your commitment to safe working practices.
            </p>

            <p className="text-gray-900">
              When contractors or site managers ask for "<strong>RAMS</strong>," they're requesting proof that you've thought through the risks and have a solid plan to work safely. It's become standard practice across the UK construction industry.
            </p>
          </section>

          {/* Why Do You Need a RAMS Document */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Do You Need a RAMS Document?</h2>

            <p className="mb-6 text-gray-900">
              In 2025, a <strong>RAMS document</strong> isn't just paperwork—it's a business necessity. Here's why every UK tradesperson needs one:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legal Requirements</h3>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">Legal Alert</p>
              <p className="text-gray-900">
                The Health and Safety Executive (HSE) can issue improvement or prohibition notices if you fail to provide adequate risk assessments. Serious breaches can result in prosecution, with fines reaching £20,000 or more, and in severe cases, imprisonment.
              </p>
            </div>

            <p className="mb-4 text-gray-900">
              Under <strong>CDM 2015</strong>, principal contractors must ensure that all workers have suitable <strong>risk assessment method statements</strong> before work begins. If you're self-employed or run a small trade business, you're legally responsible for creating these documents.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contract Requirements</h3>

            <ul className="mb-6 space-y-2 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Commercial sites:</strong> Nearly 100% of commercial construction projects require RAMS before you set foot on site</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Local authority work:</strong> Council contracts always require compliant <strong>RAMS UK</strong> documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Large residential projects:</strong> Developers and property management companies increasingly demand RAMS</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Insurance work:</strong> Many insurance-backed jobs require proper health and safety documentation</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protecting Your Business</h3>

            <p className="mb-4 text-gray-900">
              Beyond legal compliance, a proper <strong>RAMS document</strong> protects you in multiple ways:
            </p>

            <ul className="mb-6 space-y-2 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Insurance claims:</strong> If an accident occurs, your insurer will ask for your RAMS. Without one, claims may be rejected</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Professional reputation:</strong> Having RAMS ready shows you're professional and safety-conscious</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Competitive advantage:</strong> Win more contracts by having documentation ready immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Legal protection:</strong> Demonstrates due diligence if incidents occur</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real Consequences</h3>

            <p className="mb-4 text-gray-900">
              Without a <strong>RAMS document</strong>, you risk:
            </p>

            <ul className="mb-4 text-gray-900">
              <li>Being turned away from sites (losing day rates of £200-500+)</li>
              <li>Contract termination and loss of future work</li>
              <li>HSE enforcement action and fines</li>
              <li>Invalidated insurance coverage</li>
              <li>Criminal prosecution if accidents occur</li>
              <li>Damage to your professional reputation</li>
            </ul>

            <p className="text-gray-900">
              The bottom line: In 2025, operating without proper <strong>RAMS UK</strong> documentation is a business risk you can't afford to take.
            </p>
          </section>

          {/* CTA Box 2 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't Risk Losing Contracts</h3>
            <p className="text-lg mb-6 text-white">
              Get a professional, trade-specific RAMS document in minutes
            </p>
            <Link
              href="/create"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors no-underline text-lg"
            >
              Create Your RAMS - £12.99
            </Link>
          </div>

          {/* What's Included in a RAMS Document */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included in a RAMS Document?</h2>

            <p className="mb-6 text-gray-900">
              A comprehensive <strong>RAMS document</strong> follows a structured format that meets UK legal requirements. Here's what every proper <strong>risk assessment method statement</strong> should contain:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Risk Assessment Section</h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">1. Project Information</h4>
              <ul className="space-y-2 mb-4 text-gray-900">
                <li>• Project name and location</li>
                <li>• Your company details</li>
                <li>• Date of assessment</li>
                <li>• Review date (typically 12 months)</li>
                <li>• Names of persons at risk</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">2. Hazard Identification</h4>
              <p className="mb-3 text-gray-900">Comprehensive list of potential hazards specific to your trade:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Electricians:</p>
                  <ul className="text-sm space-y-1 text-gray-900">
                    <li>• Electric shock and burns</li>
                    <li>• Arc flash incidents</li>
                    <li>• Working at height (ceiling work)</li>
                    <li>• Manual handling of equipment</li>
                    <li>• Confined spaces</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Plumbers:</p>
                  <ul className="text-sm space-y-1 text-gray-900">
                    <li>• Hot water and steam burns</li>
                    <li>• Working in confined spaces</li>
                    <li>• Legionella exposure</li>
                    <li>• Manual handling (boilers, etc.)</li>
                    <li>• Use of power tools</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Builders/Roofers:</p>
                  <ul className="text-sm space-y-1 text-gray-900">
                    <li>• Falls from height</li>
                    <li>• Falling objects</li>
                    <li>• Manual handling injuries</li>
                    <li>• Dust and fume exposure</li>
                    <li>• Vehicle movements on site</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">General Tradespeople:</p>
                  <ul className="text-sm space-y-1 text-gray-900">
                    <li>• Slips, trips, and falls</li>
                    <li>• Noise exposure</li>
                    <li>• Vibration from tools</li>
                    <li>• Asbestos exposure (older buildings)</li>
                    <li>• Public interaction risks</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">3. Risk Evaluation</h4>
              <p className="mb-3 text-gray-900">Each hazard is assessed using a risk matrix:</p>
              <ul className="space-y-2 text-gray-900">
                <li>• <strong>Likelihood:</strong> How probable is the hazard? (Rare, Unlikely, Possible, Likely, Almost Certain)</li>
                <li>• <strong>Severity:</strong> What's the potential harm? (Insignificant, Minor, Moderate, Major, Catastrophic)</li>
                <li>• <strong>Risk Rating:</strong> Combined score determining priority (Low, Medium, High, Very High)</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">4. Control Measures</h4>
              <p className="mb-3 text-gray-900">Specific actions to eliminate or reduce each risk, following the hierarchy of controls:</p>
              <ul className="space-y-2 text-gray-900">
                <li>• <strong>Elimination:</strong> Remove the hazard entirely</li>
                <li>• <strong>Substitution:</strong> Replace with something safer</li>
                <li>• <strong>Engineering controls:</strong> Barriers, guards, ventilation</li>
                <li>• <strong>Administrative controls:</strong> Training, procedures, signage</li>
                <li>• <strong>PPE:</strong> Personal protective equipment as last resort</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Method Statement Section</h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">1. Scope of Work</h4>
              <p className="mb-4 text-gray-900">Clear description of the work to be undertaken, including:</p>
              <ul className="space-y-2 text-gray-900">
                <li>• Detailed task breakdown</li>
                <li>• Work location specifics</li>
                <li>• Duration and timeline</li>
                <li>• Number of workers involved</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">2. Step-by-Step Method</h4>
              <p className="mb-3 text-gray-900">Sequential breakdown of how work will be completed safely:</p>
              <div className="bg-white rounded p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">Example: Electrical Installation Method</p>
                <ol className="space-y-2 text-sm text-gray-900">
                  <li>1. Conduct site survey and identify isolation points</li>
                  <li>2. Isolate electrical supply and verify isolation</li>
                  <li>3. Erect barriers and warning signage</li>
                  <li>4. Set up safe working platform if required</li>
                  <li>5. Install cable routes and containment</li>
                  <li>6. Pull cables and make terminations</li>
                  <li>7. Test and commission installations</li>
                  <li>8. Remove barriers and clean work area</li>
                </ol>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">3. Equipment and Resources</h4>
              <ul className="space-y-2 text-gray-900">
                <li>• Tools and plant required</li>
                <li>• Materials list</li>
                <li>• PPE requirements (hard hat, gloves, safety boots, hi-vis, etc.)</li>
                <li>• Emergency equipment (first aid, fire extinguisher)</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">4. Personnel and Training</h4>
              <ul className="space-y-2 text-gray-900">
                <li>• Competent persons assigned</li>
                <li>• Relevant qualifications (CSCS, ECS, Gas Safe, etc.)</li>
                <li>• Training records</li>
                <li>• Supervision arrangements</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">5. Emergency Procedures</h4>
              <ul className="space-y-2 text-gray-900">
                <li>• Emergency contact numbers</li>
                <li>• First aid provisions</li>
                <li>• Evacuation procedures</li>
                <li>• Incident reporting process</li>
              </ul>
            </div>

            <p className="mb-4 text-gray-900">
              A professional <strong>RAMS document</strong> typically runs 8-15 pages and must be specific to your trade and the actual work you're doing. Generic templates that aren't customised won't satisfy site managers or HSE inspectors.
            </p>

            <p className="text-gray-900">
              The key is making your <strong>risk assessment method statement</strong> detailed enough to be useful, but practical enough that your team can actually follow it on site.
            </p>
          </section>

          {/* Who Needs a RAMS Document */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs a RAMS Document?</h2>

            <p className="mb-6 text-gray-900">
              If you're working in the UK construction or trades industry, chances are you need a <strong>RAMS document</strong>. Here's the breakdown:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trades That Always Need RAMS:</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Electrical Trades</h4>
                <ul className="text-sm space-y-1 text-gray-900">
                  <li>• Electricians</li>
                  <li>• Electrical contractors</li>
                  <li>• Data/communications installers</li>
                  <li>• Solar panel installers</li>
                  <li>• EV charger installers</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Plumbing & Heating</h4>
                <ul className="text-sm space-y-1 text-gray-900">
                  <li>• Plumbers</li>
                  <li>• Heating engineers</li>
                  <li>• Gas Safe engineers</li>
                  <li>• Bathroom fitters</li>
                  <li>• Drainage specialists</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Building & Construction</h4>
                <ul className="text-sm space-y-1 text-gray-900">
                  <li>• Builders</li>
                  <li>• Bricklayers</li>
                  <li>• Carpenters/joiners</li>
                  <li>• Plasterers</li>
                  <li>• Groundworkers</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Specialist Trades</h4>
                <ul className="text-sm space-y-1 text-gray-900">
                  <li>• Roofers</li>
                  <li>• Scaffolders</li>
                  <li>• Decorators</li>
                  <li>• HVAC engineers</li>
                  <li>• Fire and security installers</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">When You Need a RAMS Document:</h3>

            <ul className="mb-6 space-y-3 text-gray-900">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>All commercial work:</strong> Offices, retail units, industrial premises, schools, hospitals—any commercial property</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Local authority contracts:</strong> Council housing, public buildings, infrastructure projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Construction sites:</strong> New builds, renovations, extensions on commercial scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Large residential projects:</strong> Apartment buildings, housing developments, major renovations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Working for major contractors:</strong> As a subcontractor on managed sites</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>High-risk activities:</strong> Working at height, confined spaces, electrical work, hot works</span>
              </li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">What About Small Domestic Jobs?</h4>
              <p className="text-gray-900 mb-3">
                While <strong>RAMS UK</strong> documentation isn't legally required for basic domestic work (like fitting a new bathroom in a private house), having one demonstrates professionalism and can:
              </p>
              <ul className="text-sm space-y-1">
                <li>• Help you win higher-value domestic contracts</li>
                <li>• Protect you if accidents occur</li>
                <li>• Support insurance claims</li>
                <li>• Show clients you're serious about safety</li>
              </ul>
            </div>

            <p className="text-gray-900">
              The rule of thumb: If a site manager, principal contractor, or client asks for your <strong>RAMS document</strong>, you need one. Don't risk turning up to a job without it—you'll be sent home and likely won't be invited back.
            </p>
          </section>

          {/* How to Create a RAMS Document */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Create a RAMS Document</h2>

            <p className="mb-6 text-gray-900">
              You have three main options for creating a <strong>RAMS document</strong> in 2025. Let's break down the reality of each approach:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 1: Create From Scratch</h3>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">The Traditional Method</p>
              <p className="text-gray-900 mb-4">
                Open Word or Excel, research HSE guidance, identify every hazard for your specific trade and job, evaluate risks, write control measures, create your method statement step by step, format everything professionally, ensure legal compliance with CDM 2015...
              </p>
              <ul className="space-y-2 text-gray-900">
                <li><strong>Time required:</strong> 4-8 hours for your first one</li>
                <li><strong>Cost:</strong> Your time (£200-400 in lost day rate)</li>
                <li><strong>Pros:</strong> Completely tailored to your needs</li>
                <li><strong>Cons:</strong> Extremely time-consuming, risk of missing legal requirements, requires extensive health & safety knowledge</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 2: Use Free Templates</h3>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">The Template Approach</p>
              <p className="text-gray-900 mb-4">
                Download a <strong>method statement template</strong> from the internet, try to adapt it to your specific trade and job, hope it covers all legal requirements...
              </p>
              <ul className="space-y-2 mb-4 text-gray-900">
                <li><strong>Time required:</strong> 2-3 hours to customise properly</li>
                <li><strong>Cost:</strong> Free (but still costs you time)</li>
                <li><strong>Pros:</strong> Starting structure provided, no upfront cost</li>
                <li><strong>Cons:</strong> Usually generic and not trade-specific, may be outdated (pre-2015 regulations), often rejected by site managers, could miss critical hazards</li>
              </ul>
              <p className="text-gray-900 font-semibold">
                Warning: Many free templates online are dangerously generic or don't comply with current <strong>RAMS UK</strong> regulations. Site managers can spot these a mile away.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 3: Professional RAMS Generation</h3>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">The Modern Solution</p>
              <p className="text-gray-900 mb-4">
                Use a specialist service like <strong>FastRAMS</strong> that generates trade-specific, legally compliant <strong>risk assessment method statements</strong> in minutes.
              </p>
              <ul className="space-y-2 mb-4 text-gray-900">
                <li><strong>Time required:</strong> 5-10 minutes</li>
                <li><strong>Cost:</strong> £12.99 per document</li>
                <li><strong>Pros:</strong> Trade-specific content, legally compliant with CDM 2015, professionally formatted, accepted by major contractors, includes all required sections, instant download</li>
                <li><strong>Cons:</strong> Small cost (but saves hours of your time)</li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-2">Cost Comparison:</p>
                <p className="text-sm text-gray-900">
                  If your day rate is £250 and you spend 4 hours creating a RAMS from scratch, that costs you £125 in lost earnings. A £12.99 FastRAMS document saves you £112+ and gets you on site earning money instead of doing paperwork.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes a Good RAMS Document?</h3>

            <p className="mb-4 text-gray-900">Regardless of which method you choose, your <strong>RAMS document</strong> must:</p>

            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Be specific to your trade (electrician, plumber, builder, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Cover the actual work you're doing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Comply with CDM 2015 and current HSE guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Include comprehensive hazard identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Have realistic, practical control measures</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Be professionally formatted and easy to read</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Include emergency procedures</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Have your actual company details</span>
              </li>
            </ul>

            <p className="text-gray-900">
              The smartest tradespeople in 2025 value their time. They know that spending hours on paperwork means losing money. That's why professional RAMS generation is becoming the industry standard.
            </p>
          </section>

          {/* CTA Box 3 */}
          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ready to Create Your RAMS?</h3>
            <div className="text-center mb-6">
              <p className="text-lg text-white mb-2">Professional, trade-specific RAMS documents in 5 minutes</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">£12.99 per document</p>
              <Link
                href="/create"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors no-underline text-lg"
              >
                Generate Your RAMS Now
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-white mt-6">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="font-semibold">5-Minute Generation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✓</div>
                <p className="font-semibold">Legally Compliant</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📄</div>
                <p className="font-semibold">Trade-Specific Content</p>
              </div>
            </div>
          </div>

          {/* Common RAMS Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common RAMS Mistakes to Avoid</h2>

            <p className="mb-6 text-gray-900">
              Site managers and HSE inspectors have seen it all. Here are the mistakes that get <strong>RAMS documents</strong> rejected—and get you sent home from the job:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Using Generic Templates Unchanged</h3>
                <p className="text-gray-900 mb-2">
                  Downloading a <strong>method statement template</strong> and not customising it is obvious. If your RAMS says "insert company name here" or lists hazards irrelevant to your trade, it will be rejected immediately.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Always customise to your specific trade, company, and the actual work being performed.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Outdated Regulations</h3>
                <p className="text-gray-900 mb-2">
                  Many free templates online reference old regulations. The Construction (Design and Management) Regulations changed in 2015. If your <strong>RAMS document</strong> references CDM 2007, it's out of date.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Ensure your RAMS references CDM 2015 and current HSE guidance.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Missing Trade-Specific Hazards</h3>
                <p className="text-gray-900 mb-2">
                  A builder's RAMS shouldn't look like an electrician's. Each trade has unique hazards. If you're an electrician and your <strong>risk assessment method statement</strong> doesn't mention arc flash or isolation procedures, it's inadequate.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Use trade-specific documentation that covers your actual work hazards.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Vague Method Statements</h3>
                <p className="text-gray-900 mb-2">
                  Saying "work will be carried out safely" isn't a method statement. You need specific, step-by-step procedures. How exactly will you isolate electrical supplies? What's your working-at-height procedure?
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Include detailed, sequential steps for how work will be completed safely.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Missing Legal Requirements</h3>
                <p className="text-gray-900 mb-2">
                  <strong>RAMS UK</strong> documents must include risk ratings, control measures, PPE requirements, emergency procedures, and competent person details. Missing sections = rejected document.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Use a comprehensive template or service that includes all mandatory sections.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Unrealistic Control Measures</h3>
                <p className="text-gray-900 mb-2">
                  Saying you'll have a full-time safety supervisor when you're a sole trader isn't credible. Your control measures must be realistic for your business size and the actual job.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Be honest and practical about controls you can actually implement.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">7. Never Reviewed or Updated</h3>
                <p className="text-gray-900 mb-2">
                  A <strong>RAMS document</strong> dated 2018 suggests you haven't reviewed your safety procedures in years. RAMS should be reviewed annually or when work methods change.
                </p>
                <p className="text-sm text-gray-900 italic">
                  Fix: Keep RAMS current with review dates within the last 12 months.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">Pro Tip:</p>
              <p className="text-gray-900">
                The best <strong>RAMS documents</strong> are specific, realistic, and actually useful on site. If your team can't follow it in practice, or if a site manager spots it's generic, you've wasted your time. Quality matters more than speed—unless you use a professional service that delivers both.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About RAMS</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does a RAMS document last?</h3>
                <p className="text-gray-900">
                  A <strong>RAMS document</strong> should be reviewed at least annually or whenever there are significant changes to work methods, equipment, or regulations. Most site managers expect to see a review date within the last 12 months. If your working methods haven't changed and regulations remain the same, you can continue using the same RAMS with an updated review date. However, for each new project, you should review whether the RAMS is appropriate for that specific site and work.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a new RAMS for every job?</h3>
                <p className="text-gray-900">
                  Not necessarily. If you're doing the same type of work repeatedly (for example, domestic electrical installations), you can use the same <strong>risk assessment method statement</strong> for multiple jobs. However, you must review it for each site to ensure it's appropriate. If a new site has unique hazards (confined spaces, working at height, asbestos risk), you need to update or create a new RAMS. Major commercial contracts typically require a site-specific RAMS.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I use the same RAMS template for different trades?</h3>
                <p className="text-gray-900">
                  No. This is one of the most common mistakes. A <strong>RAMS document</strong> must be trade-specific because different trades have completely different hazards. An electrician's RAMS covering electrical isolation and arc flash risks is not appropriate for a plumber dealing with hot water and legionella risks. Site managers will reject generic or wrong-trade <strong>RAMS UK</strong> documents. Always use a <strong>method statement template</strong> designed for your specific trade.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the penalty for not having a RAMS document?</h3>
                <p className="text-gray-900">
                  Immediate consequences include being refused site access (losing that day's earnings) and likely being removed from the contractor's approved list. Legally, if the HSE investigates following an incident and you have no adequate <strong>risk assessment method statement</strong>, you face improvement or prohibition notices, fines up to £20,000 or more, and potential criminal prosecution. Your insurance may also refuse claims if you didn't have proper health and safety documentation. The financial and legal risks far outweigh the small cost and time of creating proper RAMS.
                </p>
              </div>
            </div>

            {/* Schema.org FAQ markup for SEO */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does a RAMS document last?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A RAMS document should be reviewed at least annually or whenever there are significant changes to work methods, equipment, or regulations. Most site managers expect to see a review date within the last 12 months."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a new RAMS for every job?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not necessarily. If you're doing the same type of work repeatedly, you can use the same risk assessment method statement for multiple jobs. However, you must review it for each site to ensure it's appropriate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use the same RAMS template for different trades?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. A RAMS document must be trade-specific because different trades have completely different hazards. Always use a method statement template designed for your specific trade."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the penalty for not having a RAMS document?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Immediate consequences include being refused site access. Legally, you face HSE improvement or prohibition notices, fines up to £20,000 or more, and potential criminal prosecution. Insurance may also refuse claims without proper documentation."
                    }
                  }
                ]
              })}
            </script>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Professional RAMS Document Today</h2>

            <p className="text-lg text-gray-900 mb-4">
              In 2025, a professional <strong>RAMS document</strong> isn't optional—it's essential business equipment for any UK tradesperson. Whether you're an electrician, plumber, builder, or specialist contractor, having proper <strong>risk assessment method statements</strong> ready means you can:
            </p>

            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Access commercial sites and high-value contracts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Meet legal requirements under CDM 2015</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Protect your business from HSE enforcement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Demonstrate professionalism to clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Ensure your insurance remains valid</span>
              </li>
            </ul>

            <p className="text-lg text-white mb-6">
              Don't waste hours creating RAMS from scratch or risk rejection with generic templates. <strong>FastRAMS</strong> generates professional, trade-specific, legally compliant <strong>RAMS UK</strong> documentation in just 5 minutes—for only £12.99.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Create Your RAMS Document in 5 Minutes</h3>
              <p className="text-lg mb-2 text-blue-50">Professional • Trade-Specific • Legally Compliant</p>
              <p className="text-3xl font-bold mb-6">£12.99 per document</p>
              <Link
                href="/create"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors no-underline text-lg mb-4"
              >
                Generate Your RAMS Now
              </Link>
              <p className="text-sm text-white mt-4">
                Instant download • Accepted by major contractors • No subscription required
              </p>
            </div>
          </section>

          {/* Article Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "What is a RAMS Document? Complete UK Guide 2025",
              "description": "Everything UK tradespeople need to know about RAMS documents. Learn what a risk assessment method statement is, who needs one, and how to create yours in minutes.",
              "author": {
                "@type": "Organization",
                "name": "FastRAMS"
              },
              "publisher": {
                "@type": "Organization",
                "name": "FastRAMS",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://fastrams.co.uk/logo.png"
                }
              },
              "datePublished": "2025-01-02",
              "dateModified": "2025-01-02"
            })}
          </script>

        </div>

        {/* Related Articles Section */}
        <aside className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">CDM 2015 Regulations Explained</h3>
              <p className="text-sm text-gray-900">Understanding your legal obligations under Construction Design and Management regulations</p>
            </Link>
            <Link href="/blog" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Trade-Specific RAMS Templates</h3>
              <p className="text-sm text-gray-900">Find the right RAMS documentation for your specific trade and work type</p>
            </Link>
          </div>
        </aside>

      </div>
    </article>
  );
}