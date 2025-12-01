export interface Hazard {
    hazard: string;
    controlMeasure: string;
    likelihood?: number; // 1-5 scale
    severity?: number; // 1-5 scale
    initialRisk?: number; // likelihood × severity
    residualRisk?: number; // After controls
}

export interface TradeDataEntry {
    hazards: Hazard[];
    ppe: string[];
    tools: string[];
    sequence: string[];
}

export interface TradeData {
    [key: string]: TradeDataEntry;
}

export interface Details {
    companyName: string;
    companyAddress?: string;
    companyPhone?: string;
    companyLogo?: string; // base64 encoded image
    projectDescription?: string;
    supervisorName?: string;
    supervisorPhone?: string;
    clientName: string;
    siteAddress: string;
    projectReference?: string;
    date: string;
    workStartDate?: string;
    workEndDate?: string;
    emergencyContact: string;
    nearestHospital: string;
    firstAidLocation?: string;
    assemblyPoint?: string;
}

export interface EnvironmentalConsiderations {
    wasteDisposal: string;
    spillKits: boolean;
    noiseControl: string;
    dustControl: string;
}

export interface Signature {
    name: string;
    position: string;
    date: string;
    companyName?: string;
}
