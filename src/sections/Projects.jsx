import { useState } from 'react';
import { ArrowUpRight, GraduationCap, ShoppingBag, Users, WalletCards, Workflow } from 'lucide-react';
import ProjectCover from '../components/ProjectCover.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import TagList from '../components/TagList.jsx';
import { projects } from '../data/portfolio.js';

const projectIcons = {
  graduation: GraduationCap,
  shopping: ShoppingBag,
  users: Users,
  wallet: WalletCards,
  workflow: Workflow,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <header className="section-heading" data-reveal>
        <p className="eyebrow">Portfolio</p>
        <h2 id="projects-title" tabIndex={-1}>Selected work.</h2>
        <p>Try the live demos to see how each system handles everyday tasks.</p>
      </header>
      <div className="project-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.icon];
          return (
            <article className={project.featured ? 'project-card project-card--featured' : 'project-card'} key={project.number}>
              <ProjectCover project={project} Icon={Icon} />
              <div className="project-card-body">
                <div className="project-type"><Icon size={17} aria-hidden="true" />{project.type}</div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <TagList items={project.stack} className="project-tags" />
                <div className="project-card-footer">
                  <button className="details-button" type="button" onClick={() => setSelectedProject(project)}
                    aria-label={'View details for ' + project.title}>View details</button>
                  <a href={project.href} target="_blank" rel="noreferrer" className="project-link"
                    aria-label={'Live demo for ' + project.title + ' (opens in a new tab)'}>
                    Live demo <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {selectedProject && (
        <ProjectModal
          key={selectedProject.number}
          project={selectedProject}
          Icon={projectIcons[selectedProject.icon]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
