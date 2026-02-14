import { Field, Insight, MarketPrice, Task, Weather, YieldData } from "./types";

// User
export const USER: { name: string; avatarUrl: string } = {
  name: "Farmer John",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk4wl1QwR6U0Trv1hTG7QralNDkeZ7b6BxmOOu4N03SvWdezUz6Aim8ASl_-11KNwaod6UsiD7Nkx_gJSzrLWglADEnpIps7LW4CUR_aEGHGp23teU3sF2LDpaem0kAzfbq8ADqcsoGtCEhVOHTHyw2Vbw0SsrEQKR0wjA8KRK4ybMmXvxVF4Jo_nqrTis1prbFwnr0HBaX3HAjNxAiJAGA0RzllagDsME4e1o-8gd4JSGfcer9VNpmiDxAEqGcs7N-EEO573p67Vl",
};

// Fields
export const FIELDS: Field[] = [
  {
    id: "f1",
    name: "Field A",
    crop: "Soybeans",
    acres: 45,
    status: "Healthy",
    growthStage: "Vegetative (V3)",
    maturityPercentage: 45,
    lastIrrigated: "2023-10-23T09:00:00Z",
    moisturePercentage: 12,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBqJfznq1ePC9Zc4qWegNo2g2muOR8sv0xYcGL6WNftQIY7OUcenCNTjjtuoan6R_C_leWbxIizcsLeTDozCUqikx4VzWWhDOjGk8Gne8K154HIV6HpuZ0r4iC06X3WajovJ_G4CGZn_DPwHj75jXnN6qWWsMQ-OsyDIG-0he9ESq-3e5lHCyUa02pxizcYOy-KwOA2CjjOygzo5ocfPFU7ZV0JZMLjI0wOS5VVTxvjjmcebw9TsIF02ihGxuvxNeZTfbrYGP7pj1U",
  },
  {
    id: "f2",
    name: "Field B",
    crop: "Winter Wheat",
    acres: 120,
    status: "Dry",
    growthStage: "Harvest Ready",
    maturityPercentage: 98,
    lastIrrigated: "2023-10-22T14:30:00Z",
    moisturePercentage: 8,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA70x2kRpfMxM1IRIshuDMJYbwAukd2q3miFIzSC411_F-3ff8fvaRMbopKeZy2qNljUSwIiwxbOCuTrD2cPb0g26SEv0CYPNkjrH2SZOfP9LSekGyFSzbv5yMIa5d_1cnR8t9JLKIw5rtcaRvbc7uMJ28UCER8nGlQbApVr9PxP3BEj1VIlINs03MZkvsUNH7QqM7Alg7pFC2XvCt93XpcpTToCwkSgIMnQInLL8eJP1hMYlWo-61Ai_NdSWcx2tzYv3MUxn1wpacz",
  },
  {
    id: "f3",
    name: "Field C",
    crop: "Corn",
    acres: 85,
    status: "Healthy",
    growthStage: "Flowering (R1)",
    maturityPercentage: 60,
    lastIrrigated: "2023-10-24T08:00:00Z",
    moisturePercentage: 15,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBqJfznq1ePC9Zc4qWegNo2g2muOR8sv0xYcGL6WNftQIY7OUcenCNTjjtuoan6R_C_leWbxIizcsLeTDozCUqikx4VzWWhDOjGk8Gne8K154HIV6HpuZ0r4iC06X3WajovJ_G4CGZn_DPwHj75jXnN6qWWsMQ-OsyDIG-0he9ESq-3e5lHCyUa02pxizcYOy-KwOA2CjjOygzo5ocfPFU7ZV0JZMLjI0wOS5VVTxvjjmcebw9TsIF02ihGxuvxNeZTfbrYGP7pj1U", // Reusing image
  },
];

