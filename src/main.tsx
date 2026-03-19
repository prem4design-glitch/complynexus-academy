import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUpPage from './pages/student/SignUpPage'
import SignInPage from './pages/student/SignInPage'
import PasswordPage from './pages/student/PasswordPage'
import StudentDashboard from './pages/student/StudentDashboard'
import InstitutionDiscoveryPage from './pages/institution-admin/InstitutionDiscoveryPage'
import AdminDashboard from './pages/institution-admin/AdminDashboard'
import CreateInstitutionPage from './pages/institution-admin/CreateInstitutionPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signin/password" element={<PasswordPage />} />
        <Route path="/signin/institution-discovery" element={<InstitutionDiscoveryPage />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/institution/create" element={<CreateInstitutionPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
