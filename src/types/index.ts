export type UseCase = 'writing' | 'coding' | 'research' | 'marketing' | 'other';
export type Tone = 'formal' | 'casual' | 'step-by-step' | 'witty';
export type OutputFormat = 'text' | 'bullet-points' | 'table' | 'json';

export interface PromptFormData {
  useCase: UseCase;
  role: string;
  task: string;
  tone: Tone;
  outputFormat: OutputFormat;
  context?: string;
  systemMessage?: string;
}

export interface SavedPrompt extends PromptFormData {
  id: string;
  name: string;
  createdAt: number;
}

export interface PromptTemplate {
  id: string;
  category: string;
  name: string;
  description: string;
  icon: string;
  template: PromptFormData;
}