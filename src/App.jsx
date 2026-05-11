import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProtectedRoutes from './components/ProtectedRoutes'
import MainLayout from './components/MainLayout'
import DashBoard from './pages/DashBoard'
import JobsLIsting from './pages/JobsLIsting'
import Candidates from './pages/Candidates'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/login' element={<LoginPage />} />

        <Route element={
          <ProtectedRoutes>
            <MainLayout />
          </ProtectedRoutes>
        }>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/jobs' element={<JobsLIsting />} />
          <Route path='/candidates' element={<Candidates />} />

        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default App