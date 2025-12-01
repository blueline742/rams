import React from 'react';
import { Hazard, Details, Signature } from '@/types';

interface LivePreviewProps {
    trade: string;
    hazards: Hazard[];
    ppe: string[];
    tools: string[];
    methodSteps: string[];
    details: Details;
    signature?: Signature;
}

export default function LivePreview({ trade, hazards, ppe = [], tools = [], methodSteps = [], details, signature }: LivePreviewProps) {
    return (
        <div className="bg-white shadow-lg min-h-[29.7cm] w-full p-[2cm] text-[12pt] font-serif text-black relative select-none print:select-auto">
            {/* Watermark */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-50 opacity-20">
                <div className="transform -rotate-45 text-gray-400 font-bold text-9xl whitespace-nowrap">
                    PREVIEW ONLY
                </div>
            </div>

            {/* Header */}
            <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold uppercase tracking-wider">RAMS Document</h1>
                    <p className="text-gray-600">Risk Assessment & Method Statement</p>
                    {details.companyName && (
                        <p className="text-xl font-bold mt-2 text-blue-800">{details.companyName}</p>
                    )}
                </div>
                <div className="text-right text-sm">
                    <div className="font-bold">Compliant with Health & Safety at Work Act 1974</div>
                </div>
            </div>

            {/* Project Details Table */}
            <div className="mb-8">
                <h3 className="font-bold uppercase border-b border-black mb-2 text-sm">Project Information</h3>
                <table className="w-full border-collapse border border-black text-sm">
                    <tbody>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-gray-100 w-1/3">Trade / Activity</td>
                            <td className="border border-black p-2">{trade || <span className="text-gray-400 italic">[Select Trade]</span>}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-gray-100">Client Name</td>
                            <td className="border border-black p-2">{details.clientName || <span className="text-gray-400 italic">[Enter Client Name]</span>}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-gray-100">Site Address</td>
                            <td className="border border-black p-2">{details.siteAddress || <span className="text-gray-400 italic">[Enter Site Address]</span>}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-gray-100">Date</td>
                            <td className="border border-black p-2">
                                {details.date ? new Date(details.date).toLocaleDateString('en-GB') : <span className="text-gray-400 italic">[Select Date]</span>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* PPE & Tools Section */}
            <div className="mb-8">
                <h3 className="font-bold uppercase border-b border-black mb-2 text-sm">Equipment & Safety Gear</h3>
                <table className="w-full border-collapse border border-black text-sm">
                    <tbody>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-gray-100 w-1/3 align-top">Required PPE</td>
                            <td className="border border-black p-2">
                                {ppe.length > 0 ? ppe.join(', ') : <span className="text-gray-400 italic">[No PPE Selected]</span>}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-gray-100 align-top">Tools & Equipment</td>
                            <td className="border border-black p-2 whitespace-pre-line">
                                {tools.length > 0 ? tools.join(', ') : <span className="text-gray-400 italic">[No Tools Listed]</span>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Method Statement Section */}
            <div className="mb-8 break-inside-avoid">
                <h3 className="font-bold uppercase border-b border-black mb-2 text-sm">Method Statement (Sequence of Works)</h3>
                <div className="border border-black p-4 text-sm">
                    {methodSteps.length > 0 ? (
                        <ol className="list-none space-y-2">
                            {methodSteps.map((step, index) => (
                                <li key={index} className="pl-4 relative">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <span className="text-gray-400 italic">[No steps defined]</span>
                    )}
                </div>
            </div>

            {/* Hazards Table */}
            <div className="mb-8">
                <h3 className="font-bold uppercase border-b border-black mb-2 text-sm">Risk Assessment</h3>
                <p className="mb-2 text-sm italic">The following hazards have been identified and control measures implemented:</p>
                <table className="w-full border-collapse border border-black text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-black p-2 text-left w-5/12">Hazard Identified</th>
                            <th className="border border-black p-2 text-left w-5/12">Control Measures</th>
                            <th className="border border-black p-2 text-center w-1/12 text-xs">L</th>
                            <th className="border border-black p-2 text-center w-1/12 text-xs">S</th>
                            <th className="border border-black p-2 text-center w-1/12 text-xs">R</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hazards.length > 0 ? (
                            hazards.map((h, index) => (
                                <tr key={index}>
                                    <td className="border border-black p-2 align-top">{h.hazard}</td>
                                    <td className="border border-black p-2 align-top">{h.controlMeasure}</td>
                                    <td className="border border-black p-2 text-center align-top">{h.likelihood || 1}</td>
                                    <td className="border border-black p-2 text-center align-top">{h.severity || 1}</td>
                                    <td className={`border border-black p-2 text-center align-top font-bold ${(h.riskScore || 1) >= 15 ? 'text-red-600' :
                                        (h.riskScore || 1) >= 8 ? 'text-orange-600' : 'text-black'
                                        }`}>
                                        {h.riskScore || 1}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="border border-black p-4 text-center text-gray-400 italic">
                                    No hazards selected yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Emergency Procedures Section */}
            <div className="mb-8 break-inside-avoid">
                <h3 className="font-bold uppercase border-b border-black mb-2 text-sm">Emergency Procedures</h3>
                <div className="border border-black p-4 text-sm">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <span className="font-bold block">Emergency Contact:</span>
                            <span>{details.emergencyContact || <span className="text-gray-400 italic">[Enter Contact]</span>}</span>
                        </div>
                        <div>
                            <span className="font-bold block">Nearest Hospital:</span>
                            <span>{details.nearestHospital || <span className="text-gray-400 italic">[Enter Hospital]</span>}</span>
                        </div>
                    </div>
                    <p className="mb-2">In the event of an emergency:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Stop work immediately and make the area safe if possible.</li>
                        <li>Raise the alarm and alert others.</li>
                        <li>Contact the emergency services if required (999).</li>
                        <li>Report to the designated assembly point.</li>
                        <li>Do not re-enter the work area until authorised.</li>
                    </ul>
                </div>
            </div>

            {/* Sign Off Section */}
            <div className="mt-12 break-inside-avoid">
                <h3 className="font-bold uppercase border-b border-black mb-4 text-sm">Declaration & Signature</h3>
                <p className="mb-6 text-sm text-justify">
                    I confirm that I have read and understood the method statement, risk assessment, and emergency procedures above. I agree to work in accordance with the control measures outlined to ensure the safety of myself and others.
                </p>

                <div className="border border-black p-4">
                    {signature && signature.name ? (
                        <div className="space-y-4">
                            <div className="text-xs font-bold mb-3">PREPARED BY:</div>
                            <div className="border-b-2 border-gray-900 pb-2 mb-3" style={{ minHeight: '60px', position: 'relative' }}>
                                <div
                                    className="text-6xl text-blue-900 leading-none"
                                    style={{
                                        fontFamily: 'var(--font-signature), Dancing Script, cursive',
                                        transform: 'rotate(-2deg) translateY(-5px)',
                                        display: 'inline-block',
                                        fontWeight: '700',
                                        letterSpacing: '0.02em'
                                    }}
                                >
                                    {signature.name}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                    <div className="font-bold text-gray-700 mb-1">Position:</div>
                                    <div className="text-gray-900">{signature.position}</div>
                                    {signature.companyName && (
                                        <>
                                            <div className="font-bold text-gray-700 mb-1 mt-2">Company:</div>
                                            <div className="text-gray-900">{signature.companyName}</div>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-700 mb-1">Date Signed:</div>
                                    <div className="text-gray-900 text-base font-semibold">{signature.date}</div>
                                </div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-gray-300">
                                <p className="text-xs text-gray-600 italic">
                                    This electronic signature is legally binding under the Electronic Communications Act 2000
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div className="text-xs font-bold mb-8">Signed (Operative):</div>
                                    <div className="border-b border-black"></div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold mb-8">Date:</div>
                                    <div className="border-b border-black"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-xs font-bold mb-8">Signed (Supervisor):</div>
                                    <div className="border-b border-black"></div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold mb-8">Date:</div>
                                    <div className="border-b border-black"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Verified Badge */}
            <div className="absolute bottom-8 right-8 w-24 h-24 opacity-80 pointer-events-none break-inside-avoid">
                <img src="/verified_badge.png" alt="Verified by InstantRAMS" className="w-full h-full object-contain" />
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-300 pt-2">
                Generated by InstantRAMS - Official UK Health & Safety Documentation
            </div>
        </div>
    );
}
