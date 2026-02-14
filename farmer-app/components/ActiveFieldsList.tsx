import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getFields } from '@/lib/data';

export default async function ActiveFieldsList() {
  const fields = await getFields();

  return (
    <div className="pb-4">
      <div className="flex justify-between items-end mb-3">
        <h2 className="text-lg font-bold text-earth-dark dark:text-white flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Active Fields
        </h2>
        <Link className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer" href="/fields">View All</Link>
      </div>
      <div className="space-y-3">
        {fields.slice(0, 2).map((field) => (
          <div key={field.id} className="bg-white dark:bg-earth-dark p-4 rounded-xl shadow-card border border-gray-100 dark:border-gray-700 flex gap-4 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 relative">
              <Image
                alt={`${field.name} - ${field.crop}`}
                src={field.imageUrl}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="80px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-1 py-0.5 text-center backdrop-blur-sm z-10">
                {field.name}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-earth-dark dark:text-white group-hover:text-primary transition-colors">{field.crop}</h3>
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                  field.status === 'Healthy' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                    : 'bg-ochre/20 text-ochre'
                }`}>{field.status}</span>
              </div>
              <p className="text-xs text-earth-mid dark:text-gray-400 mb-3">{field.growthStage}</p>
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 mb-1 overflow-hidden">
                <div className="bg-primary h-2.5 rounded-full relative" style={{ width: `${field.maturityPercentage}%` }}>
                  {field.maturityPercentage > 95 && (
                    <span className="absolute -right-1 -top-1 w-3 h-3 bg-white border-2 border-primary rounded-full shadow-sm"></span>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-earth-mid dark:text-gray-400 font-medium">
                <span>Maturity</span>
                <span>{field.maturityPercentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
