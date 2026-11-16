import React, { useState } from 'react';
import {
  GitCompare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Zap,
  Target,
  Briefcase
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CAREER_ROLES } from '../../data/mockData';

export const SkillGapPage: React.FC = () => {
  const { profile, setTargetRole, setCurrentTab, setIsAssistantOpen } = useApp();
  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    CAREER_ROLES.find(r => r.title === profile.targetRole)?.id || 'role-backend'
  );

  const activeRole = CAREER_ROLES.find(r => r.id === selectedRoleId) || CAREER_ROLES[0];

  const handleRoleChange = (roleId: string) => {
    setSelectedRoleId(roleId);
    const roleObj = CAREER_ROLES.find(r => r.id === roleId);
    if (roleObj) {
      setTargetRole(roleObj.title);
    }
  };

  // Compare required skills of active role against student's current profile skills
  const comparisonList = activeRole.requiredSkills.map(req => {
    const studentSkill = profile.skills.find(
      s => s.name.toLowerCase() === req.skillName.toLowerCase()
    );
    const currentLvl = studentSkill ? studentSkill.currentLevel : 0;
    const diff = req.requiredLevel - currentLvl;

    let gapType: 'None' | 'Small' | 'Medium' | 'High' = 'None';
    if (diff <= 0) gapType = 'None';
    else if (diff === 1) gapType = 'Small';
    else if (diff === 2) gapType = 'Medium';
    else gapType = 'High';

    return {
      skillName: req.skillName,
      required: req.requiredLevel,
      current: currentLvl,
      gap: gapType,
      diff,
      weight: req.weight,
      category: req.category,
      verificationStatus: studentSkill ? studentSkill.verificationStatus : 'not_verified'
    };
  });

  // Calculate prioritized learning order: highest gap + highest weight first
  const priorityList = [...comparisonList]
    .filter(item => item.gap !== 'None')
    .sort((a, b) => (b.diff * b.weight) - (a.diff * a.weight));

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <GitCompare className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              AI Skill Gap Analysis
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Compare your verified competencies against industry-standard requirements for any tech career path.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">Active Target:</span>
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg font-bold text-xs">
            {activeRole.title}
          </span>
        </div>
      </div>

      {/* Role Selector Tabs */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Select Target Career Role to Analyze:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CAREER_ROLES.map(role => (
            <button
              key={role.id}
              onClick={() => handleRoleChange(role.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedRoleId === role.id
                  ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold text-xs">{role.title}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{role.averageSalary.split(' - ')[0]}/yr</div>
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Comparison Table & "What Should I Learn First?" */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Comparison Matrix Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Required Skills vs Current Skills
              </h3>
              <p className="text-xs text-slate-500">
                Role: <strong className="text-slate-800">{activeRole.title}</strong> • Demand: <span className="text-emerald-600 font-semibold">{activeRole.demandLevel}</span>
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
              {comparisonList.filter(c => c.gap === 'None').length} / {comparisonList.length} Met
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-700 uppercase font-semibold text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Skill</th>
                  <th className="py-3 px-4 text-center">Required</th>
                  <th className="py-3 px-4 text-center">Current</th>
                  <th className="py-3 px-4 text-center">Gap Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        {item.gap === 'None' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : item.gap === 'Small' ? (
                          <AlertTriangle className="w-4 h-4 text-blue-500 shrink-0" />
                        ) : item.gap === 'Medium' ? (
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                        <span>{item.skillName}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center font-mono font-semibold text-slate-800">
                      {item.required}/5
                    </td>

                    <td className="py-3 px-4 text-center font-mono font-semibold">
                      <span className={item.current === 0 ? 'text-slate-400' : 'text-slate-800'}>
                        {item.current}/5
                      </span>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold border ${
                          item.gap === 'None'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : item.gap === 'Small'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : item.gap === 'Medium'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}
                      >
                        {item.gap === 'None' ? 'None ✓' : `${item.gap} Gap`}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right">
                      {item.gap !== 'None' ? (
                        <button
                          onClick={() => setCurrentTab('roadmap')}
                          className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded transition-colors"
                        >
                          Bridge Gap
                        </button>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium">Fulfilled</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Priority List: "What should I learn first?" */}
        <div className="space-y-4">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-xl p-5 border border-slate-800 shadow-md">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <h3 className="font-bold text-sm tracking-tight text-white">
                What should I learn first?
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              AI-generated priority sequence maximizing recruiter interview conversion:
            </p>

            <div className="mt-4 space-y-3">
              {priorityList.slice(0, 4).map((p, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{p.skillName}</span>
                      <span className="text-[10px] text-rose-300 font-semibold bg-rose-500/20 px-1.5 py-0.2 rounded border border-rose-500/30">
                        {p.gap} Gap
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Required by 92% of {activeRole.title} employers
                    </p>
                    <button
                      onClick={() => setCurrentTab('roadmap')}
                      className="mt-2 text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                    >
                      <span>Start Week Roadmap</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsAssistantOpen(true)}
              className="mt-5 w-full py-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold text-xs rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ask AI Coach for Custom Timeline</span>
            </button>
          </div>

          {/* Quick Portfolio Recommendation Tip */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900">
            <div className="font-bold flex items-center gap-1.5 text-emerald-800">
              <Target className="w-4 h-4 text-emerald-600" />
              <span>Recommended Gap-Bridging Project</span>
            </div>
            <p className="mt-1 text-emerald-700 leading-snug">
              Building the <strong>College Complaint Management API</strong> will close both your <em>FastAPI</em> and <em>Docker</em> gaps at the same time.
            </p>
            <button
              onClick={() => setCurrentTab('projects')}
              className="mt-2.5 font-bold text-emerald-800 hover:text-emerald-900 underline flex items-center gap-1"
            >
              View Recommended Project <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
