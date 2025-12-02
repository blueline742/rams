import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Hazard, Details, Signature } from '@/types';

// Risk rating helper functions
const getRiskRating = (score: number): string => {
  if (score >= 15) return 'HIGH';
  if (score >= 8) return 'MEDIUM';
  return 'LOW';
};

const getRiskColor = (score: number): [number, number, number] => {
  if (score >= 15) return [220, 53, 69]; // Red
  if (score >= 8) return [255, 193, 7]; // Amber
  return [40, 167, 69]; // Green
};

export const generatePDF = (
  trade: string,
  hazards: Hazard[],
  ppe: string[],
  tools: string[],
  methodSteps: string[],
  details: Details,
  signature?: Signature
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // ===== COVER PAGE =====

  // Main title
  doc.setFont('times', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(0, 51, 102);
  doc.text('RISK ASSESSMENT &', pageWidth / 2, 45, { align: 'center' });
  doc.text('METHOD STATEMENT', pageWidth / 2, 60, { align: 'center' });

  // Project description or trade
  doc.setFontSize(14);
  doc.setTextColor(100);
  const projectTitle = details.projectDescription
    ? details.projectDescription
    : `${trade} Works`;
  const splitTitle = doc.splitTextToSize(projectTitle, 160);
  doc.text(splitTitle, pageWidth / 2, 80, { align: 'center' });

  // PREPARED BY section
  doc.setFontSize(12);
  doc.setFont('times', 'bold');
  doc.setTextColor(0);
  doc.text('PREPARED BY', pageWidth / 2, 105, { align: 'center' });

  let companyY = 115;

  // Add company logo above company name if provided
  if (details.companyLogo) {
    try {
      // Use jsPDF's getImageProperties to get dimensions from base64
      const imgProps = doc.getImageProperties(details.companyLogo);
      const imgRatio = imgProps.width / imgProps.height;

      // Calculate dimensions maintaining aspect ratio
      const maxWidth = 50;
      const maxHeight = 25;

      let logoWidth = maxWidth;
      let logoHeight = maxWidth / imgRatio;

      // If height exceeds max, scale by height instead
      if (logoHeight > maxHeight) {
        logoHeight = maxHeight;
        logoWidth = maxHeight * imgRatio;
      }

      // Center the logo
      const logoX = (pageWidth - logoWidth) / 2;

      doc.addImage(details.companyLogo, 'PNG', logoX, companyY, logoWidth, logoHeight, undefined, 'FAST');
      companyY += logoHeight + 8;
    } catch (e) {
      // If logo fails to load, continue without it
      console.warn('Logo failed to load in PDF:', e);
    }
  }

  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text(details.companyName || 'N/A', pageWidth / 2, companyY, { align: 'center' });

  if (details.companyAddress) {
    companyY += 6;
    doc.setFontSize(10);
    doc.setFont('times', 'normal');
    doc.text(details.companyAddress, pageWidth / 2, companyY, { align: 'center' });
  }

  if (details.companyPhone) {
    companyY += 6;
    doc.setFontSize(10);
    doc.setFont('times', 'normal');
    doc.text(details.companyPhone, pageWidth / 2, companyY, { align: 'center' });
  }

  // Calculate position for compliance badges - ensure they don't overlap with company info
  // Add buffer space and ensure minimum Y position
  const badgesY = Math.max(160, companyY + 20);

  // Compliance badges
  doc.setFillColor(0, 51, 102);
  doc.rect(40, badgesY, 60, 30, 'F');
  doc.rect(110, badgesY, 60, 30, 'F');

  doc.setTextColor(255);
  doc.setFontSize(9);
  doc.setFont('times', 'bold');
  doc.text('HSE COMPLIANT', 70, badgesY + 12, { align: 'center' });
  doc.setFontSize(7);
  doc.setFont('times', 'normal');
  doc.text('Health & Safety', 70, badgesY + 17, { align: 'center' });
  doc.text('Executive', 70, badgesY + 21, { align: 'center' });
  doc.text('Regulations', 70, badgesY + 25, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.text('CDM 2015', 140, badgesY + 12, { align: 'center' });
  doc.setFontSize(7);
  doc.setFont('times', 'normal');
  doc.text('Construction', 140, badgesY + 17, { align: 'center' });
  doc.text('Design &', 140, badgesY + 21, { align: 'center' });
  doc.text('Management', 140, badgesY + 25, { align: 'center' });

  // Document reference - position below badges
  const formattedDate = details.date ? new Date(details.date).toLocaleDateString('en-GB') : 'N/A';
  const docRef = details.projectReference || `RAMS-${trade.substring(0, 3).toUpperCase()}-${new Date().getTime().toString().slice(-6)}`;

  const docRefY = badgesY + 50;

  doc.setTextColor(0);
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.text(`Document Reference: ${docRef}`, pageWidth / 2, docRefY, { align: 'center' });
  doc.text(`Issue Date: ${formattedDate}`, pageWidth / 2, docRefY + 7, { align: 'center' });

  // Footer on cover
  doc.setFontSize(8);
  doc.setTextColor(100);
  doc.text('This document has been prepared in accordance with:', pageWidth / 2, 260, { align: 'center' });
  doc.text('Health and Safety at Work etc. Act 1974', pageWidth / 2, 266, { align: 'center' });
  doc.text('Management of Health and Safety at Work Regulations 1999', pageWidth / 2, 272, { align: 'center' });

  // ===== PAGE 2: PROJECT INFORMATION =====
  doc.addPage();
  let currentY = 20;

  // Header
  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('PROJECT INFORMATION', 20, currentY);
  currentY += 3;
  doc.setLineWidth(0.5);
  doc.setDrawColor(0, 51, 102);
  doc.line(20, currentY, 190, currentY);
  currentY += 10;

  const projectData = [
    ['Trade / Activity', trade || 'N/A'],
    ['Client Name', details.clientName || 'N/A'],
    ['Site Address', details.siteAddress || 'N/A'],
    ['Project Reference', docRef],
    ['Assessment Date', formattedDate],
  ];

  // Add work duration if provided
  if (details.workStartDate || details.workEndDate) {
    const startDate = details.workStartDate ? new Date(details.workStartDate).toLocaleDateString('en-GB') : 'N/A';
    const endDate = details.workEndDate ? new Date(details.workEndDate).toLocaleDateString('en-GB') : 'N/A';
    projectData.push(['Work Duration', `${startDate} to ${endDate}`]);
  }

  // Add supervisor info if provided
  if (details.supervisorName) {
    const supervisorInfo = details.supervisorPhone
      ? `${details.supervisorName} (${details.supervisorPhone})`
      : details.supervisorName;
    projectData.push(['Supervisor', supervisorInfo]);
  }

  projectData.push(['Emergency Contact', details.emergencyContact || 'N/A']);
  projectData.push(['Nearest Hospital', details.nearestHospital || 'N/A']);

  if (details.firstAidLocation) {
    projectData.push(['First Aid Location', details.firstAidLocation]);
  }

  if (details.assemblyPoint) {
    projectData.push(['Assembly Point', details.assemblyPoint]);
  }

  autoTable(doc, {
    startY: currentY,
    head: [],
    body: projectData,
    theme: 'striped',
    styles: {
      font: 'times',
      fontSize: 10,
      cellPadding: 4,
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
    },
    columnStyles: {
      0: {
        fontStyle: 'bold',
        fillColor: [240, 244, 248],
        cellWidth: 65,
      },
    },
  });

  currentY = (doc as any).lastAutoTable.finalY + 15;

  // ===== EQUIPMENT & SAFETY GEAR =====
  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('EQUIPMENT & SAFETY GEAR', 20, currentY);
  currentY += 3;
  doc.line(20, currentY, 190, currentY);
  currentY += 10;

  const equipmentData = [
    ['Required PPE', ppe && ppe.length > 0 ? ppe.join(', ') : 'N/A'],
    ['Tools & Equipment', tools && tools.length > 0 ? tools.join(', ') : 'N/A'],
  ];

  autoTable(doc, {
    startY: currentY,
    head: [],
    body: equipmentData,
    theme: 'striped',
    styles: {
      font: 'times',
      fontSize: 10,
      cellPadding: 4,
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
    },
    columnStyles: {
      0: {
        fontStyle: 'bold',
        fillColor: [240, 244, 248],
        cellWidth: 65,
      },
    },
  });

  currentY = (doc as any).lastAutoTable.finalY + 15;

  // ===== METHOD STATEMENT =====
  // Check if we have enough space for header + at least one step (minimum 30mm)
  if (currentY > 200) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('METHOD STATEMENT', 20, currentY);
  currentY += 3;
  doc.line(20, currentY, 190, currentY);
  currentY += 7;

  doc.setFont('times', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(80);
  doc.text('Sequence of works to be followed to ensure safe working practices', 20, currentY);
  currentY += 8;

  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0);

  if (methodSteps && methodSteps.length > 0) {
    methodSteps.forEach((step, index) => {
      const stepNumber = `${index + 1}.`;
      const stepText = step.replace(/^\d+\.\s*/, ''); // Remove any existing number
      const splitText = doc.splitTextToSize(stepText, 158);
      const stepHeight = splitText.length * 4.5 + 2.5;

      // Check if this step will fit on current page, otherwise start new page
      if (currentY + stepHeight > 270) {
        doc.addPage();
        currentY = 20;
      }

      doc.setFont('times', 'bold');
      doc.text(stepNumber, 20, currentY);
      doc.setFont('times', 'normal');
      doc.text(splitText, 30, currentY);
      currentY += stepHeight;
    });
  } else {
    doc.text('No method statement provided.', 20, currentY);
    currentY += 10;
  }

  // ===== RISK ASSESSMENT =====
  currentY += 8;
  if (currentY > 210) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('RISK ASSESSMENT', 20, currentY);
  currentY += 3;
  doc.line(20, currentY, 190, currentY);
  currentY += 7;

  doc.setFont('times', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(80);
  doc.text('Hazards identified and control measures to reduce risk to an acceptable level', 20, currentY);
  currentY += 8;

  // Risk Matrix Legend
  doc.setFontSize(8);
  doc.setFont('times', 'bold');
  doc.text('RISK RATING:', 20, currentY);

  // Low
  doc.setFillColor(40, 167, 69);
  doc.rect(50, currentY - 3, 15, 5, 'F');
  doc.setTextColor(255);
  doc.text('LOW', 57.5, currentY + 1, { align: 'center' });

  // Medium
  doc.setFillColor(255, 193, 7);
  doc.rect(70, currentY - 3, 20, 5, 'F');
  doc.setTextColor(0);
  doc.text('MEDIUM', 80, currentY + 1, { align: 'center' });

  // High
  doc.setFillColor(220, 53, 69);
  doc.rect(95, currentY - 3, 15, 5, 'F');
  doc.setTextColor(255);
  doc.text('HIGH', 102.5, currentY + 1, { align: 'center' });

  doc.setTextColor(0);
  doc.setFont('times', 'normal');
  doc.setFontSize(7);
  doc.text('(Likelihood × Severity: Low 1-7, Medium 8-14, High 15-25)', 115, currentY + 1);

  currentY += 10;

  // Hazards table with risk ratings
  const hazardTableData = hazards.map((h) => {
    const initialRisk = h.initialRisk || h.likelihood! * h.severity! || 9;
    const residualRisk = h.residualRisk || Math.max(1, Math.floor(initialRisk / 3)); // Assume controls reduce risk

    return [
      h.hazard,
      h.controlMeasure,
      {
        content: getRiskRating(initialRisk),
        styles: {
          fillColor: getRiskColor(initialRisk),
          textColor: (initialRisk >= 8 ? [255, 255, 255] : [0, 0, 0]) as [number, number, number],
          fontStyle: 'bold' as const,
          halign: 'center' as const,
        },
      },
      {
        content: getRiskRating(residualRisk),
        styles: {
          fillColor: getRiskColor(residualRisk),
          textColor: (residualRisk >= 8 ? [255, 255, 255] : [0, 0, 0]) as [number, number, number],
          fontStyle: 'bold' as const,
          halign: 'center' as const,
        },
      },
    ];
  });

  if (hazardTableData.length === 0) {
    hazardTableData.push(['No hazards selected', 'N/A', '-', '-']);
  }

  autoTable(doc, {
    startY: currentY,
    head: [['Hazard Identified', 'Control Measures', 'Initial\nRisk', 'Residual\nRisk']],
    body: hazardTableData,
    theme: 'striped',
    headStyles: {
      font: 'times',
      fontStyle: 'bold',
      fillColor: [0, 51, 102],
      textColor: [255, 255, 255],
      fontSize: 9,
      halign: 'center',
    },
    styles: {
      font: 'times',
      fontSize: 9,
      cellPadding: 3,
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
    },
    columnStyles: {
      0: { cellWidth: 60 },
      1: { cellWidth: 85 },
      2: { cellWidth: 20, halign: 'center' },
      3: { cellWidth: 20, halign: 'center' },
    },
  });

  // ===== EMERGENCY PROCEDURES =====
  currentY = (doc as any).lastAutoTable.finalY + 12;

  if (currentY > 200) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.setTextColor(220, 53, 69);
  doc.text('EMERGENCY PROCEDURES', 20, currentY);
  currentY += 3;
  doc.setDrawColor(220, 53, 69);
  doc.line(20, currentY, 190, currentY);
  currentY += 8;

  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.setFont('times', 'bold');

  const emergencyInfo = [
    `Emergency Contact: ${details.emergencyContact || 'N/A'}`,
    `Nearest Hospital: ${details.nearestHospital || 'N/A'}`,
  ];

  if (details.firstAidLocation) {
    emergencyInfo.push(`First Aid Kit Location: ${details.firstAidLocation}`);
  }

  if (details.assemblyPoint) {
    emergencyInfo.push(`Assembly Point: ${details.assemblyPoint}`);
  }

  emergencyInfo.forEach((info) => {
    doc.text(info, 20, currentY);
    currentY += 5.5;
  });

  currentY += 4;
  doc.setFont('times', 'bold');
  doc.text('In the event of an emergency:', 20, currentY);
  currentY += 6;

  const emergencySteps = [
    'STOP work immediately and make the area safe if possible',
    'RAISE the alarm and alert others in the vicinity',
    'CALL emergency services if required (999) - provide location and nature of incident',
    'EVACUATE to the designated assembly point if necessary',
    'REPORT the incident to the supervisor/site manager',
    'DO NOT re-enter the work area until it has been declared safe',
  ];

  doc.setFont('times', 'normal');
  emergencySteps.forEach((step) => {
    if (currentY > 265) {
      doc.addPage();
      currentY = 20;
    }
    const parts = step.split(' ');
    const firstWord = parts[0];
    const rest = parts.slice(1).join(' ');

    doc.setFont('times', 'bold');
    doc.text(`${firstWord}`, 25, currentY);
    doc.setFont('times', 'normal');
    const splitRest = doc.splitTextToSize(rest, 145);
    doc.text(splitRest, 48, currentY);
    currentY += splitRest.length * 4.5 + 2;
  });

  // ===== DECLARATION & SIGNATURES =====
  currentY += 12;

  if (currentY > 180) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('DECLARATION', 20, currentY);
  currentY += 3;
  doc.setDrawColor(0, 51, 102);
  doc.line(20, currentY, 190, currentY);
  currentY += 8;

  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0);
  const declarationText =
    'I confirm that I have read and understood the method statement, risk assessment, and emergency procedures detailed in this document. I agree to work strictly in accordance with the control measures outlined to ensure the safety of myself, colleagues, and the public.';
  const splitDeclaration = doc.splitTextToSize(declarationText, 170);
  doc.text(splitDeclaration, 20, currentY);

  currentY += splitDeclaration.length * 4.5 + 8;

  // Signature section
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);

  if (signature && signature.name) {
    // Digital signature provided - DocuSign style
    doc.rect(20, currentY, 170, 60);

    doc.setFont('times', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0);
    doc.text('PREPARED BY:', 25, currentY + 8);

    // Signature line (underline effect)
    doc.setLineWidth(2);
    doc.setDrawColor(0, 0, 0);
    doc.line(25, currentY + 28, 150, currentY + 28);

    // Signature name in large cursive-like italic style
    doc.setFont('times', 'bolditalic');
    doc.setFontSize(32);
    doc.setTextColor(0, 51, 102);
    doc.text(signature.name, 25, currentY + 25);

    // Position and company details below signature
    doc.setFont('times', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(80);
    doc.text('Position:', 25, currentY + 36);
    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(0);
    doc.text(signature.position, 42, currentY + 36);

    if (signature.companyName) {
      doc.setFont('times', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(80);
      doc.text('Company:', 25, currentY + 42);
      doc.setFont('times', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(0);
      doc.text(signature.companyName, 43, currentY + 42);
    }

    // Date on the right side
    doc.setFont('times', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(80);
    doc.text('Date Signed:', 120, currentY + 36);
    doc.setFont('times', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(signature.date, 120, currentY + 43);

    // Legal notice at bottom
    doc.setFont('times', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(100);
    const legalText = 'This electronic signature is legally binding under the Electronic Communications Act 2000';
    doc.text(legalText, 25, currentY + 55);
    doc.setTextColor(0);
    doc.setLineWidth(0.5);

  } else {
    // No signature - show blank signature boxes
    doc.rect(20, currentY, 170, 70);

    // Split into two sections
    doc.line(20, currentY + 35, 190, currentY + 35);

    // Operative signature
    doc.setFontSize(10);
    doc.setFont('times', 'bold');
    doc.text('OPERATIVE/WORKER', 25, currentY + 8);

    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.text('Signed:', 25, currentY + 18);
    doc.line(45, currentY + 20, 100, currentY + 20);

    doc.text('Print Name:', 25, currentY + 28);
    doc.line(50, currentY + 30, 100, currentY + 30);

    doc.text('Date:', 110, currentY + 18);
    doc.line(125, currentY + 20, 165, currentY + 20);

    // Supervisor signature
    doc.setFont('times', 'bold');
    doc.setFontSize(10);
    doc.text('SUPERVISOR/MANAGER', 25, currentY + 43);

    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.text('Signed:', 25, currentY + 53);
    doc.line(45, currentY + 55, 100, currentY + 55);

    doc.text('Print Name:', 25, currentY + 63);

    // Pre-fill supervisor name if provided
    if (details.supervisorName) {
      doc.setFont('times', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(80);
      doc.text(details.supervisorName, 52, currentY + 63);
      doc.setTextColor(0);
    }

    doc.line(50, currentY + 65, 100, currentY + 65);

    doc.text('Date:', 110, currentY + 53);
    doc.line(125, currentY + 55, 165, currentY + 55);
  }

  // ===== FOOTER ON ALL PAGES =====
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.setFont('times', 'italic');

    // Page number
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - 20, pageHeight - 10, { align: 'right' });

    // Branding
    doc.text('Generated by InstantRAMS', 20, pageHeight - 10);
    doc.text('Professional UK Health & Safety Documentation', pageWidth / 2, pageHeight - 10, { align: 'center' });

    // Document reference
    doc.text(`Ref: ${docRef}`, pageWidth - 20, pageHeight - 5, { align: 'right' });
  }

  return doc;
};
