import React, { useState } from 'react';
import { tradeData } from '@/data/tradeData';
import { AlertTriangle, Plus } from 'lucide-react';
import { Hazard } from '@/types';

interface StepHazardsProps {
    trade: string;
    selectedHazards: Hazard[];
    onToggle: (hazard: Hazard) => void;
    onControlMeasureChange: (hazardName: string, value: string) => void;
    onHazardUpdate: (hazardName: string, updates: Partial<Hazard>) => void;
    addCustomHazard: (hazard: Hazard) => void;
}

export default function StepHazards({ trade, selectedHazards, onToggle, onControlMeasureChange, onHazardUpdate, addCustomHazard }: StepHazardsProps) {
    const [customHazardInput, setCustomHazardInput] = useState({
        hazard: '',
        controlMeasure: '',
        likelihood: 3,
        severity: 3
    });
    const [showCustomForm, setShowCustomForm] = useState(false);

    const tradeHazards = tradeData[trade]?.hazards || [];

    const handleCustomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (customHazardInput.hazard && customHazardInput.controlMeasure) {
            const initialRisk = customHazardInput.likelihood * customHazardInput.severity;
            addCustomHazard({
                ...customHazardInput,
                initialRisk,
                residualRisk: Math.max(1, Math.floor(initialRisk / 2))
            });
            setCustomHazardInput({ hazard: '', controlMeasure: '', likelihood: 3, severity: 3 });
            setShowCustomForm(false);
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-700">Risk Assessment for {trade}</h3>
                <p className="text-sm text-blue-600">Select the hazards relevant to this specific job. You can edit the control measures if needed.</p>
            </div>

            <div className="space-y-4">
                {tradeHazards.map((item, index) => {
                    const isSelected = selectedHazards.some(h => h.hazard === item.hazard);
                    const selectedItem = selectedHazards.find(h => h.hazard === item.hazard) || ({} as Partial<Hazard>);

                    return (
                        <div
                            key={index}
                            className={`border rounded-lg p-4 transition-all ${isSelected ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
                        >
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => onToggle(item)}
                                    className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <div className="flex-1">
                                    <div className="font-bold text-gray-800 mb-1">{item.hazard}</div>

                                    {isSelected ? (
                                        <div className="mt-2 space-y-3">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Control Measures</label>
                                                <textarea
                                                    value={selectedItem.controlMeasure || item.controlMeasure}
                                                    onChange={(e) => onControlMeasureChange(item.hazard, e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    rows={2}
                                                />
                                            </div>

                                            {/* Risk Matrix Selectors */}
                                            <div className="grid grid-cols-3 gap-4 bg-white p-3 rounded border border-gray-200">
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Likelihood (1-5)</label>
                                                    <select
                                                        value={selectedItem.likelihood || 1}
                                                        onChange={(e) => {
                                                            const likelihood = parseInt(e.target.value);
                                                            const severity = selectedItem.severity || 1;
                                                            const initialRisk = likelihood * severity;
                                                            onHazardUpdate(item.hazard, { likelihood, severity, initialRisk });
                                                        }}
                                                        className="w-full p-1 text-sm border rounded"
                                                    >
                                                        <option value="1">1 - Rare</option>
                                                        <option value="2">2 - Unlikely</option>
                                                        <option value="3">3 - Possible</option>
                                                        <option value="4">4 - Likely</option>
                                                        <option value="5">5 - Certain</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Severity (1-5)</label>
                                                    <select
                                                        value={selectedItem.severity || 1}
                                                        onChange={(e) => {
                                                            const severity = parseInt(e.target.value);
                                                            const likelihood = selectedItem.likelihood || 1;
                                                            const initialRisk = likelihood * severity;
                                                            onHazardUpdate(item.hazard, { likelihood, severity, initialRisk });
                                                        }}
                                                        className="w-full p-1 text-sm border rounded"
                                                    >
                                                        <option value="1">1 - Minor</option>
                                                        <option value="2">2 - Moderate</option>
                                                        <option value="3">3 - Serious</option>
                                                        <option value="4">4 - Major</option>
                                                        <option value="5">5 - Fatal</option>
                                                    </select>
                                                </div>
                                                <div className="text-center">
                                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Risk Score</label>
                                                    <div className={`font-bold text-lg ${(selectedItem.initialRisk || 1) >= 15 ? 'text-red-600' :
                                                        (selectedItem.initialRisk || 1) >= 8 ? 'text-orange-500' : 'text-green-600'
                                                        }`}>
                                                        {selectedItem.initialRisk || 1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-sm text-gray-600">{item.controlMeasure}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Custom Hazard Section */}
            {!showCustomForm ? (
                <button
                    onClick={() => setShowCustomForm(true)}
                    className="flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Custom Hazard
                </button>
            ) : (
                <form onSubmit={handleCustomSubmit} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-3">Add Custom Hazard</h3>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Hazard Description</label>
                            <input
                                type="text"
                                value={customHazardInput.hazard}
                                onChange={(e) => setCustomHazardInput({ ...customHazardInput, hazard: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="e.g. Working near water"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Control Measure</label>
                            <textarea
                                value={customHazardInput.controlMeasure}
                                onChange={(e) => setCustomHazardInput({ ...customHazardInput, controlMeasure: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="e.g. Wear life jackets, do not work alone"
                                rows={2}
                                required
                            />
                        </div>

                        {/* Risk Assessment */}
                        <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded border border-gray-200">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Likelihood (1-5)</label>
                                <select
                                    value={customHazardInput.likelihood}
                                    onChange={(e) => setCustomHazardInput({ ...customHazardInput, likelihood: parseInt(e.target.value) })}
                                    className="w-full p-2 text-sm border rounded"
                                >
                                    <option value="1">1 - Rare</option>
                                    <option value="2">2 - Unlikely</option>
                                    <option value="3">3 - Possible</option>
                                    <option value="4">4 - Likely</option>
                                    <option value="5">5 - Certain</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Severity (1-5)</label>
                                <select
                                    value={customHazardInput.severity}
                                    onChange={(e) => setCustomHazardInput({ ...customHazardInput, severity: parseInt(e.target.value) })}
                                    className="w-full p-2 text-sm border rounded"
                                >
                                    <option value="1">1 - Minor</option>
                                    <option value="2">2 - Moderate</option>
                                    <option value="3">3 - Serious</option>
                                    <option value="4">4 - Major</option>
                                    <option value="5">5 - Fatal</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Risk Score</label>
                                <div className={`font-bold text-2xl mt-1 ${(customHazardInput.likelihood * customHazardInput.severity) >= 15 ? 'text-red-600' :
                                    (customHazardInput.likelihood * customHazardInput.severity) >= 8 ? 'text-orange-500' : 'text-green-600'
                                    }`}>
                                    {customHazardInput.likelihood * customHazardInput.severity}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 justify-end">
                            <button
                                type="button"
                                onClick={() => setShowCustomForm(false)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Add Hazard
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
