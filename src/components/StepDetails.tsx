import React from 'react';
import { FileText } from 'lucide-react';
import { Details } from '@/types';

interface StepDetailsProps {
    details: Details;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function StepDetails({ details, onChange }: StepDetailsProps) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Project Details
            </h2>
            <p className="text-gray-600 mb-6">Enter the specific details for this project to complete the document.</p>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={details.companyName || ''}
                            onChange={onChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Acme Construction Ltd"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                        <input
                            type="text"
                            name="clientName"
                            value={details.clientName}
                            onChange={onChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. ABC Construction Ltd"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Site Address</label>
                        <textarea
                            name="siteAddress"
                            value={details.siteAddress}
                            onChange={onChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. 123 High Street, London, SW1A 1AA"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={details.date}
                            onChange={onChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Emergency Information</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact (Name & Number)</label>
                            <input
                                type="text"
                                name="emergencyContact"
                                value={details.emergencyContact || ''}
                                onChange={onChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g. Site Manager - 07700 900 000"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nearest Hospital (Name & Distance)</label>
                            <input
                                type="text"
                                name="nearestHospital"
                                value={details.nearestHospital || ''}
                                onChange={onChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g. St Thomas' Hospital (2 miles)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
