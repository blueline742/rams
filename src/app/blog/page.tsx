import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "RAMS Documentation Guide | UK Health & Safety Resources | FastRAMS",
  description: "Expert guides on RAMS documents, HSE compliance, CDM 2015 regulations, and health & safety for UK tradespeople. Free resources to help you understand and create compliant RAMS.",
};

const blogPosts = [
  {
    slug: 'what-is-rams',
    title: 'What is a RAMS Document? Complete UK Guide 2025',
    excerpt: 'Everything you need to know about Risk Assessment Method Statements (RAMS) in the UK. Learn what RAMS are, why they\'re required, and how to create compliant documents.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Getting Started',
  },
  {
    slug: 'hse-compliance',
    title: 'HSE Compliance for RAMS: Everything You Need to Know',
    excerpt: 'Comprehensive guide to Health and Safety Executive (HSE) compliance for RAMS documents. Understand legal requirements, best practices, and common mistakes to avoid.',
    date: '2025-01-14',
    readTime: '10 min read',
    category: 'Compliance',
  },
  {
    slug: 'cdm-regulations',
    title: 'CDM 2015 Regulations: Method Statement Requirements Explained',
    excerpt: 'Detailed breakdown of Construction (Design and Management) Regulations 2015 and how they affect your RAMS documents. Essential reading for construction professionals.',
    date: '2025-01-13',
    readTime: '12 min read',
    category: 'Regulations',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors">
            ← Back to FastRAMS
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            RAMS Documentation Guide
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert guides, regulations, and best practices for UK tradespeople creating compliant RAMS documents
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your RAMS Document?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop spending hours writing RAMS from scratch. Generate professional, HSE-compliant documents in minutes.
          </p>
          <Link
            href="/create"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Create RAMS Now - £12.99
          </Link>
          <p className="text-sm text-blue-200 mt-4">No subscription • Instant PDF download • Pay only when satisfied</p>
        </div>
      </div>
    </div>
  );
}
