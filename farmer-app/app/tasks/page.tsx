import React from 'react';
import Image from 'next/image';
import { getTasks, getUser } from '@/lib/data';

export default async function TasksPage() {
  const tasks = await getTasks();
  const user = await getUser();

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      {/* Header Section */}
      <header className="px-6 pt-2 pb-6 bg-white dark:bg-earth-dark sticky top-0 z-20 shadow-sm border-b border-gray-100 dark:border-gray-800 shrink-0 md:static md:bg-transparent md:border-none md:shadow-none md:pt-8">
        <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto w-full">
          <div>
            <h2 className="text-sm text-gray-500 font-medium uppercase tracking-wider">My Farm</h2>
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">October 2023</h1>
              <span className="material-icons text-gray-400 text-xl cursor-pointer">expand_more</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
             <Image
              alt={user.name}
              className="object-cover"
              src={user.avatarUrl}
              width={40}
              height={40}
            />
          </div>
        </div>
        {/* Horizontal Calendar Strip */}
        <div className="flex justify-between items-center max-w-4xl mx-auto w-full md:bg-white md:dark:bg-earth-dark md:p-4 md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-700">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => {
             const date = 23 + i;
             const isActive = day === 'Wed';
             return (
              <div key={day} className="flex flex-col items-center gap-2 cursor-pointer relative flex-1">
                <span className={`text-xs font-medium ${isActive ? 'text-primary font-bold' : 'text-gray-400'}`}>{day}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isActive 
                    ? 'bg-primary text-gray-900 shadow-soft transform scale-110 font-bold text-lg' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold'
                }`}>
                  {date}
                </div>
                {isActive && <div className="w-1 h-1 bg-primary rounded-full absolute -bottom-2"></div>}
              </div>
             );
          })}
        </div>
      </header>

      {/* Main Content: Task Timeline */}
      <main className="flex-1 overflow-y-auto px-6 py-6 relative pb-24 isolate md:pb-6">
         {/* Timeline Line (Mobile/Desktop consistent) */}
         <div className="absolute top-0 bottom-0 left-[29px] w-[2px] bg-gray-100 dark:bg-gray-800 -z-10 md:left-[calc(50%-1px)] md:hidden"></div>

        <div className="max-w-4xl mx-auto w-full space-y-6">
            {/* Summary Card */}
            <div className="relative z-10 ml-8 md:ml-0">
            <div className="p-4 bg-gray-900 dark:bg-gray-800 rounded-xl shadow-lg text-white overflow-hidden relative group">
                <div className="absolute inset-0 opacity-20">
                <Image
                    alt="Green field texture"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsdaTJQ4JfKkAeH8Fev4yMDIiXj9I3qz13dnj-1DWYqgdz4pKKVjnJtlcNgH1tz6MChUK-9jKC9_x6ojTIEggadQCmNWJB0OnJP3wlQ2iI6UNRagI2mCMPc-PFFeZ0E-OnUdub9jgL2OqoiACc0tPdEQJ78u8D0WAbWWkPAX96CQa9hBU6XbiKYBnkRBTgfdLDwX8sBx6UR76OQGSbKlR7HLG35fQzEEEhi2jimQjetDhYBd5OdCZOr2z1O7lxwB8VBzA6y-WgEN7B"
                    fill
                />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                <div>
                    <p className="text-xs text-gray-300 font-medium uppercase mb-1">Daily Insight</p>
                    <h3 className="text-lg font-bold mb-1">Optimal Conditions</h3>
                    <p className="text-sm text-gray-300 leading-snug">Humidity is at 65%. Perfect for fertilizer application on Corn fields today.</p>
                </div>
                <span className="material-icons text-primary text-3xl">wb_sunny</span>
                </div>
            </div>
            </div>

            {/* Tasks List */}
            {tasks.map((task) => (
                <div key={task.id} className="relative z-10 group">
                    <div className="flex items-start gap-4">
                        {/* Time Column */}
                        <div className="flex flex-col items-center gap-1 min-w-[48px] pt-1 z-10 bg-background-light dark:bg-background-dark md:bg-transparent">
                            <span className={`text-xs font-bold ${task.status === 'In Progress' ? 'text-primary' : 'text-gray-500'}`}>{task.startTime}</span>
                            <div className={`w-3 h-3 rounded-full border-2 transition-colors ${
                                task.status === 'In Progress' 
                                    ? 'bg-primary border-primary shadow-[0_0_0_4px_rgba(19,236,55,0.2)] animate-pulse' 
                                    : 'border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark group-hover:border-primary'
                            }`}></div>
                        </div>

                        {/* Card */}
                        <div className={`flex-1 rounded-xl p-4 shadow-sm border-l-4 transition-all hover:shadow-md ${
                            task.status === 'Completed' ? 'bg-white dark:bg-gray-800 border-emerald-500 opacity-80' :
                            task.status === 'In Progress' ? 'bg-white dark:bg-gray-800 border-primary shadow-soft' :
                            'bg-white dark:bg-gray-800 border-orange-400'
                        }`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                    task.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                    task.status === 'In Progress' ? 'bg-primary/20 text-green-800 dark:text-green-300' :
                                    'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                                }`}>
                                    {task.status}
                                </span>
                                {task.status === 'In Progress' && (
                                    <button className="text-primary hover:bg-primary/10 rounded-full p-1 transition-colors">
                                        <span className="material-icons text-base">check_circle_outline</span>
                                    </button>
                                )}
                                {task.status !== 'In Progress' && (
                                    <span className="text-gray-400">
                                        <span className="material-icons text-base">more_horiz</span>
                                    </span>
                                )}
                            </div>
                            
                            <h4 className={`text-base font-bold text-gray-900 dark:text-white mb-1 ${task.status === 'Completed' ? 'line-through opacity-60' : ''}`}>
                                {task.title}
                            </h4>
                            
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{task.description}</p>
                            
                            {/* Avatars if available */}
                            {task.workerAvatars && (
                                <div className="flex -space-x-2 overflow-hidden mb-3">
                                    {task.workerAvatars.map((avatar, idx) => (
                                        <Image
                                            key={idx}
                                            alt="Worker"
                                            className="inline-block rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                                            src={avatar}
                                            width={24}
                                            height={24}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Footer Info */}
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <span className="flex items-center gap-1">
                                    <span className="material-icons text-sm">
                                        {task.type === 'Machinery' ? 'agriculture' : 
                                         task.type === 'Water' ? 'water_drop' : 
                                         task.type === 'Chemical' ? 'science' : 'build'}
                                    </span> 
                                    {task.type}
                                </span>
                                {task.duration && (
                                    <>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>{task.duration}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>
      
      {/* Floating Action Button (Mobile Only) */}
      <button className="absolute bottom-24 right-6 w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-gray-900 z-30 hover:scale-105 transition-transform active:scale-95 cursor-pointer md:hidden">
        <span className="material-icons text-3xl">add</span>
      </button>
    </div>
  );
}

