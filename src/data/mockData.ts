import {
  StudentProfile,
  CareerRole,
  JobPosting,
  CandidateApplication,
  NotificationItem,
  ResumeAnalysisResult
} from '../types';

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  name: 'Aadarsh Shrivas',
  email: 'aadarshshrivas40@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
  education: 'B.Tech in Artificial Intelligence & Data Science',
  institution: 'National Institute of Technology',
  graduationYear: '2026',
  targetRole: 'Backend Developer',
  careerReadiness: 82,
  verifiedSkillsCount: 7,
  skillGapsCount: 4,
  recommendedProjectsCount: 3,
  jobMatchesCount: 23,
  passportId: 'SB-VERIFIED-8492026-AS',
  verifiedAt: 'October 2026',
  readinessBreakdown: {
    overall: 82,
    technicalSkills: 85,
    practicalExperience: 76,
    assessmentPerformance: 88,
    projects: 72,
    communication: 80,
    toReach90: [
      'Complete Docker containerization & orchestration assessment (+3%)',
      'Deploy and verify REST API microservice project (+3%)',
      'Pass the Advanced SQL query optimization assessment (+2%)'
    ]
  },
  skills: [
    {
      id: 'sk-1',
      name: 'Python',
      category: 'programming',
      currentLevel: 4,
      requiredLevel: 4,
      percentage: 90,
      verificationStatus: 'verified',
      verifiedBy: 'SkillBridge Proctored Code Assessment',
      assessmentScore: 92,
      lastAssessed: '2 days ago'
    },
    {
      id: 'sk-2',
      name: 'C++',
      category: 'programming',
      currentLevel: 3,
      requiredLevel: 2,
      percentage: 70,
      verificationStatus: 'verified',
      verifiedBy: 'NIT Academic Transcript & Lab Evaluation',
      assessmentScore: 78,
      lastAssessed: '3 weeks ago'
    },
    {
      id: 'sk-3',
      name: 'Java',
      category: 'programming',
      currentLevel: 2,
      requiredLevel: 2,
      percentage: 50,
      verificationStatus: 'partially_verified',
      verifiedBy: 'Self-reported & GitHub repository scan',
      lastAssessed: '1 month ago'
    },
    {
      id: 'sk-4',
      name: 'FastAPI',
      category: 'backend',
      currentLevel: 3,
      requiredLevel: 4,
      percentage: 60,
      verificationStatus: 'partially_verified',
      verifiedBy: 'GitHub Repository Code Analysis',
      assessmentScore: 68,
      lastAssessed: 'Yesterday'
    },
    {
      id: 'sk-5',
      name: 'REST API',
      category: 'backend',
      currentLevel: 2,
      requiredLevel: 4,
      percentage: 40,
      verificationStatus: 'partially_verified',
      verifiedBy: 'Self-reported API design documentation',
      lastAssessed: '5 days ago'
    },
    {
      id: 'sk-6',
      name: 'Docker',
      category: 'backend',
      currentLevel: 1,
      requiredLevel: 3,
      percentage: 30,
      verificationStatus: 'not_verified',
      lastAssessed: 'Needs Assessment'
    },
    {
      id: 'sk-7',
      name: 'SQL',
      category: 'database',
      currentLevel: 4,
      requiredLevel: 4,
      percentage: 80,
      verificationStatus: 'verified',
      verifiedBy: 'SkillBridge Interactive SQL Sandbox',
      assessmentScore: 84,
      lastAssessed: '1 week ago'
    },
    {
      id: 'sk-8',
      name: 'PostgreSQL',
      category: 'database',
      currentLevel: 3,
      requiredLevel: 4,
      percentage: 60,
      verificationStatus: 'verified',
      verifiedBy: 'Project Schema Inspection',
      assessmentScore: 74,
      lastAssessed: '1 week ago'
    },
    {
      id: 'sk-9',
      name: 'Git',
      category: 'tools',
      currentLevel: 3,
      requiredLevel: 4,
      percentage: 70,
      verificationStatus: 'verified',
      verifiedBy: 'GitHub Integration & Branch Workflow Audit',
      assessmentScore: 85,
      lastAssessed: '2 weeks ago'
    },
    {
      id: 'sk-10',
      name: 'GitHub',
      category: 'tools',
      currentLevel: 4,
      requiredLevel: 4,
      percentage: 80,
      verificationStatus: 'verified',
      verifiedBy: 'Public GitHub Contributions & PR Reviews',
      assessmentScore: 88,
      lastAssessed: '3 days ago'
    },
    {
      id: 'sk-11',
      name: 'Machine Learning',
      category: 'programming',
      currentLevel: 3,
      requiredLevel: 2,
      percentage: 65,
      verificationStatus: 'verified',
      verifiedBy: 'Coursework Certificate & Kaggle Notebook',
      assessmentScore: 79,
      lastAssessed: '2 weeks ago'
    },
    {
      id: 'sk-12',
      name: 'CI/CD Pipelines',
      category: 'tools',
      currentLevel: 1,
      requiredLevel: 3,
      percentage: 25,
      verificationStatus: 'not_verified',
      lastAssessed: 'Unverified'
    }
  ],
  roadmaps: [
    {
      week: 1,
      title: 'REST API Design & HTTP Protocols',
      learningObjective: 'Master RESTful standards, idempotent verbs, HTTP status codes, structured JSON payloads, and OpenAPI documentation.',
      estimatedHours: 8,
      skillsGained: ['REST API', 'HTTP Status Codes', 'OpenAPI/Swagger'],
      difficulty: 'Beginner',
      whyLearnThis: 'Every modern backend relies on clean API contracts. TechNova and fintech employers reject 68% of junior candidates who cannot design standards-compliant endpoints.',
      progressPercentage: 100,
      completed: true,
      resources: [
        {
          title: 'RESTful API Architecture Best Practices',
          type: 'Documentation',
          url: '#',
          duration: '45 mins'
        },
        {
          title: 'Designing API Specifications with OpenAPI 3.0',
          type: 'Interactive Lab',
          url: '#',
          duration: '1.5 hours'
        }
      ],
      tasks: [
        { id: 't1', title: 'Implement CRUD endpoints adhering to REST verbs', completed: true },
        { id: 't2', title: 'Standardize error response schema with status codes', completed: true },
        { id: 't3', title: 'Generate interactive Swagger UI documentation', completed: true }
      ]
    },
    {
      week: 2,
      title: 'FastAPI Architecture & Pydantic Validation',
      learningObjective: 'Build production-ready asynchronous endpoints with Pydantic v2 data validation, dependency injection, and background tasks.',
      estimatedHours: 10,
      skillsGained: ['FastAPI', 'Pydantic v2', 'Asyncio', 'Dependency Injection'],
      difficulty: 'Intermediate',
      whyLearnThis: 'FastAPI is currently the #1 demanded Python backend framework for high-throughput AI services and microservices.',
      progressPercentage: 100,
      completed: true,
      resources: [
        {
          title: 'FastAPI Async Internals & Starlette Foundation',
          type: 'Video Guide',
          url: '#',
          duration: '1.2 hours'
        },
        {
          title: 'FastAPI Dependency Injection in Scalable Architectures',
          type: 'Interactive Lab',
          url: '#',
          duration: '2 hours'
        }
      ],
      tasks: [
        { id: 't4', title: 'Set up modular API routers with APIRouter', completed: true },
        { id: 't5', title: 'Write request/response schemas with Pydantic validations', completed: true },
        { id: 't6', title: 'Inject database session via Depends()', completed: true }
      ]
    },
    {
      week: 3,
      title: 'Authentication & Database ORMs (SQLAlchemy & PostgreSQL)',
      learningObjective: 'Implement secure JWT authentication (access + refresh tokens), password hashing with bcrypt, connection pooling, and migrations with Alembic.',
      estimatedHours: 12,
      skillsGained: ['JWT Auth', 'Bcrypt', 'PostgreSQL', 'SQLAlchemy 2.0', 'Alembic'],
      difficulty: 'Intermediate',
      whyLearnThis: 'Security and data persistence are non-negotiable for enterprise backend roles. Demonstrating secure token revocation sets you apart.',
      progressPercentage: 65,
      completed: false,
      resources: [
        {
          title: 'OAuth2 with Password and Bearer with JWT Tokens',
          type: 'Documentation',
          url: '#',
          duration: '1 hour'
        },
        {
          title: 'Async SQLAlchemy 2.0 with PostgreSQL connection pool',
          type: 'Interactive Lab',
          url: '#',
          duration: '2.5 hours'
        }
      ],
      tasks: [
        { id: 't7', title: 'Create user registration & password hashing with Bcrypt', completed: true },
        { id: 't8', title: 'Implement JWT access & refresh token rotation', completed: true },
        { id: 't9', title: 'Configure Alembic auto-migrations for schema changes', completed: false }
      ]
    },
    {
      week: 4,
      title: 'Docker Containerization & Multi-stage Builds',
      learningObjective: 'Write optimized Dockerfiles for Python applications, configure docker-compose for multi-container services (App + Postgres + Redis), and manage volumes.',
      estimatedHours: 9,
      skillsGained: ['Docker', 'Dockerfile Optimization', 'Docker Compose', 'Container Networking'],
      difficulty: 'Intermediate',
      whyLearnThis: 'Docker eliminates "it works on my machine" and is an absolute baseline prerequisite for 92% of backend developer listings.',
      progressPercentage: 30,
      completed: false,
      resources: [
        {
          title: 'Multi-stage Docker Builds for Lean Python Images',
          type: 'Documentation',
          url: '#',
          duration: '40 mins'
        },
        {
          title: 'Orchestrating FastAPI + PostgreSQL with Compose',
          type: 'Interactive Lab',
          url: '#',
          duration: '2 hours'
        }
      ],
      tasks: [
        { id: 't10', title: 'Create a non-root slim Dockerfile for FastAPI', completed: true },
        { id: 't11', title: 'Configure docker-compose.yml with health checks', completed: false },
        { id: 't12', title: 'Persist database state with Docker Named Volumes', completed: false }
      ]
    },
    {
      week: 5,
      title: 'Automated Testing & CI/CD with Pytest & GitHub Actions',
      learningObjective: 'Write unit and integration tests using pytest and httpx TestClient, mock external dependencies, and build a GitHub Actions validation workflow.',
      estimatedHours: 8,
      skillsGained: ['Pytest', 'Test-Driven Development', 'GitHub Actions', 'Code Coverage'],
      difficulty: 'Intermediate',
      whyLearnThis: 'Top tech employers test your ability to deliver bug-free code. Testing experience immediately qualifies candidates for senior internship tracks.',
      progressPercentage: 0,
      completed: false,
      resources: [
        {
          title: 'Testing Async FastAPI endpoints with Pytest-Asyncio',
          type: 'Documentation',
          url: '#',
          duration: '1 hour'
        },
        {
          title: 'Continuous Integration with GitHub Actions',
          type: 'Interactive Lab',
          url: '#',
          duration: '1.5 hours'
        }
      ],
      tasks: [
        { id: 't13', title: 'Write unit tests for authentication logic', completed: false },
        { id: 't14', title: 'Create test fixtures for database transaction rollback', completed: false },
        { id: 't15', title: 'Set up GitHub Actions to run tests on pull request', completed: false }
      ]
    },
    {
      week: 6,
      title: 'Production Capstone & Deployment Architecture',
      learningObjective: 'Deploy a high-availability backend service with structured logging, Prometheus metrics, rate limiting, and automated health checks.',
      estimatedHours: 14,
      skillsGained: ['Production Readiness', 'Rate Limiting', 'Prometheus', 'Cloud Deployment'],
      difficulty: 'Advanced',
      whyLearnThis: 'Proves to hiring managers that your code is resilient in real-world production environments, raising readiness above 90%.',
      progressPercentage: 0,
      completed: false,
      resources: [
        {
          title: 'Production Checklist: Logging, Security, and Metrics',
          type: 'Documentation',
          url: '#',
          duration: '1 hour'
        },
        {
          title: 'Deploying FastAPI behind Nginx Reverse Proxy',
          type: 'Project',
          url: '#',
          duration: '4 hours'
        }
      ],
      tasks: [
        { id: 't16', title: 'Add slow-api rate limiting and CORS middleware', completed: false },
        { id: 't17', title: 'Configure structured JSON logging with correlation IDs', completed: false },
        { id: 't18', title: 'Publish deployed live link to Skill Passport', completed: false }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'College Complaint & Grievance Management API',
      tagline: 'Enterprise multi-tenant ticket routing system with SLA tracking and audit logging',
      description: 'A robust REST API service built specifically to address college administration inefficiencies. Implements role-based access control (Student, Faculty, Admin), automated escalation alerts, and analytics.',
      difficulty: 'Intermediate',
      estimatedWeeks: 2,
      skillsCovered: ['Python', 'FastAPI', 'PostgreSQL', 'REST API', 'JWT Authentication', 'Docker'],
      missingSkillsBridged: ['Docker', 'REST API', 'FastAPI', 'JWT Authentication'],
      architectureOverview: 'Clean Layered Architecture (Routers → Services → Repositories → Models). Containerized with docker-compose.',
      milestones: [
        'Initialize FastAPI repo with Pydantic v2 schemas and Alembic migrations',
        'Implement OAuth2 JWT authentication with student/admin permission scopes',
        'Build CRUD grievance workflow with ticket status state machines',
        'Containerize service with Docker multi-stage build and compose',
        'Achieve >85% test coverage with pytest-asyncio'
      ],
      githubTemplateUrl: 'https://github.com/skillbridge-templates/fastapi-grievance-api',
      completed: false
    },
    {
      id: 'proj-2',
      title: 'Distributed Asynchronous Task Queue & Webhook Dispatcher',
      tagline: 'High-throughput background task processor with Redis broker and retry backoff',
      description: 'Solves real-time processing bottlenecks by offloading heavy computational workloads like PDF generation, email notifications, and webhook deliveries to async worker pools.',
      difficulty: 'Advanced',
      estimatedWeeks: 3,
      skillsCovered: ['Python', 'FastAPI', 'Redis', 'Celery/ARQ', 'Docker', 'REST API'],
      missingSkillsBridged: ['Docker', 'Asynchronous Systems', 'Redis'],
      architectureOverview: 'Event-driven publisher/subscriber architecture with exponential backoff and dead-letter queues.',
      milestones: [
        'Design job submission API with immediate 202 Accepted response',
        'Configure Redis queue broker with worker heartbeat monitoring',
        'Implement reliable webhook signing with HMAC SHA-256 signatures',
        'Package worker and API containers with healthchecks'
      ],
      githubTemplateUrl: 'https://github.com/skillbridge-templates/distributed-task-queue',
      completed: false
    },
    {
      id: 'proj-3',
      title: 'Inventory & Order Management Microservice Gateway',
      tagline: 'ACID transactional ordering engine with inventory reservation locks and SQL indexing',
      description: 'Addresses concurrency issues in high-traffic checkout flows using PostgreSQL row-level locking (SELECT FOR UPDATE) to prevent overselling.',
      difficulty: 'Intermediate',
      estimatedWeeks: 2,
      skillsCovered: ['PostgreSQL', 'SQL Optimization', 'Python', 'FastAPI', 'Docker'],
      missingSkillsBridged: ['Docker', 'Advanced SQL', 'Transaction Isolation'],
      architectureOverview: 'Relational data modeling with foreign keys, compound indexes, and ACID transaction boundaries.',
      milestones: [
        'Design relational schema for catalog, warehouses, and orders',
        'Implement optimistic and pessimistic concurrency control',
        'Benchmark query performance using EXPLAIN ANALYZE',
        'Deploy with automated Docker container testing'
      ],
      githubTemplateUrl: 'https://github.com/skillbridge-templates/inventory-microservice',
      completed: false
    }
  ],
  assessments: [
    {
      id: 'assess-python',
      category: 'Programming',
      title: 'Python Core & Data Structures',
      skillName: 'Python',
      description: 'Evaluate your ability to solve algorithmic problems, handle edge cases, and write idiomatic, high-performance Python code.',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      completed: true,
      score: 86,
      strongAreas: ['Functions & Decorators', 'List Comprehensions', 'Dictionary Operations'],
      weakAreas: ['Space-time complexity optimization', 'Defensive exception handling'],
      verifiedBadgeAwarded: true,
      questions: [
        {
          id: 'q-py-1',
          prompt: 'Write a Python function that removes duplicate values from a list while strictly preserving the original order of first appearance.',
          starterCode: 'def remove_duplicates(items: list) -> list:\n    # Write your solution here\n    pass\n',
          solutionHint: 'Use an auxiliary set to track seen elements in O(1) time while building the ordered result list.',
          testCases: [
            { input: '[1, 2, 2, 3, 4, 3, 2, 1]', expectedOutput: '[1, 2, 3, 4]' },
            { input: '["apple", "banana", "apple", "cherry"]', expectedOutput: '["apple", "banana", "cherry"]' },
            { input: '[]', expectedOutput: '[]' }
          ]
        }
      ]
    },
    {
      id: 'assess-sql',
      category: 'Database',
      title: 'SQL Querying, Aggregation & Joins',
      skillName: 'SQL',
      description: 'Test your understanding of multi-table joins, subqueries, group by aggregations, and window ranking functions.',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      completed: true,
      score: 84,
      strongAreas: ['Inner & Left Joins', 'GROUP BY & HAVING clauses'],
      weakAreas: ['Window functions (ROW_NUMBER, RANK)', 'Subquery performance'],
      verifiedBadgeAwarded: true,
      questions: [
        {
          id: 'q-sql-1',
          prompt: 'Write an SQL query to retrieve the second highest salary from an Employee table. Return null if no second highest exists.',
          starterCode: 'SELECT MAX(salary) AS SecondHighestSalary\nFROM Employee\nWHERE salary < (SELECT MAX(salary) FROM Employee);',
          solutionHint: 'Use a subquery to find the salary strictly less than the absolute maximum.',
          testCases: [
            { input: 'Employees: [100, 200, 300]', expectedOutput: '200' },
            { input: 'Employees: [100]', expectedOutput: 'null' }
          ]
        }
      ]
    },
    {
      id: 'assess-rest',
      category: 'Backend',
      title: 'REST API Design & Status Code Protocol',
      skillName: 'REST API',
      description: 'Evaluate your ability to build compliant REST APIs, choose semantic HTTP status codes, and design clean URI resources.',
      durationMinutes: 20,
      difficulty: 'Intermediate',
      completed: false,
      score: undefined,
      verifiedBadgeAwarded: false,
      questions: [
        {
          id: 'q-rest-1',
          prompt: 'Which HTTP method and status code combination should be returned when a client requests the creation of a new resource that already exists with the same unique identifier?',
          starterCode: '# State your reasoning and HTTP Code\n# e.g.: 409 Conflict',
          solutionHint: '409 Conflict indicates the request could not be completed due to a conflict with the current state of the resource.',
          testCases: [
            { input: 'POST /users { existing_id }', expectedOutput: '409 Conflict' }
          ]
        }
      ]
    },
    {
      id: 'assess-docker',
      category: 'Tools',
      title: 'Docker Containerization & Compose',
      skillName: 'Docker',
      description: 'Hands-on validation of Dockerfile directives, multi-stage builds, port mappings, and container volume isolation.',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      completed: false,
      score: undefined,
      verifiedBadgeAwarded: false,
      questions: [
        {
          id: 'q-doc-1',
          prompt: 'Write an optimized Dockerfile snippet for a Python FastAPI app ensuring cache efficiency by copying requirements.txt before application code.',
          starterCode: 'FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]',
          solutionHint: 'Separating dependencies installation from source code prevents reinstalling packages on every code edit.',
          testCases: [
            { input: 'Check layer ordering', expectedOutput: 'PASSED' }
          ]
        }
      ]
    }
  ]
};

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'role-backend',
    title: 'Backend Developer',
    category: 'Software Engineering',
    description: 'Builds, maintains, and scales server-side logic, database architectures, and APIs that power client applications.',
    averageSalary: '₹8,50,000 - ₹18,00,000 / yr',
    demandLevel: 'Very High',
    requiredSkills: [
      { skillName: 'Python', requiredLevel: 4, weight: 20, category: 'programming' },
      { skillName: 'SQL', requiredLevel: 4, weight: 20, category: 'database' },
      { skillName: 'FastAPI', requiredLevel: 4, weight: 15, category: 'backend' },
      { skillName: 'REST API', requiredLevel: 4, weight: 15, category: 'backend' },
      { skillName: 'Docker', requiredLevel: 3, weight: 15, category: 'backend' },
      { skillName: 'PostgreSQL', requiredLevel: 4, weight: 10, category: 'database' },
      { skillName: 'Git', requiredLevel: 4, weight: 5, category: 'tools' }
    ]
  },
  {
    id: 'role-fullstack',
    title: 'Full Stack Developer',
    category: 'Software Engineering',
    description: 'Develops end-to-end web applications bridging modern frontend interfaces with resilient backend APIs and databases.',
    averageSalary: '₹9,00,000 - ₹20,00,000 / yr',
    demandLevel: 'Very High',
    requiredSkills: [
      { skillName: 'Python', requiredLevel: 4, weight: 15, category: 'programming' },
      { skillName: 'React / Next.js', requiredLevel: 4, weight: 20, category: 'tools' },
      { skillName: 'TypeScript', requiredLevel: 4, weight: 15, category: 'programming' },
      { skillName: 'REST API', requiredLevel: 4, weight: 15, category: 'backend' },
      { skillName: 'PostgreSQL', requiredLevel: 4, weight: 15, category: 'database' },
      { skillName: 'Docker', requiredLevel: 3, weight: 10, category: 'backend' },
      { skillName: 'Git', requiredLevel: 4, weight: 10, category: 'tools' }
    ]
  },
  {
    id: 'role-data-analyst',
    title: 'Data Analyst',
    category: 'Data & Analytics',
    description: 'Extracts actionable business insights from complex relational and unstructured data using SQL, Python, and dashboards.',
    averageSalary: '₹6,50,000 - ₹14,00,000 / yr',
    demandLevel: 'High',
    requiredSkills: [
      { skillName: 'SQL', requiredLevel: 5, weight: 30, category: 'database' },
      { skillName: 'Python', requiredLevel: 3, weight: 20, category: 'programming' },
      { skillName: 'Pandas', requiredLevel: 4, weight: 20, category: 'tools' },
      { skillName: 'Data Visualization', requiredLevel: 4, weight: 15, category: 'tools' },
      { skillName: 'Statistical Analysis', requiredLevel: 3, weight: 15, category: 'programming' }
    ]
  },
  {
    id: 'role-data-scientist',
    title: 'Data Scientist',
    category: 'Data & Analytics',
    description: 'Designs predictive machine learning algorithms, statistical tests, and exploratory analysis to solve core business problems.',
    averageSalary: '₹10,00,000 - ₹24,00,000 / yr',
    demandLevel: 'Very High',
    requiredSkills: [
      { skillName: 'Python', requiredLevel: 5, weight: 25, category: 'programming' },
      { skillName: 'Machine Learning', requiredLevel: 4, weight: 25, category: 'programming' },
      { skillName: 'SQL', requiredLevel: 4, weight: 20, category: 'database' },
      { skillName: 'Deep Learning', requiredLevel: 3, weight: 15, category: 'programming' },
      { skillName: 'Mathematics & Stats', requiredLevel: 4, weight: 15, category: 'programming' }
    ]
  },
  {
    id: 'role-ml-engineer',
    title: 'Machine Learning Engineer',
    category: 'AI & Data Science',
    description: 'Productionizes machine learning models into high-throughput scalable inference endpoints and data pipelines.',
    averageSalary: '₹12,00,000 - ₹26,00,000 / yr',
    demandLevel: 'Very High',
    requiredSkills: [
      { skillName: 'Python', requiredLevel: 5, weight: 20, category: 'programming' },
      { skillName: 'Machine Learning', requiredLevel: 4, weight: 20, category: 'programming' },
      { skillName: 'FastAPI', requiredLevel: 4, weight: 15, category: 'backend' },
      { skillName: 'Docker', requiredLevel: 4, weight: 20, category: 'backend' },
      { skillName: 'Model Serving', requiredLevel: 4, weight: 15, category: 'tools' },
      { skillName: 'Git', requiredLevel: 4, weight: 10, category: 'tools' }
    ]
  },
  {
    id: 'role-cloud-engineer',
    title: 'Cloud Engineer',
    category: 'Infrastructure',
    description: 'Architects and automates cloud infrastructure, IAM policies, networking, and serverless compute clusters.',
    averageSalary: '₹10,50,000 - ₹22,00,000 / yr',
    demandLevel: 'High',
    requiredSkills: [
      { skillName: 'Docker', requiredLevel: 5, weight: 25, category: 'backend' },
      { skillName: 'Linux & Bash', requiredLevel: 4, weight: 20, category: 'tools' },
      { skillName: 'Terraform', requiredLevel: 3, weight: 20, category: 'tools' },
      { skillName: 'Cloud Services (AWS/GCP)', requiredLevel: 4, weight: 20, category: 'cloud' },
      { skillName: 'Python', requiredLevel: 3, weight: 15, category: 'programming' }
    ]
  },
  {
    id: 'role-devops-engineer',
    title: 'DevOps Engineer',
    category: 'Infrastructure',
    description: 'Streamlines release pipelines, monitoring, container orchestration, and continuous integration workflows.',
    averageSalary: '₹11,00,000 - ₹24,00,000 / yr',
    demandLevel: 'Very High',
    requiredSkills: [
      { skillName: 'Docker', requiredLevel: 5, weight: 25, category: 'backend' },
      { skillName: 'CI/CD Pipelines', requiredLevel: 5, weight: 25, category: 'tools' },
      { skillName: 'Kubernetes', requiredLevel: 4, weight: 20, category: 'cloud' },
      { skillName: 'Linux & Scripting', requiredLevel: 4, weight: 15, category: 'tools' },
      { skillName: 'Git', requiredLevel: 4, weight: 15, category: 'tools' }
    ]
  },
  {
    id: 'role-uiux-designer',
    title: 'UI/UX Designer',
    category: 'Design & Product',
    description: 'Designs intuitive user journeys, high-fidelity wireframes, interactive prototypes, and design systems.',
    averageSalary: '₹7,00,000 - ₹16,00,000 / yr',
    demandLevel: 'Moderate',
    requiredSkills: [
      { skillName: 'Figma', requiredLevel: 5, weight: 35, category: 'tools' },
      { skillName: 'User Research', requiredLevel: 4, weight: 25, category: 'soft_skills' },
      { skillName: 'Design Systems', requiredLevel: 4, weight: 20, category: 'tools' },
      { skillName: 'Prototyping', requiredLevel: 4, weight: 20, category: 'tools' }
    ]
  }
];

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: 'job-1',
    companyName: 'TechNova Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
    jobTitle: 'Backend Developer Intern',
    location: 'Bengaluru / Remote',
    type: 'Internship',
    workplaceType: 'Remote',
    salary: '₹25,000 / month',
    experienceRequired: '0 - 1 years (College Graduates / 2026 Batch)',
    requiredSkills: ['Python', 'SQL', 'FastAPI', 'REST API', 'Git', 'Docker'],
    matchPercentage: 94,
    matchedSkills: ['Python', 'SQL', 'FastAPI', 'Git', 'REST API'],
    missingSkills: ['Docker'],
    description: 'TechNova is scaling its microservices platform for fintech logistics. We are seeking an aspiring backend engineer who understands clean API contracts, database schema optimization, and asynchronous Python.',
    applicantsCount: 42,
    postedDate: '2 days ago',
    applied: false
  },
  {
    id: 'job-2',
    companyName: 'Apex Cloud Systems',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
    jobTitle: 'Junior Python Backend Engineer',
    location: 'Hyderabad / Hybrid',
    type: 'Full-time',
    workplaceType: 'Hybrid',
    salary: '₹8,50,000 - ₹11,00,000 / yr',
    experienceRequired: '0 - 2 years',
    requiredSkills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Git'],
    matchPercentage: 88,
    matchedSkills: ['Python', 'FastAPI', 'PostgreSQL', 'Git'],
    missingSkills: ['Docker', 'CI/CD Pipelines'],
    description: 'Join our cloud infrastructure team building scalable developer tooling. You will collaborate on core API endpoints, database caching layers, and containerized deployments.',
    applicantsCount: 78,
    postedDate: '4 days ago',
    applied: false
  },
  {
    id: 'job-3',
    companyName: 'CloudScale Networks',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80',
    jobTitle: 'Backend Platform Apprentice',
    location: 'Pune / Remote',
    type: 'Internship',
    workplaceType: 'Remote',
    salary: '₹30,000 / month',
    experienceRequired: 'Pre-final / Final Year Students',
    requiredSkills: ['Python', 'REST API', 'SQL', 'Git'],
    matchPercentage: 96,
    matchedSkills: ['Python', 'REST API', 'SQL', 'Git'],
    missingSkills: [],
    description: 'Looking for a dedicated backend enthusiast to work on our high-throughput data collection APIs. Direct mentorship from senior staff engineers and full-time PPO opportunity.',
    applicantsCount: 56,
    postedDate: '1 day ago',
    applied: false
  },
  {
    id: 'job-4',
    companyName: 'FinEdge Labs',
    companyLogo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80',
    jobTitle: 'Data & Backend Associate',
    location: 'Gurugram / On-site',
    type: 'Full-time',
    workplaceType: 'On-site',
    salary: '₹7,50,000 - ₹9,50,000 / yr',
    experienceRequired: '0 - 1 years',
    requiredSkills: ['Python', 'SQL', 'PostgreSQL', 'Machine Learning', 'Git'],
    matchPercentage: 91,
    matchedSkills: ['Python', 'SQL', 'PostgreSQL', 'Machine Learning', 'Git'],
    missingSkills: ['Tableau / BI'],
    description: 'FinEdge is building automated credit risk models. You will construct data ingestion pipelines and expose risk score calculations via performant REST APIs.',
    applicantsCount: 63,
    postedDate: '5 days ago',
    applied: false
  }
];

