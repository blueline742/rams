'use client';

import React from 'react';

export default function RebrandingBanner() {
    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-2xl border border-white/20">
                    <svg
                        className="w-20 h-20 mx-auto mb-6 text-white animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        We're Rebranding!
                    </h1>
                    <p className="text-lg sm:text-2xl text-white/90 font-medium leading-relaxed">
                        We are currently rebranding to a new name. This website and the <span className="font-bold">fastrams.co.uk</span> domain will soon automatically redirect to our new home.
                    </p>
                    <p className="text-xl sm:text-3xl text-white font-bold mt-8">
                        Stay tuned!
                    </p>
                </div>
            </div>
        </div>
    );
}
