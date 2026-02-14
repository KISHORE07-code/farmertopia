'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="px-6 py-4 flex items-center justify-between shrink-0">
      <div>
        <p className="text-earth-mid dark:text-gray-400 text-sm font-medium">Good Morning,</p>
        <h1 className="text-2xl font-bold text-earth-dark dark:text-white">{session?.user?.name || "Farmer"}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => signOut()}
          className="p-2 rounded-full bg-white dark:bg-earth-dark shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer md:hidden"
        >
          <span className="material-icons text-[20px]">logout</span>
        </button>
        <div className="relative">
          <button className="p-2 rounded-full bg-white dark:bg-earth-dark shadow-sm border border-gray-100 dark:border-gray-700 relative hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="material-icons text-earth-dark dark:text-primary">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-earth-dark"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
