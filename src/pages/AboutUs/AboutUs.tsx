import PageHero from '../../components/PageHero.tsx'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <main className="about">
      <PageHero
        badge="Our Story"
        badgeTone="yellow"
        title="Cards for a Cause"
        description="Play It Forward: NWA was born from a simple idea — the card game table brings people together, and when people come together with intention, they can change lives. We harness the passion of competitive card gaming to fight food insecurity in Northwest Arkansas, one card at a time."
        className="about-hero"
      />

      <section className="statements-section">
        <div className="statement-card mission">
          <h2>Mission Statement</h2>
          <p>
            Play It Forward: NWA mobilizes the community to fight food insecurity
            in Northwest Arkansas. Through organized gaming events, partnerships
            with local businesses, and community-driven fundraising, we transform
            a shared passion for games into meaningful support for local families
            in need.
          </p>
        </div>
        <div className="statement-card vision">
          <h2>Vision Statement</h2>
          <p>
            We envision a Northwest Arkansas where community, generosity, and
            shared passions come together to eliminate food insecurity. By
            harnessing the power of gaming to unite people, Play It Forward aims
            to build a culture where giving back is part of the game.
          </p>
        </div>
      </section>
    </main>
  )
}
