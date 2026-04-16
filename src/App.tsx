import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import Events from './pages/Events/Events.tsx'
import Team from './pages/Team/Team.tsx'
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
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
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

export default App