export const COMPANY_CANDIDATES: CandidateApplication[] = [
  {
    id: 'cand-1',
    candidateName: 'Aadarsh Shrivas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    education: 'B.Tech AI & Data Science (2026 Batch)',
    targetRole: 'Backend Developer',
    matchScore: 94,
    careerReadiness: 82,
    verifiedSkills: ['Python', 'SQL', 'FastAPI', 'Git', 'PostgreSQL'],
    assessmentAverage: 88,
    projectsCompleted: 3,
    shortlisted: true,
    appliedDate: 'Yesterday'
  },
  {
    id: 'cand-2',
    candidateName: 'Rahul Verma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    education: 'B.Tech Computer Science (2026 Batch)',
    targetRole: 'Backend Developer',
    matchScore: 91,
    careerReadiness: 79,
    verifiedSkills: ['Python', 'SQL', 'Django', 'Git'],
    assessmentAverage: 83,
    projectsCompleted: 2,
    shortlisted: false,
    appliedDate: '3 days ago'
  },
  {
    id: 'cand-3',
    candidateName: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
    education: 'B.Tech Information Technology (2026 Batch)',
    targetRole: 'Backend Developer',
    matchScore: 87,
    careerReadiness: 76,
    verifiedSkills: ['Python', 'FastAPI', 'MongoDB', 'Git'],
    assessmentAverage: 80,
    projectsCompleted: 2,
    shortlisted: false,
    appliedDate: '4 days ago'
  },
  {
    id: 'cand-4',
    candidateName: 'Aman Patel',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    education: 'B.Tech AI & Data Science (2026 Batch)',
    targetRole: 'Backend Developer',
    matchScore: 82,
    careerReadiness: 71,
    verifiedSkills: ['Python', 'SQL', 'Flask'],
    assessmentAverage: 75,
    projectsCompleted: 1,
    shortlisted: false,
    appliedDate: '5 days ago'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Docker skill gap is still high (0/5)',
    description: 'TechNova and 8 other matching jobs require Docker containerization. Complete the Week 4 roadmap lab to bridge this gap.',
    type: 'gap',
    timestamp: '10 mins ago',
    read: false,
    actionUrl: 'roadmap'
  },
  {
    id: 'notif-2',
    title: 'You are now 82% career ready! 🎉',
    description: 'Your verified score improved after completing the SQL query optimization assessment with 84% marks.',
    type: 'readiness',
    timestamp: '2 hours ago',
    read: false,
    actionUrl: 'readiness'
  },
  {
    id: 'notif-3',
    title: '3 new jobs match your skills',
    description: 'New backend internship postings from TechNova Solutions, Apex Cloud Systems, and CloudScale Networks.',
    type: 'job',
    timestamp: '5 hours ago',
    read: false,
    actionUrl: 'jobs'
  },
  {
    id: 'notif-4',
    title: 'Your SQL assessment is verified',
    description: 'Verified badge has been automatically stamped on your digital Skill Passport (ID: SB-VERIFIED-8492026).',
    type: 'assessment',
    timestamp: 'Yesterday',
    read: true,
    actionUrl: 'passport'
  },
  {
    id: 'notif-5',
    title: 'You completed Week 2 of your roadmap!',
    description: 'FastAPI Architecture & Pydantic validation marked as 100% completed.',
    type: 'roadmap',
    timestamp: '2 days ago',
    read: true,
    actionUrl: 'roadmap'
  }
];

