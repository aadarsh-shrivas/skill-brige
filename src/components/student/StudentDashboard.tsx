import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FolderGit2,
  Briefcase,
  Award,
  ChevronRight,
  Flame,
  Code2,
  TrendingUp,
  Target
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StudentDashboard: React.FC = () => {
  const { profile, setCurrentTab, setIsPassportModalOpen, setIsAssistantOpen } = useApp();

  const nextTask = profile.roadmaps
    .flatMap(w => w.tasks)
    .find(t => !t.completed);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Good morning, {profile.name.split(' ')[0]} 👋
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <Target className="w-3.5 h-3.5" />
                Target Career: {profile.targetRole}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{profile.education}</span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              You are making steady progress. Closing your <strong className="text-rose-300">Docker</strong> and <strong className="text-amber-300">REST API</strong> gaps will push your readiness beyond 90%.
            </p>
          </div>

          {/* Circular Readiness Meter */}
          <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400 transition-all duration-700 ease-out"
                  strokeDasharray={`${profile.careerReadiness}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-base sm:text-xl font-black text-white font-mono leading-none">
                  {profile.careerReadiness}%
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  Ready
                </span>
              </div>
            </div>

            <div className="text-left">
              <div className="text-xs font-semibold text-slate-200">Career Readiness</div>
              <div className="text-[11px] text-emerald-400 font-medium mt-0.5">Top 15% of Candidates</div>
              <button
                onClick={() => setCurrentTab('readiness')}
                className="mt-2 text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group"
              >
                <span>Full Analytics</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Career Readiness */}
        <div
          onClick={() => setCurrentTab('readiness')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Career Readiness</span>
            <TrendingUp className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900 font-mono">
              {profile.careerReadiness}%
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Goal: 90%+ for Elite Track</p>
        </div>

        {/* Verified Skills */}
        <div
          onClick={() => setCurrentTab('skills')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Verified Skills</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900 font-mono">
              {profile.verifiedSkillsCount}
            </span>
            <span className="text-xs text-slate-400">/ {profile.skills.length}</span>
          </div>
          <p className="text-[10px] text-emerald-600 font-medium mt-1">Python, SQL, Git verified</p>
        </div>

        {/* Skill Gaps */}
        <div
          onClick={() => setCurrentTab('gaps')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-rose-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Skill Gaps</span>
            <AlertTriangle className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-black text-rose-600 font-mono">
              {profile.skillGapsCount}
            </span>
            <span className="text-xs text-slate-400">critical</span>
          </div>
          <p className="text-[10px] text-rose-600 font-medium mt-1">Docker & REST API highest</p>
        </div>

        {/* Recommended Projects */}
        <div
          onClick={() => setCurrentTab('projects')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Projects</span>
            <FolderGit2 className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900 font-mono">
              {profile.recommendedProjectsCount}
            </span>
            <span className="text-xs text-slate-400">tailored</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Bridges multiple gaps</p>
        </div>

        {/* Job Matches */}
        <div
          onClick={() => setCurrentTab('jobs')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer group col-span-2 sm:col-span-1"
        >
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Job Matches</span>
            <Briefcase className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900 font-mono">
              {profile.jobMatchesCount}
            </span>
            <span className="text-xs text-emerald-600 font-bold">94% top</span>
          </div>
          <p className="text-[10px] text-teal-700 font-medium mt-1">TechNova hiring now</p>
        </div>
      </div>

      {/* Two Column Layout: Action Center & Readiness Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Next Best Action & Current Roadmap */}
        <div className="lg:col-span-2 space-y-6">
          {/* Priority Action Card */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-amber-100 text-amber-700 rounded-lg">
                  <Flame className="w-4 h-4" />
                </span>
                <h3 className="font-bold text-sm text-slate-900">
                  Recommended Next Action
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                +3% Readiness Boost
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-sm text-slate-900">
                  Week 3: Database ORMs & JWT Token Rotation
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Next Task: {nextTask ? nextTask.title : 'Complete Week 3 milestone'}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                    SQLAlchemy 2.0
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                    PostgreSQL
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                    Alembic
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 shrink-0">
                <button
                  onClick={() => setCurrentTab('roadmap')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Continue Lab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setCurrentTab('assessment')}
                  className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Test Skills</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Skill Gap Preview */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-sm text-slate-900">
                  Skill Gap Overview for {profile.targetRole}
                </h3>
                <p className="text-xs text-slate-500">
                  Real-time comparison against 24 active recruiter criteria
                </p>
              </div>
              <button
                onClick={() => setCurrentTab('gaps')}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <span>Full Matrix</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Python', current: 4, required: 4, gap: 'None', status: 'verified', color: 'emerald' },
                { name: 'SQL', current: 4, required: 4, gap: 'None', status: 'verified', color: 'emerald' },
                { name: 'FastAPI', current: 2, required: 4, gap: 'Medium', status: 'partially_verified', color: 'amber' },
                { name: 'REST API', current: 1, required: 4, gap: 'High', status: 'partially_verified', color: 'rose' },
                { name: 'Docker', current: 0, required: 3, gap: 'High', status: 'not_verified', color: 'rose' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/70 border border-slate-100 text-xs">
                  <div className="w-28 font-semibold text-slate-800">{item.name}</div>
                  <div className="flex-1 max-w-[200px] mx-4 hidden sm:block">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Cur: {item.current}/5</span>
                      <span>Req: {item.required}/5</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full ${
                          item.gap === 'None'
                            ? 'bg-emerald-500'
                            : item.gap === 'Medium'
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${(item.current / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                        item.gap === 'None'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.gap === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {item.gap} Gap
                    </span>
                    <span className="text-[10px] text-slate-400 capitalize hidden md:inline">
                      {item.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Skill Passport Card & Top Job Match */}
        <div className="space-y-6">
          {/* Digital Skill Passport Preview */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-xl p-5 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-xs tracking-wider uppercase font-mono">
                  Skill Passport
                </span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                VERIFIED ID
              </span>
            </div>

            <div className="mt-4">
              <div className="text-base font-bold text-white">{profile.name}</div>
              <div className="text-xs text-slate-400">{profile.education}</div>
              <div className="text-xs text-emerald-400 font-medium mt-1">
                Target: {profile.targetRole}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 mb-2">
                  Verified Skills on Passport:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profile.skills
                    .filter(s => s.verificationStatus === 'verified')
                    .slice(0, 5)
                    .map(s => (
                      <span
                        key={s.id}
                        className="text-[10px] font-medium bg-slate-800 text-emerald-300 px-2 py-0.5 rounded flex items-center gap-1 border border-slate-700"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                        {s.name}
                      </span>
                    ))}
                </div>
              </div>

              <button
                onClick={() => setIsPassportModalOpen(true)}
                className="mt-5 w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>View Verifiable Passport</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Top Job Teaser */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                Top Job Alignment
              </h3>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-mono">
                94% Match
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                TN
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900">
                  Backend Developer Intern
                </div>
                <div className="text-xs text-slate-500">TechNova Solutions • Remote</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">
                  ₹25,000 / month
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">1 Missing: Docker</span>
              <button
                onClick={() => setCurrentTab('jobs')}
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                View Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
