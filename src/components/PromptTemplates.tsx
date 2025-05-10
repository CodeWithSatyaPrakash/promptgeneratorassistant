import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { promptTemplates } from '../data/promptTemplates';
import { PromptFormData, PromptTemplate } from '../types';

interface PromptTemplatesProps {
  onSelectTemplate: (template: PromptFormData) => void;
}

const PromptTemplates: React.FC<PromptTemplatesProps> = ({ onSelectTemplate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredTemplate, setHoveredTemplate] = useState<PromptTemplate | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(promptTemplates.map(t => t.category)));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Prompt Templates
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
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {promptTemplates
              .filter(template => !selectedCategory || template.category === selectedCategory)
              .map(template => (
                <div
                  key={template.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredTemplate(template)}
                  onMouseLeave={() => setHoveredTemplate(null)}
                >
                  <button
                    onClick={() => onSelectTemplate(template.template)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{template.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {template.name}
                      </span>
                    </div>
                  </button>

                  {hoveredTemplate?.id === template.id && (
                    <div className="absolute z-10 w-64 p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg shadow-lg mt-2 text-sm">
                      {template.description}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PromptTemplates;