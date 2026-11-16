import React, { useState } from 'react';
import {
  Compass,
  Bell,
  Play,
  Award,
  Bot,
  Building2,
  GraduationCap,
  User,
  ExternalLink,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const {
    userRole,
    setUserRole,
    currentTab,
    setCurrentTab,
    profile,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    setIsPassportModalOpen,
    setIsAssistantOpen,
    launchDemoTour
  } = useApp();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              if (userRole === 'guest') {
                setCurrentTab('landing');
              } else if (userRole === 'company') {
                setCurrentTab('company-dashboard');
              } else if (userRole === 'college') {
                setCurrentTab('college-dashboard');
              } else {
                setCurrentTab('dashboard');
              }
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-slate-900 font-sans">
                  Skill<span className="text-emerald-600">Bridge</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                  AI
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                Career Readiness & Talent Ecosystem
              </p>
            </div>
          </button>

          {/* Quick Persona / Role Switcher */}
          <div className="hidden md:flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200/80 text-xs">
            <button
              onClick={() => {
                setUserRole('student');
                setCurrentTab('dashboard');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                userRole === 'student'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Student
            </button>
            <button
              onClick={() => {
                setUserRole('company');
                setCurrentTab('company-dashboard');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                userRole === 'company'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Company
            </button>
            <button
              onClick={() => {
                setUserRole('college');
                setCurrentTab('college-dashboard');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                userRole === 'college'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              College
            </button>
            <button
              onClick={() => {
                setUserRole('guest');
                setCurrentTab('landing');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                userRole === 'guest'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Public Landing
            </button>
          </div>
        </div>

        {/* Right CTA actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Launch Demo button */}
          <button
            onClick={launchDemoTour}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm hover:from-amber-600 hover:to-orange-600 transition-all active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Launch</span> Demo Tour
          </button>

          {/* AI Career Assistant */}
          <button
            onClick={() => setIsAssistantOpen(true)}
            className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            title="Ask AI Career Coach"
          >
            <Bot className="w-4 h-4 text-emerald-600" />
            <span className="hidden lg:inline">AI Advisor</span>
          </button>

          {/* Skill Passport quick trigger */}
          {userRole === 'student' && (
            <button
              onClick={() => setIsPassportModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 rounded-lg transition-colors"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">Skill Passport</span>
              <span className="font-bold font-mono bg-emerald-200/80 px-1 py-0.2 rounded text-[11px]">
                {profile.careerReadiness}%
              </span>
            </button>
          )}

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
              )}
            </button>

            {isNotifOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-3">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-900">Notifications</span>
                    {unreadCount > 0 && (
                      <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.2 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllNotificationsRead}
                      className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="max-h-72 overflow-y-auto space-y-2">
                  {notifications.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-400">
                      No notifications yet
                    </div>
                  ) : (
                    notifications.map(item => (
                      <div
                        key={item.id}
                        onClick={() => {
                          markNotificationRead(item.id);
                          if (item.actionUrl) {
                            setCurrentTab(item.actionUrl);
                            setIsNotifOpen(false);
                          }
                        }}
                        className={`p-2.5 rounded-lg text-xs cursor-pointer transition-colors ${
                          item.read
                            ? 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            : 'bg-emerald-50/70 border border-emerald-100 text-slate-800 hover:bg-emerald-100/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {item.type === 'readiness' || item.type === 'assessment' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900 flex justify-between">
                              <span>{item.title}</span>
                              <span className="text-[10px] text-slate-400 font-normal">{item.timestamp}</span>
                            </div>
                            <p className="text-slate-600 mt-0.5 line-clamp-2">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <div className="hidden xl:block text-left">
              <div className="text-xs font-semibold text-slate-900 leading-tight">{profile.name}</div>
              <div className="text-[10px] text-slate-500 leading-tight">{profile.targetRole}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
