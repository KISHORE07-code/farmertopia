import React from 'react';
import { getYieldHistory } from '@/lib/data';

export default async function YieldSummaryCard() {
  const history = await getYieldHistory();
  const currentYear = history[history.length - 1];
  const lastYear = history[history.length - 2];

  const totalYield = currentYear?.yield * 1240; // Assuming 1240 acres constant for now or fetch from user data
  const yieldChange = lastYear ? ((currentYear.yield - lastYear.yield) / lastYear.yield) * 100 : 0;
  const isPositive = yieldChange >= 0;

  return (
    <div className="bg-white dark:bg-earth-dark p-5 rounded-2xl shadow-card border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {/* Background decoration */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
      <div className="flex justify-between items-start mb-2 relative z-10">
        <div>
          <h3 className="text-earth-mid dark:text-gray-400 text-sm font-medium">Total Est. Yield</h3>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-bold text-earth-dark dark:text-white">{Math.round(totalYield / 1000)}k</span>
            <span className="text-sm font-medium text-earth-mid dark:text-gray-400">Bushels</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full shadow-sm ${
            isPositive ? 'text-earth-dark bg-primary' : 'text-white bg-red-500'
          }`}>
            <span className="material-icons text-[14px] mr-0.5">{isPositive ? 'trending_up' : 'trending_down'}</span>
            {isPositive ? '+' : ''}{yieldChange.toFixed(1)}%
          </span>
          <span className="text-[10px] text-earth-mid dark:text-gray-400 mt-1">vs Last Year</span>
        </div>
      </div>
    </div>
  );
}
