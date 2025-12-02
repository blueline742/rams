'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import StepTrade from './StepTrade';
import StepHazards from './StepHazards';
import StepPPE from './StepPPE';
import StepMethod from './StepMethod';
import StepDetails from './StepDetails';
import StepSignature from './StepSignature';
import LivePreview from './LivePreview';
import { tradeData } from '@/data/tradeData';
import { Hazard, Details, Signature } from '@/types';

export default function Wizard() {
    const [step, setStep] = useState(1);
    const [selectedTrade, setSelectedTrade] = useState<string>('');
    const [selectedHazards, setSelectedHazards] = useState<Hazard[]>([]);
    const [customHazards, setCustomHazards] = useState<Hazard[]>([]);
    const [selectedPPE, setSelectedPPE] = useState<string[]>([]);
    const [tools, setTools] = useState<string[]>([]);
    const [methodSteps, setMethodSteps] = useState<string[]>([]);
    const [details, setDetails] = useState<Details>({
        companyName: '',
        clientName: '',
        siteAddress: '',
        date: '',
        emergencyContact: '',
        nearestHospital: '',
    });
    const [signature, setSignature] = useState<Signature>({
        name: '',
        position: '',
        date: new Date().toISOString().split('T')[0],
        companyName: '',
    });

    const handleTradeSelect = (trade: string) => {
        setSelectedTrade(trade);
        // Reset hazards and other data when trade changes
        setSelectedHazards([]);
        setCustomHazards([]);
        setSelectedPPE([]);
        setTools([]);
        setMethodSteps([]);
    };

    const handleHazardToggle = (hazard: Hazard) => {
        if (selectedHazards.some(h => h.hazard === hazard.hazard)) {
            setSelectedHazards(selectedHazards.filter(h => h.hazard !== hazard.hazard));
        } else {
            setSelectedHazards([...selectedHazards, hazard]);
        }
    };

    const handleControlMeasureChange = (hazardName: string, newControlMeasure: string) => {
        setSelectedHazards(prev => prev.map(h =>
            h.hazard === hazardName ? { ...h, controlMeasure: newControlMeasure } : h
        ));
    };

    const handleHazardUpdate = (hazardName: string, updates: Partial<Hazard>) => {
        setSelectedHazards(prev => prev.map(h =>
            h.hazard === hazardName ? { ...h, ...updates } : h
        ));
    };

    const addCustomHazard = (hazard: Hazard) => {
        setCustomHazards([...customHazards, hazard]);
        setSelectedHazards([...selectedHazards, hazard]);
    };

    const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDetails(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 6));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleBuy = async () => {
        // Save data to localStorage for retrieval after payment
        localStorage.setItem('ramsData', JSON.stringify({
            trade: selectedTrade,
            hazards: selectedHazards,
            ppe: selectedPPE,
            tools: tools,
            methodSteps: methodSteps,
            details: details,
            signature: signature
        }));

        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ trade: selectedTrade }),
            });

            const { sessionId, error } = await response.json();

            if (error) {
                alert('Payment Error: ' + error);
                return;
            }

            if (stripe) {
                await (stripe as any).redirectToCheckout({ sessionId });
            }
        } catch (err) {
            console.error('Checkout Error:', err);
            alert('Failed to initiate checkout.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            {/* Left Side: Wizard Controls */}
            <div className="w-full lg:w-1/2 p-8 overflow-y-auto">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-gray-900">Create Your RAMS</h1>

                    {/* Progress Indicator */}
                    <div className="flex items-center mb-8">
                        {[1, 2, 3, 4, 5, 6].map((s) => (
                            <div key={s} className={`flex items-center ${s < 6 ? 'flex-1' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {s}
                                </div>
                                {s < 6 && (
                                    <div className={`h-1 w-full mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-200'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Steps */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        {step === 1 && (
                            <StepTrade
                                selectedTrade={selectedTrade}
                                onSelect={handleTradeSelect}
                            />
                        )}
                        {step === 2 && (
                            <StepHazards
                                trade={selectedTrade}
                                selectedHazards={selectedHazards}
                                onToggle={handleHazardToggle}
                                onControlMeasureChange={handleControlMeasureChange}
                                onHazardUpdate={handleHazardUpdate}
                                addCustomHazard={addCustomHazard}
                            />
                        )}
                        {step === 3 && (
                            <StepPPE
                                tradeData={tradeData[selectedTrade]}
                                selectedPPE={selectedPPE}
                                setSelectedPPE={setSelectedPPE}
                                tools={tools}
                                setTools={setTools}
                            />
                        )}
                        {step === 4 && (
                            <StepMethod
                                tradeData={tradeData[selectedTrade]}
                                steps={methodSteps}
                                setSteps={setMethodSteps}
                            />
                        )}
                        {step === 5 && (
                            <StepDetails
                                details={details}
                                onChange={handleDetailsChange}
                                onLogoChange={(logo) => setDetails({ ...details, companyLogo: logo || undefined })}
                            />
                        )}
                        {step === 6 && (
                            <StepSignature
                                signature={signature}
                                onChange={setSignature}
                            />
                        )}

                        {/* Navigation Buttons */}
                        {/* Mobile-only Preview PDF Button */}
                        <div className="lg:hidden mt-6 mb-4">
                            <button
                                onClick={async () => {
                                    const { generatePDF } = await import('@/utils/pdfGenerator');
                                    const pdf = generatePDF(selectedTrade, selectedHazards, selectedPPE, tools, methodSteps, details, signature);
                                    pdf.output('dataurlnewwindow');
                                }}
                                className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                Preview PDF
                            </button>
                        </div>

                        <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
                            <button
                                onClick={prevStep}
                                disabled={step === 1}
                                className={`px-6 py-2 rounded-md ${step === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                Back
                            </button>
                            <button
                                onClick={step === 6 ? handleBuy : nextStep}
                                disabled={(step === 1 && !selectedTrade) || (step === 6 && (!signature.name || !signature.position))}
                                className={`px-6 py-2 rounded-md ${((step === 1 && !selectedTrade) || (step === 6 && (!signature.name || !signature.position)))
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                {step === 6 ? 'Buy Now (£12.99)' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Live Preview - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:w-1/2 bg-gray-200 p-8 overflow-y-auto border-l border-gray-300">
                <div>
                    <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-200 py-4 z-10">
                        <h2 className="text-xl font-semibold text-gray-700">Live Preview</h2>
                        <button
                            onClick={async () => {
                                const { generatePDF } = await import('@/utils/pdfGenerator');
                                const pdf = generatePDF(selectedTrade, selectedHazards, selectedPPE, tools, methodSteps, details, signature);
                                pdf.output('dataurlnewwindow');
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Preview PDF
                        </button>
                    </div>
                    <LivePreview
                        trade={selectedTrade}
                        hazards={selectedHazards}
                        ppe={selectedPPE}
                        tools={tools}
                        methodSteps={methodSteps}
                        details={details}
                        signature={signature}
                    />
                </div>
            </div>
        </div>
    );
}
