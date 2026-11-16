import React, { createContext, useContext, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  StudentProfile,
  UserRole,
  NotificationItem,
  JobPosting,
  CandidateApplication,
  ResumeAnalysisResult
} from '../types';
import {
  INITIAL_STUDENT_PROFILE,
  JOB_POSTINGS,
  COMPANY_CANDIDATES,
  INITIAL_NOTIFICATIONS,
  MOCK_RESUME_ANALYSIS,
  CAREER_ROLES
} from '../data/mockData';

interface AppContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  jobs: JobPosting[];
  candidates: CandidateApplication[];
  notifications: NotificationItem[];
  bookmarkedJobs: string[];
  appliedJobIds: string[];
  isAssistantOpen: boolean;
  setIsAssistantOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isPassportModalOpen: boolean;
  setIsPassportModalOpen: (open: boolean) => void;
  selectedCandidateForPassport: CandidateApplication | null;
  setSelectedCandidateForPassport: (cand: CandidateApplication | null) => void;
  resumeAnalysis: ResumeAnalysisResult;
  isAnalyzingResume: boolean;
  isDemoTourOpen: boolean;
  demoTourStep: number;
  launchDemoTour: () => void;
  nextDemoTourStep: () => void;
  prevDemoTourStep: () => void;
  closeDemoTour: () => void;
  goToDemoTourStep: (step: number) => void;
  markRoadmapWeekCompleted: (weekNumber: number) => void;
  completeAssessment: (assessmentId: string, score: number, strongAreas?: string[], weakAreas?: string[]) => void;
  applyToJob: (jobId: string) => void;
  toggleBookmarkJob: (jobId: string) => void;
  toggleCandidateShortlist: (candidateId: string) => void;
  uploadResumeSimulated: () => Promise<void>;
  applyResumeToProfile: () => void;
  setTargetRole: (roleTitle: string) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [profile, setProfile] = useState<StudentProfile>(INITIAL_STUDENT_PROFILE);
  const [jobs, setJobs] = useState<JobPosting[]>(JOB_POSTINGS);
  const [candidates, setCandidates] = useState<CandidateApplication[]>(COMPANY_CANDIDATES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<string[]>(['job-1']);
  const [appliedJobIds, setAppliedJobIds] = useState<string[]>([]);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isPassportModalOpen, setIsPassportModalOpen] = useState<boolean>(false);
  const [selectedCandidateForPassport, setSelectedCandidateForPassport] = useState<CandidateApplication | null>(null);
  const [resumeAnalysis, setResumeAnalysis] = useState<ResumeAnalysisResult>(MOCK_RESUME_ANALYSIS);
  const [isAnalyzingResume, setIsAnalyzingResume] = useState<boolean>(false);

  // Demo mode state
  const [isDemoTourOpen, setIsDemoTourOpen] = useState<boolean>(false);
  const [demoTourStep, setDemoTourStep] = useState<number>(0);

  const demoStepTabs = useMemo(() => [
    'dashboard',       // 0: Student Profile
    'resume',          // 1: Resume Analysis
    'gaps',            // 2: Skill Gap Analysis
    'readiness',       // 3: Career Readiness Score
    'roadmap',         // 4: Personalized Roadmap
    'assessment',      // 5: Interactive Assessment
    'projects',        // 6: Project Recommendation
    'passport',        // 7: Skill Passport
    'jobs',            // 8: Job Matching
    'company-dashboard'// 9: Company Candidate Dashboard
  ], []);

  const launchDemoTour = () => {
    setDemoTourStep(0);
    setUserRole('student');
    setCurrentTab(demoStepTabs[0]);
    setIsDemoTourOpen(true);
  };

  const goToDemoTourStep = (step: number) => {
    if (step >= 0 && step < demoStepTabs.length) {
      setDemoTourStep(step);
      if (step === 9) {
        setUserRole('company');
      } else {
        setUserRole('student');
      }
      setCurrentTab(demoStepTabs[step]);
    }
  };

  const nextDemoTourStep = () => {
    if (demoTourStep < demoStepTabs.length - 1) {
      goToDemoTourStep(demoTourStep + 1);
    } else {
      setIsDemoTourOpen(false);
    }
  };

  const prevDemoTourStep = () => {
    if (demoTourStep > 0) {
      goToDemoTourStep(demoTourStep - 1);
    }
  };

  const closeDemoTour = () => {
    setIsDemoTourOpen(false);
  };

  const markRoadmapWeekCompleted = (weekNumber: number) => {
    setProfile(prev => {
      const updatedRoadmaps = prev.roadmaps.map(w => {
        if (w.week === weekNumber) {
          const newCompleted = !w.completed;
          return {
            ...w,
            completed: newCompleted,
            progressPercentage: newCompleted ? 100 : 50,
            tasks: w.tasks.map(t => ({ ...t, completed: newCompleted }))
          };
        }
        return w;
      });

      const completedCount = updatedRoadmaps.filter(w => w.completed).length;
      const newReadiness = Math.min(98, Math.round(75 + (completedCount * 3.5)));

      return {
        ...prev,
        roadmaps: updatedRoadmaps,
        careerReadiness: newReadiness,
        readinessBreakdown: {
          ...prev.readinessBreakdown,
          overall: newReadiness,
          practicalExperience: Math.min(95, prev.readinessBreakdown.practicalExperience + 4)
        }
      };
    });

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch {
      // ignore
    }

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: `Week ${weekNumber} Milestone Completed!`,
      description: `Great progress! Your career readiness score has increased.`,
      type: 'roadmap',
      timestamp: 'Just now',
      read: false,
      actionUrl: 'readiness'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const completeAssessment = (
    assessmentId: string,
    score: number,
    strongAreas?: string[],
    weakAreas?: string[]
  ) => {
    setProfile(prev => {
      const updatedAssessments = prev.assessments.map(a => {
        if (a.id === assessmentId) {
          return {
            ...a,
            completed: true,
            score,
            strongAreas: strongAreas || a.strongAreas,
            weakAreas: weakAreas || a.weakAreas,
            verifiedBadgeAwarded: score >= 75
          };
        }
        return a;
      });

      // Update the skill verification status
      const targetAssessment = prev.assessments.find(a => a.id === assessmentId);
      let updatedSkills = prev.skills;
      if (targetAssessment) {
        updatedSkills = prev.skills.map(s => {
          if (s.name.toLowerCase() === targetAssessment.skillName.toLowerCase()) {
            return {
              ...s,
              verificationStatus: score >= 75 ? 'verified' : 'partially_verified',
              assessmentScore: score,
              verifiedBy: 'SkillBridge Live Interactive Code Assessment',
              lastAssessed: 'Just now'
            };
          }
          return s;
        });
      }

      const verifiedSkillsCount = updatedSkills.filter(s => s.verificationStatus === 'verified').length;
      const newReadiness = Math.min(96, Math.max(prev.careerReadiness, Math.round(prev.careerReadiness + 3)));

      return {
        ...prev,
        assessments: updatedAssessments,
        skills: updatedSkills,
        verifiedSkillsCount,
        careerReadiness: newReadiness,
        readinessBreakdown: {
          ...prev.readinessBreakdown,
          overall: newReadiness,
          assessmentPerformance: Math.min(98, prev.readinessBreakdown.assessmentPerformance + 2)
        }
      };
    });

    try {
      confetti({ particleCount: 75, spread: 80, origin: { y: 0.6 } });
    } catch {
      // ignore
    }

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: `Assessment Completed: ${score}% Score! 🏅`,
      description: `Verified badge stamped on your digital Skill Passport.`,
      type: 'assessment',
      timestamp: 'Just now',
      read: false,
      actionUrl: 'passport'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const applyToJob = (jobId: string) => {
    if (appliedJobIds.includes(jobId)) return;
    setAppliedJobIds(prev => [...prev, jobId]);
    setJobs(prev => prev.map(j => j.id === jobId ? { ...j, applied: true, applicantsCount: j.applicantsCount + 1 } : j));

    const targetJob = jobs.find(j => j.id === jobId);
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: `Application Sent to ${targetJob?.companyName || 'Company'}! 🚀`,
      description: `Your verified Skill Passport & code test results were attached successfully.`,
      type: 'job',
      timestamp: 'Just now',
      read: false,
      actionUrl: 'jobs'
    };
    setNotifications(prev => [newNotif, ...prev]);

    try {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    } catch {
      // ignore
    }
  };

  const toggleBookmarkJob = (jobId: string) => {
    setBookmarkedJobs(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const toggleCandidateShortlist = (candidateId: string) => {
    setCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, shortlisted: !c.shortlisted } : c));
  };

  const uploadResumeSimulated = async () => {
    setIsAnalyzingResume(true);
    await new Promise(res => setTimeout(res, 1400));
    setIsAnalyzingResume(false);
  };

  const applyResumeToProfile = () => {
    setProfile(prev => ({
      ...prev,
      careerReadiness: Math.min(94, prev.careerReadiness + 2),
      verifiedSkillsCount: prev.verifiedSkillsCount + 1
    }));
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.65 } });
    } catch {
      // ignore
    }
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: 'Profile Updated from Resume Analysis',
      description: '17 skills and 3 portfolio projects synchronized with your SkillBridge profile.',
      type: 'readiness',
      timestamp: 'Just now',
      read: false,
      actionUrl: 'skills'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const setTargetRole = (roleTitle: string) => {
    const selected = CAREER_ROLES.find(r => r.title === roleTitle);
    if (!selected) return;

    setProfile(prev => ({
      ...prev,
      targetRole: roleTitle
    }));

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: `Target Role Updated to ${roleTitle}`,
      description: `Skill gap matrix and personalized roadmap adjusted for ${roleTitle}.`,
      type: 'gap',
      timestamp: 'Just now',
      read: false,
      actionUrl: 'gaps'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        setUserRole,
        currentTab,
        setCurrentTab,
        profile,
        setProfile,
        jobs,
        candidates,
        notifications,
        bookmarkedJobs,
        appliedJobIds,
        isAssistantOpen,
        setIsAssistantOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isPassportModalOpen,
        setIsPassportModalOpen,
        selectedCandidateForPassport,
        setSelectedCandidateForPassport,
        resumeAnalysis,
        isAnalyzingResume,
        isDemoTourOpen,
        demoTourStep,
        launchDemoTour,
        nextDemoTourStep,
        prevDemoTourStep,
        closeDemoTour,
        goToDemoTourStep,
        markRoadmapWeekCompleted,
        completeAssessment,
        applyToJob,
        toggleBookmarkJob,
        toggleCandidateShortlist,
        uploadResumeSimulated,
        applyResumeToProfile,
        setTargetRole,
        markNotificationRead,
        markAllNotificationsRead
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
