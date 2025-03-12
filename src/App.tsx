import { ThemeProviderWrapper } from './theme/ThemeProviderWrapper'
import ChatPage from './pages/ChatPage'

/**
 * App component that serves as the main entry point for the application.
 * It wraps the ChatPage component with a ThemeProviderWrapper to provide
 * theming context to the application.
 * 
 * @returns {JSX.Element} The rendered App component, including the
 * ThemeProviderWrapper and the ChatPage.
 */
function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <ChatPage></ChatPage>
      </ThemeProviderWrapper>
    </>
  );
}

export default App
