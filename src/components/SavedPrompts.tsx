import React, { useState } from 'react';
import { Trash2, Edit, ChevronDown, ChevronUp } from 'lucide-react';
import { SavedPrompt } from '../types';

interface SavedPromptsProps {
  savedPrompts: SavedPrompt[];
  onDeletePrompt: (id: string) => void;
  onLoadPrompt: (prompt: SavedPrompt) => void;
}

const SavedPrompts: React.FC<SavedPromptsProps> = ({
  savedPrompts,
  onDeletePrompt,
  onLoadPrompt,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (savedPrompts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Saved Prompts ({savedPrompts.length})
        </h2>
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-3 max-h-[300px] overflow-y-auto">
          {savedPrompts.map((prompt) => (
            <div 
              key={prompt.id}
              className="border border-gray-200 dark:border-gray-700 rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {prompt.name}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onLoadPrompt(prompt)}
                    className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200"
                    aria-label="Load prompt"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDeletePrompt(prompt.id)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                    aria-label="Delete prompt"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                {prompt.task}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {prompt.useCase}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  {prompt.tone}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPrompts;