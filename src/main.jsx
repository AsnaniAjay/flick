import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Check if we're in the browser environment
if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root')
  
  if (rootElement.hasChildNodes()) {
    // If server has pre-rendered, use hydrateRoot
    hydrateRoot(
      rootElement,
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    )
  } else {
    // Fallback to client-side rendering if no SSR content
    createRoot(rootElement).render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    )
  }
}

// Export the App component for server-side rendering
export default App