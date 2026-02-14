import React from 'react';
import { getMarketPrices } from '@/lib/data';

export default async function MarketPage() {
  const prices = await getMarketPrices();
  const featuredPrice = prices.find(p => p.symbol === 'ZC') || prices[0];
  const otherPrices = prices.filter(p => p.id !== featuredPrice.id);

  // Helper to generate simple sparkline path (mock implementation for visual)
  const generateSparkline = (data: number[]) => {
      // Simple normalization
      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;
      
      const points = data.map((val, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 40 - ((val - min) / range) * 35; // 40 height, 5 padding
          return `${x},${y}`;
      }).join(' L');
      
      return `M${points}`;
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="px-5 pb-4 pt-4 flex justify-between items-end bg-background-light dark:bg-background-dark z-10 shrink-0 md:pt-8 md:px-8">
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Oct 24, 2023</p>
          <h1 className="text-2xl font-bold tracking-tight">Market Prices</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-white dark:bg-earth-dark shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center active:scale-95 transition-transform cursor-pointer">
          <span className="material-icons text-gray-600 dark:text-gray-300">tune</span>
        </button>
      </header>

      {/* Main Content (Scrollable) */}
      <main className="flex-1 overflow-y-auto px-5 pb-24 space-y-6 md:px-8 md:pb-8 scrollbar-thin">
        
        {/* Featured Card & Grid Container */}
        <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Market Summary Card (Featured) */}
            <div className="relative w-full p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-earth-dark dark:to-[#162e1a] shadow-sm border border-primary/20 group md:p-8">
            <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                <span className="material-icons text-8xl text-primary">agriculture</span>
            </div>
            <div className="flex justify-between items-start relative z-10">
                <div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-green-800 dark:text-primary tracking-wide uppercase">Primary Crop</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{featuredPrice.commodity} ({featuredPrice.symbol})</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">{featuredPrice.exchange}</p>
                </div>
                <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">${featuredPrice.price.toFixed(2)}<span className="text-sm text-gray-500 font-medium ml-1">/ {featuredPrice.unit}</span></p>
                <div className={`flex items-center justify-end gap-1 font-semibold text-sm ${featuredPrice.change >= 0 ? 'text-green-600 dark:text-primary' : 'text-red-500'}`}>
                    <span className="material-icons text-sm">{featuredPrice.change >= 0 ? 'trending_up' : 'trending_down'}</span>
                    <span>{featuredPrice.change > 0 ? '+' : ''}{featuredPrice.change}%</span>
                </div>
                </div>
            </div>
            {/* Featured Sparkline */}
            <div className="mt-6 h-16 w-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                <div className="border-t border-gray-500 w-full"></div>
                <div className="border-t border-gray-500 w-full"></div>
                <div className="border-t border-gray-500 w-full"></div>
                </div>
                {/* SVG Chart Line */}
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#13ec37', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#13ec37', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                {/* Simplified logic for fill - normally requires closed path */}
                <path d={`${generateSparkline(featuredPrice.chartData)} V 40 H 0 Z`} fill="url(#grad1)" opacity="0.5"></path>
                <path d={generateSparkline(featuredPrice.chartData)} fill="none" stroke="#13ec37" strokeLinecap="round" strokeWidth="2"></path>
                </svg>
            </div>
            </div>

            {/* Filters / Quick Sort */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="px-4 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium whitespace-nowrap cursor-pointer">Watchlist</button>
            <button className="px-4 py-1.5 rounded-full bg-white dark:bg-earth-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Grains</button>
            <button className="px-4 py-1.5 rounded-full bg-white dark:bg-earth-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Livestock</button>
            <button className="px-4 py-1.5 rounded-full bg-white dark:bg-earth-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Energy</button>
            </div>

            {/* Commodity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
            {otherPrices.map((price) => (
                <div key={price.id} className="bg-white dark:bg-earth-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            price.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                            price.trend === 'down' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                            'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                        }`}>
                        <span className="material-icons">{
                            price.commodity === 'Wheat' ? 'grass' :
                            price.commodity === 'Soybeans' ? 'eco' :
                            price.commodity === 'Canola' ? 'local_florist' : 'grain'
                        }</span>
                        </div>
                        <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{price.commodity} ({price.symbol})</h3>
                        <p className="text-xs text-gray-500">{price.exchange}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-8">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 50 20">
                            <path d={generateSparkline(price.chartData)} fill="none" stroke={price.change >= 0 ? "#13ec37" : "#ef4444"} strokeLinecap="round" strokeWidth="2"></path>
                        </svg>
                        </div>
                        <div className="text-right w-20">
                        <div className="font-bold text-gray-900 dark:text-white tabular-nums">${price.price.toFixed(2)}</div>
                        <div className={`text-xs font-medium px-1.5 py-0.5 rounded ml-auto w-fit tabular-nums ${
                            price.change >= 0 
                            ? 'text-green-800 dark:text-primary bg-primary/20' 
                            : 'text-red-500 bg-red-50 dark:bg-red-900/20'
                        }`}>{price.change > 0 ? '+' : ''}{price.change}%</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>

        </div>
      </main>

      {/* Floating Action Button (Find Local Buyers) - Mobile Only */}
      <div className="absolute bottom-[90px] left-0 w-full px-5 flex justify-center pointer-events-none z-20 md:hidden">
        <button className="pointer-events-auto bg-primary text-black font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-primary/40 flex items-center gap-2 transform active:scale-95 transition-all hover:bg-primary-dark cursor-pointer">
          <span className="material-icons text-[20px]">storefront</span>
          Find Local Buyers
        </button>
      </div>
    </div>
  );
}

