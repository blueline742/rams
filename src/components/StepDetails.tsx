import React from 'react';
import { FileText, Upload, X } from 'lucide-react';
import { Details } from '@/types';

interface StepDetailsProps {
    details: Details;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onLogoChange?: (logo: string | null) => void;
}

export default function StepDetails({ details, onChange, onLogoChange }: StepDetailsProps) {
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && onLogoChange) {
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('Logo file size must be less than 2MB');
                return;
            }

            // Check file type
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                onLogoChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeLogo = () => {
        if (onLogoChange) {
            onLogoChange(null);
        }
    };
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Project Details
            </h2>
            <p className="text-gray-600 mb-6">Enter the specific details for this project to complete the document.</p>

            <div className="space-y-6">
                {/* Company Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={details.companyName || ''}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. Acme Construction Ltd"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Address <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                name="companyAddress"
                                value={details.companyAddress || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. Unit 5, Trading Estate, London"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Phone <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="tel"
                                name="companyPhone"
                                value={details.companyPhone || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. 020 7123 4567"
                            />
                        </div>

                        {/* Logo Upload */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company Logo <span className="text-gray-400 text-xs">(Optional - appears on PDF cover)</span>
                            </label>
                            {details.companyLogo ? (
                                <div className="flex items-start gap-4">
                                    <img
                                        src={details.companyLogo}
                                        alt="Company Logo"
                                        className="h-20 w-auto border border-gray-300 rounded object-contain bg-white p-2"
                                    />
                                    <button
                                        type="button"
                                        onClick={removeLogo}
                                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded flex items-center gap-1"
                                    >
                                        <X className="w-4 h-4" />
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <input
                                        type="file"
                                        id="logo-upload"
                                        accept="image/*"
                                        onChange={handleLogoUpload}
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="logo-upload"
                                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                    >
                                        <Upload className="w-4 h-4" />
                                        <span className="text-sm">Upload Logo</span>
                                    </label>
                                    <p className="text-xs text-gray-500 mt-1">PNG, JPG or SVG (max 2MB)</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Project Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Project Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Project Description <span className="text-gray-400 text-xs">(Recommended)</span>
                            </label>
                            <input
                                type="text"
                                name="projectDescription"
                                value={details.projectDescription || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. First Floor Extension - Residential Property, Main Street"
                            />
                            <p className="text-xs text-gray-500 mt-1">This will appear as the main title on your RAMS cover page</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Client Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="clientName"
                                value={details.clientName}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. ABC Property Developments"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Project Reference <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                name="projectReference"
                                value={details.projectReference || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. PROJ-2025-001"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Site Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="siteAddress"
                                value={details.siteAddress}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. 123 High Street, London, SW1A 1AA"
                                rows={2}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Assessment Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={details.date}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Work Start Date <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="date"
                                name="workStartDate"
                                value={details.workStartDate || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Work End Date <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="date"
                                name="workEndDate"
                                value={details.workEndDate || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Supervisor Name <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                name="supervisorName"
                                value={details.supervisorName || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. John Smith"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Supervisor Phone <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="tel"
                                name="supervisorPhone"
                                value={details.supervisorPhone || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. 07700 900123"
                            />
                        </div>
                    </div>
                </div>

                {/* Emergency Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                        <span className="text-red-600">⚠</span> Emergency Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Emergency Contact <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="emergencyContact"
                                value={details.emergencyContact || ''}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. Site Manager - 07700 900 000"
                            />
                            <p className="text-xs text-gray-500 mt-1">Name and phone number</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nearest Hospital <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="nearestHospital"
                                value={details.nearestHospital || ''}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. St Thomas' Hospital (2 miles)"
                            />
                            <p className="text-xs text-gray-500 mt-1">Name and distance from site</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Aid Kit Location <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                name="firstAidLocation"
                                value={details.firstAidLocation || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. Site office, main entrance"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Assembly Point <span className="text-gray-400 text-xs">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                name="assemblyPoint"
                                value={details.assemblyPoint || ''}
                                onChange={onChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. Car park, North gate"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
