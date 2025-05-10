import React, { useState, useEffect, useCallback } from 'react';
import { PromptFormData, UseCase, Tone, OutputFormat } from '../types';

interface PromptFormProps {
  onFormChange: (data: PromptFormData) => void;
  initialData?: PromptFormData;
}

const useCaseOptions: { value: UseCase; label: string }[] = [
  { value: 'writing', label: 'Writing' },
  { value: 'coding', label: 'Coding' },
  { value: 'research', label: 'Research' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'other', label: 'Other' }
];

const toneOptions: { value: Tone; label: string }[] = [
  { value: 'formal', label: 'Formal' },
  { value: 'casual', label: 'Casual' },
  { value: 'step-by-step', label: 'Step-by-step' },
  { value: 'witty', label: 'Witty' }
];

const outputFormatOptions: { value: OutputFormat; label: string }[] = [
  { value: 'text', label: 'Text' },
  { value: 'bullet-points', label: 'Bullet Points' },
  { value: 'table', label: 'Table' },
  { value: 'json', label: 'JSON' }
];

const PromptForm: React.FC<PromptFormProps> = ({ onFormChange, initialData }) => {
  const [formData, setFormData] = useState<PromptFormData>({
    useCase: 'writing',
    role: '',
    task: '',
    tone: 'formal',
    outputFormat: 'text',
    context: '',
    systemMessage: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const debouncedFormChange = useCallback(
    debounce((data: PromptFormData) => {
      onFormChange(data);
    }, 500),
    [onFormChange]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    debouncedFormChange(newFormData);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Craft Your Prompt
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Use Case
            </label>
            <select
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
            >
              {useCaseOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              AI Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="e.g., Senior Developer, Marketing Expert"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="task" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Task or Goal
          </label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="e.g., Write a blog post about AI tools"
            value={formData.task}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tone / Style
            </label>
            <select
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
            >
              {toneOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="outputFormat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Output Format
            </label>
            <select
              id="outputFormat"
              name="outputFormat"
              value={formData.outputFormat}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
            >
              {outputFormatOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="context" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Context (Optional)
          </label>
          <textarea
            id="context"
            name="context"
            rows={2}
            placeholder="e.g., This is for a university blog about ethical AI"
            value={formData.context || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="systemMessage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            System Message (Optional)
          </label>
          <textarea
            id="systemMessage"
            name="systemMessage"
            rows={2}
            placeholder="e.g., Avoid speculation. Use real-world examples and cite sources if available."
            value={formData.systemMessage || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
};

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default PromptForm;