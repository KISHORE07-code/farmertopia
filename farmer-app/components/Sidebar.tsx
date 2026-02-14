'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { signOut } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname === '/login') return null;

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', href: '/' },
    { name: 'Map', icon: 'map', href: '/fields' },
    { name: 'Cattle', icon: 'pets', href: '/cattle' },
    { name: 'Rentals', icon: 'agriculture', href: '/rentals' },
    { name: 'Marketplace', icon: 'store', href: '/marketplace' },
    { name: 'Community', icon: 'people', href: '/community' },
    { name: 'Analytics', icon: 'bar_chart', href: '/analytics' },
    { name: 'Commodities', icon: 'trending_up', href: '/market' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-earth-dark border-r border-gray-200 dark:border-gray-800 min-h-screen sticky top-0 shrink-0">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
          <span className="material-icons">eco</span>
          Farmertopia
        </h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-primary/10 text-primary font-bold' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className={`material-icons ${isActive ? 'text-primary' : ''}`}>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
        <Link 
          href="/harvest-log"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-earth-dark font-bold hover:bg-primary-dark transition-all justify-center shadow-lg shadow-primary/20"
        >
          <span className="material-icons">add</span>
          Log Harvest
        </Link>
        
        <button 
          onClick={() => signOut()}
          className="flex items-center gap-3 px-4 py-2 w-full rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/10 transition-all justify-center text-sm font-medium"
        >
          <span className="material-icons text-sm">logout</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
