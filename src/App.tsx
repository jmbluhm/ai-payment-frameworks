import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import UCPPage from './pages/UCPPage'
import ACPPage from './pages/ACPPage'
import ComparePage from './pages/ComparePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ucp" element={<UCPPage />} />
          <Route path="/acp" element={<ACPPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
