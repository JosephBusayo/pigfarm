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
  
  let total_corn = 0
  let total_grain = 0

  if (feeds !== undefined) {
    feeds.forEach((item) => {
      if (item.type.toLowerCase() === "corn based") {
        total_corn += item.size
      } else {
        total_grain += item.size
      }

    })
  }
  return (
    <section className="App">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard swine_data={swines} total_corn={total_corn} total_grain={total_grain} />} />
          <Route path="/swine" element={<Swine />} />
          <Route path="/feeding" element={<Feeding total_corn={total_corn} total_grain={total_grain} feed_data={feeds}/>} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
