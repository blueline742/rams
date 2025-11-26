'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import StepTrade from './StepTrade';
import StepHazards from './StepHazards';
import StepPPE from './StepPPE';
import StepMethod from './StepMethod';
import StepDetails from './StepDetails';
import LivePreview from './LivePreview';
import { tradeData } from '@/data/tradeData';
import { Hazard, Details } from '@/types';

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

    const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleBuy = async () => {
        // Save data to localStorage for retrieval after payment
        localStorage.setItem('ramsData', JSON.stringify({
            trade: selectedTrade,
            hazards: selectedHazards,
            ppe: selectedPPE,
            tools: tools,
            methodSteps: methodSteps,
            details: details
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
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className={`flex items-center ${s < 5 ? 'flex-1' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {s}
                                </div>
                                {s < 5 && (
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
                            />
                        )}

                        {/* Navigation Buttons */}
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
                                onClick={step === 5 ? handleBuy : nextStep}
                                disabled={step === 1 && !selectedTrade}
                                className={`px-6 py-2 rounded-md ${(step === 1 && !selectedTrade)
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                {step === 5 ? 'Buy Now (£5)' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Live Preview */}
            <div className="w-full lg:w-1/2 bg-gray-200 p-8 overflow-y-auto border-l border-gray-300">
                <div className="sticky top-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Live Preview</h2>
                    <LivePreview
                        trade={selectedTrade}
                        hazards={selectedHazards}
                        ppe={selectedPPE}
                        tools={tools}
                        methodSteps={methodSteps}
                        details={details}
                    />
                </div>
            </div>
        </div>
    );
}
