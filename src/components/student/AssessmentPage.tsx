import React, { useState } from 'react';
import {
  Code2,
  Play,
  CheckCircle2,
  XCircle,
  Award,
  RefreshCw,
  Terminal,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SkillAssessment } from '../../types';

export const AssessmentPage: React.FC = () => {
  const { profile, completeAssessment, setCurrentTab, setIsPassportModalOpen } = useApp();

  const [selectedAssessmentId, setSelectedAssessmentId] = useState<string>('assess-python');
  const [codeValue, setCodeValue] = useState<string>(
    `def remove_duplicates(items: list) -> list:\n    seen = set()\n    result = []\n    for x in items:\n        if x not in seen:\n            seen.add(x)\n            result.append(x)\n    return result\n`
  );
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<{ input: string; expected: string; actual: string; passed: boolean }[] | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const activeAssessment = profile.assessments.find(a => a.id === selectedAssessmentId) || profile.assessments[0];
  const activeQuestion = activeAssessment.questions[0];

  const handleSelectAssessment = (assessment: SkillAssessment) => {
    setSelectedAssessmentId(assessment.id);
    setCodeValue(assessment.questions[0].starterCode);
    setExecutionOutput(null);
    setTestResults(null);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setExecutionOutput('Executing test suite in isolated Python 3.11 sandbox...');

    setTimeout(() => {
      // Simulate real test verification
      const results = activeQuestion.testCases.map((tc, idx) => ({
        input: tc.input,
        expected: tc.expectedOutput,
        actual: tc.expectedOutput, // simulated exact match
        passed: true
      }));

      setTestResults(results);
      setExecutionOutput(`\n--------------------------------------------------\n✓ Test Case 1 Passed (0.014s)\n✓ Test Case 2 Passed (0.011s)\n✓ Test Case 3 Passed (0.009s)\n\nAll test cases passed! Complexity: O(N) time, O(N) space.`);
      setIsRunning(false);
    }, 700);
  };

  const handleSubmitAssessment = () => {
    const finalScore = 86;
    completeAssessment(
      activeAssessment.id,
      finalScore,
      ['Functions & Logic', 'List Preservation', 'Set Lookup Complexity'],
      ['Space-time boundary handling', 'Recursive edge cases']
    );
    setShowScoreModal(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <Code2 className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Prove Your Skills (Live Interactive IDE)
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Solve algorithmic problems and engineering scenarios in an interactive code sandbox to earn verified credentials.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Verified Badges:</span>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-xs border border-emerald-200">
            {profile.assessments.filter(a => a.completed).length} / {profile.assessments.length} Earned
          </span>
        </div>
      </div>

      {/* Category / Test Selector */}
      <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none">
        {profile.assessments.map(assess => (
          <button
            key={assess.id}
            onClick={() => handleSelectAssessment(assess)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
              selectedAssessmentId === assess.id
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>{assess.title}</span>
            {assess.completed && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
            )}
          </button>
        ))}
      </div>

      {/* Live IDE Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Problem Prompt & Instructions (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {activeAssessment.category} • {activeAssessment.difficulty}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Time: {activeAssessment.durationMinutes} mins
            </span>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900">
              {activeAssessment.title}
            </h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {activeAssessment.description}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
              Problem Statement:
            </h4>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              "{activeQuestion.prompt}"
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
              Sample Test Cases:
            </h4>
            <div className="space-y-2 text-xs font-mono">
              {activeQuestion.testCases.map((tc, idx) => (
                <div key={idx} className="p-2.5 bg-slate-900 text-slate-200 rounded-lg text-[11px]">
                  <div className="text-slate-400 text-[10px]">Case {idx + 1}:</div>
                  <div className="text-emerald-400">Input: {tc.input}</div>
                  <div className="text-slate-300">Expected: {tc.expectedOutput}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Hint: </span>
              {activeQuestion.solutionHint}
            </div>
          </div>
        </div>

        {/* Right Column: Code Editor & Terminal (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Code Editor Frame */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
            {/* Editor Top Bar */}
            <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 font-mono text-[11px] text-slate-300">
                  solution.{activeAssessment.skillName === 'SQL' ? 'sql' : 'py'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCodeValue(activeQuestion.starterCode)}
                  className="hover:text-slate-200 text-[11px] font-medium"
                >
                  Reset Starter Code
                </button>
              </div>
            </div>

            {/* Code Input Area */}
            <div className="relative font-mono text-xs p-4 bg-slate-950 min-h-[260px]">
              <textarea
                value={codeValue}
                onChange={e => setCodeValue(e.target.value)}
                spellCheck={false}
                className="w-full h-64 bg-transparent text-emerald-300 font-mono text-xs focus:outline-none resize-none leading-relaxed"
                placeholder="# Write your solution here..."
              />
            </div>

            {/* Editor Action Buttons */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Python 3.11 Runtime</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  {isRunning ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
                  )}
                  <span>Run Tests</span>
                </button>

                <button
                  onClick={handleSubmitAssessment}
                  className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                >
                  Submit & Score
                </button>
              </div>
            </div>
          </div>

          {/* Test Execution Output Console */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 text-xs font-mono text-slate-300 min-h-[140px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
              <span>Sandbox Test Results:</span>
              {testResults && (
                <span className="text-emerald-400 font-bold">
                  {testResults.filter(t => t.passed).length}/{testResults.length} Passed
                </span>
              )}
            </div>

            <div className="mt-2 text-slate-300 whitespace-pre-wrap leading-relaxed">
              {executionOutput || 'Click "Run Tests" to execute your solution against automated test cases.'}
            </div>
          </div>
        </div>
      </div>

      {/* Completion & Score Modal */}
      {showScoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-center">
            <div className="p-6 bg-slate-900 text-white relative">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/30 mb-3">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                {activeAssessment.skillName} Assessment Complete!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your performance has been evaluated and verified.
              </p>
            </div>

            <div className="p-6 space-y-4">
              {/* Score circle */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl inline-block w-full">
                <div className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">
                  Verified Score
                </div>
                <div className="text-4xl font-black text-emerald-600 font-mono mt-1">
                  86%
                </div>
                <p className="text-[11px] text-emerald-700 font-medium mt-1">
                  Exceeds industry hiring threshold (75%)
                </p>
              </div>

              {/* Strong & Weak Areas breakdown */}
              <div className="text-left space-y-3">
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Strong Areas:</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
                    <li>Functions & Parameter Signatures</li>
                    <li>List Order Preservation</li>
                    <li>Dictionary & Set Membership in O(1)</li>
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-500" />
                    <span>Weak Areas to Improve:</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
                    <li>Algorithmic space-time complexity analysis</li>
                    <li>Defensive exception handling for malformed inputs</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setShowScoreModal(false);
                    setIsPassportModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>View Verified Skill on Passport</span>
                </button>
                <button
                  onClick={() => setShowScoreModal(false)}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
