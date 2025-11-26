import React, { useEffect } from 'react';
import { ClipboardList, Plus, Trash2, GripVertical } from 'lucide-react';
import { TradeDataEntry } from '@/types';

interface StepMethodProps {
    tradeData: TradeDataEntry;
    steps: string[];
    setSteps: (steps: string[]) => void;
}

export default function StepMethod({ tradeData, steps, setSteps }: StepMethodProps) {

    // Initialize steps if empty
    useEffect(() => {
        if (steps.length === 0 && tradeData?.sequence) {
            setSteps(tradeData.sequence);
        }
    }, [tradeData, steps, setSteps]);

    const handleStepChange = (index: number, value: string) => {
        const newSteps = [...steps];
        newSteps[index] = value;
        setSteps(newSteps);
    };

    const addStep = () => {
        setSteps([...steps, `${steps.length + 1}. `]);
    };

    const removeStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                        <ClipboardList size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800">Method Statement (Sequence of Works)</h2>
                </div>

                <p className="text-sm text-slate-500 mb-4">
                    Review and edit the step-by-step procedure for this job. Ensure all safety controls are mentioned where relevant.
                </p>

                <div className="space-y-3">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-2 items-start group">
                            <div className="mt-3 text-slate-400 cursor-move">
                                <GripVertical size={16} />
                            </div>
                            <textarea
                                className="flex-1 p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm min-h-[60px]"
                                value={step}
                                onChange={(e) => handleStepChange(index, e.target.value)}
                            />
                            <button
                                onClick={() => removeStep(index)}
                                className="mt-2 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                title="Remove step"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    onClick={addStep}
                    className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                    <Plus size={18} />
                    Add Step
                </button>
            </div>
        </div>
    );
}
