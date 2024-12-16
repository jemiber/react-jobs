//Entry point
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
StrictMode is a wrapper component that checks for potential problems
in the app. It will check for things like deprecated
and unsafe life cycle methods
*/