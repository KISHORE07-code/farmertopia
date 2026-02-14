import React from 'react';
import Link from 'next/link';

export default function HarvestLogPage() {
  return (
    <>
      {/* Header */}
      <header className="flex-none px-6 py-5 flex items-center justify-between border-b border-gray-100 dark:border-white/10 bg-white dark:bg-earth-dark z-10 shrink-0">
        <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors">
          <span className="material-icons text-2xl">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">New Harvest Record</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors">
          <span className="material-icons text-2xl">more_horiz</span>
        </button>
      </header>
      
      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6 pb-32 bg-background-light/50 dark:bg-background-dark/50">
        {/* Context Info */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-primary">
            <span className="material-icons text-xl">calendar_today</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Date</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Oct 24, 2023 • 2:30 PM</p>
          </div>
        </div>
        
        {/* Selection Group */}
        <div className="space-y-4">
          {/* Field Selector */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 ml-1">Field Location</label>
            <button className="w-full bg-white dark:bg-earth-dark border-2 border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 flex items-center justify-between shadow-sm active:border-primary active:ring-1 active:ring-primary transition-all text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400">
                  <span className="material-icons text-lg">terrain</span>
                </div>
                <div>
                  <span className="block text-base font-bold text-gray-900 dark:text-white">North River Field</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Sector A-14</span>
                </div>
              </div>
              <span className="material-icons text-gray-400">expand_more</span>
            </button>
          </div>
          {/* Crop Selector */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 ml-1">Crop Variety</label>
            <button className="w-full bg-white dark:bg-earth-dark border-2 border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 flex items-center justify-between shadow-sm active:border-primary active:ring-1 active:ring-primary transition-all text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-400">
                  <span className="material-icons text-lg">grass</span>
                </div>
                <div>
                  <span className="block text-base font-bold text-gray-900 dark:text-white">Winter Wheat</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Variety: Hard Red</span>
                </div>
              </div>
              <span className="material-icons text-gray-400">expand_more</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 my-2"></div>
        
        {/* Numeric Inputs Group */}
        <div className="space-y-5">
          {/* Total Weight (Active State Example) */}
          <div>
            <label className="block text-sm font-medium text-primary dark:text-primary mb-1.5 ml-1">Total Weight (Tons)</label>
            <div className="relative">
              <input className="w-full bg-white dark:bg-earth-dark border-2 border-primary rounded-xl px-4 py-4 text-2xl font-bold text-gray-900 dark:text-white shadow-sm outline-none ring-2 ring-primary/20" readOnly type="text" defaultValue="12.50"/>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 font-medium">TONS</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Moisture Content */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 ml-1">Moisture %</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-earth-dark border-2 border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-xl font-bold text-gray-900 dark:text-white shadow-sm focus:border-primary outline-none" placeholder="0.0" readOnly type="text"/>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 font-medium">%</span>
              </div>
            </div>
            {/* Quality Grade */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 ml-1">Quality Grade</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-earth-dark border-2 border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-xl font-bold text-gray-900 dark:text-white shadow-sm focus:border-primary outline-none" placeholder="-" readOnly type="text"/>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 font-medium text-xs uppercase">Grade</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual Warning Example */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-lg p-3 hidden items-start space-x-3">
          <span className="material-icons text-yellow-600 dark:text-yellow-500 text-lg mt-0.5">warning</span>
          <p className="text-xs text-yellow-800 dark:text-yellow-200 font-medium leading-relaxed">High moisture content detected. Consider drying before storage.</p>
        </div>
      </main>
      
      {/* Custom Keypad & Action Area */}
      <div className="flex-none bg-white dark:bg-earth-dark shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20 rounded-t-2xl shrink-0">
        {/* Save Button */}
        <div className="px-6 pt-4 pb-2">
          <button className="w-full bg-primary hover:bg-[#0fd630] active:scale-[0.98] transition-all text-background-dark font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center space-x-2">
            <span className="material-icons">save_alt</span>
            <span>Save Harvest Record</span>
          </button>
        </div>
        {/* Keypad Grid */}
        <div className="grid grid-cols-3 gap-1 p-2 pb-6">
          {/* Row 1 */}
          {['1', '2', '3'].map((key) => (
            <button key={key} className="h-14 sm:h-16 rounded-lg text-2xl font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 transition-colors">
              {key}
            </button>
          ))}
          {/* Row 2 */}
          {['4', '5', '6'].map((key) => (
            <button key={key} className="h-14 sm:h-16 rounded-lg text-2xl font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 transition-colors">
              {key}
            </button>
          ))}
          {/* Row 3 */}
          {['7', '8', '9'].map((key) => (
            <button key={key} className="h-14 sm:h-16 rounded-lg text-2xl font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 transition-colors">
              {key}
            </button>
          ))}
          {/* Row 4 */}
          <button className="h-14 sm:h-16 rounded-lg text-2xl font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 transition-colors">.</button>
          <button className="h-14 sm:h-16 rounded-lg text-2xl font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 transition-colors">0</button>
          <button className="h-14 sm:h-16 rounded-lg flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 active:bg-gray-200 transition-colors">
            <span className="material-icons">backspace</span>
          </button>
        </div>
      </div>
    </>
  );
}
