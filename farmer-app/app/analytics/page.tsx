import React from 'react';
import { getInsights, getYieldHistory } from '@/lib/data';

export default async function AnalyticsPage() {
  const history = await getYieldHistory();
  const insights = await getInsights();
  const currentYear = history[history.length - 1];

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-white/80 dark:bg-earth-dark/80 backdrop-blur-md sticky top-0 z-20 border-b border-gray-100 dark:border-gray-800 shrink-0 md:pt-8 md:bg-white md:dark:bg-earth-dark">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Golden Harvest Farms</p>
        </div>
        <button className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 transition-colors cursor-pointer">
          <span className="material-icons text-gray-600 dark:text-gray-300">account_circle</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6 overflow-y-auto pb-24 md:px-8 md:pb-8 scrollbar-thin">
        {/* Time Range Filter */}
        <div className="bg-white dark:bg-earth-dark p-1.5 rounded-xl flex shadow-sm border border-gray-100 dark:border-white/5 max-w-md">
          <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-primary text-background-dark shadow-sm transition-all cursor-pointer">Yearly</button>
          <button className="flex-1 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer">Seasonal</button>
          <button className="flex-1 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer">Monthly</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Yield Graph Card */}
            <div className="lg:col-span-8 bg-white dark:bg-earth-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                <div className="flex justify-between items-start mb-6">
                    <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Corn Yield</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">{currentYear.yield}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">bu/ac</span>
                        <span className="bg-primary/20 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                        <span className="material-icons text-[10px] mr-0.5">trending_up</span>
                        +5.2%
                        </span>
                    </div>
                    </div>
                    <button className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    <span className="material-icons">more_horiz</span>
                    </button>
                </div>
                {/* Chart Representation */}
                <div className="relative h-64 w-full">
                    {/* Y-Axis Labels */}
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-medium w-6 text-right pr-1">
                    <span>200</span>
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    </div>
                    {/* Chart Area */}
                    <div className="absolute left-8 right-0 top-2 bottom-6">
                    {/* Grid Lines */}
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                        <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                        <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                        <div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                    </div>
                    {/* Data Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                        <linearGradient id="gradientPrimaryAnalytics" x1="0%" x2="0%" y1="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#13ec37', stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: '#13ec37', stopOpacity: 0 }} />
                        </linearGradient>
                        </defs>
                        {/* Last Year Line (Dashed Grey) */}
                        <polyline className="opacity-60" fill="none" points="0,90 40,85 80,70 120,75 160,60 200,65 240,50 280,55 320,60 360,50 400,55" stroke="#9ca3af" strokeDasharray="4,4" strokeWidth="2" vectorEffect="non-scaling-stroke"></polyline>
                        {/* Current Yield Line (Primary) */}
                        <path className="opacity-50" d="M0,80 L40,70 L80,50 L120,45 L160,30 L200,25 L240,15 L280,20 V200 H0 Z" fill="url(#gradientPrimaryAnalytics)"></path>
                        <polyline fill="none" points="0,80 40,70 80,50 120,45 160,30 200,25 240,15 280,20" stroke="#13ec37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></polyline>
                        {/* Interactive Point */}
                        <circle cx="280" cy="20" fill="#ffffff" r="5" stroke="#13ec37" strokeWidth="3"></circle>
                        {/* Tooltip */}
                        <g transform="translate(250, -25)">
                        <rect className="opacity-90" fill="#102213" height="24" rx="4" width="60" x="0" y="0"></rect>
                        <text fill="white" fontSize="10" fontWeight="600" textAnchor="middle" x="30" y="16">184 bu</text>
                        </g>
                    </svg>
                    </div>
                    {/* X-Axis Labels */}
                    <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-gray-400 font-medium pt-2">
                    {history.map(h => <span key={h.year}>{h.year}</span>)}
                    </div>
                </div>
                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,55,0.4)]"></div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Current Yield</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-gray-400 border-t border-dashed border-gray-400 w-4"></div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Last Year</span>
                    </div>
                </div>
            </div>

            {/* KPI Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                 {/* KPI Row */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
                <div className="bg-white dark:bg-earth-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                    <span className="material-icons text-lg">landscape</span>
                    <span className="text-xs font-medium uppercase tracking-wider">Acres</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">1,240</p>
                </div>
                <div className="bg-white dark:bg-earth-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                    <span className="material-icons text-lg">local_shipping</span>
                    <span className="text-xs font-medium uppercase tracking-wider">Total Est.</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.round(currentYear.total / 1000)}k <span className="text-sm font-normal text-gray-400">bu</span></p>
                </div>
                 {/* Insight Card (Moved to KPI column for layout balance on large screens) */}
                 <div className="bg-white dark:bg-earth-dark p-0 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden group hover:shadow-md transition-shadow cursor-pointer flex-1">
                    <div className="flex h-full">
                    <div className="w-1.5 bg-primary"></div>
                    <div className="p-4 flex-1">
                        <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                            <span className="material-icons text-lg">science</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{insights[0].title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{insights[0].description}</p>
                            {insights[0].actionLabel && (
                                <button className="mt-3 text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
                                {insights[0].actionLabel} <span className="material-icons text-[14px]">arrow_forward</span>
                                </button>
                            )}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* Deep Insights Section */}
        <div className="space-y-4 pb-6">
          <div className="flex items-center gap-2 px-1">
            <div className="bg-gradient-to-tr from-primary to-emerald-400 p-1.5 rounded-lg shadow-sm">
              <span className="material-icons text-background-dark text-sm font-bold">auto_awesome</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">More Insights</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.slice(1).map((insight) => (
                <div key={insight.id} className="bg-white dark:bg-earth-dark p-0 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex h-full">
                    <div className={`w-1.5 ${
                        insight.type === 'warning' ? 'bg-yellow-500' : 
                        insight.type === 'positive' ? 'bg-primary' : 'bg-gray-400'
                    }`}></div>
                    <div className="p-4 flex-1">
                        <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full shrink-0 mt-0.5 ${
                             insight.type === 'warning' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500' : 
                             insight.type === 'positive' ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-white/5 text-gray-500'
                        }`}>
                            <span className="material-icons text-lg">
                                {insight.type === 'warning' ? 'warning' : insight.type === 'positive' ? 'check_circle' : 'info'}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{insight.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{insight.description}</p>
                            {insight.actionLabel && (
                                <div className="mt-3 flex gap-2">
                                <button className="px-3 py-1.5 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-lg text-[10px] font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                                    {insight.actionLabel}
                                </button>
                                </div>
                            )}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

