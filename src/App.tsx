import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home.tsx'
import WhoWeAre from './pages/WhoWeAre/WhoWeAre.tsx'
import Events from './pages/Events/Events.tsx'
import Team from './pages/Team/Team.tsx'
import TradeItForward from './pages/TradeItForward/TradeItForward.tsx'
import Contact from './pages/Contact/Contact.tsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Shell() {
  const { pathname } = useLocation()
  return (
    <div className="app-shell">
      <ScrollToTop />
      {pathname !== '/' && <Navbar />}
      <main className="app-content">
        <div key={pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/team" element={<Team />} />
            <Route path="/trade-it-forward" element={<TradeItForward />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} PlayItForward &mdash; A non-profit
          organization. All proceeds go toward funding meals for children in need.
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}

export default App
