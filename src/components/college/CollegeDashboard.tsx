import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  TrendingUp,
  AlertTriangle,
  Download,
  BarChart3,
  Award,
  ChevronRight,
  Sparkles,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { COLLEGE_ANALYTICS } from '../../data/mockData';

export const CollegeDashboard: React.FC = () => {
  const [downloadingReport, setDownloadingReport] = useState(false);
  const data = COLLEGE_ANALYTICS;

  const handleExportReport = () => {
    setDownloadingReport(true);
    setTimeout(() => {
      setDownloadingReport(false);
      window.print?.();
    }, 600);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                {data.institutionName} • Dean & Placement Cell
              </h1>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-bold border border-blue-200">
                Institutional License
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time curriculum readiness analytics, cohort skill gap diagnosis, and recruiter hiring alignment.
            </p>
          </div>
        </div>

        <button
          onClick={handleExportReport}
          disabled={downloadingReport}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors self-start md:self-auto"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>{downloadingReport ? 'Generating Report...' : 'Export Placement Report'}</span>
        </button>
      </div>

      {/* Top 4 Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Students */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Total Enrolled Students</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-3xl font-black text-slate-900 font-mono mt-2">
            {data.totalStudents.toLocaleString()}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">2026 Graduating Cohort</p>
        </div>

        {/* Career Ready */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Career Ready (Threshold &gt;75%)</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-emerald-600 font-mono mt-2">
            {data.careerReadyPercentage}%
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
            <div
              className="bg-emerald-500 h-1.5 rounded-full"
              style={{ width: `${data.careerReadyPercentage}%` }}
            />
          </div>
        </div>

        {/* Needs Training */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Needs Skill Intervention</span>
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-3xl font-black text-rose-600 font-mono mt-2">
            {data.needsTrainingPercentage}%
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
            <div
              className="bg-rose-500 h-1.5 rounded-full"
              style={{ width: `${data.needsTrainingPercentage}%` }}
            />
          </div>
        </div>

        {/* Projected Placement */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Projected Placement Rate</span>
            <TrendingUp className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-black text-teal-600 font-mono mt-2">
            {data.placementRateProjected}
          </div>
          <p className="text-[10px] text-teal-700 font-medium mt-1">Based on verified skill passports</p>
        </div>
      </div>

      {/* Two Columns: Top Institutional Skill Gaps & Department Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 6 cols: Top Skill Gaps */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <h3 className="font-bold text-sm text-slate-900">
                Top 5 Cohort Skill Gaps
              </h3>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Curriculum Deficits</span>
          </div>

          <div className="space-y-3">
            {data.topSkillGaps.map(gap => (
              <div
                key={gap.rank}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 font-bold font-mono text-xs flex items-center justify-center">
                    #{gap.rank}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{gap.skill}</div>
                    <div className="text-[10px] text-slate-500">
                      Affects {gap.affectedStudents.toLocaleString()} Students
                    </div>
                  </div>
                </div>

                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    gap.urgency === 'Critical'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : gap.urgency === 'High'
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                >
                  {gap.urgency}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <span>SkillBridge Automated Intervention: Deploy 4-week Docker bootcamp</span>
            <button className="font-bold text-emerald-800 hover:text-emerald-900 underline">
              Launch
            </button>
          </div>
        </div>

        {/* Right 6 cols: Department Readiness Comparison */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <h3 className="font-bold text-sm text-slate-900">
                Department Readiness Comparison
              </h3>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Batch 2026</span>
          </div>

          <div className="space-y-4">
            {data.departmentPerformance.map((dept, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-slate-800">
                    {dept.department} ({dept.students} students)
                  </span>
                  <span className="font-mono text-emerald-600 font-bold">
                    {dept.readyPct}% Ready
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${
                      dept.readyPct >= 75
                        ? 'bg-emerald-500'
                        : dept.readyPct >= 60
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${dept.readyPct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Most Demanded Skills by Recruiters */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-[11px] uppercase font-bold text-slate-500 tracking-wider mb-2">
              High-Demand Technologies Requested by Visiting Recruiters:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {data.demandedSkillsByRecruiters.map((dem, dIdx) => (
                <div key={dIdx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{dem.skill}</span>
                  <span className="text-emerald-600 font-mono font-bold text-[11px]">{dem.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
