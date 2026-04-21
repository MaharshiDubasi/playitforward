import { Link } from 'react-router-dom'
import './Home.css'
import PIFLogo_WhiteBG from "../../images/logo/PIFLogo_WhiteBG.png";


export default function Home() {
  return (
    <main className="home">
      {/* Main */}
      <section className="main">
        <div className="main-title">
          <div className="main-badge">Non-Profit</div>
          <img src={PIFLogo_WhiteBG} alt="PlayItForward" className="home-logo" />
          <h2>All proceeds go to help fight local food insecurity</h2>
        </div>
        <div className="content">
          <Link to="/whoWeAre" className="content-button">Who We Are</Link>
          <Link to="/team" className="content-button">Meet The Team</Link>
          <Link to="/events" className="content-button">Events</Link>
          <Link to="/trade-it-forward" className="content-button">Trade It Forward</Link>
          {/*<Link to="/about" className="content-button primary">Donate</Link>*/} {/* TODO: Re-enable this once the donate page is up */}
        </div>
      </section>
    </main>
  )
}
