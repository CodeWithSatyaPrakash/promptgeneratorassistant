import React, { useState } from 'react';
import { Copy, Check, Save } from 'lucide-react';
import { SavedPrompt, PromptFormData } from '../types';

interface PromptOutputProps {
  generatedPrompt: string;
  formData: PromptFormData;
  onSavePrompt: (name: string) => void;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ 
  generatedPrompt, 
  formData, 
  onSavePrompt 
}) => {
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [promptName, setPromptName] = useState('');

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
  };

  const confirmSave = () => {
    if (promptName.trim()) {
      onSavePrompt(promptName);
      setIsSaving(false);
      setPromptName('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Generated Prompt
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <Check className="h-4 w-4 mr-1" />
            ) : (
              <Copy className="h-4 w-4 mr-1" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
            aria-label="Save prompt"
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </button>
        </div>
      </div>

      {isSaving && (
        <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
          <label htmlFor="promptName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Prompt Name
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="promptName"
              value={promptName}
              onChange={(e) => setPromptName(e.target.value)}
              placeholder="Enter a name for this prompt"
              className="flex-1 px-3 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
              autoFocus
            />
            <button
              onClick={confirmSave}
              className="px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsSaving(false);
                setPromptName('');
              }}
              className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 font-mono text-sm overflow-auto max-h-[400px]">
          {generatedPrompt}
        </pre>
      </div>
    </div>
  );
};

export default PromptOutput;