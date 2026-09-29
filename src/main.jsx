import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { MotionConfig } from "motion/react"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* "user" skips movement animations for people with reduce-motion turned on */}
    <MotionConfig reducedMotion="user">
    <App />
    </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)
