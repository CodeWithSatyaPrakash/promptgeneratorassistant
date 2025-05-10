import { PromptFormData } from '../types';

export function generatePrompt(data: PromptFormData): string {
  const { useCase, role, task, tone, outputFormat, context, systemMessage } = data;
  
  // Format the role with proper capitalization and article
  const formattedRole = role ? formatRole(role) : 'AI assistant';
  
  // Build the prompt
  let prompt = `You are ${formattedRole}.\n\n`;
  
  prompt += `Your task is to ${formatTone(tone)} ${formatTask(task, useCase)}.\n\n`;
  
  if (context) {
    prompt += `${formatContext(context)}\n\n`;
  }
  
  // Add focus area based on use case
  prompt += formatUseCaseGuidance(useCase, task);
  
  // Add system instructions if provided
  if (systemMessage) {
    prompt += `\nSystem Instructions: ${systemMessage}\n\n`;
  }
  
  // Add final tone and format instructions
  prompt += `\nTone: ${formatToneDescription(tone)}  
Output Format: ${formatOutputDescription(outputFormat)}`;
  
  return prompt;
}

function formatRole(role: string): string {
  const lowercaseRole = role.toLowerCase().trim();
  
  // Add an appropriate article
  const startsWithVowel = /^[aeiou]/i.test(lowercaseRole);
  const article = startsWithVowel ? 'an' : 'a';
  
  // Check if the role already has an article
  if (lowercaseRole.startsWith('a ') || lowercaseRole.startsWith('an ') || 
      lowercaseRole.startsWith('the ')) {
    return role.trim();
  }
  
  // Add expert if it's a simple role
  if (lowercaseRole.length < 15 && !lowercaseRole.includes('expert') && 
      !lowercaseRole.includes('specialist') && !lowercaseRole.includes('professional')) {
    return `${article} expert ${lowercaseRole}`;
  }
  
  return `${article} ${lowercaseRole}`;
}

function formatTask(task: string, useCase: string): string {
  if (!task) return `provide assistance with ${useCase}`;
  return task.endsWith('.') || task.endsWith('!') || task.endsWith('?') 
    ? task 
    : `${task}`;
}

function formatTone(tone: string): string {
  switch (tone) {
    case 'formal':
      return 'write a formal & professional response on';
    case 'casual':
      return 'write a casual & conversational response about';
    case 'step-by-step':
      return 'provide a detailed step-by-step guide on';
    case 'witty':
      return 'create a witty & engaging response regarding';
    default:
      return 'respond to';
  }
}

function formatContext(context: string): string {
  if (!context) return '';
  return `Context: ${context}`;
}

function formatUseCaseGuidance(useCase: string, task: string): string {
  switch (useCase) {
    case 'writing':
      return `Focus on creating well-structured, engaging content that effectively communicates the topic: "${task}".`;
    case 'coding':
      return `Focus on providing clean, efficient, and well-documented code examples for: "${task}".`;
    case 'research':
      return `Focus on thorough analysis, accurate information, and comprehensive coverage of: "${task}".`;
    case 'marketing':
      return `Focus on persuasive, audience-targeted content that effectively markets: "${task}".`;
    default:
      return `Focus on providing valuable insights and information about: "${task}".`;
  }
}

function formatToneDescription(tone: string): string {
  switch (tone) {
    case 'formal':
      return 'Formal & Professional';
    case 'casual':
      return 'Casual & Conversational';
    case 'step-by-step':
      return 'Detailed & Methodical';
    case 'witty':
      return 'Witty & Engaging';
    default:
      return 'Balanced & Informative';
  }
}

function formatOutputDescription(format: string): string {
  switch (format) {
    case 'text':
      return 'Cohesive paragraphs with clear structure';
    case 'bullet-points':
      return 'Organized bullet points for easy scanning';
    case 'table':
      return 'Information organized in a tabular format where appropriate';
    case 'json':
      return 'Structured JSON format for programmatic use';
    default:
      return 'Clear and well-organized text';
  }
}