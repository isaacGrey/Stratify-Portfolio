import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowUp, ArrowUpRight, Boxes, Cable, ChartNoAxesCombined,
  ChevronRight, CircleDot, Facebook, Mail, Menu, Phone, X, FileText,
} from 'lucide-react';
import Projects from './sections/Projects.jsx';
import Team from './sections/Team.jsx';
import { brand, navigation, projects } from './data/portfolio.js';
import { usePortfolioScroll } from './hooks/usePortfolioUI.js';

const logo = import.meta.env.BASE_URL + 'brand/stratify-logo.webp';
const services = [
  {
    icon: Boxes, color: 'teal', title: 'Custom business systems',
    text: 'Manage orders, inventory, records, and daily operations in an application built around your team’s workflow.',
  },
  {
    icon: Cable, color: 'coral', title: 'Integrations & automation',
    text: 'Connect the tools you already use and automate repeat work like data entry, notifications, and approvals.',
  },
  {
    icon: ChartNoAxesCombined, color: 'gold', title: 'Dashboards & reporting',
    text: 'Put operational data in one place so your team can track what changed, spot exceptions, and decide what to do next.',
  },
];
const steps = [
  { title: 'Map the workflow', text: 'Walk through how work gets done today, where it slows down, and what the system needs to connect to.' },
  { title: 'Build and test', text: 'Review working screens with the people who will use them. Use their feedback to refine the workflow.' },
  { title: 'Launch and hand over', text: 'Check the day-to-day scenarios, prepare the rollout, and walk your team through the system.' },
];



function Brand() {
  return (
    <a className="brand-lockup" href="#home" aria-label="Stratify Solutions home">
      <span className="brand-mark" aria-hidden="true"><img src={logo} alt="" /></span>
      <span className="brand-copy"><strong>Stratify Solutions</strong><small>Business software</small></span>
    </a>
  );
}

