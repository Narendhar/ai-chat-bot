# AI Chat Bot Application

## Overview
This project is a real-time AI-powered chat application that allows users to interact with an AI assistant. It supports streaming responses, conversation history, and theming using **Material-UI (MUI)**.

## Features
**Real-time AI responses** with streaming  
**Abort ongoing requests** when sending a new message  
**Light/Dark mode** support with MUI theming  
**Error handling** for API failures  
**Desktop/Mobile Responsiveness** to adapt in all devices  
**Local storage** to persist conversation history  

---

## Installation
To set up the project locally, follow these steps:

```bash
git clone https://github.com/Narendhar/ai-chat-bot.git
cd chat-app
npm install
```

---

## How to Run the Application
Run the project in development mode:

```bash
npm run dev
```

---

## Environment Variables
Create a `.env` file in the root directory by referring env.example file and add the following values:

```env
VITE_API_KEY=your-api-key
VITE_API_URL=https://your-api-endpoint.com
```
---

## Folder Structure
```
/src
  ├── components/    # Chat UI components
  ├── pages/         # Main chat page
  ├── styles/        # MUI styling
  ├── utils/         # Helper functions (e.g., time formatting)
  ├── App.tsx        # Main entry file
```

---

