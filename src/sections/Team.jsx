import { ArrowUpRight, Users } from 'lucide-react';

const base = import.meta.env.BASE_URL;
const members = [
  {
    name: 'Isaac Greyole S. Balingit',
    role: 'Software Engineer • Business Systems',
    photo: base + 'team/isaac.webp',
    preview: 'Business systems development and deployment, enterprise integrations, and client-facing solutions.',
    description: 'I am a software engineer who builds, customizes, and deploys business systems for real-world operations. I work with 1C:Enterprise and AccountingSuite to develop workflows, reports, access controls, and integrations, and I support these systems through deployment, troubleshooting, and ongoing improvements. I also work directly with clients and alongside sales and implementation teams to understand requirements, present technical demos, and deliver practical solutions using a hands-on, forward-deployed engineering approach.',
    href: 'https://isaacgreyole.vercel.app/',
  },
  {
    name: 'Marwin Paul Olivar',
    role: 'Software Developer',
    photo: base + 'team/marwin.webp',
    preview: 'Web applications, business software, systems integration, and deployment support.',
    description: 'I develop web applications and business software solutions, integrate systems and databases, and support software deployment and troubleshooting. My work focuses on making technology practical, reliable, and useful for day-to-day operations.',
    href: 'https://marwinpaulolivar.vercel.app/',
  },
  {
    name: 'Robert Basan',
    role: 'Software Engineer · Android & Web',
    photo: base + 'team/robert.webp',
    preview: 'Android applications, responsive websites, and production app maintenance.',
    description: 'I’m a Software Engineer focused on Android and web development. I build mobile applications using Java, XML, Android Studio, and Firebase, with experience in authentication, real-time databases, cloud storage, ads integration, testing, deployment, and app maintenance. I also create responsive websites using HTML, CSS, and JavaScript. My work includes publishing and managing apps through Google Play Console, integrating Google AdMob and Unity Ads, and maintaining production-ready applications.',
    href: 'https://robertbasan.online',
  },
  {
    name: 'Angelo Ramos',
    role: 'Senior DevOps / IT Project Manager · Developer',
    photo: base + 'team/angelo.webp',
    preview: 'Internal tools, QuickBooks Desktop integration, and IT infrastructure management.',
    description: "I'm Angelo A. Ramos — a Senior DevOps / IT Project Manager and developer. I help businesses build internal tools, integrate with QuickBooks Desktop, and manage the IT infrastructure they rely on.",
    href: 'https://angelo-ramos-portfolio.vercel.app',
  },
];

export default function Team() {
  return (
    <section className="content-section team-section" id="team" aria-labelledby="team-title">
      <header className="section-heading" data-reveal>
        <p className="eyebrow"><Users size={13} aria-hidden="true" /> The people</p>
        <h2 id="team-title" tabIndex={-1}>Meet the team.</h2>
        <p>Developers building practical software, integrations, and business solutions together.</p>
      </header>

      <div className="team-grid">
        {members.map((member) => (
          <article className="team-card" key={member.name} data-reveal>
            <img className="team-photo" src={member.photo} alt={member.name} width="88" height="88" loading="lazy" />
            <div className="team-card-content">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-preview">{member.preview}</p>
              <div className="team-actions">
                <details className="team-bio">
                  <summary>Read bio</summary>
                  <p>{member.description}</p>
                </details>
                {member.href ? (
                  <a href={member.href} target="_blank" rel="noopener noreferrer"
                    aria-label={'Open ' + member.name + ' portfolio in a new tab'}>
                    Portfolio <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ) : <span className="team-unlinked">Portfolio not listed</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="team-note">Want to see more? Explore additional projects and case studies on our members’ individual portfolios.</p>
    </section>
  );
}
