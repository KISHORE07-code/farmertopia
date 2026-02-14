import Header from '@/components/Header';
import YieldSummaryCard from '@/components/YieldSummaryCard';
import WeatherWidget from '@/components/WeatherWidget';
import QuickActions from '@/components/QuickActions';
import ActiveFieldsList from '@/components/ActiveFieldsList';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1 p-6 space-y-6">
        {/* Summary & Weather & Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <YieldSummaryCard />
          </div>
          <div className="md:col-span-4">
            <WeatherWidget />
          </div>
          <div className="md:col-span-4">
            <QuickActions />
          </div>
        </div>
        
        <ActiveFieldsList />
        
        {/* Bottom Space for mobile scroll */}
        <div className="h-8 md:hidden"></div>
      </main>
    </div>
  );
}
