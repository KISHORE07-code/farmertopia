import React from 'react';
import Link from 'next/link';

export default function QuickActions() {
  return (
    <div>
      <h2 className="text-lg font-bold text-earth-dark dark:text-white mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/harvest-log" className="bg-primary hover:bg-primary-dark transition-all p-4 rounded-xl shadow-soft flex flex-col items-center justify-center text-center group active:scale-95 duration-150 cursor-pointer">
          <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-black/20 transition-colors">
            <span className="material-icons text-earth-dark text-2xl group-hover:scale-110 transition-transform">agriculture</span>
          </div>
          <span className="font-bold text-earth-dark">Log Harvest</span>
        </Link>
        <Link href="/tasks" className="bg-white dark:bg-earth-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-all p-4 rounded-xl shadow-card border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center group active:scale-95 duration-150 cursor-pointer">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
            <span className="material-icons text-primary-dark dark:text-primary text-2xl group-hover:scale-110 transition-transform">add_task</span>
          </div>
          <span className="font-bold text-earth-dark dark:text-white">New Task</span>
        </Link>
      </div>
    </div>
  );
}
