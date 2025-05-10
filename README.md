🧠 Prompt Generator Assistant
Optimize your interactions with AI chatbots like ChatGPT, Gemini, and Claude using structured, context-aware prompt generation.

Link:https://promptgeneratorassistant.netlify.app/

📌 Overview
Prompt Generator Assistant is an AI-powered utility that helps users craft high-quality, context-aware prompts for large language models (LLMs). It’s designed to optimize responses from AI chatbots by providing structured, role-based instructions, tone, format, and now — predefined prompt templates for even faster workflow.

🚀 Features
🎯 Use-case-based prompt customization (e.g., writing, development, research)

🧠 Built-in Prompt Templates for instant generation

👤 Role-based instructions (e.g., "Act as a technical writer")

💬 Tone and style selector (witty, professional, step-by-step, etc.)

📝 Output format selector (text, bullet list, table, etc.)

📋 One-click copy functionality

💾 Saved prompts with local storage (via custom hook)

🌓 Light/Dark theme toggle

⚡ Fully responsive and accessible UI

🛠️ Tech Stack
Framework: React + TypeScript

Styling: Tailwind CSS

State Management: React Context + Hooks

Data Handling: TypeScript types and static templates

Deployment: Netlify

📂 Folder Structure
bash
Copy
Edit
src/
├── App.tsx                      # Root component with routing and layout
├── index.css                    # Global styles
├── index.html                   # HTML entry
├── context/
│   └── ThemeContext.tsx         # Theme toggle context (light/dark)
├── hooks/
│   └── useSavedPrompts.ts       # Custom hook for saving prompts to local storage
├── types/
│   └── index.ts                 # Global TypeScript interfaces
├── data/
│   └── promptTemplates.ts       # Static prompt templates
├── utils/
│   └── promptGenerator.ts       # Core prompt generation logic
├── components/
│   ├── Header.tsx               # App header
│   ├── ThemeToggle.tsx          # Dark/light theme switcher
│   ├── PromptForm.tsx           # Form to input prompt details
│   ├── PromptOutput.tsx         # Display generated prompt
│   ├── SavedPrompts.tsx         # Manage and view saved prompts
│   └── PromptTemplates.tsx      # Select and apply prebuilt prompt templates

🧩 How the Prompt Builder Works
The app takes user inputs like:

Use Case: Writing, Coding, etc.

Role: Developer, Student, etc.

Goal: What the user wants to achieve

Tone: Witty, Formal, Professional, etc.

Format: Output formatting options

It dynamically assembles these inputs into a well-structured and optimized prompt using logic defined in utils/promptGenerator.ts.

🔖 Prompt Templates
Save time using pre-made prompt blueprints from src/data/promptTemplates.ts, which users can apply and edit before generating their own versions.
