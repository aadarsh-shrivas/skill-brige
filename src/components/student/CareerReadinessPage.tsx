import React from 'react';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Target,
  BarChart3,
  Flame,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CareerReadinessPage: React.FC = () => {
  const { profile, setCurrentTab, setIsPassportModalOpen } = useApp();
  const breakdown = profile.readinessBreakdown;

  const scoreCategories = [
    { name: 'Technical Skills', score: breakdown.technicalSkills, target: 90, color: 'bg-emerald-500' },
    { name: 'Assessment Performance', score: breakdown.assessmentPerformance, target: 90, color: 'bg-teal-500' },
    { name: 'Communication & Problem Solving', score: breakdown.communication, target: 85, color: 'bg-blue-500' },
    { name: 'Practical Experience', score: breakdown.practicalExperience, target: 85, color: 'bg-amber-500' },
    { name: 'Verified Portfolio Projects', score: breakdown.projects, target: 85, color: 'bg-indigo-500' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Career Readiness Score Analytics
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Data-backed readiness score based on verified technical abilities, project deliverables, and proctored test results.
          </p>
        </div>

        <button
          onClick={() => setIsPassportModalOpen(true)}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors self-start md:self-auto"
        >
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Export to Skill Passport</span>
        </button>
      </div>

      {/* Top Readiness Hero Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Circular Score */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-950/60 rounded-xl border border-slate-800">
            <div className="w-32 h-32 relative flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400 transition-all duration-700"
                  strokeDasharray={`${profile.careerReadiness}, 100`}
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white font-mono leading-none">
                  {profile.careerReadiness}%
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  Overall Score
                </span>
              </div>
            </div>

            <div className="mt-3 text-center">
              <div className="text-xs font-bold text-emerald-400">
                Top 15% Percentile Candidate
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Qualified for Senior Intern & Junior FTE
              </div>
            </div>
          </div>

          {/* Granular Breakdown */}
          <div className="md:col-span-8 space-y-3.5">
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Core Dimension Breakdown:</span>
            </div>

            <div className="space-y-2.5">
              {scoreCategories.map((item, idx) => (
                <div key={idx} className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-200">{item.name}</span>
                    <span className="font-mono font-bold text-emerald-400">{item.score}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* "To Reach 90%" Actionable Roadmap Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* To Reach 90% Checklist */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Action Plan: To reach 90% Career Readiness
              </h3>
              <p className="text-xs text-slate-500">
                Completing these 3 milestones qualifies you for elite hiring partner fast-tracks:
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {breakdown.toReach90.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 flex items-start gap-3 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold font-mono text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-900 leading-snug">
                    {step}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {idx === 0 && (
                      <button
                        onClick={() => setCurrentTab('assessment')}
                        className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                      >
                        Start Docker Assessment <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    {idx === 1 && (
                      <button
                        onClick={() => setCurrentTab('projects')}
                        className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                      >
                        Open API Project <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    {idx === 2 && (
                      <button
                        onClick={() => setCurrentTab('assessment')}
                        className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                      >
                        Take SQL Optimization Test <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Benchmarking & Verification Proof */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-slate-900 pb-3 border-b border-slate-100">
            Recruiter Trust & Verification Audit
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">Verification Integrity Score</span>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100% Tamper Proof
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">Automated Code Test Evaluations</span>
              <span className="font-mono font-bold text-slate-900">
                3 Proctored IDE Sessions
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">GitHub Commit & PR Audit</span>
              <span className="font-mono font-bold text-slate-900">
                85% Branch Coverage
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">National Percentile</span>
              <span className="font-mono font-bold text-emerald-600">
                Top 88th Percentile
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setCurrentTab('jobs')}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Explore 23 Matching Job Listings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
