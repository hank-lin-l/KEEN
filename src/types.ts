export interface TelemetryData {
  cycleSpeed: number; // sec/cycle
  energySaving: number; // % air recycle
  totalEfficiency: number; // % OEE
  maxCapacity: number; // BPH
  servoPressure: number; // bar
  cavityThermalStatus: 'OPTIMAL' | 'SYNCING' | 'COOLING';
  cavityTemperature: number; // °C
}

export interface ProductMachine {
  id: string;
  name: string;
  series: string;
  category: 'auto' | 'linear' | 'mold' | 'turnkey';
  badge: string;
  badgeType: 'cyan' | 'orange';
  image: string;
  description: string;
  specs: {
    label: string;
    value: string;
    highlight?: boolean;
    color?: string;
  }[];
  actionLabel: string;
  detailedSpecs?: {
    cavities: string;
    powerConsumption: string;
    airRecoveryRate: string;
    clampingForce: string;
    dimensions: string;
    applicablePreforms: string;
    servoControl: string;
  };
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  application: string;
  targetOutput: string;
  notes: string;
}
