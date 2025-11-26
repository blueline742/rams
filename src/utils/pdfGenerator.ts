import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { Hazard, Details } from '@/types';

export const generatePDF = (trade: string, hazards: Hazard[], ppe: string[], tools: string[], methodSteps: string[], details: Details) => {
  const doc = new jsPDF();

  // Fonts
  doc.setFont('times', 'normal');

  // Header
  doc.setFontSize(24);
  doc.setTextColor(44, 62, 80);
  doc.text('RAMS Document', 20, 20);

  doc.setFontSize(16);
  doc.setTextColor(100);
  doc.text('Risk Assessment & Method Statement', 20, 30);

  if (details.companyName) {
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102); // Dark blue
    doc.text(details.companyName, 20, 40);
  }

  // The line below was originally at y=32, but with the new header structure,
  // it should be placed after the header content, potentially at a different Y coordinate.
  // Given the instruction's placement, and the new header's last text at y=40,
  // a line at y=45 or similar would make sense to separate the header from project info.
  // However, the instruction explicitly keeps `doc.line(20, 32, 190, 32);`
  // and places it after the companyName block. This might cause overlap if companyName is present.
  // For faithful reproduction, I will place it as instructed, but note the potential visual issue.
  doc.line(20, 45, 190, 45); // Adjusted Y coordinate to avoid overlap with new header content

  // Project Information
  doc.setFontSize(12);
  doc.setFont('times', 'bold');
  doc.text('PROJECT INFORMATION', 20, 45);

  const formattedDate = details.date ? new Date(details.date).toLocaleDateString('en-GB') : 'N/A';

  const projectData = [
    ['Trade / Activity', trade || 'N/A'],
    ['Client Name', details.clientName || 'N/A'],
    ['Site Address', details.siteAddress || 'N/A'],
    ['Date', formattedDate]
  ];

  (doc as any).autoTable({
    startY: 50,
    head: [],
    body: projectData,
    theme: 'plain',
    styles: { font: 'times', fontSize: 11, cellPadding: 2, lineColor: [0, 0, 0], lineWidth: 0.1 },
    columnStyles: { 0: { fontStyle: 'bold', fillColor: [240, 240, 240], cellWidth: 60 } },
  });

  // PPE & Tools
  let finalY = (doc as any).lastAutoTable.finalY + 15;
  doc.setFont('times', 'bold');
  doc.text('EQUIPMENT & SAFETY GEAR', 20, finalY);

  const equipmentData = [
    ['Required PPE', ppe && ppe.length > 0 ? ppe.join(', ') : 'N/A'],
    ['Tools & Equipment', tools && tools.length > 0 ? tools.join(', ') : 'N/A']
  ];

  (doc as any).autoTable({
    startY: finalY + 5,
    head: [],
    body: equipmentData,
    theme: 'plain',
    styles: { font: 'times', fontSize: 11, cellPadding: 2, lineColor: [0, 0, 0], lineWidth: 0.1 },
    columnStyles: { 0: { fontStyle: 'bold', fillColor: [240, 240, 240], cellWidth: 60 } },
  });

  // Method Statement
  finalY = (doc as any).lastAutoTable.finalY + 15;

  // Check for page break
  if (finalY > 250) {
    doc.addPage();
    finalY = 20;
  }

  doc.setFont('times', 'bold');
  doc.text('METHOD STATEMENT (SEQUENCE OF WORKS)', 20, finalY);

  doc.setFont('times', 'normal');
  doc.setFontSize(11);

  let currentY = finalY + 10;

  if (methodSteps && methodSteps.length > 0) {
    methodSteps.forEach((step) => {
      // Check for page break inside loop
      if (currentY > 270) {
        doc.addPage();
        currentY = 20;
      }

      const splitText = doc.splitTextToSize(step, 170);
      doc.text(splitText, 20, currentY);
      currentY += (splitText.length * 5) + 2; // Adjust spacing based on lines
    });
  } else {
    doc.text('No method statement provided.', 20, currentY);
    currentY += 10;
  }

  // Hazards
  finalY = currentY + 10;

  if (finalY > 250) {
    doc.addPage();
    finalY = 20;
  }

  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text('RISK ASSESSMENT', 20, finalY);
  doc.setFont('times', 'italic');
  doc.setFontSize(10);
  doc.text('The following hazards have been identified and control measures implemented:', 20, finalY + 6);

  const hazardData = hazards.map(h => [h.hazard, h.controlMeasure]);

  if (hazardData.length === 0) {
    hazardData.push(['No hazards selected', 'N/A']);
  }

  (doc as any).autoTable({
    startY: finalY + 10,
    head: [['Hazard Identified', 'Control Measures']],
    body: hazardData,
    theme: 'plain',
    headStyles: { font: 'times', fontStyle: 'bold', fillColor: [240, 240, 240], textColor: [0, 0, 0], lineColor: [0, 0, 0], lineWidth: 0.1 },
    styles: { font: 'times', fontSize: 10, cellPadding: 3, lineColor: [0, 0, 0], lineWidth: 0.1 },
  });

  // Emergency Procedures
  finalY = (doc as any).lastAutoTable.finalY + 15;

  if (finalY > 250) {
    doc.addPage();
    finalY = 20;
  }

  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text('EMERGENCY PROCEDURES', 20, finalY);

  doc.setFont('times', 'normal');
  doc.setFontSize(10);

  let emergencyY = finalY + 10;

  doc.text(`Emergency Contact: ${details.emergencyContact || 'N/A'}`, 20, emergencyY);
  doc.text(`Nearest Hospital: ${details.nearestHospital || 'N/A'}`, 20, emergencyY + 5);

  emergencyY += 15;

  doc.text('In the event of an emergency:', 20, emergencyY);
  const emergencySteps = [
    'Stop work immediately and make the area safe if possible.',
    'Raise the alarm and alert others.',
    'Contact the emergency services if required (999).',
    'Report to the designated assembly point.',
    'Do not re-enter the work area until authorised.'
  ];

  emergencySteps.forEach((step, index) => {
    doc.text(`- ${step}`, 25, emergencyY + 5 + (index * 5));
  });

  // Declaration
  const declarationY = emergencyY + 35;

  // Check if we need a new page
  if (declarationY > 250) {
    doc.addPage();
    doc.text('DECLARATION', 20, 20);
  } else {
    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.text('DECLARATION', 20, declarationY);
  }

  const textY = declarationY > 250 ? 30 : declarationY + 10;

  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  const declarationText = "I confirm that I have read and understood the method statement, risk assessment, and emergency procedures above. I agree to work in accordance with the control measures outlined to ensure the safety of myself and others.";
  const splitText = doc.splitTextToSize(declarationText, 170);
  doc.text(splitText, 20, textY);

  // Signatures
  const sigY = textY + 20;

  doc.setLineWidth(0.1);
  doc.rect(20, sigY, 170, 60);

  doc.setFontSize(9);
  doc.setFont('times', 'bold');

  // Operative
  doc.text('Signed (Operative):', 25, sigY + 15);
  doc.line(25, sigY + 25, 95, sigY + 25);

  doc.text('Date:', 105, sigY + 15);
  doc.line(105, sigY + 25, 175, sigY + 25);

  // Supervisor
  doc.text('Signed (Supervisor):', 25, sigY + 45);
  doc.line(25, sigY + 55, 95, sigY + 55);

  doc.text('Date:', 105, sigY + 45);
  doc.line(105, sigY + 55, 175, sigY + 55);

  // Footer
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text('Generated by InstantRAMS - Official UK Health & Safety Documentation', 105, 290, { align: 'center' });
  }

  return doc;
};
