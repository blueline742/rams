'use client';

import React, { useState, useEffect } from 'react';

const CORRECT_USERNAME = 'fastrams';
const CORRECT_PASSWORD = 'demo2024';
const STORAGE_KEY = 'fastrams_preview_auth';

export default function RebrandingBanner() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        setIsAuthenticated(stored === 'true');
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            localStorage.setItem(STORAGE_KEY, 'true');
            setIsAuthenticated(true);
        } else {
            setError('Incorrect username or password. Please try again.');
            setShake(true);
            setTimeout(() => setShake(false), 600);
        }
    };

    // Still loading from localStorage — render nothing to avoid flash
    if (isAuthenticated === null) return null;
    // Authenticated — don't show the overlay, let the site through
    if (isAuthenticated === true) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto px-6">
                <div
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/20 ${shake ? 'animate-shake' : ''}`}
                >
                    {/* Logo / Title */}
                    <div className="text-center mb-8">
                        <img src="/logo.jpg" alt="FastRAMS Logo" className="h-16 w-auto mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-white">Preview Access</h1>
                        <p className="text-white/70 text-sm mt-1">Enter your credentials to view the site</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-white/80 mb-1">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition"
                                placeholder="Enter username"
                                autoComplete="username"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition"
                                placeholder="Enter password"
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-red-300 text-sm text-center font-medium">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-white text-blue-700 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-all mt-2 shadow-lg transform hover:-translate-y-0.5"
                        >
                            Enter Site →
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-8px); }
                    40% { transform: translateX(8px); }
                    60% { transform: translateX(-6px); }
                    80% { transform: translateX(6px); }
                }
                .animate-shake {
                    animation: shake 0.6s ease-in-out;
                }
            `}</style>
        </div>
    );
}