export const MOCK_RESUME_ANALYSIS: ResumeAnalysisResult = {
  candidateName: 'Aadarsh Shrivas',
  education: 'B.Tech in Artificial Intelligence & Data Science, NIT (CGPA: 8.7/10)',
  experienceYears: 1,
  detectedSkills: [
    'Python',
    'C++',
    'SQL',
    'PostgreSQL',
    'FastAPI',
    'REST API',
    'Git',
    'GitHub',
    'Pandas',
    'NumPy',
    'Machine Learning',
    'Scikit-learn',
    'Docker (Basic)',
    'Object-Oriented Programming',
    'Database Design',
    'Linux Basics',
    'Agile Scrum'
  ],
  detectedProjects: [
    {
      title: 'College Complaint & Grievance Management API',
      tech: 'FastAPI, PostgreSQL, SQLAlchemy, JWT Auth'
    },
    {
      title: 'Real-Time Air Quality Prediction System',
      tech: 'Python, Scikit-learn, Pandas, Streamlit'
    },
    {
      title: 'Personal Portfolio & Technical Blog',
      tech: 'React, Tailwind CSS, Markdown'
    }
  ],
  resumeQualityScore: 78,
  missingInformationCount: 2,
  suggestions: [
    'Add measurable quantified results to your projects (e.g., "Reduced response latency by 35% through query indexing").',
    'Add your public GitHub repository links and live deployed demo links alongside each project.',
    'Your FastAPI experience is not clearly demonstrated in the bullet points; highlight asynchronous handling and token rotation.',
    'Include Docker multi-stage build scripts to prove containerization competency.'
  ]
};

