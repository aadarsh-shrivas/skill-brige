import React from 'react';
import {
  LayoutDashboard,
  Layers,
  Milestone,
  Briefcase,
  Award,
  Bot
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MobileNav: React.FC = () => {
  const { currentTab, setCurrentTab, userRole, setIsAssistantOpen, setIsPassportModalOpen } = useApp();

  if (userRole !== 'student') return null;

  const items = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'gaps', label: 'Skills', icon: Layers },
    { id: 'roadmap', label: 'Roadmap', icon: Milestone },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'passport', label: 'Passport', icon: Award },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shadow-lg">
      {items.map(item => {
        const Icon = item.icon;
        const isActive = currentTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              if (item.id === 'passport') {
                setIsPassportModalOpen(true);
              } else {
                setCurrentTab(item.id);
              }
            }}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors ${
              isActive
                ? 'text-emerald-600 font-semibold'
                : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="text-[10px] mt-0.5">{item.label}</span>
          </button>
        );
      })}

      {/* Quick AI float action */}
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="flex flex-col items-center justify-center py-1 px-2.5 text-emerald-600 font-medium"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 text-emerald-700" />
        </div>
        <span className="text-[10px] mt-0.5">AI</span>
      </button>
    </div>
  );
};
