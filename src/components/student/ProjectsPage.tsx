import React, { useState } from 'react';
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  ExternalLink,
  Code2,
  GitBranch,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProjectRecommendation } from '../../types';

export const ProjectsPage: React.FC = () => {
  const { profile, setProfile, setCurrentTab } = useApp();
  const [selectedProject, setSelectedProject] = useState<ProjectRecommendation | null>(null);
  const [inProgressIds, setInProgressIds] = useState<string[]>(['proj-1']);

  const handleStartProject = (project: ProjectRecommendation) => {
    setSelectedProject(project);
    if (!inProgressIds.includes(project.id)) {
      setInProgressIds(prev => [...prev, project.id]);
    }
  };

  const handleMarkProjectComplete = (projectId: string) => {
    setProfile(prev => {
      const updated = prev.projects.map(p => p.id === projectId ? { ...p, completed: true } : p);
      const newReadiness = Math.min(96, prev.careerReadiness + 3);
      return {
        ...prev,
        projects: updated,
        careerReadiness: newReadiness,
        readinessBreakdown: {
          ...prev.readinessBreakdown,
          overall: newReadiness,
          projects: Math.min(95, prev.readinessBreakdown.projects + 5)
        }
      };
    });
    setSelectedProject(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Build Your Portfolio
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Projects dynamically architected to bridge multiple missing skills simultaneously with verifiable code deliverables.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-800">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Gap-Bridging Multipliers</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {profile.projects.map(project => {
          const isInProgress = inProgressIds.includes(project.id);
          return (
            <div
              key={project.id}
              className={`bg-white rounded-2xl border flex flex-col justify-between overflow-hidden shadow-xs transition-all ${
                project.completed
                  ? 'border-emerald-300 ring-2 ring-emerald-500/10'
                  : isInProgress
                  ? 'border-emerald-500 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card top */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      project.difficulty === 'Beginner'
                        ? 'bg-emerald-50 text-emerald-700'
                        : project.difficulty === 'Intermediate'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {project.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{project.estimatedWeeks} weeks</span>
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Bridged Gaps Pill */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Missing Skills Bridged:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.missingSkillsBridged.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* All Tech Stack Covered */}
                <div className="mt-4">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                    Skills Covered ({project.skillsCovered.length}):
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.skillsCovered.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {project.completed
                    ? 'Verified on Passport ✓'
                    : isInProgress
                    ? 'In Progress (Active)'
                    : 'Ready to build'}
                </span>
                <button
                  onClick={() => handleStartProject(project)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                    project.completed
                      ? 'bg-slate-200 text-slate-700'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  <span>{project.completed ? 'View Details' : isInProgress ? 'Resume Lab' : 'Start Project'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal / Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-200 max-h-[90vh] flex flex-col">
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
                  Portfolio Capstone Builder
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-600 flex-1">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                  Architecture Overview
                </h4>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                  Step-by-Step Implementation Milestones
                </h4>
                <div className="space-y-2">
                  {selectedProject.milestones.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold font-mono text-[10px] shrink-0 mt-0.5">
                        {mIdx + 1}
                      </div>
                      <span className="text-slate-700">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-emerald-900">GitHub Starter Repository</div>
                  <div className="text-[11px] text-emerald-700 font-mono">
                    skillbridge-templates/{selectedProject.id}-starter
                  </div>
                </div>
                <a
                  href={selectedProject.githubTemplateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-white text-emerald-800 border border-emerald-300 rounded-lg font-bold flex items-center gap-1.5 shadow-2xs hover:bg-emerald-100"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Clone Template</span>
                </a>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                Close
              </button>

              {!selectedProject.completed ? (
                <button
                  onClick={() => handleMarkProjectComplete(selectedProject.id)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit & Verify Code (+3% Readiness)</span>
                </button>
              ) : (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <Check className="w-4 h-4" /> Completed & Verified
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
