import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { feedURL, swineURL } from './utils/constants'
import './styles/App.css'

import { Dashboard } from './components/Dashboard'
import { Feeding } from './components/Feeding'
import { Sales } from './components/Sales'
import { Swine } from './components/Swine'
import { Sidebar } from './components/Sidebar'


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${swineURL}`).then((response) => {
      setData(response.data.payload)
    })
  }, [])
  const { swines, feeds } = data

  return (
    <section className="App">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard swine_data={swines} feed_data={feeds} />} />
          <Route path="/swine" element={<Swine />} />
          <Route path="/feeding" element={<Feeding swine_data={swines} feed_data={feeds} />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