function Navigation({ activeSection, onNavigate, label }) {
  return (
    <nav className="sidebar-nav" aria-label={label}>
      <span className="sidebar-caption">TOPICS</span>
      {navigation.map(({ id, label: name, icon: Icon }) => (
        <a key={id} href={'#' + id} aria-current={id === activeSection ? 'location' : undefined} onClick={onNavigate}>
          <Icon size={15} aria-hidden="true" />
          {name}
          <ChevronRight className="nav-indicator" size={15} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}

export default function App() {
  const activeSection = usePortfolioScroll();
  const activeItem = navigation.find(({ id }) => id === activeSection) ?? navigation[0];
  const menu = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) menu.current?.close(); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  function closeMenu(restoreFocus = true) {
    menu.current?.close();
    if (restoreFocus) menuButton.current?.focus();
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true"><span /></div>

      <aside className="sidebar-shell">
        <Brand />
        <a href="#contact" className="sidebar-new">+ &nbsp; New inquiry <ArrowUpRight size={14} /></a>
        <Navigation activeSection={activeSection} label="Main navigation" />
        <div className="sidebar-case-studies">
          <span className="sidebar-caption">CASE STUDIES</span>
          {projects.map((project) => <a href={'#project-' + project.number} key={project.number}>
            <FileText size={13} aria-hidden="true" /><span>{project.title}</span>
          </a>)}
        </div>
        <div className="sidebar-bottom">
          <small>© {new Date().getFullYear()} Stratify Solutions</small>
        </div>
      </aside>

      <header className="mobile-header">
        <Brand />
        <div className="header-actions">
          <button ref={menuButton} type="button" className="icon-button" aria-label="Open menu"
            aria-controls="mobile-navigation" aria-expanded={menuOpen}
            onClick={() => { menu.current?.showModal(); setMenuOpen(true); }}>
            <Menu size={21} />
          </button>
        </div>
      </header>
      <dialog id="mobile-navigation" className="mobile-menu" ref={menu} aria-label="Site menu"
        onClose={() => setMenuOpen(false)} onClick={(event) => { if (event.target === menu.current) closeMenu(); }}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <strong>Menu</strong>
            <button className="icon-button" type="button" onClick={() => closeMenu()} aria-label="Close menu"><X size={20} /></button>
          </div>
          <Navigation activeSection={activeSection} label="Mobile navigation"
            onNavigate={(event) => {
              const heading = document.querySelector(event.currentTarget.hash + ' :is(h1, h2)');
              closeMenu(false);
              heading?.focus({ preventScroll: true });
            }} />
        </div>
      </dialog>

      <main className="main-content" id="main" tabIndex={-1}>
        <div className="content-wrap">
          <div className="topbar">
            <p>PORTFOLIO <span>/</span> <strong>{activeItem.label}</strong></p>
            <a className="button button-primary topbar-contact" href="#contact">Email us <ArrowUpRight size={14} /></a>
          </div>


          <section className="hero-section" id="home" aria-labelledby="hero-title">
            <div className="hero-grid">
              <div className="hero-copy" data-reveal>
                <div className="hero-symbol"><img src={logo} alt="Stratify Solutions logo" width="144" height="144" fetchPriority="high" /></div>
                <p className="eyebrow hero-eyebrow"><CircleDot size={12} aria-hidden="true" /> Business software, built around you</p>
                <h1 id="hero-title" tabIndex={-1}>Better systems.<br /><em>Smoother work.</em></h1>
                <p className="hero-description">Stratify Solutions builds custom software that connects your tools, simplifies everyday workflows, and gives your team a clearer view of operations.</p>
                <div className="hero-stats" aria-label="What we offer">
                  <div><strong>Custom applications</strong><span>Designed for your workflow</span></div>
                  <div><strong>Automation</strong><span>Fewer repetitive tasks</span></div>
                  <div><strong>Integrations</strong><span>Connected business tools</span></div>
                </div>
                <div className="hero-actions">
                  <a className="button button-primary" href="#projects">Explore live demos <ArrowDown size={14} /></a>
                  <a className="button button-quiet" href="#services">Our services <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </div>


          </section>

          <Projects />
          <Team />

          <section className="content-section" id="services" aria-labelledby="services-title">
            <header className="section-heading" data-reveal>
              <p className="eyebrow">Services</p>
              <h2 id="services-title" tabIndex={-1}>Built around your workflow.</h2>
            </header>
            <div className="service-grid">
              {services.map(({ icon: Icon, color, title, text }) => (
                <article className={'service-card ' + color} key={title} data-reveal>
                  <span className="service-icon"><Icon size={23} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section approach-section" id="approach" aria-labelledby="approach-title">
            <header className="section-heading" data-reveal>
              <p className="eyebrow">Our approach</p>
              <h2 id="approach-title" tabIndex={-1}>From first conversation to launch.</h2>
              <p>We start with the people doing the work, then build and refine the system with them.</p>
            </header>
            <ol className="steps" data-reveal>
              {steps.map(({ title, text }) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}
            </ol>
          </section>

          <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-card" data-reveal>
              <div>
                <p className="eyebrow"><Mail size={16} aria-hidden="true" /> Project inquiries</p>
                <h2 id="contact-title" tabIndex={-1}>What could work better?</h2>
                <p>Tell us about the workflow you want to improve, who uses it, and what your team needs the system to do.</p>
              </div>
              <div className="contact-links" aria-label="Contact options">
                <a href={'mailto:' + brand.email}><Mail size={17} aria-hidden="true" />{brand.email}</a>
                <a href={brand.phoneHref}><Phone size={17} aria-hidden="true" />{brand.phone}</a>
                <a href={brand.facebook} target="_blank" rel="noreferrer"><Facebook size={17} aria-hidden="true" />Facebook <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </section>

          <footer className="site-footer">
            <Brand />
            <a href="#home">Back to top <ArrowUp size={16} /></a>
          </footer>
        </div>
      </main>
    </div>
  );
}
