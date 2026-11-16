import React, { useState } from 'react';
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  RefreshCw,
  FileCheck,
  TrendingUp,
  ShieldAlert,
  FolderGit2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ResumeAnalyzerPage: React.FC = () => {
  const {
    resumeAnalysis,
    uploadResumeSimulated,
    isAnalyzingResume,
    applyResumeToProfile,
    setCurrentTab
  } = useApp();

  const [hasUploaded, setHasUploaded] = useState(true); // default true with demo resume
  const [applied, setApplied] = useState(false);
  const [fileName, setFileName] = useState('Aadarsh_Shrivas_Backend_Resume_2026.pdf');

  const handleFileDrop = async (e: React.DragEvent | React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setApplied(false);
    await uploadResumeSimulated();
    setHasUploaded(true);
  };

  const handleApply = () => {
    applyResumeToProfile();
    setApplied(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              AI Resume Analyzer & Parser
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Extract verified skills, audit resume strength (78/100), and detect critical gaps before submitting to top employers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Resume Quality Score:</span>
          <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg font-bold text-xs font-mono">
            {resumeAnalysis.resumeQualityScore}/100
          </span>
        </div>
      </div>

      {/* Upload Zone */}
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={handleFileDrop}
        className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center hover:border-emerald-500 transition-colors shadow-xs relative group"
      >
        <input
          type="file"
          accept=".pdf,.docx,.doc"
          onChange={handleFileDrop}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
          <UploadCloud className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-sm text-slate-900">
          Upload your Resume (PDF or DOCX)
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Drag and drop or click to replace current file: <strong className="text-slate-700">{fileName}</strong>
        </p>

        {isAnalyzingResume && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold shadow-md">
            <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
            <span>Gemini AI is parsing entities, skills & project achievements...</span>
          </div>
        )}
      </div>

      {/* Analysis Results View */}
      {hasUploaded && !isAnalyzingResume && (
        <div className="space-y-6">
          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Skills Detected</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {resumeAnalysis.detectedSkills.length}
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">High tech coverage</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Projects Detected</div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                {resumeAnalysis.detectedProjects.length}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">3 Full-stack repos</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Resume Quality</div>
              <div className="text-2xl font-black text-amber-600 font-mono mt-1">
                {resumeAnalysis.resumeQualityScore}/100
              </div>
              <div className="text-[10px] text-amber-700 font-medium mt-0.5">Needs quantifiable impact</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Missing Information</div>
              <div className="text-2xl font-black text-rose-600 font-mono mt-1">
                {resumeAnalysis.missingInformationCount}
              </div>
              <div className="text-[10px] text-rose-600 font-medium mt-0.5">Missing live demo links</div>
            </div>
          </div>

          {/* Two-Column Deep Audit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Detected Skills & Projects */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Detected Technical Skills ({resumeAnalysis.detectedSkills.length})</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono">Parsed via NLP</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeAnalysis.detectedSkills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md font-mono text-[11px] font-medium border border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-indigo-600" />
                  <span>Detected Portfolio Projects</span>
                </h3>
                <div className="space-y-2.5">
                  {resumeAnalysis.detectedProjects.map((p, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <div className="font-bold text-slate-900">{p.title}</div>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">{p.tech}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action: Apply Extracted Skills to Profile */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Sync skills & projects with your verified profile:
                </span>
                <button
                  onClick={handleApply}
                  disabled={applied}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                    applied
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {applied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Synchronized to Profile (+2%)</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Apply Extracted Skills to Profile</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right 5 cols: AI Improvement Suggestions */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm text-white">
                  Actionable AI Resume Suggestions
                </h3>
              </div>
              <p className="text-xs text-slate-300">
                Recommended edits to increase recruiter shortlisting rates by up to 3.2x:
              </p>

              <div className="space-y-3">
                {resumeAnalysis.suggestions.map((sug, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold font-mono text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-slate-200 leading-relaxed text-[11px]">{sug}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentTab('gaps')}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl text-xs font-semibold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Run Skill Gap Audit Against Target Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
