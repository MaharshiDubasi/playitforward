import './AnnouncementBanner.css'

export default function AnnouncementBanner() {
  return (
    <section className="announcement-banner">
      <div className="announcement-content">
        <div className="announcement-icon">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          </svg>
        </div>
        <p className="announcement-text">
          Trade It Forward vendor & sponsorship applications are live!
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdHuHnVSBv-DSpGi1verlh1iRJWZjslYkrF48dRWUVHkfok5A/viewform?usp=preview" 
          className="announcement-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up here!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  )
}
