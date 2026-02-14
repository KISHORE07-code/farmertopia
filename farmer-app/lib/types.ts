// Types.ts

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Field {
  id: string;
  name: string;
  crop: string;
  acres: number;
  status: 'Healthy' | 'Check' | 'Dry' | 'Harvest Ready';
  growthStage: string;
  maturityPercentage: number;
  lastIrrigated: string; // ISO date string
  moisturePercentage: number;
  imageUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  startTime: string; // ISO time
  duration: string; // e.g., "2 hrs"
  status: 'Completed' | 'In Progress' | 'Pending';
  type: 'Machinery' | 'Chemical' | 'Water' | 'Maintenance';
  location?: string;
  workerAvatars?: string[];
}

export interface Weather {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number; // mph
  alert?: {
    type: 'High Wind' | 'Frost' | 'Heat';
    message: string;
  };
}

export interface MarketPrice {
  id: string;
  commodity: string;
  symbol: string;
  price: number;
  unit: string;
  change: number; // percentage
  trend: 'up' | 'down' | 'neutral';
  exchange: string;
  chartData: number[]; // Simple array for sparkline
}

export interface YieldData {
  year: number;
  yield: number; // bushels per acre
  total: number; // total bushels
}

export interface Insight {
  id: string;
  type: 'positive' | 'warning' | 'neutral';
  title: string;
  description: string;
  actionLabel?: string;
}
