export type UserRole = 'student' | 'company' | 'college' | 'guest';

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type VerificationStatus = 'verified' | 'partially_verified' | 'not_verified';

export type SkillCategory = 'programming' | 'backend' | 'database' | 'tools' | 'cloud' | 'soft_skills';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  currentLevel: SkillLevel; // 1 to 5
  requiredLevel: SkillLevel; // 1 to 5
  percentage: number;
  verificationStatus: VerificationStatus;
  verifiedBy?: string;
  assessmentScore?: number;
  lastAssessed?: string;
}

export interface CareerRole {
  id: string;
  title: string;
  category: string;
  description: string;
  averageSalary: string;
  demandLevel: 'Very High' | 'High' | 'Moderate';
  requiredSkills: {
    skillName: string;
    requiredLevel: SkillLevel;
    weight: number;
    category: SkillCategory;
  }[];
}

export interface RoadmapWeek {
  week: number;
  title: string;
  learningObjective: string;
  estimatedHours: number;
  skillsGained: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  whyLearnThis: string;
  progressPercentage: number;
  completed: boolean;
  resources: {
    title: string;
    type: 'Documentation' | 'Interactive Lab' | 'Video Guide' | 'Project';
    url: string;
    duration: string;
  }[];
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

export interface ProjectRecommendation {
  id: string;
  title: string;
  tagline: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedWeeks: number;
  skillsCovered: string[];
  missingSkillsBridged: string[];
  architectureOverview: string;
  milestones: string[];
  githubTemplateUrl: string;
  completed: boolean;
}

export interface AssessmentQuestion {
  id: string;
  prompt: string;
  contextCode?: string;
  defaultInput?: string;
  testCases: {
    input: string;
    expectedOutput: string;
  }[];
  starterCode: string;
  solutionHint: string;
}

export interface SkillAssessment {
  id: string;
  category: string;
  title: string;
  skillName: string;
  description: string;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: AssessmentQuestion[];
  completed: boolean;
  score?: number;
  strongAreas?: string[];
  weakAreas?: string[];
  verifiedBadgeAwarded?: boolean;
}

export interface JobPosting {
  id: string;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  workplaceType: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  experienceRequired: string;
  requiredSkills: string[];
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  description: string;
  applicantsCount: number;
  postedDate: string;
  applied?: boolean;
}

export interface CandidateApplication {
  id: string;
  candidateName: string;
  avatar: string;
  education: string;
  targetRole: string;
  matchScore: number;
  careerReadiness: number;
  verifiedSkills: string[];
  assessmentAverage: number;
  projectsCompleted: number;
  shortlisted: boolean;
  appliedDate: string;
}

export interface ReadinessBreakdown {
  overall: number; // 82
  technicalSkills: number; // 85
  practicalExperience: number; // 76
  assessmentPerformance: number; // 88
  projects: number; // 72
  communication: number; // 80
  toReach90: string[];
}

export interface StudentProfile {
  name: string;
  email: string;
  avatar: string;
  education: string;
  institution: string;
  graduationYear: string;
  targetRole: string;
  careerReadiness: number;
  verifiedSkillsCount: number;
  skillGapsCount: number;
  recommendedProjectsCount: number;
  jobMatchesCount: number;
  passportId: string;
  verifiedAt: string;
  skills: SkillItem[];
  roadmaps: RoadmapWeek[];
  projects: ProjectRecommendation[];
  assessments: SkillAssessment[];
  readinessBreakdown: ReadinessBreakdown;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  type: 'gap' | 'readiness' | 'job' | 'assessment' | 'roadmap';
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface ResumeAnalysisResult {
  candidateName: string;
  detectedSkills: string[];
  detectedProjects: { title: string; tech: string }[];
  experienceYears: number;
  education: string;
  resumeQualityScore: number; // e.g. 78/100
  missingInformationCount: number;
  suggestions: string[];
}
