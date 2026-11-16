import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EcosystemFlowBanner: React.FC = () => {
  const { currentTab, setCurrentTab, userRole } = useApp();

  if (userRole !== 'student' && userRole !== 'guest') return null;

  const flowSteps = [
    { id: 'resume', label: '1. Discover', desc: 'Resume & Profile', tab: 'resume' },
    { id: 'gaps', label: '2. Analyze', desc: 'Skill Gap Matrix', tab: 'gaps' },
    { id: 'roadmap', label: '3. Learn', desc: 'Adaptive Roadmap', tab: 'roadmap' },
    { id: 'projects', label: '4. Build', desc: 'Portfolio Projects', tab: 'projects' },
    { id: 'assessment', label: '5. Prove', desc: 'Code Assessments', tab: 'assessment' },
    { id: 'passport', label: '6. Credential', desc: 'Skill Passport', tab: 'passport' },
    { id: 'jobs', label: '7. Match', desc: 'Get Hired', tab: 'jobs' },
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white py-2 px-4 shadow-sm overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[760px] text-xs">
        <div className="flex items-center gap-2 font-semibold text-emerald-400 shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider font-mono text-[11px]">The SkillBridge Journey:</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {flowSteps.map((step, idx) => {
            const isActive = currentTab === step.tab;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setCurrentTab(step.tab)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all text-left ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                  title={`${step.label}: ${step.desc}`}
                >
                  <span className={isActive ? 'text-emerald-400 font-bold' : 'text-slate-500 font-medium'}>
                    {step.label}
                  </span>
                </button>
                {idx < flowSteps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="text-[11px] text-slate-400 pl-3 border-l border-slate-800 shrink-0 hidden lg:block">
          <span className="text-emerald-400 font-medium">Outcome:</span> Verifiable Job Readiness
        </div>
      </div>
    </div>
  );
};
