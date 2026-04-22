import PageHero from '../../components/PageHero.tsx'
import './Contact.css'

export default function Contact() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Using mailto as a simple frontend-only way to "send" email
    window.location.href = `mailto:drake@playitforwardnwa.com?subject=${subject}&body=${encodeURIComponent(message as string)}%0D%0A%0D%0AFrom: ${name} at (${email})`;
  };

  return (
    <main className="contact">
      <PageHero
        badge="Contact Us"
        badgeTone="blue"
        title="Get in Touch"
        description="Have questions or want to get involved? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible."
      />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <h2>Email Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>
              <div className={"form-group"}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="How can we help?" rows={5}></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
          
          <div className="contact-sidebar">
            <div className="info-card">
              <h3>Direct Contact</h3>
              <p><strong>Email:</strong> drake@playitforwardnwa.com</p>
              <p><strong>Location:</strong> Northwest Arkansas</p>
            </div>
            <div className="info-card">
              <h3>Support</h3>
              <p>Interested in volunteering or partnering with us? Reach out and let's make a difference together.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
