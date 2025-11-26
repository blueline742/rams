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
      const { trade, hazards, ppe, tools, methodSteps, details } = JSON.parse(savedData);
      const doc = generatePDF(trade, hazards, ppe, tools, methodSteps, details);
      doc.save(`RAMS-${details.clientName || 'Document'}.pdf`);
    } else {
      alert('Document data not found. Please recreate the document.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your RAMS document is ready to download.</p>

        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mb-4"
        >
          <Download className="mr-2 h-5 w-5" />
          Download PDF
        </button>

        <button
          onClick={() => router.push('/')}
          className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Home className="mr-2 h-5 w-5" />
          Create Another
        </button>
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
