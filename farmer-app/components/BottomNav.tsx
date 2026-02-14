'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  if (pathname === '/harvest-log' || pathname === '/login') return null;

  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-earth-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 pb-6 pt-3 px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.02)] z-50 md:hidden">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center gap-1 group">
          <span className={`material-icons text-2xl group-hover:scale-110 transition-transform ${pathname === '/' ? 'text-primary' : 'text-gray-400 dark:text-gray-500 group-hover:text-primary'}`}>dashboard</span>
          <span className={`text-[10px] font-bold ${pathname === '/' ? 'text-primary' : 'text-gray-400 dark:text-gray-500 group-hover:text-primary'}`}>Home</span>
        </Link>
        <Link href="/fields" className="flex flex-col items-center gap-1 group">
          <span className={`material-icons text-2xl group-hover:text-primary transition-colors ${pathname === '/fields' ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>map</span>
          <span className={`text-[10px] font-medium group-hover:text-primary transition-colors ${pathname === '/fields' ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>Fields</span>
        </Link>
        <div className="relative -top-6">
          <Link href="/harvest-log" className="w-14 h-14 bg-earth-dark dark:bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center group active:scale-95 transition-all hover:shadow-xl">
            <span className="material-icons text-white dark:text-earth-dark text-3xl">add</span>
          </Link>
        </div>
        <Link href="/tasks" className="flex flex-col items-center gap-1 group">
          <span className={`material-icons text-2xl group-hover:text-primary transition-colors ${pathname === '/tasks' ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>assignment</span>
          <span className={`text-[10px] font-medium group-hover:text-primary transition-colors ${pathname === '/tasks' ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>Tasks</span>
        </Link>
        <Link href="/analytics" className="flex flex-col items-center gap-1 group">
          <span className={`material-icons text-2xl group-hover:text-primary transition-colors ${pathname === '/analytics' ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>bar_chart</span>
          <span className={`text-[10px] font-medium group-hover:text-primary transition-colors ${pathname === '/analytics' ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>Analytics</span>
        </Link>
      </div>
    </nav>
  );
}
