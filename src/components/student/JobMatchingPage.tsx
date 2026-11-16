import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  MapPin,
  Building2,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { JobPosting } from '../../types';

export const JobMatchingPage: React.FC = () => {
  const { jobs, applyToJob, appliedJobIds, toggleBookmarkJob, bookmarkedJobs, setCurrentTab } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobForMatchExplainer, setSelectedJobForMatchExplainer] = useState<JobPosting | null>(null);
  const [selectedJobDetails, setSelectedJobDetails] = useState<JobPosting | null>(null);

  const filteredJobs = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <Briefcase className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Jobs Matched to Your Skills
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real employer listings algorithmically ranked by your verified competencies and portfolio evidence.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter by title, company, skill..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="space-y-4">
        {filteredJobs.map(job => {
          const isApplied = appliedJobIds.includes(job.id);
          const isBookmarked = bookmarkedJobs.includes(job.id);

          return (
            <div
              key={job.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all shadow-xs ${
                job.matchPercentage >= 90
                  ? 'border-emerald-200 hover:border-emerald-400 hover:shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                {/* Left info */}
                <div className="flex items-start gap-4">
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-slate-900">{job.jobTitle}</h3>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-500">
                      <span className="font-medium text-slate-700">{job.companyName}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {job.location} ({job.workplaceType})
                      </span>
                      <span>•</span>
                      <span className="font-semibold text-emerald-700 font-mono">
                        {job.salary}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2.5 max-w-2xl leading-relaxed">
                      {job.description}
                    </p>

                    {/* Matched vs Missing Skills */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-[11px] font-semibold text-slate-500">Skills matched:</span>
                      {job.matchedSkills.map((s, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[11px] font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {s} ✓
                        </span>
                      ))}

                      {job.missingSkills.length > 0 && (
                        <>
                          <span className="text-[11px] font-semibold text-slate-400 ml-2">Missing:</span>
                          {job.missingSkills.map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-mono text-[11px]"
                            >
                              <AlertTriangle className="w-3 h-3 text-rose-500" />
                              {m}
                            </span>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right match score & actions */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                  <div className="text-left lg:text-right">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      Skill Alignment
                    </div>
                    <div className="text-2xl font-black text-emerald-600 font-mono">
                      {job.matchPercentage}%
                    </div>
                    <button
                      onClick={() => setSelectedJobForMatchExplainer(job)}
                      className="text-[11px] text-emerald-700 hover:text-emerald-800 font-medium underline flex items-center gap-1 mt-0.5"
                    >
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      <span>Why am I a {job.matchPercentage}% match?</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedJobDetails(job)}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                    >
                      View Job
                    </button>

                    <button
                      onClick={() => applyToJob(job.id)}
                      disabled={isApplied}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                        isApplied
                          ? 'bg-emerald-100 text-emerald-800 cursor-default'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {isApplied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Applied</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Apply with Passport</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* "Why am I a match?" Modal */}
      {selectedJobForMatchExplainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
                  AI Alignment Breakdown
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  Why you are a {selectedJobForMatchExplainer.matchPercentage}% match
                </h3>
              </div>
              <button
                onClick={() => setSelectedJobForMatchExplainer(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-600">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-semibold text-slate-900 text-sm">
                  {selectedJobForMatchExplainer.jobTitle} • {selectedJobForMatchExplainer.companyName}
                </div>
                <div className="text-emerald-700 font-medium text-xs mt-0.5">
                  Top tier recommendation matching your verified skills
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Fully Matched & Verified Skills:</span>
                </h4>
                <div className="space-y-1.5 pl-1">
                  {selectedJobForMatchExplainer.matchedSkills.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/60 text-emerald-900 border border-emerald-100">
                      <span className="font-semibold">{s}</span>
                      <span className="text-[11px] text-emerald-700 font-mono">100% Score Weight</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedJobForMatchExplainer.missingSkills.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                    <span>The Missing Skills Preventing 100%:</span>
                  </h4>
                  <div className="space-y-1.5 pl-1">
                    {selectedJobForMatchExplainer.missingSkills.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-rose-50 text-rose-900 border border-rose-200">
                        <div className="font-semibold">{m}</div>
                        <div className="text-[11px] text-rose-700 mt-0.5">
                          Action: Complete Week 4 of your Roadmap (Docker multi-stage builds) to convert this into a 100% guaranteed match.
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedJobForMatchExplainer(null);
                  setCurrentTab('roadmap');
                }}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>Jump to Gap-Closing Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedJobForMatchExplainer(null)}
                className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Job Details Modal */}
      {selectedJobDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">
                  {selectedJobDetails.jobTitle}
                </h3>
                <div className="text-xs text-slate-400">
                  {selectedJobDetails.companyName} • {selectedJobDetails.location}
                </div>
              </div>
              <button
                onClick={() => setSelectedJobDetails(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-600">
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-400">Stipend / Salary:</span>
                  <div className="font-bold text-slate-900">{selectedJobDetails.salary}</div>
                </div>
                <div>
                  <span className="text-slate-400">Experience Needed:</span>
                  <div className="font-bold text-slate-900">{selectedJobDetails.experienceRequired}</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider mb-1">
                  About the Role:
                </h4>
                <p className="leading-relaxed text-slate-700">
                  {selectedJobDetails.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider mb-1">
                  Required Competencies:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJobDetails.requiredSkills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded font-mono text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedJobDetails(null)}
                className="px-4 py-2 text-slate-600 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  applyToJob(selectedJobDetails.id);
                  setSelectedJobDetails(null);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>1-Click Apply with Skill Passport</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
