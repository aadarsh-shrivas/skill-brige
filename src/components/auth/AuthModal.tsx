import React, { useState } from 'react';
import {
  X,
  Compass,
  User,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, setUserRole, setCurrentTab } = useApp();
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('aadarshshrivas40@gmail.com');
  const [password, setPassword] = useState('••••••••••••');
  const [name, setName] = useState('Aadarsh Shrivas');
  const [submitted, setSubmitted] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setUserRole(selectedRole);
      if (selectedRole === 'student') setCurrentTab('dashboard');
      else if (selectedRole === 'company') setCurrentTab('company-dashboard');
      else if (selectedRole === 'college') setCurrentTab('college-dashboard');
      setIsAuthModalOpen(false);
      setSubmitted(false);
    }, 600);
  };

  const handleGoogleLogin = () => {
    setUserRole('student');
    setCurrentTab('dashboard');
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-md shadow-emerald-500/20 mb-3">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            {authMode === 'login'
              ? 'Welcome back to SkillBridge'
              : authMode === 'signup'
              ? 'Create your SkillBridge Account'
              : 'Reset your password'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {authMode === 'login'
              ? 'Enter your credentials to access your career readiness workspace'
              : authMode === 'signup'
              ? 'Join thousands of students and top hiring companies'
              : 'Enter your email to receive recovery instructions'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Role selector if signing up or logging in */}
          {authMode !== 'forgot' && (
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Select your account type:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedRole('student')}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                    selectedRole === 'student'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <User className="w-4 h-4 text-emerald-600" />
                  <span>Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole('company')}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                    selectedRole === 'company'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>Company</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole('college')}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                    selectedRole === 'college'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>College</span>
                </button>
              </div>
            </div>
          )}

          {/* Google Sign In Button */}
          {authMode !== 'forgot' && (
            <div className="mb-4">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                Continue with Google
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-[11px] uppercase">
                  <span className="bg-white px-2 text-slate-400 font-medium font-mono">
                    Or continue with email
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Aadarsh Shrivas"
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@nit.edu or company@tech.com"
                  className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {authMode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-[11px] text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={submitted}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-sm flex items-center justify-center gap-2 transition-all mt-4"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>
                    {authMode === 'login'
                      ? 'Sign In to Workspace'
                      : authMode === 'signup'
                      ? 'Create Account'
                      : 'Send Reset Link'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Footer toggle */}
          <div className="mt-5 text-center text-xs text-slate-500">
            {authMode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Sign up
                </button>
              </p>
            ) : authMode === 'signup' ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Sign in
                </button>
              </p>
            ) : (
              <p>
                Remembered your password?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Back to login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
