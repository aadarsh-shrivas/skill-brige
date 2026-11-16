import React, { useState } from 'react';
import {
  X,
  Award,
  CheckCircle2,
  Share2,
  Download,
  QrCode,
  ShieldCheck,
  Check,
  Compass,
  Copy,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SkillPassportModal: React.FC = () => {
  const {
    isPassportModalOpen,
    setIsPassportModalOpen,
    profile,
    selectedCandidateForPassport,
    setSelectedCandidateForPassport
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isPassportModalOpen && !selectedCandidateForPassport) return null;

  // Determine if viewing student's own passport or candidate passport from company recruiter view
  const candidate = selectedCandidateForPassport;
  const isCandidateView = !!candidate;

  const name = candidate ? candidate.candidateName : profile.name;
  const education = candidate ? candidate.education : profile.education;
  const targetRole = candidate ? candidate.targetRole : profile.targetRole;
  const readiness = candidate ? candidate.careerReadiness : profile.careerReadiness;
  const assessmentScore = candidate ? candidate.assessmentAverage : 87;
  const passportId = candidate
    ? `SB-CANDIDATE-${candidate.id.toUpperCase()}-VERIFIED`
    : profile.passportId;

  const verifiedSkills = candidate
    ? candidate.verifiedSkills
    : profile.skills
        .filter(s => s.verificationStatus === 'verified')
        .map(s => s.name);

  const projects = isCandidateView
    ? ['College Management API', 'Inventory Microservice']
    : [
        'College Complaint Management API (FastAPI & Docker)',
        'Distributed Task Queue & Webhook Dispatcher'
      ];

  const handleClose = () => {
    setIsPassportModalOpen(false);
    setSelectedCandidateForPassport(null);
  };

  const handleCopyShareLink = () => {
    navigator.clipboard?.writeText?.(`https://skillbridge.dev/passport/${passportId}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      window.print?.();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white">
                Skill<span className="text-emerald-400">Bridge</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono ml-2 uppercase">
                Digital Skill Passport
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Verifiable Passport Card Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 print:p-0">
          {/* Card Top: Identity & Hologram badge */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black tracking-tight text-white">{name}</h2>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{education}</p>
              <div className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <span>Target Role: {targetRole}</span>
              </div>
            </div>

            {/* Circular Readiness badge */}
            <div className="flex flex-col items-center bg-slate-950/80 p-3 rounded-2xl border border-slate-800 shrink-0">
              <div className="text-2xl font-black text-emerald-400 font-mono">
                {readiness}%
              </div>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                Readiness Score
              </span>
            </div>
          </div>

          {/* Core Verified Skills Section */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Verified Technical Skills</span>
              <span className="text-[10px] text-emerald-400 font-mono">
                Proctored IDE Evaluation
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {verifiedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{skill}</span>
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Projects & Assessments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Verified Projects
              </div>
              <ul className="text-xs text-slate-200 space-y-1.5">
                {projects.map((proj, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Assessment Integrity
              </div>
              <div className="text-xl font-bold text-white font-mono">
                {assessmentScore}% Average
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Zero plagiarism detected across sandbox test cases.
              </div>
            </div>
          </div>

          {/* Cryptographic Verification Hash & QR Code */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Verifiable Credential Hash
              </div>
              <div className="font-mono text-xs text-emerald-400 font-semibold select-all break-all">
                {passportId}
              </div>
              <div className="text-[10px] text-slate-400">
                Issued by SkillBridge Trust Protocol • Stamped October 2026
              </div>
            </div>

            <div className="p-2 bg-white rounded-xl text-slate-950 shrink-0 shadow-md">
              <QrCode className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyShareLink}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Skill Passport</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Preparing PDF...' : 'Download Passport'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
