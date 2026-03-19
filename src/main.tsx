import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DesignSystem from './DesignSystem.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignSystem />
  </StrictMode>,
)
