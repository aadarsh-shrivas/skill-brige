import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  RefreshCw,
  Compass,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { askCareerAdvisor } from '../../services/geminiService';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AIAssistantModal: React.FC = () => {
  const { isAssistantOpen, setIsAssistantOpen, profile, setCurrentTab } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-welcome',
      sender: 'ai',
      text: `Hello ${profile.name}! 👋 I'm your **SkillBridge AI Career Coach**.\n\nI have complete visibility into your verified skills, current ${profile.careerReadiness}% career readiness score, and target role of **${profile.targetRole}**.\n\nHow can I help accelerate your path to job readiness today?`,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    `Why am I only ${profile.careerReadiness}% ready for backend development?`,
    'What should I learn next?',
    'Suggest a project for my missing skills',
    'How can I improve my SQL?',
    'Which jobs match my current skills?',
    'Create a 30-day roadmap for me'
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (!isAssistantOpen) {
    return (
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white p-3.5 rounded-full shadow-xl shadow-emerald-600/30 flex items-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Open AI Career Coach"
      >
        <Bot className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold pr-1">
          Ask Career AI
        </span>
      </button>
    );
  }

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await askCareerAdvisor(query, profile);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: 'I ran into an issue connecting with the model. Try checking your roadmap or gap analysis in the meantime!',
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 bg-slate-900/40 backdrop-blur-xs">
      <div className="w-full sm:w-[460px] h-[85vh] sm:h-[640px] bg-white sm:rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
              <Bot className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">SkillBridge AI Advisor</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Ready: {profile.careerReadiness}%
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Contextual Career Readiness Coach</p>
            </div>
          </div>
          <button
            onClick={() => setIsAssistantOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompt Carousel */}
        <div className="p-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto whitespace-nowrap space-x-2 scrollbar-none flex">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 px-3 py-1.5 rounded-full shrink-0 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Chat History */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-xs shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs shadow-xs prose prose-xs max-w-none'
                }`}
              >
                <div className="whitespace-pre-line space-y-2">{msg.text}</div>
                <div
                  className={`text-[9px] mt-1.5 text-right font-medium ${
                    msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-500 flex items-center gap-2 shadow-xs">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                <span>Consulting SkillBridge career intelligence...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick jump shortcuts */}
        <div className="px-3 py-1.5 bg-slate-100/70 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
          <span className="text-[10px] text-slate-400 font-mono">QUICK NAV:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCurrentTab('roadmap');
                setIsAssistantOpen(false);
              }}
              className="hover:text-emerald-700 font-medium underline flex items-center gap-0.5"
            >
              Roadmap <ArrowRight className="w-2.5 h-2.5" />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setCurrentTab('assessment');
                setIsAssistantOpen(false);
              }}
              className="hover:text-emerald-700 font-medium underline flex items-center gap-0.5"
            >
              Assessments <ArrowRight className="w-2.5 h-2.5" />
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setCurrentTab('jobs');
                setIsAssistantOpen(false);
              }}
              className="hover:text-emerald-700 font-medium underline flex items-center gap-0.5"
            >
              Jobs <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* Input form */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Ask anything about skills, roadmaps, or jobs..."
            className="flex-1 text-xs px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-slate-400 text-slate-900 bg-white"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white p-2.5 rounded-xl shadow-xs transition-colors shrink-0"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
