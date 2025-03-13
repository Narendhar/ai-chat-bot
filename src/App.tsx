import { ThemeProviderWrapper } from './theme/ThemeProviderWrapper'
import ChatPage from './pages/ChatPage'

/**
 * App component that serves as the main entry point for the application. 
 * @returns {JSX.Element}
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
