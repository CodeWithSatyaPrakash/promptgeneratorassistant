import React from 'react';
import { Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Prompt Generator Assistant
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;