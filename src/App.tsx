import React, { useState, useCallback } from 'react';
import { PromptFormData, SavedPrompt } from './types';
import { generatePrompt } from './utils/promptGenerator';
import { useSavedPrompts } from './hooks/useSavedPrompts';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import PromptOutput from './components/PromptOutput';
import SavedPrompts from './components/SavedPrompts';
import PromptTemplates from './components/PromptTemplates';

function App() {
  const [formData, setFormData] = useState<PromptFormData>({
    useCase: 'writing',
    role: '',
    task: '',
    tone: 'formal',
    outputFormat: 'text',
  });
  
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const { savedPrompts, savePrompt, deletePrompt } = useSavedPrompts();

  const handleFormChange = useCallback((data: PromptFormData) => {
    setFormData(data);
    // Only generate prompt if both task and role are present
    if (data.task.trim() && data.role.trim()) {
      const prompt = generatePrompt(data);
      setGeneratedPrompt(prompt);
    }
  }, []); // Empty dependency array since we don't use any external values

  const handleSavePrompt = (name: string) => {
    savePrompt(formData, name);
  };

  const handleLoadPrompt = (prompt: SavedPrompt) => {
    setFormData({
      useCase: prompt.useCase,
      role: prompt.role,
      task: prompt.task,
      tone: prompt.tone,
      outputFormat: prompt.outputFormat,
      context: prompt.context,
      systemMessage: prompt.systemMessage,
    });
    setGeneratedPrompt(generatePrompt(prompt));
  };

  const handleSelectTemplate = (template: PromptFormData) => {
    setFormData(template);
    setGeneratedPrompt(generatePrompt(template));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <SavedPrompts 
              savedPrompts={savedPrompts} 
              onDeletePrompt={deletePrompt} 
              onLoadPrompt={handleLoadPrompt}
            />
            <PromptTemplates onSelectTemplate={handleSelectTemplate} />
            <PromptForm 
              onFormChange={handleFormChange} 
              initialData={formData}
            />
            {generatedPrompt && (
              <PromptOutput 
                generatedPrompt={generatedPrompt} 
                formData={formData}
                onSavePrompt={handleSavePrompt}
              />
            )}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;