import React from 'react';
import { tradeData } from '@/data/tradeData';
import { Briefcase } from 'lucide-react';

interface StepTradeProps {
    selectedTrade: string;
    onSelect: (trade: string) => void;
}

export default function StepTrade({ selectedTrade, onSelect }: StepTradeProps) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Select Your Trade
            </h2>
            <p className="text-gray-600 mb-6">Choose the trade that best describes the work you are undertaking.</p>

            <div className="space-y-3">
                {Object.keys(tradeData).sort().map((trade) => (
                    <label
                        key={trade}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${selectedTrade === trade
                            ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                    >
                        <input
                            type="radio"
                            name="trade"
                            value={trade}
                            checked={selectedTrade === trade}
                            onChange={() => onSelect(trade)}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-3 font-medium text-gray-900">{trade}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
