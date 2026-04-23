import PageHero from '../../components/PageHero.tsx'
import './TradeItForward.css'

export default function TradeItForward() {
  return (
    <main className="trade-it-forward-page">
      <PageHero
        badge="Special Event"
        badgeTone="yellow"
        title="Trade It Forward"
        description="A free event where everyone can showcase their collections and exchange with vendors
        and other players in a fun and interactive environment. There will be surprise events, door prizes,
        raffles, and a silent acution to support local schools!"
        className="trade-it-forward-hero"
      />
      <section className="trade-it-forward-announcements">
        <div className="announcement-card">
          <h1>📣</h1>
          <p>
            Vendor & sponsorship applications will be live on Friday May 1st, 2026.
          </p>
        </div>
      </section>

      <section className="trade-it-forward-highlights">
        <div className="highlights-container">
          <div className="highlight-item">
            <span className="highlight-icon">🎴</span>
            <h3>Card Trading</h3>
            <p>Exchange your favorite TCG cards with players and collectors.</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🏪</span>
            <h3>Vendor Showcases</h3>
            <p>Browse unique collections from local and regional vendors.</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🎟️</span>
            <h3>Prizes</h3>
            <p>Win rare cards, merchandise, a silent auction, door prizes, raffles, and more!</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">!</span>
            <h3>Surprise Events</h3>
            <p>TBA</p>
          </div>
        </div>
      </section>

      <section className="trade-it-forward-content">
        <div className="trade-it-forward-grid">
          <div className="trade-it-forward-section details">
            <h2>Event Details</h2>
            <div className="event-info-grid">
              <div className="event-info-item">
                <span className="info-label">Date</span>
                <p>August 8, 2026</p>
              </div>
              <div className="event-info-item">
                <span className="info-label">Location</span>
                <a href={"https://maps.app.goo.gl/L7HFYWVi6vJ4rJSm6"}>Jones Center, Springdale</a>
              </div>
              <div className="event-info-item">
                <span className="info-label">Format</span>
                <p>Trade Show</p>
              </div>
              <div className="event-info-item">
                <span className="info-label">Cost</span>
                <p>Free Entry</p>
              </div>
            </div>
            <p className="event-details-text">
              Join us for a day of community and cards! Whether you're a seasoned collector or just starting out, 
              Trade It Forward offers something for everyone.
            </p>
          </div>

          <div className="trade-it-forward-section impact">
            <h2>Our Impact</h2>
            <div className="impact-content">
              <span className="impact-icon">🍲</span>
              <div className="impact-details">
                <p className="impact-tagline">proceeds go to fight food insecurity</p>
                <p className="impact-text">
                  By participating in Trade It Forward, you're not just trading cards—you're helping provide 
                  nutritious meals to children facing food insecurity in Northwest Arkansas.
                </p>
              </div>
            </div>
            <div className="impact-footer">
              <p>In partnership with local food banks, community centers, and schools.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
