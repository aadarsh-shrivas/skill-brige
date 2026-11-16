import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Sidebar } from './components/common/Sidebar';
import { MobileNav } from './components/common/MobileNav';
import { EcosystemFlowBanner } from './components/common/EcosystemFlowBanner';
import { AIAssistantModal } from './components/common/AIAssistantModal';
import { DemoTourModal } from './components/common/DemoTourModal';
import { AuthModal } from './components/auth/AuthModal';
import { SkillPassportModal } from './components/student/SkillPassportModal';

// Views
import { LandingPage } from './components/landing/LandingPage';
import { StudentDashboard } from './components/student/StudentDashboard';
import { SkillAnalysisPage } from './components/student/SkillAnalysisPage';
import { SkillGapPage } from './components/student/SkillGapPage';
import { RoadmapPage } from './components/student/RoadmapPage';
import { ProjectsPage } from './components/student/ProjectsPage';
import { AssessmentPage } from './components/student/AssessmentPage';
import { CareerReadinessPage } from './components/student/CareerReadinessPage';
import { JobMatchingPage } from './components/student/JobMatchingPage';
import { ResumeAnalyzerPage } from './components/student/ResumeAnalyzerPage';
import { CompanyDashboard } from './components/company/CompanyDashboard';
import { CollegeDashboard } from './components/college/CollegeDashboard';

const MainLayout: React.FC = () => {
  const { userRole, currentTab } = useApp();

  // If user is guest on landing page, display the public landing view
  if (userRole === 'guest' || currentTab === 'landing') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-950">
        <Navbar />
        <LandingPage />
        <AIAssistantModal />
        <AuthModal />
        <DemoTourModal />
      </div>
    );
  }

  // If role is Company
  if (userRole === 'company' || currentTab === 'company-dashboard') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-900">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <CompanyDashboard />
        </main>
        <SkillPassportModal />
        <AIAssistantModal />
        <AuthModal />
        <DemoTourModal />
      </div>
    );
  }

  // If role is College
  if (userRole === 'college' || currentTab === 'college-dashboard') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-900">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <CollegeDashboard />
        </main>
        <AIAssistantModal />
        <AuthModal />
        <DemoTourModal />
      </div>
    );
  }

  // Primary Student Workspace View
  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-900">
      <Navbar />
      <EcosystemFlowBanner />

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        {/* Dynamic Main Workspace Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
          <div className="max-w-6xl mx-auto">
            {currentTab === 'dashboard' && <StudentDashboard />}
            {currentTab === 'resume' && <ResumeAnalyzerPage />}
            {currentTab === 'skills' && <SkillAnalysisPage />}
            {currentTab === 'gaps' && <SkillGapPage />}
            {currentTab === 'roadmap' && <RoadmapPage />}
            {currentTab === 'projects' && <ProjectsPage />}
            {currentTab === 'assessment' && <AssessmentPage />}
            {currentTab === 'readiness' && <CareerReadinessPage />}
            {currentTab === 'jobs' && <JobMatchingPage />}
            {currentTab === 'passport' && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center py-12">
                <h2 className="text-xl font-bold text-slate-900">Your Verifiable Skill Passport</h2>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Click below to open your full tamper-proof digital credential with QR verification and employer share links.
                </p>
                <div className="mt-6">
                  <SkillPassportModal />
                  <button
                    onClick={() => {
                      const event = new CustomEvent('open-passport');
                      window.dispatchEvent(event);
                    }}
                    className="hidden"
                  >
                    Open
                  </button>
                  <StudentDashboard />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Responsive Mobile Bottom Navigation */}
      <MobileNav />

      {/* Global Interactive Overlays */}
      <AIAssistantModal />
      <SkillPassportModal />
      <AuthModal />
      <DemoTourModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
