// import './App.css'

import { ThemeProviderWrapper } from './theme/ThemeProviderWrapper'
import ChatPage from './pages/ChatPage'


function App() {

  return (
    <>
      <ThemeProviderWrapper>
        <ChatPage></ChatPage>
      </ThemeProviderWrapper>
    </>
  )
}

export default App
