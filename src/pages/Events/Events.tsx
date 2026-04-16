import { useEffect, useRef, useState } from 'react'
import PageHero from '../../components/PageHero.tsx'
import './Events.css'

const upcomingEvents = [
  {
    title: 'Spring Charity Tournament',
    date: 'May 18, 2026',
    location: 'Final Boss Games, Springdale',
    format: 'Trading Card Tournament',
    description:
      'A community tournament built around friendly competition, raffle prizes, and direct fundraising for local families facing food insecurity.',
    details:
      'Players can expect multiple rounds of organized play, community raffle support, and a welcoming event environment focused on raising money for local hunger relief efforts.',
  },
  {
    title: 'Board Game Night for Good',
    date: 'June 7, 2026',
    location: 'Fayetteville Public Library',
    format: 'Open Play Community Night',
    description:
      'Bring your favorite tabletop games, meet new people, and help turn a casual night of play into practical support for Northwest Arkansas neighbors.',
    details:
      'This event is designed as a low-barrier community meetup where families, students, and hobby groups can drop in, play together, and contribute to a broader fundraising push.',
  },
  {
    title: 'Summer Donation Drive',
    date: 'July 12, 2026',
    location: 'Bentonville Town Square',
    format: 'Community Fundraiser',
    description:
      'A public-facing event focused on collecting pantry support, spotlighting partner businesses, and growing awareness around hunger in the region.',
    details:
      'Alongside donations, the drive will feature partner booths, event volunteers, and opportunities for local businesses to contribute product, sponsorship, or community visibility.',
  },
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof upcomingEvents)[number] | null>(null)
  const detailPanelRef = useRef<HTMLElement | null>(null)

  const toggleEvent = (eventData: (typeof upcomingEvents)[number]) => {
    setSelectedEvent((current) => (current?.title === eventData.title ? null : eventData))
  }

  useEffect(() => {
    if (!selectedEvent || !detailPanelRef.current) return

    detailPanelRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [selectedEvent])

  return (
    <main className="events-page">
      <PageHero
        badge="Our Events"
        title="Play Together. Give Back."
        description="Every Play It Forward event is designed to turn shared hobbies into real community support through tournaments, public meetups, and fundraising nights across Northwest Arkansas."
      />

      <section className="events-section">
        <div className="events-section-header">
          <span className="events-kicker">Upcoming</span>
          <h2>What we are planning next</h2>
          <p>
            A flexible lineup of game-centered events that bring people
            together and direct proceeds toward hunger relief.
          </p>
        </div>

        <div className="events-grid">
          {upcomingEvents.map((event) => {
            const isSelected = selectedEvent?.title === event.title

            return (
              <article
                className={`event-card${isSelected ? ' event-card--selected' : ''}`}
                key={event.title}
              >
                <button
                  type="button"
                  className="event-card-trigger"
                  onClick={() => toggleEvent(event)}
                  aria-expanded={isSelected}
                >
                  <div className="event-card-date">{event.date}</div>
                  <h3>{event.title}</h3>
                  <div className="event-card-meta">
                    <span>{event.location}</span>
                    <span>{event.format}</span>
                  </div>
                  <p>{event.description}</p>
                  <span className="event-card-action">
                    {isSelected ? 'Hide details' : 'View details'}
                  </span>
                </button>
              </article>
            )
          })}
        </div>

        {selectedEvent && (
          <section
            ref={detailPanelRef}
            className="event-detail-panel"
            aria-labelledby="selected-event-title"
          >
            <div className="event-detail-header">
              <div>
                <div className="event-card-date">{selectedEvent.date}</div>
                <h3 id="selected-event-title">{selectedEvent.title}</h3>
                <p>{selectedEvent.description}</p>
              </div>
              <button
                type="button"
                className="event-detail-close"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>

            <div className="event-detail-grid">
              <div className="event-card-detail-group">
                <span className="event-card-detail-label">What it is</span>
                <p>{selectedEvent.details}</p>
              </div>
              <div className="event-card-detail-group">
                <span className="event-card-detail-label">When</span>
                <p>{selectedEvent.date}</p>
              </div>
              <div className="event-card-detail-group">
                <span className="event-card-detail-label">Where</span>
                <p>{selectedEvent.location}</p>
              </div>
              <div className="event-card-detail-group">
                <span className="event-card-detail-label">Format</span>
                <p>{selectedEvent.format}</p>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  )
}
