import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  GitCompare,
  TrendingUp,
  Milestone,
  Code2,
  FolderGit2,
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  Play,
  Users,
  Compass,
  Layers,
  ArrowDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LandingPage: React.FC = () => {
  const { setUserRole, setCurrentTab, launchDemoTour, setIsAuthModalOpen } = useApp();

  const handleGetStarted = () => {
    setUserRole('student');
    setCurrentTab('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Glow background accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen AI Career Readiness Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Know what you have.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Know what you need.
              </span>{' '}
              Get ready for the job.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              SkillBridge uses AI to analyze your skills, identify your gaps, build your roadmap, test your abilities, and connect you with opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={handleGetStarted}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={launchDemoTour}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2 active:scale-95 shadow-sm"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Explore SkillBridge (Interactive Tour)</span>
              </button>
            </div>
          </div>

          {/* Hero Visual: Realistic Dashboard Preview */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative group hover:border-slate-700 transition-all">
              {/* Top status bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Target Role</div>
                    <div className="text-base font-bold text-white tracking-tight">
                      Backend Developer
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">Career Readiness</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      82%
                    </div>
                  </div>
                  {/* Circular progress visual */}
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="82, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Skills Analysis Row */}
              <div className="py-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Verified Skills vs Critical Gaps
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-200">Python</span>
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 90% ✓
                    </span>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-200">SQL</span>
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 80% ✓
                    </span>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-200">FastAPI</span>
                    <span className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                      <AlertTriangle className="w-3.5 h-3.5" /> 60% ⚠
                    </span>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-200">Docker</span>
                    <span className="flex items-center gap-1 text-rose-400 text-xs font-bold bg-rose-500/10 px-2 py-0.5 rounded">
                      <XCircle className="w-3.5 h-3.5" /> 30% ✕
                    </span>
                  </div>
                </div>
              </div>

              {/* Readiness Banner Result */}
              <div className="bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-200">
                      You are 82% ready for this role
                    </div>
                    <div className="text-xs text-emerald-300/80">
                      Closing your Docker gap unlocks 14 more high-paying backend listings.
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleGetStarted}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0 shadow-sm"
                >
                  View My Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
              The Fundamental Problem
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              The widening skill gap between students and hiring companies
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Students graduate with academic theory but without knowing what real enterprise jobs require, which skills they are missing, or how to prove their practical competency.
            </p>
          </div>

          {/* Visual: Student Skills -> Skill Gap -> Job Requirements */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-white">Student Skills</h3>
              <p className="text-xs text-slate-400 mt-2">
                Self-reported coursework, basic tutorial clones, and unverified resume keywords.
              </p>
              <div className="mt-4 text-[11px] font-mono bg-slate-950 py-1.5 px-3 rounded-lg text-slate-300 border border-slate-800">
                Python, C++, Basic SQL
              </div>
            </div>

            <div className="bg-rose-950/30 border border-rose-500/30 p-6 rounded-2xl text-center relative">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-rose-300">The Skill Gap</h3>
              <p className="text-xs text-slate-300 mt-2">
                The invisible barrier causing 80%+ of applications to be rejected before human review.
              </p>
              <div className="mt-4 text-[11px] font-mono bg-rose-950/60 py-1.5 px-3 rounded-lg text-rose-300 border border-rose-500/30">
                Missing: Docker, Async APIs, Pytest
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-white">Job Requirements</h3>
              <p className="text-xs text-slate-400 mt-2">
                Production-tested standards, multi-tenant database modeling, and containerization.
              </p>
              <div className="mt-4 text-[11px] font-mono bg-slate-950 py-1.5 px-3 rounded-lg text-emerald-400 border border-slate-800">
                Containerized Microservices & ACID
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SkillBridge Works: 4 Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              The Solution Workflow
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              How SkillBridge Works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Four streamlined steps from unknown skill deficits to verified job placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative group hover:border-emerald-500/40 transition-all">
              <div className="text-2xl font-black text-slate-700 group-hover:text-emerald-500/30 font-mono mb-2">
                01
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Upload Your Resume</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                AI extracts verified skills, completed projects, and scores your resume quality with actionable improvements.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative group hover:border-emerald-500/40 transition-all">
              <div className="text-2xl font-black text-slate-700 group-hover:text-emerald-500/30 font-mono mb-2">
                02
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <GitCompare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Analyze Your Skills</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Select your target career role. Compare your abilities against real job criteria and discover what to learn first.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative group hover:border-emerald-500/40 transition-all">
              <div className="text-2xl font-black text-slate-700 group-hover:text-emerald-500/30 font-mono mb-2">
                03
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Milestone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Build Your Roadmap</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Follow an adaptive, week-by-week timeline explaining exactly why each skill matters to hiring managers.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative group hover:border-emerald-500/40 transition-all">
              <div className="text-2xl font-black text-slate-700 group-hover:text-emerald-500/30 font-mono mb-2">
                04
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Prove Skills & Get Hired</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Pass code assessments, build gap-closing projects, earn your digital Skill Passport, and connect with recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Comprehensive Platform
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Engineered for the Full Readiness Lifecycle
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Ten integrated modules connecting students, academic institutions, and enterprise hiring teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'AI Resume Analysis',
                desc: 'Automated skill extraction, quality audit (78/100), and quantified improvement suggestions.'
              },
              {
                icon: GitCompare,
                title: 'Skill Gap Analysis',
                desc: 'Required vs current skill matrix across 8 target engineering and data career roles.'
              },
              {
                icon: TrendingUp,
                title: 'Career Readiness Score',
                desc: 'Granular mathematical readiness score based on verified technical abilities, assessments, and projects.'
              },
              {
                icon: Milestone,
                title: 'Personalized Roadmaps',
                desc: 'Structured 6-week curriculum with curated resources and "Why am I learning this?" context.'
              },
              {
                icon: Code2,
                title: 'AI Assessments (Code IDE)',
                desc: 'Interactive code editor evaluating real algorithmic output against automated test suites.'
              },
              {
                icon: FolderGit2,
                title: 'Project Recommendations',
                desc: 'Portfolio projects specifically architected to bridge multiple missing skills simultaneously.'
              },
              {
                icon: Award,
                title: 'Skill Passport',
                desc: 'Verifiable digital credential with tamper-proof verification hash and recruiter share links.'
              },
              {
                icon: Briefcase,
                title: 'Job Matching',
                desc: 'Real-time job listings scored by true skill alignment with "Why am I a match?" transparency.'
              },
              {
                icon: Building2,
                title: 'Company Hiring Dashboard',
                desc: 'Recruiter interface to rank pre-verified candidates without wading through resume noise.'
              },
              {
                icon: GraduationCap,
                title: 'College Analytics',
                desc: 'Institutional analytics tracking cohort readiness, top skill gaps, and placement health.'
              }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student -> Company Ecosystem Diagram */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              The SkillBridge Ecosystem
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              The Unified Talent Pipeline
            </h2>
          </div>

          <div className="max-w-md mx-auto flex flex-col items-center gap-3">
            <div className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-bold text-slate-200 flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Students (Colleges & Universities)</span>
            </div>
            <ArrowDown className="w-5 h-5 text-emerald-400" />
            <div className="w-full bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-center font-bold text-emerald-300 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>SkillBridge AI Engine</span>
            </div>
            <ArrowDown className="w-5 h-5 text-emerald-400" />
            <div className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-bold text-slate-200 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Verified Skills & Skill Passport</span>
            </div>
            <ArrowDown className="w-5 h-5 text-emerald-400" />
            <div className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-bold text-slate-200 flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-teal-400" />
              <span>Hiring Companies & Recruiters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Statistics */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">10K+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Students Empowered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">500+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Hiring Companies</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">50K+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Skills Assessed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">85%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Avg. Readiness Improvement</div>
            </div>
          </div>
          <p className="text-center text-[11px] text-slate-400 mt-6 font-mono">
            *Demo prototype performance indicators based on simulated cohort data.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop guessing what to learn.
            <br />
            <span className="text-emerald-400">Start building the skills companies need.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Take the guesswork out of engineering recruitment. Get your personalized readiness score in minutes.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-2 active:scale-95"
            >
              <span>Build My Career</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
