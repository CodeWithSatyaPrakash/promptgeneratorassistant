import { PromptTemplate } from '../types';

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'blog-writing',
    category: 'Writing',
    name: 'Blog Post Writer',
    description: 'Generate engaging blog posts with proper structure and SEO optimization',
    icon: '✍️',
    template: {
      useCase: 'writing',
      role: 'professional content writer and SEO specialist',
      task: 'Write an engaging and SEO-optimized blog post',
      tone: 'casual',
      outputFormat: 'text',
      context: 'This blog post should include proper headings, meta description, and keywords',
      systemMessage: 'Include an engaging introduction, clear sections with headings, and a strong conclusion. Optimize for both readability and search engines.'
    }
  },
  {
    id: 'resume-review',
    category: 'Writing',
    name: 'Resume Reviewer',
    description: 'Professional resume analysis with actionable feedback',
    icon: '📄',
    template: {
      useCase: 'writing',
      role: 'professional resume writer and career coach',
      task: 'Review and provide detailed feedback on a resume',
      tone: 'formal',
      outputFormat: 'bullet-points',
      context: 'Focus on both content and formatting improvements',
      systemMessage: 'Analyze the resume for clarity, impact, and professional presentation. Provide specific recommendations for improvement.'
    }
  },
  {
    id: 'code-debug',
    category: 'Coding',
    name: 'Code Debugger',
    description: 'Systematic debugging approach for code issues',
    icon: '🧪',
    template: {
      useCase: 'coding',
      role: 'senior software developer and debugging expert',
      task: 'Debug and fix code issues',
      tone: 'step-by-step',
      outputFormat: 'text',
      context: 'Provide a systematic approach to identifying and fixing the bug',
      systemMessage: 'First analyze the error message or unexpected behavior, then provide step-by-step debugging process and solution.'
    }
  },
  {
    id: 'image-generation',
    category: 'Creative',
    name: 'Image Generator',
    description: 'Detailed prompts for AI image generation tools',
    icon: '🎨',
    template: {
      useCase: 'other',
      role: 'visual art director and prompt engineering specialist',
      task: 'Create detailed image generation prompts',
      tone: 'step-by-step',
      outputFormat: 'text',
      context: 'For use with AI image generation tools like DALL·E or Midjourney',
      systemMessage: 'Include specific details about style, composition, lighting, and mood. Use appropriate keywords that work well with image generation AI.'
    }
  },
  {
    id: 'interview-practice',
    category: 'Roleplay',
    name: 'Interview Practice',
    description: 'Simulate job interviews with realistic scenarios',
    icon: '🎭',
    template: {
      useCase: 'other',
      role: 'experienced hiring manager and interview coach',
      task: 'Conduct a realistic job interview simulation',
      tone: 'formal',
      outputFormat: 'text',
      context: 'Simulate a professional job interview with relevant questions and feedback',
      systemMessage: 'Ask industry-relevant questions, provide constructive feedback on responses, and suggest improvements.'
    }
  }
];