export const COLLEGE_ANALYTICS = {
  institutionName: 'Apex Institute of Technology',
  totalStudents: 2400,
  careerReadyPercentage: 68,
  needsTrainingPercentage: 32,
  averageReadinessScore: 74.2,
  placementRateProjected: '89%',
  topSkillGaps: [
    { rank: 1, skill: 'Cloud Computing (AWS/GCP)', affectedStudents: 1420, urgency: 'Critical' },
    { rank: 2, skill: 'SQL & Query Optimization', affectedStudents: 1105, urgency: 'High' },
    { rank: 3, skill: 'Data Structures & Algorithms', affectedStudents: 980, urgency: 'High' },
    { rank: 4, skill: 'Technical Communication & Presentation', affectedStudents: 850, urgency: 'Medium' },
    { rank: 5, skill: 'Git Workflow & Code Review', affectedStudents: 690, urgency: 'Medium' }
  ],
  departmentPerformance: [
    { department: 'AI & Data Science', students: 480, readyPct: 81, avgScore: 82 },
    { department: 'Computer Science & Eng', students: 720, readyPct: 76, avgScore: 79 },
    { department: 'Information Technology', students: 600, readyPct: 69, avgScore: 72 },
    { department: 'Electronics & Comm', students: 600, readyPct: 48, avgScore: 59 }
  ],
  demandedSkillsByRecruiters: [
    { skill: 'FastAPI / Python', recruiterRequests: 142, growth: '+34%' },
    { skill: 'Docker & Kubernetes', recruiterRequests: 189, growth: '+45%' },
    { skill: 'PostgreSQL & Redis', recruiterRequests: 130, growth: '+28%' },
    { skill: 'React / Next.js', recruiterRequests: 165, growth: '+18%' }
  ]
};
