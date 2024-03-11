import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
)