// Tasks
export const TASKS: Task[] = [
  {
    id: "t1",
    title: "Wheat Field A - Sowing",
    description: "Machinery A2",
    startTime: "08:00",
    duration: "2 hrs",
    status: "Completed",
    type: "Machinery",
  },
  {
    id: "t2",
    title: "Irrigation Check",
    description: "Inspect drip lines in Sector 4 for leaks.",
    startTime: "11:30",
    duration: "Until 1:00 PM",
    status: "In Progress",
    type: "Water",
    location: "Sector 4",
  },
  {
    id: "t3",
    title: "Apply NPK Fertilizer",
    description: "Corn Fields - Sector 2 & 3",
    startTime: "14:00",
    duration: "Until 4:00 PM",
    status: "Pending",
    type: "Chemical",
    workerAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEpsGH1EPzxHWTeVlm-1pZkYTSAShYzajtoy01A05kTd_9feZSdXBknbQREJDv5V-CMe7d6ZHwOxzDjyg_A_Pf70UFsr9RgN7FO_o3hKYZL--G82GFx9iP3B03aGkGd-NYHoksCJC1MygMRb4Cj_OY0VmudnLtpVq_3VeBugGIXt3cTaTn0I0h0qHGFdzajIwln0TvzzQeMM94MA6OO2yM03tlqr6mfkTKME3TtMPY0IzLAhIWBx8g1iMlAbiZFwOCmFv2uVvmwOsM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbcnNLaLYOzGiVp_ulJAoda2jUKYEmgk0r1NZv3iQMeqjssbTNFjHVKdEMEY-Tvb_1gnUxC43-6Hulikxo0L0WZ_5DX5wPPNE_2RacrgqbQ3ZXjN4fJxaRR4VbbXJEU1myds-XSKe-r6erWbJ2ZK6TX426Y2HRdTEquZU9T_lw2CXQ663T5Fio8IYR4S2lNkvjw2_GuxGcXETakAwR-HrIRWrvPr-KMHNU9kEpMWS8zZvhzNl9M9hsVhiqJGmGZdTePSQFxpNke9vP"
    ],
  },
];

// Weather
export const WEATHER: Weather = {
  temp: 72,
  condition: "Partly Cloudy",
  humidity: 12,
  windSpeed: 8,
  alert: {
    type: "High Wind",
    message: "High Wind Warning",
  },
};

// Market Prices
export const MARKET_PRICES: MarketPrice[] = [
  {
    id: "m1",
    commodity: "Wheat",
    symbol: "ZW",
    price: 6.10,
    unit: "bu",
    change: -0.50,
    trend: "down",
    exchange: "Local Exchange",
    chartData: [6.20, 6.18, 6.15, 6.12, 6.10],
  },
  {
    id: "m2",
    commodity: "Soybeans",
    symbol: "ZS",
    price: 13.40,
    unit: "bu",
    change: 0.85,
    trend: "up",
    exchange: "Global",
    chartData: [13.20, 13.25, 13.30, 13.35, 13.40],
  },
  {
    id: "m3",
    commodity: "Oats",
    symbol: "ZO",
    price: 3.55,
    unit: "bu",
    change: 0.12,
    trend: "up",
    exchange: "Local Exchange",
    chartData: [3.50, 3.51, 3.53, 3.54, 3.55],
  },
  {
    id: "m4",
    commodity: "Canola",
    symbol: "RS",
    price: 715.2,
    unit: "bu",
    change: -1.4,
    trend: "down",
    exchange: "Global",
    chartData: [725, 720, 718, 716, 715.2],
  },
];

// Yield Data
export const YIELD_HISTORY: YieldData[] = [
  { year: 2019, yield: 160, total: 198000 },
  { year: 2020, yield: 172, total: 213000 },
  { year: 2021, yield: 165, total: 204000 },
  { year: 2022, yield: 180, total: 223000 },
  { year: 2023, yield: 184.2, total: 228000 }, // Current estimate
];

// Insights
export const INSIGHTS: Insight[] = [
  {
    id: "i1",
    type: "positive",
    title: "Nitrogen Optimization Success",
    description: "Yield is 5% higher in Field 4 due to optimized nitrogen application in early June.",
    actionLabel: "View Field 4 Details",
  },
  {
    id: "i2",
    type: "warning",
    title: "Moisture Alert",
    description: "Field 2 is underperforming by 3% compared to last year. Soil sensors report low moisture levels.",
    actionLabel: "Check Sensors",
  },
  {
    id: "i3",
    type: "neutral",
    title: "Harvest Projection",
    description: "Based on current growth rates, harvest window for Corn is projected to open Oct 12 - Oct 15.",
  },
];
