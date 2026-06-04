import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LessonCardView from './components/LessonCardView';
import QuizView from './components/QuizView';
import AdminPanel from './components/AdminPanel';

const AppContent: React.FC = () => {
  const { view } = useGame();

  const renderView = () => {
    switch (view) {
      case 'gallery':
        return <Dashboard />;
      case 'details':
        return <LessonCardView />;
      case 'quiz':
      case 'results':
        return <QuizView />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col selection:bg-yellow-500 selection:text-black">
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {renderView()}
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;
