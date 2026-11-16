import React, { useState } from 'react';
import {
  Milestone,
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  Flame,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RoadmapPage: React.FC = () => {
  const { profile, markRoadmapWeekCompleted, setCurrentTab } = useApp();
  const [expandedWeek, setExpandedWeek] = useState<number>(3); // expand week 3 by default

  const toggleExpand = (weekNum: number) => {
    setExpandedWeek(expandedWeek === weekNum ? 0 : weekNum);
  };

  const completedWeeks = profile.roadmaps.filter(w => w.completed).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <Milestone className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Your {profile.targetRole} Roadmap
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Personalized 6-week curriculum tailored to bridge your verified gaps and hit 90%+ readiness.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-500 font-medium">Roadmap Progress</div>
            <div className="text-sm font-bold text-slate-900 font-mono">
              {completedWeeks} of {profile.roadmaps.length} Weeks ({Math.round((completedWeeks / profile.roadmaps.length) * 100)}%)
            </div>
          </div>
          <div className="w-12 h-12 relative flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-600 transition-all duration-500"
                strokeDasharray={`${(completedWeeks / profile.roadmaps.length) * 100}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {profile.roadmaps.map(week => {
          const isExpanded = expandedWeek === week.week;
          return (
            <div
              key={week.week}
              className={`bg-white rounded-2xl border transition-all ${
                week.completed
                  ? 'border-emerald-200 bg-emerald-50/10'
                  : isExpanded
                  ? 'border-emerald-500 ring-2 ring-emerald-500/10 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Summary Header */}
              <div
                onClick={() => toggleExpand(week.week)}
                className="p-5 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      week.completed
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {week.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      `W${week.week}`
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                        Week {week.week}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          week.difficulty === 'Beginner'
                            ? 'bg-emerald-50 text-emerald-700'
                            : week.difficulty === 'Intermediate'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {week.difficulty}
                      </span>
                      {week.completed && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          Completed ✓
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                      {week.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{week.estimatedHours} hrs</span>
                  </div>

                  <div className="hidden md:block w-24">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Progress</span>
                      <span>{week.progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full ${week.completed ? 'bg-emerald-600' : 'bg-teal-500'}`}
                        style={{ width: `${week.progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <button className="text-slate-400 hover:text-slate-600 p-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-4">
                  {/* Learning Objective */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Learning Objective:
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {week.learningObjective}
                    </p>
                  </div>

                  {/* PROMINENT "Why am I learning this?" */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs">
                    <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Why am I learning this?</span>
                    </div>
                    <p className="mt-1 text-amber-800 leading-relaxed">
                      {week.whyLearnThis}
                    </p>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Skills Gained:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {week.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-mono text-[11px] font-medium border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tasks Checklist */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Hands-on Milestones:
                    </h4>
                    <div className="space-y-2">
                      {week.tasks.map(t => (
                        <div
                          key={t.id}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                        >
                          <input
                            type="checkbox"
                            checked={t.completed || week.completed}
                            readOnly
                            className="rounded text-emerald-600 focus:ring-emerald-500"
                          />
                          <span className={t.completed || week.completed ? 'line-through text-slate-400' : 'text-slate-800'}>
                            {t.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Curated Resources */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Recommended Practical Resources:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {week.resources.map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between text-xs"
                        >
                          <div>
                            <div className="font-semibold text-slate-900">{res.title}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">
                              {res.type} • {res.duration}
                            </div>
                          </div>
                          <span className="text-emerald-600 hover:text-emerald-700 font-semibold text-[11px]">
                            Start
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => markRoadmapWeekCompleted(week.week)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                        week.completed
                          ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{week.completed ? 'Mark as Incomplete' : 'Mark Week as Complete (+3% Readiness)'}</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('assessment')}
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    >
                      <span>Take Code Assessment for this Week</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
