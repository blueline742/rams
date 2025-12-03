'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, Download, Home } from 'lucide-react';
import { generatePDF } from '@/utils/pdfGenerator';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (sessionId) {
      // In a real app, verify session with backend here
      setIsReady(true);

      // Retrieve data from localStorage to generate PDF
      // NOTE: This relies on data persisting. For a robust app, we'd save state to DB or pass via metadata.
      // For this MVP, we'll assume the user just came from the wizard.
    }
  }, [sessionId]);

  const handleDownload = () => {
    const savedData = localStorage.getItem('ramsData');
    if (savedData) {
      const { trade, hazards, ppe, tools, methodSteps, details, signature } = JSON.parse(savedData);
      const doc = generatePDF(trade, hazards, ppe, tools, methodSteps, details, signature);
      doc.save(`RAMS-${details.clientName || 'Document'}.pdf`);
    } else {
      alert('Document data not found. Please recreate the document.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.jpg" alt="FastRAMS Logo" className="h-16 w-auto mx-auto" />
        </div>

        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Successful!</h1>
        <p className="text-gray-600 mb-2">Thank you for your purchase. Your RAMS document is ready to download.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 mt-4">
          <p className="text-sm text-blue-800">
            📧 <strong>A copy has been emailed to you</strong> (check your spam folder if you don't see it within 5 minutes)
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 mb-4 shadow-lg hover:shadow-xl transition-all"
        >
          <Download className="mr-2 h-6 w-6" />
          Download PDF Now
        </button>

        <button
          onClick={() => router.push('/')}
          className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all"
        >
          <Home className="mr-2 h-5 w-5" />
          Create Another Document
        </button>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Email us at <a href="mailto:support@fastrams.co.uk" className="text-blue-600 hover:underline font-medium">support@fastrams.co.uk</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
