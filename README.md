# 🧠 Prompt Generator Assistant

Optimize your interactions with AI chatbots like ChatGPT, Gemini, and Claude using structured, context-aware prompt generation.

🌐 **Live Demo:** [Prompt Generator Assistant](https://promptgeneratorassistant.netlify.app/)

---

## 📌 Overview

**Prompt Generator Assistant** is an AI-powered utility designed to help users craft high-quality, context-aware prompts for large language models (LLMs). It streamlines your workflow by offering structured, role-based instructions, selectable tones, output formats, and ready-to-use prompt templates for instant productivity.

---

## 🚀 Features

- 🎯 Use-case-based prompt customization (Writing, Development, Research, etc.)
- 🧠 Built-in Prompt Templates for quick generation
- 👤 Role-based instructions (e.g., "Act as a Technical Writer")
- 💬 Tone and style selector (Witty, Professional, Step-by-Step, etc.)
- 📝 Output format selector (Text, Bullet List, Table, etc.)
- 📋 One-click prompt copy functionality
- 💾 Saved prompts with local storage (via custom React Hook)
- 🌓 Light/Dark theme toggle
- ⚡ Fully responsive and accessible UI

---

## 🛠️ Tech Stack

- **Framework:** React + TypeScript  
- **Styling:** Tailwind CSS  
- **State Management:** React Context + Hooks  
- **Data Handling:** TypeScript types and static templates  
- **Deployment:** Netlify  

---

## 📂 Folder Structure

```bash
src/
├── App.tsx                  # Root component with routing and layout
├── index.css                # Global styles
├── index.html               # HTML entry
├── context/
│   └── ThemeContext.tsx     # Theme toggle context (light/dark)
├── hooks/
│   └── useSavedPrompts.ts   # Custom hook for saving prompts to local storage
├── types/
│   └── index.ts             # Global TypeScript interfaces
├── data/
│   └── promptTemplates.ts   # Static prompt templates
├── utils/
│   └── promptGenerator.ts   # Core prompt generation logic
├── components/
│   ├── Header.tsx           # App header
│   ├── ThemeToggle.tsx      # Dark/light theme switcher
│   ├── PromptForm.tsx       # Form to input prompt details
│   ├── PromptOutput.tsx     # Display generated prompt
│   ├── SavedPrompts.tsx     # Manage and view saved prompts
│   └── PromptTemplates.tsx  # Select and apply prebuilt prompt templates
```

---

## 🧩 How the Prompt Builder Works

The app takes user inputs like:

- **Use Case:** Writing, Coding, etc.
- **Role:** Developer, Student, etc.
- **Goal:** What the user wants to achieve
- **Tone:** Witty, Formal, Professional, etc.
- **Format:** Output formatting options

It then dynamically assembles these inputs into a well-structured, optimized prompt using the core logic defined in `utils/promptGenerator.ts`.

---

## 🔖 Prompt Templates

Save time with pre-made prompt blueprints located in `src/data/promptTemplates.ts`.  
Users can apply, edit, and personalize these templates before generating their final prompts.

---

## 📢 Contributing

Contributions, suggestions, and feedback are warmly welcome!  
Feel free to fork the repo, create a branch, and open a pull request.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
