import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { 
  Trophy, 
  User, 
  Search, 
  Trash2, 
  BarChart2, 
  Calendar, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronLeft,
  Lock
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface QuizAttempt {
  id: string;
  name: string;
  quizType: string;
  score: number;
  totalQuestions: number;
  accuracy: number;
  attemptNumber: number;
  timestamp: string;
}

export const AdminPanel: React.FC = () => {
  const { setView } = useGame();
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Mixed' | 'Practice'>('All');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Authorization states
  const [isAuthorized, setIsAuthorized] = useState(() => {
    return sessionStorage.getItem('admin_authorized') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin') {
      setIsAuthorized(true);
      setAuthError('');
      sessionStorage.setItem('admin_authorized', 'true');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  // Load attempts from Supabase or localStorage fallback
  useEffect(() => {
    const loadAttempts = async () => {
      if (supabase) {
        try {
          const { data, error } = await supabase
            .from('unscene_quiz_attempts')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;

          if (data) {
            // Map db schema to component interface fields
            const mapped: QuizAttempt[] = data.map((item: any) => ({
              id: item.id,
              name: item.name,
              quizType: item.quiz_type,
              score: item.score,
              totalQuestions: item.total_questions,
              accuracy: item.accuracy,
              attemptNumber: item.attempt_number,
              timestamp: item.timestamp
            }));
            setAttempts(mapped);
            return;
          }
        } catch (err) {
          console.error('Failed to load attempts from Supabase, falling back to local storage:', err);
        }
      }

      // Fallback load
      const raw = localStorage.getItem('unscene_quiz_attempts');
      if (raw) {
        setAttempts(JSON.parse(raw));
      }
    };

    loadAttempts();
  }, []);

  // Filtered attempts
  const filteredAttempts = attempts.filter(attempt => {
    const matchesSearch = attempt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          attempt.quizType.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesType = true;
    if (filterType === 'Mixed') {
      matchesType = attempt.quizType.includes('Mixed');
    } else if (filterType === 'Practice') {
      matchesType = attempt.quizType.includes('Practice');
    }

    return matchesSearch && matchesType;
  });

  // Calculate stats
  const totalAttempts = attempts.length;
  const uniqueNames = new Set(attempts.map(a => a.name.toLowerCase())).size;
  
  const averageAccuracy = attempts.length > 0 
    ? Math.round(attempts.reduce((sum, a) => sum + a.accuracy, 0) / attempts.length)
    : 0;

  const highestScore = attempts.length > 0 
    ? Math.max(...attempts.map(a => a.accuracy))
    : 0;

  // Actions
  const deleteAttempt = async (id: string) => {
    const updated = attempts.filter(a => a.id !== id);
    setAttempts(updated);
    localStorage.setItem('unscene_quiz_attempts', JSON.stringify(updated));

    if (supabase) {
      try {
        const { error } = await supabase
          .from('unscene_quiz_attempts')
          .delete()
          .eq('id', id);
        if (error) throw error;
      } catch (err) {
        console.error('Failed to delete attempt from Supabase:', err);
      }
    }
  };

  const clearAllAttempts = async () => {
    setAttempts([]);
    localStorage.removeItem('unscene_quiz_attempts');
    setShowClearConfirm(false);

    if (supabase) {
      try {
        const { error } = await supabase
          .from('unscene_quiz_attempts')
          .delete()
          .neq('id', 'placeholder_id_non_existent');
        if (error) throw error;
      } catch (err) {
        console.error('Failed to clear attempts from Supabase:', err);
      }
    }
  };

  if (!isAuthorized) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-full bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl shadow-zinc-100/50 space-y-6 animate-slideUp">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 bg-yellow-50 text-yellow-600 rounded-2xl border border-yellow-100">
              <Lock className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-black text-zinc-900 tracking-tight">Admin Access Required</h2>
              <p className="text-zinc-500 text-xs">
                Enter the password to view participant metrics, scores, and manage data.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="admin-password" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (authError) setAuthError('');
                }}
                placeholder="Enter admin password"
                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                autoFocus
              />
              {authError && (
                <div className="flex items-center gap-1.5 text-red-650 text-[11px] font-semibold mt-1 animate-fadeIn">
                  <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{authError}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Unlock Dashboard
              </button>
              <button
                type="button"
                onClick={() => setView('gallery')}
                className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs py-3 rounded-xl transition-all duration-200 text-center"
              >
                Cancel
              </button>
            </div>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <button 
            onClick={() => setView('gallery')}
            className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 font-semibold text-xs transition-colors mb-2 group"
          >
            <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Gallery
          </button>
          <h1 className="text-3xl font-black text-zinc-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-zinc-500 text-xs mt-1">
            Monitor and manage quiz performance, attempts, and scores.
          </p>
        </div>

        {/* Clear all action */}
        {attempts.length > 0 && (
          <div className="relative">
            {!showClearConfirm ? (
              <button 
                onClick={() => setShowClearConfirm(true)}
                className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear All Records
              </button>
            ) : (
              <div className="bg-white border border-red-200 p-3.5 rounded-xl shadow-xl absolute right-0 top-0 sm:top-12 z-50 w-64 flex flex-col gap-3 border-l-4 border-l-red-500 animate-slideUp">
                <div className="flex gap-2 text-red-800">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-extrabold">Are you absolutely sure?</span>
                    <span className="text-[10px] text-zinc-500 leading-normal">This will permanently delete all {attempts.length} attempts.</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={clearAllAttempts}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    Yes, Clear
                  </button>
                  <button 
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Analytics widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Widget 1 */}
        <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-zinc-50 text-zinc-600 rounded-xl border border-zinc-100">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-2xl font-black text-zinc-900">{totalAttempts}</span>
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Total Attempts</span>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-zinc-50 text-zinc-600 rounded-xl border border-zinc-100">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-2xl font-black text-zinc-900">{uniqueNames}</span>
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Unique Learners</span>
          </div>
        </div>

        {/* Widget 3 */}
        <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100/50">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-2xl font-black text-emerald-700">{averageAccuracy}%</span>
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Avg. Accuracy</span>
          </div>
        </div>

        {/* Widget 4 */}
        <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl border border-yellow-100/50">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-2xl font-black text-yellow-600">{highestScore}%</span>
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">High Accuracy</span>
          </div>
        </div>

      </div>

      {/* Filter and search control bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white border border-zinc-200 p-4 rounded-2xl shadow-sm">
        
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search participant name, quiz type..."
            className="w-full bg-white border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex bg-zinc-100 p-1 rounded-xl border border-zinc-200 w-full md:w-auto justify-center">
          {(['All', 'Mixed', 'Practice'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterType === type 
                  ? 'bg-white text-zinc-900 shadow-sm' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              {type === 'All' ? 'All Formats' : type === 'Mixed' ? 'Mixed Quiz Only' : 'Practice Only'}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard Table block */}
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
        {filteredAttempts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <th className="px-6 py-4">Participant</th>
                  <th className="px-6 py-4">Attempt #</th>
                  <th className="px-6 py-4">Format / Frame</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4 text-center">Accuracy</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-xs">
                {filteredAttempts.map((attempt) => {
                  
                  // Score color class
                  let badgeClass = 'bg-red-50 text-red-700 border-red-100';
                  if (attempt.accuracy >= 80) {
                    badgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-100';
                  } else if (attempt.accuracy >= 50) {
                    badgeClass = 'bg-yellow-50 text-yellow-750 border-yellow-100';
                  }

                  return (
                    <tr key={attempt.id} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-zinc-900 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-extrabold text-[10px]">
                          {attempt.name.charAt(0).toUpperCase()}
                        </div>
                        {attempt.name}
                      </td>
                      <td className="px-6 py-4 text-zinc-500 font-semibold">
                        Attempt {attempt.attemptNumber}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 font-medium">
                        {attempt.quizType}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 font-bold">
                        {attempt.score} / {attempt.totalQuestions}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2.5 py-1 rounded-lg border font-extrabold text-[10px] ${badgeClass}`}>
                          {attempt.accuracy}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-zinc-500 flex items-center gap-1.5 mt-1.5 border-none">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {attempt.timestamp}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteAttempt(attempt.id)}
                          className="p-1.5 text-zinc-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all"
                          title="Delete entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 text-zinc-400 font-semibold flex flex-col justify-center items-center gap-2">
            <Trophy className="w-10 h-10 text-zinc-300 stroke-[1.5]" />
            No records found. Complete a quiz to view scores here.
          </div>
        )}
      </div>

    </div>
  );
};
export default AdminPanel;
