import Layout from "../components/Layout";
import { skillsStikers, projects, experience, I_am, links } from "../public/profile";
import Modal from "../components/Modal";
import { useRef, useState, useCallback } from "react";
import emailjs from "emailjs-com";

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6M10 14L21 3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const socials = [
  { label: "LinkedIn", href: links.linkedIn.urlink, Icon: LinkedInIcon },
  { label: "X (Twitter)", href: links.twetter.urlink, Icon: XIcon },
];

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const form = useRef();
  const closeModal = useCallback(() => setShowModal(false), []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_ENV_LOCAL_SERVICE_ID,
        process.env.NEXT_PUBLIC_ENV_LOCAL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_ENV_LOCAL_USER_ID
      )
      .then(() => {
        setStatus({ ok: true, text: "Message sent. I'll get back to you soon." });
        e.target.reset();
      })
      .catch(() => {
        setStatus({ ok: false, text: "Something went wrong. Try again or email me directly." });
      })
      .finally(() => setSending(false));
  };

  return (
    <Layout
      title="Full Stack Engineer"
      description="Mauricio A. Castillo — Full Stack Engineer specialized in React & Node.js. Portfolio, projects and experience."
    >
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Full Stack Engineer</span>
            <h1 className="hero-name">
              Mauricio A.<br />
              <span className="accent">Castillo</span>
            </h1>
            <p className="hero-role">{I_am.profession}</p>
            <p className="hero-desc">{I_am.description}</p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
                <MailIcon /> Contact me
              </button>
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon /> {label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <img src="/main_job_photo.jpg" alt="Mauricio A. Castillo" loading="eager" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section--alt">
        <div className="section-head">
          <span className="eyebrow">Toolbox</span>
          <h2>Skills &amp; technologies</h2>
        </div>
        <div className="skills-grid">
          {skillsStikers.map(({ tec, url }, index) => (
            <div className="skill" key={index}>
              <img src={url} alt={tec} loading="lazy" />
              <span>{tec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Career</span>
          <h2>Experience</h2>
        </div>
        <ul className="timeline">
          {experience.map((exp, index) => (
            <li className="timeline-item" key={index}>
              <div className="timeline-head">
                <h3>{exp.name}</h3>
                <span className="timeline-meta">
                  <CalendarIcon /> {exp.since} — {exp.to}
                </span>
              </div>
              <p>{exp.description}</p>
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.webSiteName} <ExternalIcon />
              </a>
              {exp.certificateUrl && (
                <span>
                  {" · "}
                  <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                    View certification
                  </a>
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Portfolio */}
      <section className="section section--alt">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2>Selected projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map(({ name, description, img, link }, index) => {
            const deprecated = /deprecated/i.test(name);
            const cleanName = name.replace(/\[deprecated\]/i, "").trim();
            return (
              <article className="project" key={index}>
                <div className="project-media">
                  <img src={img} alt={cleanName} loading="lazy" />
                </div>
                <div className="project-body">
                  <h3>{cleanName}</h3>
                  <div className="project-tags">
                    {deprecated && <span className="chip chip--warn">Deprecated</span>}
                  </div>
                  <p>{description}</p>
                  <a href={link} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">
                    Visit project <ExternalIcon />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta-band">
          <a href="/Mauricio_Castillo_CV.pdf" className="btn btn-primary" download>
            Download resume
          </a>
          <a href="videoResume" className="btn btn-ghost">
            Watch video resume
          </a>
        </div>
      </section>

      {/* Contact modal */}
      <Modal show={showModal} onClose={closeModal} title="Get in touch">
        <form ref={form} onSubmit={sendEmail}>
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" name="user_name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" name="user_email" placeholder="name@example.com" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="4" required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
          {status && (
            <div className={`form-feedback ${status.ok ? "form-feedback--ok" : "form-feedback--err"}`} role="status">
              {status.text}
            </div>
          )}
        </form>
      </Modal>
    </Layout>
  );
};

export default Index;
