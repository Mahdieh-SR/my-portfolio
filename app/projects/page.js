// app/projects/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, categories } from '@/data/projects';
import { projectsContent } from '@/data/content';

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="image-placeholder">
        <span className="material-symbols-outlined">image</span>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setError(true)} className="project-img" />;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('همه');
  const { hero, filter: filterContent, card, emptyState } = projectsContent;

  const filteredProjects = filter === 'همه'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="material-symbols-outlined">work</span>
          </div>
          <h1 className="display-large">{hero.title}</h1>
          <p className="headline-small">{hero.subtitle}</p>
        </div>
      </section>

      <div className="container projects-container">
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-label">
            <span className="material-symbols-outlined">filter_list</span>
            <span className="label-large">{filterContent.label}</span>
          </div>
          <div className="filter-chips">
            {categories.map((category) => (
              <button key={category} className={`filter-chip ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}>
                {category}
              </button>
            ))}
          </div>
          <div className="projects-count">
            <span className="body-medium">{filteredProjects.length} {filterContent.countSuffix}</span>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-image">
                  <ProjectImage src={project.images?.[0]} alt={project.title} />
                  <div className="card-overlay">
                    <span className="view-project">
                      <span className="material-symbols-outlined">visibility</span>
                      {card.viewDetailsOverlay}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="title-large">{project.title}</h3>
                    <span className="category-badge">{project.category}</span>
                  </div>

                  <p className="body-medium description">{project.shortDescription}</p>

                  <div className="card-meta">
                    <div className="meta-item">
                      <span className="material-symbols-outlined">schedule</span>
                      <span className="body-small">{project.date}</span>
                    </div>
                    <div className="meta-item">
                      <span className="material-symbols-outlined">timer</span>
                      <span className="body-small">{project.duration}</span>
                    </div>
                  </div>

                  <div className="tech-stack">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-chip">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-chip more">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="card-footer">
                    <span className="view-link">
                      {card.viewDetails}
                      <span className="material-symbols-outlined">arrow_back</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <span className="material-symbols-outlined">folder_open</span>
            </div>
            <h3 className="headline-medium">{emptyState.title}</h3>
            <p className="body-large">{emptyState.subtitle}</p>
            <button className="btn-reset" onClick={() => setFilter('همه')}>
              {emptyState.resetButton}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .projects-page { min-height: 100vh; background: var(--md-sys-color-background); }

        .projects-hero {
          padding: 140px 0 80px;
          background: linear-gradient(135deg, #FEF7FF 0%, #F6EDFF 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .projects-hero::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(103, 80, 164, 0.1) 0%, transparent 70%);
          top: -200px; right: -200px;
          border-radius: 50%;
        }

        .hero-badge {
          width: 80px; height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-3);
          animation: scaleIn 0.5s ease-out;
        }

        .hero-badge .material-symbols-outlined { font-size: 40px; color: white; }
        .projects-hero h1 { color: var(--md-sys-color-on-background); margin: 0 0 16px; animation: fadeInUp 0.6s ease-out 0.1s backwards; }
        .projects-hero p { color: var(--md-sys-color-on-surface-variant); max-width: 700px; margin: 0 auto; animation: fadeInUp 0.6s ease-out 0.2s backwards; }

        .projects-container { padding: 80px 24px; }

        .filter-section { margin-bottom: 48px; display: flex; flex-direction: column; gap: 20px; }

        .filter-label { display: flex; align-items: center; gap: 8px; color: var(--md-sys-color-on-surface); }
        .filter-label .material-symbols-outlined { font-size: 24px; color: var(--md-sys-color-primary); }
        .filter-chips { display: flex; gap: 12px; flex-wrap: wrap; }

        .filter-chip {
          padding: 12px 24px;
          border-radius: 50px;
          border: 2px solid var(--md-sys-color-outline);
          background: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-chip:hover { background: var(--md-sys-color-surface-variant); transform: translateY(-2px); }

        .filter-chip.active {
          background: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
          border-color: transparent;
          box-shadow: var(--md-sys-elevation-2);
        }

        .projects-count { color: var(--md-sys-color-on-surface-variant); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 32px; }

        .project-card {
          display: flex; flex-direction: column;
          background: var(--md-sys-color-surface);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid var(--md-sys-color-outline-variant);
          text-decoration: none;
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .project-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-4); transform: translateY(-12px); }

        .card-image { position: relative; width: 100%; height: 240px; overflow: hidden; background: var(--md-sys-color-surface-variant); }

        .image-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-tertiary-container) 100%);
        }

        .image-placeholder .material-symbols-outlined { font-size: 80px; color: var(--md-sys-color-on-primary-container); opacity: 0.5; }

        .project-img { width: 100%; height: 100%; object-fit: cover; }

        .card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);
          display: flex; align-items: flex-end; justify-content: center;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .card-overlay { opacity: 1; }

        .view-project {
          display: flex; align-items: center; gap: 8px;
          color: white;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 16px; font-weight: 600;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .project-card:hover .view-project { transform: translateY(0); }

        .card-content { padding: 24px; display: flex; flex-direction: column; gap: 16px; flex: 1; }
        .card-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .card-header h3 { color: var(--md-sys-color-on-surface); margin: 0; flex: 1; line-height: 1.3; }

        .category-badge {
          padding: 6px 14px;
          border-radius: 50px;
          background: var(--md-sys-color-tertiary-container);
          color: var(--md-sys-color-on-tertiary-container);
          font-family: 'Vazirmatn', sans-serif;
          font-size: 12px; font-weight: 700;
          white-space: nowrap;
        }

        .description {
          color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.6;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }

        .card-meta { display: flex; gap: 16px; }
        .meta-item { display: flex; align-items: center; gap: 6px; color: var(--md-sys-color-on-surface-variant); }
        .meta-item .material-symbols-outlined { font-size: 18px; }
        .tech-stack { display: flex; gap: 8px; flex-wrap: wrap; }

        .tech-chip {
          padding: 6px 12px; border-radius: 8px;
          background: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
          font-family: 'Vazirmatn', sans-serif;
          font-size: 11px; font-weight: 600;
        }

        .tech-chip.more { background: var(--md-sys-color-surface-variant); color: var(--md-sys-color-on-surface-variant); }
        .card-footer { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--md-sys-color-outline-variant); }

        .view-link {
          display: flex; align-items: center; justify-content: space-between;
          color: var(--md-sys-color-primary);
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px; font-weight: 600;
          transition: gap 0.3s ease;
        }

        .view-link .material-symbols-outlined { font-size: 20px; transition: transform 0.3s ease; }
        .project-card:hover .view-link .material-symbols-outlined { transform: translateX(-4px); }

        .empty-state { text-align: center; padding: 100px 20px; animation: fadeInUp 0.6s ease-out; }

        .empty-icon {
          width: 120px; height: 120px;
          margin: 0 auto 32px;
          background: var(--md-sys-color-surface-variant);
          border-radius: 30px;
          display: flex; align-items: center; justify-content: center;
        }

        .empty-icon .material-symbols-outlined { font-size: 60px; color: var(--md-sys-color-outline); }
        .empty-state h3 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .empty-state p { color: var(--md-sys-color-on-surface-variant); margin: 0 0 32px; }

        .btn-reset {
          padding: 14px 32px;
          background: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
          border: none; border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 16px; font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--md-sys-elevation-2);
        }

        .btn-reset:hover { box-shadow: var(--md-sys-elevation-3); transform: translateY(-2px); }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .projects-hero { padding: 120px 0 60px; }
          .projects-container { padding: 60px 20px; }
          .projects-grid { grid-template-columns: 1fr; gap: 24px; }
          .filter-chips { justify-content: center; }
        }
      `}</style>
    </div>
  );
}