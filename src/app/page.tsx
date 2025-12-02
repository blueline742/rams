'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, FileText, Zap, Users, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.jpg" alt="FastRAMS Logo" className="h-16 sm:h-20 w-auto" />
              <span className="text-xl sm:text-2xl font-bold text-slate-900">FastRAMS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="#features" className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#trades" className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors">
                Trades
              </Link>
              <Link href="/blog" className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors">
                Guide
              </Link>
              <Link href="#pricing" className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link
                href="/create"
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-0.5"
              >
                Create Document
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
              >
                Features
              </Link>
              <Link
                href="#trades"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
              >
                Trades
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
              >
                Guide
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
              >
                Pricing
              </Link>
              <Link
                href="/create"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg mt-4"
              >
                Create Document
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for generated image - will be replaced by actual image path */}
          <img
            src="/construction_hero_modern_v4.png"
            alt="Construction Site"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now supporting 20+ Trades
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Professional RAMS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Generated in Minutes
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create fully compliant Risk Assessments and Method Statements instantly.
            Trusted by UK tradespeople to secure contracts and ensure safety with FastRAMS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/create"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-300 flex items-center gap-2"
            >
              Start Now - No Sign Up
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="text-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              View Sample
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-400 grayscale opacity-70">
            {/* Logos could go here */}
            <div className="flex items-center gap-2"><Shield size={20} /> HSE Compliant</div>
            <div className="flex items-center gap-2"><FileText size={20} /> PDF Export</div>
            <div className="flex items-center gap-2"><Zap size={20} /> Instant Delivery</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need for compliance</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our generator covers all aspects of health and safety documentation, tailored to your specific trade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Risk Assessments",
                desc: "Identify hazards and control measures specific to your trade with our pre-filled database."
              },
              {
                icon: <FileText className="h-8 w-8 text-indigo-600" />,
                title: "Method Statements",
                desc: "Step-by-step sequence of works to demonstrate safe working practices to clients."
              },
              {
                icon: <Users className="h-8 w-8 text-teal-600" />,
                title: "PPE & Tools",
                desc: "Automatically list required Personal Protective Equipment and tools for the job."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section id="trades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Supported Trades</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We support a wide range of trades with specific hazards and control measures pre-loaded.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Bricklayer', 'Plumber', 'Electrician', 'Carpenter', 'Painter', 'Cleaner', 'Landscaper', 'Roofer', 'Scaffolder', 'Tiler', 'Flooring', 'Plasterer', 'Handyman', 'HVAC', 'Locksmith', 'Glazier', 'Welder', 'Solar Installer'].map((trade) => (
              <div key={trade} className="p-4 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default">
                {trade}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-500 italic">...and many more being added weekly.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              No subscriptions, no hidden fees. Just pay as you go.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 text-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <h3 className="text-2xl font-bold mb-2">Pay Per Document</h3>
              <div className="text-5xl font-extrabold mb-2">£5<span className="text-xl font-normal opacity-80">/doc</span></div>
              <p className="opacity-90">VAT included</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited Edits before purchase',
                  'Instant PDF Download',
                  'Fully HSE Compliant',
                  'Professional Formatting',
                  'Secure Stripe Payment'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/create"
                className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Create Document Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to create your document?</h2>
          <p className="text-blue-100 text-xl mb-10">
            Join thousands of tradespeople who save time and win work with FastRAMS.
            Pay only when you're happy with the preview.
          </p>
          <Link
            href="/create"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Create RAMS Now
          </Link>
          <p className="mt-6 text-blue-200 text-sm">No subscription required • £12.99 per document</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <img src="/logo.jpg" alt="FastRAMS Logo" className="h-16 w-auto mb-4" />
              <p className="text-sm leading-relaxed">
                Professional RAMS documents for UK tradespeople. HSE compliant, instant delivery, no subscription required.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/create" className="text-sm hover:text-blue-400 transition-colors">Create RAMS</Link>
                </li>
                <li>
                  <Link href="#trades" className="text-sm hover:text-blue-400 transition-colors">Supported Trades</Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm hover:text-blue-400 transition-colors">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-sm hover:text-blue-400 transition-colors">RAMS Guide</Link>
                </li>
                <li>
                  <Link href="/blog/what-is-rams" className="text-sm hover:text-blue-400 transition-colors">What is RAMS?</Link>
                </li>
                <li>
                  <Link href="/blog/hse-compliance" className="text-sm hover:text-blue-400 transition-colors">HSE Compliance</Link>
                </li>
                <li>
                  <Link href="/blog/cdm-regulations" className="text-sm hover:text-blue-400 transition-colors">CDM 2015 Guide</Link>
                </li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} FastRAMS. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span>HSE Compliant</span>
              <span>•</span>
              <span>CDM 2015</span>
              <span>•</span>
              <span>Instant PDF</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
