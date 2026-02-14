import React from 'react';
import { getWeather } from '@/lib/data';

export default async function WeatherWidget() {
  const weather = await getWeather();

  return (
    <div className="bg-gradient-to-br from-earth-dark to-[#0a180d] p-5 rounded-2xl shadow-card text-white relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {/* Weather Alert Pill */}
      {weather.alert && (
        <div className="absolute top-4 right-4 bg-ochre/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm animate-pulse z-10 cursor-pointer hover:bg-ochre transition-colors">
          <span className="material-icons text-[14px]">warning</span>
          <span className="text-xs font-bold text-white">{weather.alert.type}</span>
        </div>
      )}
      <div className="flex items-center gap-4 mt-2 relative z-10">
        <span className="material-icons text-5xl text-primary group-hover:scale-110 transition-transform duration-300">partly_cloudy_day</span>
        <div>
          <div className="text-3xl font-bold">{weather.temp}°F</div>
          <div className="text-sm text-gray-300">{weather.condition}</div>
          <div className="text-xs text-primary/80 mt-1 flex items-center gap-1">
            <span className="material-icons text-[12px]">water_drop</span> {weather.humidity}% Humidity
          </div>
        </div>
      </div>
    </div>
  );
}
