import React from 'react';
import {
  LayoutDashboard,
  FileText,
  Layers,
  GitCompare,
  Milestone,
  Code2,
  FolderGit2,
  TrendingUp,
  Award,
  Briefcase,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar: React.FC = () => {
  const { currentTab, setCurrentTab, profile, setIsAssistantOpen } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'resume', label: 'Resume Analyzer', icon: FileText, badge: 'AI' },
    { id: 'skills', label: 'Skill Analysis', icon: Layers, badge: `${profile.skills.length}` },
    { id: 'gaps', label: 'Skill Gap Matrix', icon: GitCompare, badge: `${profile.skillGapsCount} gaps` },
    { id: 'roadmap', label: 'Personalized Roadmap', icon: Milestone, badge: '6 Wks' },
    { id: 'assessment', label: 'Prove Your Skills', icon: Code2, badge: 'Live IDE' },
    { id: 'projects', label: 'Build Portfolio', icon: FolderGit2, badge: `${profile.projects.length}` },
    { id: 'readiness', label: 'Career Readiness', icon: TrendingUp, badge: `${profile.careerReadiness}%` },
    { id: 'passport', label: 'Skill Passport', icon: Award, badge: 'Verified' },
    { id: 'jobs', label: 'Job Matching', icon: Briefcase, badge: `${profile.jobMatchesCount}` },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800 select-none">
      {/* Target role banner */}
      <div className="p-4 border-b border-slate-800/80">
        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
          Target Career
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="font-semibold text-white text-sm">{profile.targetRole}</div>
          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {profile.careerReadiness}% Ready
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${profile.careerReadiness}%` }}
          />
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Student Portal
        </div>
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom AI prompt card */}
      <div className="p-3 border-t border-slate-800/80 m-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SkillBridge AI</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          "What should I learn first to hit 90% readiness?"
        </p>
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="mt-2.5 w-full flex items-center justify-between px-2.5 py-1.5 text-[11px] font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg transition-colors"
        >
          <span>Ask Career Coach</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
