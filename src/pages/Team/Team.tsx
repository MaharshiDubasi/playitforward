import { useState } from 'react'
import PageHero from '../../components/PageHero.tsx'
import DrakeImg from '../../images/team/Drake.jpg'
import IsaacImg from '../../images/team/Isaac.png'
import TrevorImg from '../../images/team/Trevor.jpeg'
import PabloImg from '../../images/team/Pablo.jpg'
import './Team.css'

const team = [
  {
    name: 'Drake Welch',
    role: 'President & Chairman',
    image: DrakeImg as string,
    bio: 'Drake Welch is the founder of Play It Forward: NWA and a proud member of the Northwest Arkansas community he now calls home. Originally from Texas, Drake moved to Northwest Arkansas for college and quickly fell in love with the area, choosing to stay and invest in the community that has given him so much.\n\nDrake\u2019s passion for helping others was shaped early in life. His experiences with food insecurity during childhood left a lasting impact and helped form the values that guide him today. Those moments taught him the importance of community support and the difference it can make when people come together to help one another.\n\nAt heart, Drake is a self-proclaimed nerd who wants to turn his passion for gaming into a way to make a difference. When he\u2019s not organizing events, you can usually find him at a local game store, out on a disc golf course, or firing up the smoker to barbecue for friends and family. For Drake, community is about connection and using that connection to help others.',
  },
  {
    name: 'Isaac Haas',
    role: 'Vice President & Treasurer',
    image: IsaacImg as string,
    bio: 'Isaac is an explorer with a heart for service. Having lived in NWA since 2009, he\u2019s witnessed the region\u2019s rapid transformation and the growing need for community\u2011driven support. A simple idea\u2014sparked during a phone call about turning a shared trading\u2011card hobby into a force for good\u2014became the foundation for Play It Forward: NWA. When he\u2019s not working to uplift others, Isaac can often be found on a local disc golf course or browsing the aisles of a favorite card shop, always looking for new ways to connect, encourage, and give back.',
  },
  {
    name: 'Pablo Sanchez',
    role: 'CoFounder & Secretary',
    image: PabloImg as string,
    bio: 'Pablo Sanchez is a cofounder of Play It Forward: NWA and a community-driven self-proclaimed nerd with a deep passion for helping others. He has called Northwest Arkansas home since 2014 and takes pride in both the region\u2019s growth and his hands-on role in giving back to the community that has welcomed him.\n\nHis commitment to service is rooted in his upbringing in an impoverished community, where many families faced daily food insecurity. Guided by his parents\u2019 belief that if you can help someone, you should, Pablo has carried that principle into every part of his life\u2014from his career to his relationships and community involvement.\n\nWhen he\u2019s not at a card shop competing in tournaments, Pablo spends his time partnering with nonprofits and schools to teach financial literacy. He\u2019s also an avid pickleball player, gamer, and self-proclaimed \u201cFun Uncle\u201d\u2014and will never pass up the chance to pet a friendly dog.',
  },
  {
    name: 'Trevor Smith',
    role: 'Community Engagement Director',
    image: TrevorImg as string,
    bio: 'Trevor is the owner of Final Boss Games and a proud Northwest Arkansas native who cares a lot about community. Born and raised in NWA, he has always believed local spaces matter - especially the ones that bring people together. Through founding Final Boss Games, Trevor has worked to build a welcoming place where people can hang out, share what they love, and make real connections.\n\nAs a lifelong gamer, Trevor has seen how hobbies like trading card games can create friendships, give people a sense of belonging, and grow into something bigger than just the game itself. That belief in connection and community is what drew him to Play It Forward: NWA and the chance to turn shared passions into something that helps others.\n\nWhen he\u2019s not at the shop, Trevor is usually following Formula 1 or judging Pokemon events, including Regional and International Championships. No matter the setting, he is driven by a simple idea - good communities are built when people show up for each other.',
  },
]

export default function Team() {
  const [flipped, setFlipped] = useState<string | null>(null)

  const toggle = (name: string) =>
    setFlipped((prev) => (prev === name ? null : name))

  return (
    <main className="team-page">
      <PageHero
        badge="Our People"
        title="Meet the Team"
        description="Passionate players and advocates who believe a great game can do great things."
        variant="subtle"
      />

      <section className="team-section">
        <div className="team-grid">
          {team.map((member) => (
            <div
              className={`flip-card${flipped === member.name ? ' flipped' : ''}`}
              key={member.name}
              onClick={(event) => {
                event.stopPropagation();
                toggle(member.name);}
              }
              role="button"
              tabIndex={0}
              aria-pressed={flipped === member.name}
              onKeyDown={(e) => e.key === 'Enter' && toggle(member.name)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="flip-card-img" />
                  ) : (
                    <div className="flip-card-initials">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}
                  <div className="flip-card-overlay">
                    <span className="flip-card-name">{member.name}</span>
                    <span className="flip-card-role">{member.role}</span>
                  </div>
                  <div className="flip-card-hint">Tap to learn more</div>
                </div>
                <div className="flip-card-back">
                  <h3>{member.name}</h3>
                  <span className="flip-card-role">{member.role}</span>
                  <div className="flip-card-bio">
                    {member.bio.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
