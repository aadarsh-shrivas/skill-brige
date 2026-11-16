import React, { useState } from 'react';
import {
  Building2,
  Users,
  Search,
  CheckCircle2,
  Award,
  ShieldCheck,
  Star,
  Plus,
  Filter,
  ExternalLink,
  ChevronRight,
  Mail,
  Briefcase
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CandidateApplication } from '../../types';

export const CompanyDashboard: React.FC = () => {
  const {
    candidates,
    toggleCandidateShortlist,
    setSelectedCandidateForPassport,
    setIsPassportModalOpen
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobFilter, setSelectedJobFilter] = useState('Backend Developer Intern');
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobSkills, setNewJobSkills] = useState('');
  const [jobCreatedSuccess, setJobCreatedSuccess] = useState(false);

  const filteredCandidates = candidates.filter(cand =>
    cand.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cand.verifiedSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleOpenPassport = (cand: CandidateApplication) => {
    setSelectedCandidateForPassport(cand);
    setIsPassportModalOpen(true);
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    setJobCreatedSuccess(true);
    setTimeout(() => {
      setShowCreateJobModal(false);
      setJobCreatedSuccess(false);
      setNewJobTitle('');
      setNewJobSkills('');
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md">
            TN
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                TechNova Solutions Recruiter Portal
              </h1>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-bold border border-emerald-200">
                Verified Recruiter
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Pre-screened, assessment-verified candidates ranked by algorithmically audited skill fit.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCreateJobModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Job Role</span>
        </button>
      </div>

      {/* Active Job Posting Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-[10px] uppercase font-bold text-emerald-400 font-mono tracking-wider">
              Active Job Listing:
            </div>
            <h2 className="text-lg font-bold text-white mt-0.5">
              Backend Developer Intern (2026 Batch)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Bengaluru / Remote • ₹25,000/month • 42 Total Applications
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              4 Shortlisted Candidates
            </span>
          </div>
        </div>

        {/* Required skills chip list */}
        <div className="pt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 text-[11px] font-semibold">Required Benchmark Skills:</span>
          {['Python', 'FastAPI', 'SQL', 'REST API', 'Git', 'Docker'].map((req, rIdx) => (
            <span
              key={rIdx}
              className="px-2.5 py-0.5 bg-slate-800 text-slate-200 rounded font-mono text-[11px] border border-slate-700"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Search and Candidate Ranking List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Table Top Controls */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-bold text-sm text-slate-900">
            Candidate Ranking (By Algorithm Alignment)
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search candidate by name or skill..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            />
          </div>
        </div>

        {/* Candidates Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-700 uppercase font-semibold text-[10px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Rank & Candidate</th>
                <th className="py-3.5 px-4 text-center">Match Fit</th>
                <th className="py-3.5 px-4 text-center">Career Readiness</th>
                <th className="py-3.5 px-4">Verified Skills</th>
                <th className="py-3.5 px-4 text-center">Assessment Avg</th>
                <th className="py-3.5 px-4 text-center">Shortlist</th>
                <th className="py-3.5 px-4 text-right">Verification Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCandidates.map((cand, idx) => (
                <tr key={cand.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Rank & Candidate */}
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </div>
                      <img
                        src={cand.avatar}
                        alt={cand.candidateName}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{cand.candidateName}</div>
                        <div className="text-[10px] text-slate-400">{cand.education}</div>
                      </div>
                    </div>
                  </td>

                  {/* Match Fit */}
                  <td className="py-4 px-4 text-center">
                    <span className="font-mono font-black text-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {cand.matchScore}%
                    </span>
                  </td>

                  {/* Career Readiness */}
                  <td className="py-4 px-4 text-center font-mono font-bold text-slate-800">
                    {cand.careerReadiness}%
                  </td>

                  {/* Verified Skills */}
                  <td className="py-4 px-4 max-w-xs">
                    <div className="flex flex-wrap gap-1">
                      {cand.verifiedSkills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] border border-slate-200"
                        >
                          {s} ✓
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Assessment Avg */}
                  <td className="py-4 px-4 text-center font-mono font-semibold text-slate-700">
                    {cand.assessmentAverage}%
                  </td>

                  {/* Shortlist Star */}
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => toggleCandidateShortlist(cand.id)}
                      className="p-1 rounded-lg hover:bg-slate-100 transition-colors"
                      title={cand.shortlisted ? 'Remove from shortlist' : 'Add to shortlist'}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          cand.shortlisted
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300 hover:text-slate-400'
                        }`}
                      />
                    </button>
                  </td>

                  {/* View Skill Passport */}
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => handleOpenPassport(cand)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ml-auto"
                    >
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Skill Passport</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Post New Job Modal */}
      {showCreateJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">Post New Job Opening</h3>
              <button
                onClick={() => setShowCreateJobModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateJob} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Junior Data Engineer"
                  value={newJobTitle}
                  onChange={e => setNewJobTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Required Benchmark Skills (comma-separated)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Python, SQL, PostgreSQL, Docker"
                  value={newJobSkills}
                  onChange={e => setNewJobSkills(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Monthly Stipend / Salary
                </label>
                <input
                  type="text"
                  defaultValue="₹30,000 / month"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-xs"
                >
                  {jobCreatedSuccess ? 'Job Posted Successfully! ✓' : 'Publish & Match Candidates'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
