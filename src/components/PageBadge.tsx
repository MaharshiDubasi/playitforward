import './PageBadge.css'

type PageBadgeProps = {
  children: string
  tone?: 'blue' | 'yellow'
}

export default function PageBadge({ children, tone = 'blue' }: PageBadgeProps) {
  return <div className={`page-badge page-badge--${tone}`}>{children}</div>
}
