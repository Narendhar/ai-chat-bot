# 💬 AI Chat Application

## 📚 Overview
This project is a real-time AI-powered chat application that allows users to interact with an AI assistant. It supports streaming responses, conversation history, and theming using **Material-UI (MUI)**.

## 🚀 Features
✅ **Real-time AI responses** with streaming  
✅ **Abort ongoing requests** when sending a new message  
✅ **Light/Dark mode** support with MUI theming  
✅ **Error handling** for API failures  
✅ **Desktop/Mobile Responsiveness** to adapt in all devices  
✅ **Local storage** to persist conversation history  

---

## 🔧 Installation
To set up the project locally, follow these steps:

```bash
git clone https://github.com/your-repo/chat-app.git
cd chat-app
npm install
```

---

## ▶️ How to Run the Application
Run the project in development mode:

```bash
npm run dev
```

For production mode:

```bash
npm run build
npm start
```

---

## 🌎 Environment Variables
Create a `.env` file in the root directory and add the following values:

```env
VITE_API_KEY=your-api-key
VITE_API_URL=https://your-api-endpoint.com
```

> **Note:** Replace `your-api-key` and `your-api-endpoint.com` with actual values.

---

## 📂 Folder Structure
```
/src
  ├── components/    # Chat UI components
  ├── pages/         # Main chat page
  ├── styles/        # MUI styling
  ├── utils/         # Helper functions (e.g., time formatting)
  ├── App.tsx        # Main entry file
```

---

## ⚙️ API Endpoints
| Method | Endpoint | Description |
|--------|---------|------------|
| GET    | `/stream?prompt=` | Streams AI responses |

---

## 🛠️ Handling Streaming & Aborts
- **Streaming responses** are processed line-by-line for real-time updates.
- **AbortController** is used to cancel previous requests when a new message is sent.
- **Error handling** displays messages when API calls fail.

---

## 🐞 Common Errors & Solutions
| Error | Solution |
|-------|----------|
| `Streaming error: DOMException: The operation was aborted.` | Ensure previous requests are properly aborted. |
| `Failed to fetch API response` | Check network connectivity or API key. |

---

## 💜 License
This project is licensed under the MIT License.

## 🤝 Contributing
1. Fork the project
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to GitHub (`git push origin feature-name`)
5. Open a **Pull Request**

---

🚀 **Enjoy building your AI chat experience!**  

