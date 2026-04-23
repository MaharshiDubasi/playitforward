import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.tsx'
import './Events.css'

interface Event {
  title: string
  date: string
  location: string
  locationLink?: string
  format: string
  cost: string
  description: string
  details: string
  link?: string
  pageLink?: string
}

const upcomingEvents: Event[] = [
  {
    title: 'Cube for a Cause',
    date: 'May 24, 2026',
    location: 'Final Boss Games, Springdale',
    format: 'Magic, Pokemon, Riftbound, and more!',
    cost: '$20',
    description:
      'All-day Cube and lunch',
    details:
      'Players can expect multiple rounds of organized play, community raffle support, and a welcoming event environment focused on raising money for local hunger relief efforts.' +
      ' Pizza will be provided for lunch!',
  },
  {
    title: 'cEDH: Win a Tropical Island',
    date: 'June 13, 2026',
    location: 'Gear Gaming - Fayetteville',
    format: 'Competitive MTG Commander Tournament',
    cost: '$40',
    description:
      'A competitive event for Magic: The Gathering players with a grand prize of a coveted Tropical Island card.',
    details:
      'The tournament will follow a cEDH format, attracting top-tier players from the region. In addition to the main event, there will be a raffle and opportunities for spectators to learn about competitive Magic and support our cause.',
    link:
     'https://topdeck.gg/event/castaway-classic-win-a-tropical-island'
  },
  {
    title: 'Stuff the Truck',
    date: 'June 13, 2026',
    location: 'Gear Gaming - Fayetteville',
    format: 'Community Fundraiser',
    cost: 'Free',
    description:
      'Food drive for local hunger relief organizations and schools.',
    details:
      'Attendees are encouraged to bring non-perishable food items to donate, ' +
      'with a goal of filling a truck to support local food banks and community organizations.',
  },
  {
    title: 'Play It Forward at Naturals Stadium!',
    date: 'June 19, 2026',
    location: 'Naturals Ball Park',
    format: 'Baseball Game Fundraiser',
    cost: 'TBD',
    description:
      'A special night where Play It Forward will be the centerpiece of a night of community support and community building.',
    details:
      'The night will feature a variety of events, including a game of baseball and a community-led fundraiser for hunger relief efforts.',
  },
  {
    title: 'Trade It Forward',
    date: 'August 8, 2026',
    location: 'Jones Center, Springdale',
    locationLink: 'https://maps.app.goo.gl/L7HFYWVi6vJ4rJSm6',
    format: 'Trade Show',
    cost: 'Free',
    description:
      'A public-facing event where players can showcase their trading cards and exchange ' +
      'with vendors and other players in a fun and interactive environment.',
    details:
      'A free trade show with vendors where all proceeds will go to fight food insecurity in Northwest Arkansas.' +
      ' There will door prizes, raffles, and surprise events!',
    pageLink: '/trade-it-forward'
  }
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
                    <span>Location: {event.location}</span>
                    {/*<span>{event.format}</span>*/}
                    <span>Entry: {event.cost}</span>
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
                <a href={selectedEvent.locationLink}>{selectedEvent.location}</a>
              </div>
              <div className="event-card-detail-group">
                <span className="event-card-detail-label">Cost</span>
                <p>{selectedEvent.cost}</p>
              </div>
              <div className="event-card-detail-group">
                <span className="event-card-detail-label">Format</span>
                <p>{selectedEvent.format}</p>
              </div>
              {selectedEvent.link &&
                <div className="event-card-detail-group">
                  <span className="event-card-detail-label">Link</span>
                  <a href={selectedEvent.link}>{selectedEvent.link}</a>
                </div>
              }
              {selectedEvent.pageLink &&
                <div className="event-card-detail-group">
                  <span className="event-card-detail-label">Page</span>
                  <Link to={selectedEvent.pageLink}>Visit Event Page</Link>
                </div>
              }
            </div>
          </section>
        )}
      </section>
    </main>
  )
}
