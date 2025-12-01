import React from 'react';
import { Signature } from '@/types';
import { PenTool, Calendar, Briefcase } from 'lucide-react';

interface StepSignatureProps {
    signature: Signature;
    onChange: (signature: Signature) => void;
}

export default function StepSignature({ signature, onChange }: StepSignatureProps) {
    const today = new Date().toISOString().split('T')[0];

    const handleChange = (field: keyof Signature, value: string) => {
        onChange({ ...signature, [field]: value });
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-700 flex items-center gap-2">
                    <PenTool className="w-5 h-5" />
                    Sign Your RAMS Document
                </h3>
                <p className="text-sm text-blue-600 mt-1">
                    Add your digital signature to make this document official and legally binding.
                </p>
            </div>

            <div className="space-y-6">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={signature.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        required
                    />

                    {/* Signature Preview */}
                    {signature.name && (
                        <div className="mt-4 p-6 bg-white border-2 border-blue-200 rounded-lg shadow-sm">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">Signature Preview</div>
                            <div className="border-b-2 border-gray-800 pb-2 mb-3">
                                <div
                                    className="text-6xl font-signature text-blue-900 leading-none"
                                    style={{
                                        fontFamily: "'Dancing Script', cursive",
                                        transform: "rotate(-2deg)",
                                        display: "inline-block",
                                        fontWeight: "700"
                                    }}
                                >
                                    {signature.name}
                                </div>
                            </div>
                            <div className="flex justify-between items-start text-xs text-gray-600">
                                <div>
                                    <div className="font-semibold">{signature.position || 'Position not specified'}</div>
                                    {signature.companyName && (
                                        <div className="text-gray-500">{signature.companyName}</div>
                                    )}
                                </div>
                                <div className="text-right">
                                    <div className="font-semibold">Signed on</div>
                                    <div>{signature.date || today}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Position/Role */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Position/Role <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={signature.position}
                        onChange={(e) => handleChange('position', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. Site Manager, Project Supervisor, Contract Manager"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">Your role or job title</p>
                </div>

                {/* Company Name (Optional) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name (Optional)
                    </label>
                    <input
                        type="text"
                        value={signature.companyName || ''}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Company name (if different from PREPARED BY section)"
                    />
                    <p className="text-xs text-gray-500 mt-1">Leave blank to use company from Project Details</p>
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date Signed <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        value={signature.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        max={today}
                        required
                    />
                </div>

                {/* Information Box */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 text-sm mb-2">✓ Legal Validity</h4>
                    <p className="text-xs text-green-700">
                        Your typed signature is legally valid under the Electronic Communications Act 2000.
                        By signing this document, you confirm that the information provided is accurate and
                        that appropriate control measures will be implemented.
                    </p>
                </div>
            </div>
        </div>
    );
}
