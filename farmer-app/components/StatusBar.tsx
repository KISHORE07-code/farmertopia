import React from 'react';

export default function StatusBar() {
  return (
    <div className="h-12 w-full flex items-center justify-between px-6 pt-2 shrink-0">
      <span className="text-sm font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="material-icons text-[18px]">signal_cellular_alt</span>
        <span className="material-icons text-[18px]">wifi</span>
        <span className="material-icons text-[18px]">battery_full</span>
      </div>
    </div>
  );
}
