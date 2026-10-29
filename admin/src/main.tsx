import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './Admin.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
