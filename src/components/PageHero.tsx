import PageBadge from './PageBadge'
import './PageHero.css'

type PageHeroProps = {
  badge: string
  badgeTone?: 'blue' | 'yellow'
  title?: string
  description: string
  variant?: 'surface' | 'subtle'
  className?: string
  action?: React.ReactNode
}

export default function PageHero({
  badge,
  badgeTone = 'blue',
  title,
  description,
  variant = 'surface',
  className = '',
  action,
}: PageHeroProps) {
  const classes = ['page-hero', `page-hero--${variant}`, className].filter(Boolean).join(' ')

  return (
    <section className={classes}>
      <div className="page-hero-content">
        <PageBadge tone={badgeTone}>{badge}</PageBadge>
        <h1>{title}</h1>
        <p>{description}</p>
        {action && <div className="page-hero-action">{action}</div>}
      </div>
    </section>
  )
}
