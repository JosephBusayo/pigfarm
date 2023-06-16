import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './styles/App.css'

import { Dashboard } from './components/Dashboard'
import { Feeding } from './components/Feeding'
import { Sales } from './components/Sales'
import { Swine } from './components/Swine'
import { Sidebar } from './components/Sidebar'


function App() {

  return (
    <>
    <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/swine" element={<Swine />} />
        <Route path="/feeding" element={<Feeding />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>

    </>
  )
}

export default App
