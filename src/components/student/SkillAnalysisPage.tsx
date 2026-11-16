import React, { useState } from 'react';
import {
  Layers,
  Search,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Code2,
  ExternalLink,
  ShieldCheck,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SkillCategory, VerificationStatus } from '../../types';

export const SkillAnalysisPage: React.FC = () => {
  const { profile, setCurrentTab } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Categories' },
    { id: 'programming', label: 'Programming' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = profile.skills.filter(skill => {
    const matchesCat = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || skill.verificationStatus === statusFilter;
    return matchesCat && matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified
          </span>
        );
      case 'partially_verified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            Partially Verified
          </span>
        );
      case 'not_verified':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            Not Verified
          </span>
        );
    }
  };

  const calculateGap = (current: number, required: number) => {
    const diff = required - current;
    if (diff <= 0) return { label: 'None', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (diff === 1) return { label: 'Small', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (diff === 2) return { label: 'Medium', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'High', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Comprehensive Skill Inventory
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time breakdown of current vs required levels, evidence sources, and verification credentials.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentTab('assessment')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>Verify New Skill</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === c.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="text-xs border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Statuses</option>
            <option value="verified">Verified Only</option>
            <option value="partially_verified">Partially Verified</option>
            <option value="not_verified">Not Verified</option>
          </select>
        </div>
      </div>

      {/* Skills Table / List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-semibold text-[10px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Skill Name</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Current Proficiency</th>
                <th className="py-3.5 px-4 text-center">Req. Level</th>
                <th className="py-3.5 px-4 text-center">Skill Gap</th>
                <th className="py-3.5 px-4">Verification Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSkills.map(skill => {
                const gap = calculateGap(skill.currentLevel, skill.requiredLevel);
                return (
                  <tr key={skill.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Name */}
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      <div>{skill.name}</div>
                      {skill.verifiedBy && (
                        <div className="text-[10px] text-slate-400 font-normal">
                          {skill.verifiedBy}
                        </div>
                      )}
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4 capitalize font-mono text-[11px] text-slate-500">
                      {skill.category}
                    </td>

                    {/* Proficiency Bar & Percentage */}
                    <td className="py-3.5 px-4 min-w-[160px]">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-mono text-slate-700">{skill.percentage}%</span>
                        <span className="text-slate-400 font-mono">Lvl {skill.currentLevel}/5</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            skill.percentage >= 80
                              ? 'bg-emerald-500'
                              : skill.percentage >= 60
                              ? 'bg-teal-500'
                              : skill.percentage >= 40
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </td>

                    {/* Required Level */}
                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-slate-700">
                      {skill.requiredLevel}/5
                    </td>

                    {/* Gap */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${gap.color}`}>
                        {gap.label}
                      </span>
                    </td>

                    {/* Verification Status */}
                    <td className="py-3.5 px-4">
                      {getStatusBadge(skill.verificationStatus)}
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-right">
                      {skill.verificationStatus !== 'verified' ? (
                        <button
                          onClick={() => setCurrentTab('assessment')}
                          className="px-2.5 py-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors"
                        >
                          Prove Skill
                        </button>
                      ) : (
                        <span className="text-[11px] text-emerald-600 font-medium flex items-center justify-end gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Passed ({skill.assessmentScore || 85}%)
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
