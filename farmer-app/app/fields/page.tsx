import React from 'react';
import { getFields } from '@/lib/data';
import MapComponent from '@/components/Map';

export default async function FieldsPage() {
  const fields = await getFields();

  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden relative">
      {/* Mobile Header (Hidden on Desktop) */}
      <header className="md:hidden absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent pt-12 pb-6 px-4 pointer-events-none">
        <div className="flex items-center justify-between text-white pointer-events-auto">
          <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer">
            <span className="material-icons text-xl">arrow_back</span>
          </button>
          <h1 className="text-lg font-semibold tracking-wide shadow-sm">Field Overview</h1>
          <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors relative cursor-pointer">
            <span className="material-icons text-xl">tune</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-black/20"></span>
          </button>
        </div>
      </header>

      {/* List Section */}
      <section className="order-2 md:order-1 md:w-1/3 lg:w-96 bg-background-light dark:bg-background-dark md:border-r border-gray-200 dark:border-gray-800 h-full flex flex-col z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:shadow-none -mt-4 md:mt-0 rounded-t-3xl md:rounded-none isolate overflow-hidden">
        {/* Header */}
        <div className="pt-3 pb-2 px-6 bg-white dark:bg-earth-dark border-b border-gray-100 dark:border-gray-800 sticky top-0 z-20">
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 md:hidden"></div>
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Fields</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{fields.length} active plots</p>
            </div>
            <div className="flex items-center gap-1 text-primary text-sm font-medium bg-primary/10 px-3 py-1.5 rounded-full cursor-pointer hover:bg-primary/20 transition-colors">
              <span>Sort</span>
              <span className="material-icons text-base">expand_more</span>
            </div>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 md:pb-4 bg-background-light dark:bg-background-dark scrollbar-thin">
          {fields.map((field) => (
            <div key={field.id} className="bg-white dark:bg-earth-dark rounded-xl p-4 shadow-sm border-l-4 border-l-transparent hover:border-l-primary hover:shadow-md transition-all cursor-pointer group">
               <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      field.crop === 'Soybeans' ? 'bg-yellow-400/10 text-yellow-600 dark:text-yellow-400' : 'bg-primary/10 text-primary-dark dark:text-primary'
                  }`}>
                    <span className="material-icons">agriculture</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{field.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{field.crop} • {field.acres} Acres</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                    field.status === 'Healthy' 
                      ? 'bg-primary/20 text-green-700 dark:text-green-300' 
                      : 'bg-yellow-400/20 text-yellow-700 dark:text-yellow-300'
                }`}>{field.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-background-light dark:bg-black/20 p-2 rounded-lg">
                  <span className="block text-[10px] uppercase text-gray-400 font-semibold mb-0.5">Growth Stage</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{field.growthStage}</span>
                </div>
                <div className="bg-background-light dark:bg-black/20 p-2 rounded-lg">
                  <span className="block text-[10px] uppercase text-gray-400 font-semibold mb-0.5">Moisture</span>
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                      field.moisturePercentage < 10 ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-500 dark:text-blue-400'
                  }`}>
                    <span className="material-icons text-xs">water_drop</span> {field.moisturePercentage}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                <span className="text-xs text-gray-400">Last: {new Date(field.lastIrrigated).toLocaleDateString()}</span>
                <button className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1">
                  Details <span className="material-icons text-base">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="order-1 md:order-2 flex-1 relative bg-gray-200 h-[45vh] md:h-full shrink-0">
        <MapComponent fields={fields} />
        
        {/* Legend */}
        <div className="absolute top-24 md:top-4 left-4 bg-white/90 dark:bg-earth-dark/90 backdrop-blur-sm p-2 rounded-lg shadow-sm z-10 border border-gray-100 dark:border-gray-700 pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Healthy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Needs Check</span>
          </div>
        </div>
      </section>
    </div>
  );
}
