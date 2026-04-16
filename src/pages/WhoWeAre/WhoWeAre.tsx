import PageHero from '../../components/PageHero.tsx'
import './WhoWeAre.css'

export default function WhoWeAre() {
  return (
    <main className="whoWeAre">
      <PageHero
        badge="Our Story"
        badgeTone="yellow"
        title="Cards for a Cause"
        description="Play It Forward: NWA was born from a simple idea — the card game table brings people together, and when people come together with intention, they can change lives. We harness the passion of competitive card gaming to fight food insecurity in Northwest Arkansas, one card at a time."
      />

      <section className="statements-section">
        <div className="statement-card mission">
          <h2>Mission Statement</h2>
          <p>
            To bring communities together through gaming events that inspire generosity,
            support local causes, and empower players to make a meaningful impact
            in supporting local families and children and solving local food insecurity.
          </p>
        </div>
        <div className="statement-card vision">
          <h2>Vision Statement</h2>
          <p>
            A world where every game played helps bring stronger, more connected communities
            and ensures that passion for gaming becomes a force for good
          </p>
        </div>
      </section>
    </main>
  )
}
