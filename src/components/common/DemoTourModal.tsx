import React from 'react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  Compass,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DemoTourModal: React.FC = () => {
  const {
    isDemoTourOpen,
    demoTourStep,
    nextDemoTourStep,
    prevDemoTourStep,
    closeDemoTour,
    goToDemoTourStep
  } = useApp();

  if (!isDemoTourOpen) return null;

  const tourSteps = [
    {
      step: 1,
      title: 'Student Profile & Readiness Hub',
      tab: 'dashboard',
      role: 'Student',
      headline: 'Aadarsh Shrivas — 82% Career Ready for Backend Developer',
      story:
        'Meet Aadarsh, an AI & Data Science student. Instead of generic advice, SkillBridge calculates his exact readiness (82%) based on verified skills, projects, and assessment scores.'
    },
    {
      step: 2,
      title: 'AI Resume Analyzer',
      tab: 'resume',
      role: 'Student',
      headline: 'Automated Extraction & Quality Audit',
      story:
        'The student uploads their resume. SkillBridge extracts 17 skills and 3 projects, gives a 78/100 resume quality score, and provides actionable improvements before syncing with the profile.'
    },
    {
      step: 3,
      title: 'AI Skill Gap Analysis',
      tab: 'gaps',
      role: 'Student',
      headline: 'Required vs Current Competency Matrix',
      story:
        'SkillBridge compares Aadarsh against real industry criteria: Python (4/4, None), SQL (4/4, None), FastAPI (2/4, Medium), REST API (1/4, High), Docker (0/3, High) and outputs the prioritized "What should I learn first?" order.'
    },
    {
      step: 4,
      title: 'Career Readiness Score Analytics',
      tab: 'readiness',
      role: 'Student',
      headline: 'Granular Breakdown: Technical, Projects & Assessments',
      story:
        'See why Aadarsh is at 82%: Technical (85%), Practical (76%), Assessments (88%), Projects (72%), Communication (80%), along with the clear 3-step checklist required to hit 90%+.'
    },
    {
      step: 5,
      title: 'Personalized Roadmap',
      tab: 'roadmap',
      role: 'Student',
      headline: 'Adaptive 6-Week Learning Path with "Why am I learning this?"',
      story:
        'Every learning milestone directly bridges a verified skill gap. Interactive tasks, curated labs, and completion toggles dynamically recalculate readiness in real time.'
    },
    {
      step: 6,
      title: 'Skill Assessment (Live Code IDE)',
      tab: 'assessment',
      role: 'Student',
      headline: 'Prove Abilities Through Real Coding Challenges',
      story:
        'Students do not just self-report. They run code against automated test cases in Python, SQL, REST APIs, and Docker. Scoring unlocks verifiable digital badges.'
    },
    {
      step: 7,
      title: 'AI Project Recommendations',
      tab: 'projects',
      role: 'Student',
      headline: 'Portfolio Projects Bridging Multiple Gaps At Once',
      story:
        'SkillBridge recommends projects like the "College Complaint Management API", strategically designed to bridge Docker, FastAPI, PostgreSQL, and JWT auth simultaneously.'
    },
    {
      step: 8,
      title: 'Verifiable Skill Passport',
      tab: 'passport',
      role: 'Student',
      headline: 'Cryptographically Verifiable Talent Credential',
      story:
        'The student exports or shares a tamper-proof Skill Passport with unique verification hash (SB-VERIFIED-8492026), giving employers instant trust in tested capabilities.'
    },
    {
      step: 9,
      title: 'Job Matching with "Why am I a match?"',
      tab: 'jobs',
      role: 'Student',
      headline: '94% Match with TechNova Solutions',
      story:
        'Jobs are ranked by true skill alignment. Clicking "Why am I a 94% match?" explains exact skill overlaps (Python, SQL, FastAPI) and the single missing skill (Docker).'
    },
    {
      step: 10,
      title: 'Company Hiring Dashboard',
      tab: 'company-dashboard',
      role: 'Company',
      headline: 'Recruiter View: Pre-Assessed, Top-Ranked Candidates',
      story:
        'TechNova recruiters immediately see Aadarsh ranked #1 at 94% match. No resume spam, no fake claims—only pre-tested, verified student talent ready to hire.'
    }
  ];

  const current = tourSteps[demoTourStep];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl bg-slate-950 text-white rounded-2xl shadow-2xl border border-emerald-500/40 p-4 sm:p-5 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs">
            {current.step}/10
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                SkillBridge Live Demo Tour
              </span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-medium">
                View: {current.role}
              </span>
            </div>
            <h4 className="font-semibold text-sm text-white">{current.title}</h4>
          </div>
        </div>

        <button
          onClick={closeDemoTour}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          title="Exit Tour"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="py-3">
        <div className="text-xs font-semibold text-emerald-300 mb-1">
          {current.headline}
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {current.story}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 py-1 mb-2">
        {tourSteps.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => goToDemoTourStep(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === demoTourStep
                ? 'w-6 bg-emerald-400'
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
            title={`Step ${s.step}: ${s.title}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
        <button
          onClick={prevDemoTourStep}
          disabled={demoTourStep === 0}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <span className="text-[11px] text-slate-400 font-mono">
          Step {demoTourStep + 1} of 10
        </span>

        <button
          onClick={nextDemoTourStep}
          className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-950 transition-all shadow-md shadow-emerald-500/20"
        >
          <span>{demoTourStep === 9 ? 'Finish Tour' : 'Next Step'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
