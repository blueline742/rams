import React, { useEffect } from 'react';
import { Shield, Wrench } from 'lucide-react';
import { TradeDataEntry } from '@/types';

interface StepPPEProps {
    tradeData: TradeDataEntry;
    selectedPPE: string[];
    setSelectedPPE: (ppe: string[]) => void;
    tools: string[];
    setTools: (tools: string[]) => void;
}

export default function StepPPE({ tradeData, selectedPPE, setSelectedPPE, tools, setTools }: StepPPEProps) {
    // Standard PPE list to choose from
    const allPPE = [
        'Hard Hat', 'Safety Boots', 'Hi-Vis Vest', 'Gloves',
        'Eye Protection', 'Ear Defenders', 'Dust Mask',
        'Knee Pads', 'Overalls', 'Harness'
    ];

    // Initialize tools if empty
    useEffect(() => {
        if (tools.length === 0 && tradeData?.tools) {
            setTools(tradeData.tools);
        }
    }, [tradeData, tools, setTools]);

    // Initialize PPE if empty
    useEffect(() => {
        if (selectedPPE.length === 0 && tradeData?.ppe) {
            setSelectedPPE(tradeData.ppe);
        }
    }, [tradeData, selectedPPE, setSelectedPPE]);

    const togglePPE = (item: string) => {
        if (selectedPPE.includes(item)) {
            setSelectedPPE(selectedPPE.filter(i => i !== item));
        } else {
            setSelectedPPE([...selectedPPE, item]);
        }
    };

    const handleToolsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Split by comma or newline for storage, but we'll just edit as a text block for now
        // Actually, let's keep it simple: Textarea that splits by newlines
        const val = e.target.value;
        setTools(val.split('\n').filter(t => t.trim() !== ''));
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <Shield size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800">Personal Protective Equipment (PPE)</h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {allPPE.map((item) => (
                        <button
                            key={item}
                            onClick={() => togglePPE(item)}
                            className={`p-3 rounded-lg border text-left transition-all ${selectedPPE.includes(item)
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-slate-200 hover:border-blue-300 text-slate-600'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedPPE.includes(item) ? 'bg-blue-500 border-blue-500' : 'border-slate-300'
                                    }`}>
                                    {selectedPPE.includes(item) && <div className="w-2 h-2 bg-white rounded-sm" />}
                                </div>
                                {item}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                        <Wrench size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800">Tools & Equipment</h2>
                </div>

                <p className="text-sm text-slate-500 mb-2">Edit the list of tools required for this job (one per line):</p>
                <textarea
                    className="w-full h-40 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    value={tools.join('\n')}
                    onChange={handleToolsChange}
                    placeholder="Hammer&#10;Drill&#10;Ladder"
                />
            </div>
        </div>
    );
}
