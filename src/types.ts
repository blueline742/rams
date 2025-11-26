export interface Hazard {
    hazard: string;
    controlMeasure: string;
    likelihood?: number;
    severity?: number;
    riskScore?: number;
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
    clientName: string;
    siteAddress: string;
    date: string;
    emergencyContact: string;
    nearestHospital: string;
}
