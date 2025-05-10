import { useState, useEffect } from 'react';
import { SavedPrompt, PromptFormData } from '../types';

export function useSavedPrompts() {
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>(() => {
    const saved = localStorage.getItem('savedPrompts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
  }, [savedPrompts]);

  const savePrompt = (formData: PromptFormData, name: string) => {
    const newPrompt: SavedPrompt = {
      ...formData,
      id: crypto.randomUUID(),
      name,
      createdAt: Date.now(),
    };
    
    setSavedPrompts(prev => [newPrompt, ...prev]);
    return newPrompt;
  };

  const deletePrompt = (id: string) => {
    setSavedPrompts(prev => prev.filter(prompt => prompt.id !== id));
  };

  return { savedPrompts, savePrompt, deletePrompt };
}