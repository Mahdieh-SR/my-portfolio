// app/projects/[id]/page.js
'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { projectDetailContent } from '@/data/content';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find(p => p.id === params.id);
  const { notFound, backLink, infoLabels, sections, navigation } = projectDetailContent;
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!project) {
    return (
      <div className="not-found">
        <div className="container">
          <div className="not-found-icon">
            <span className="material-symbols-outlined">error</span>
          </div>
          <h1 className="headline-large">{notFound.title}</h1>
          <p className="body-large">{notFound.subtitle}</p>
          <Link href="/projects" className="btn-back">
            <span className="material-symbols-outlined">arrow_forward</span>
            {notFound.backButton}
          </Link>
        </div>

        <style jsx>{`
          .not-found {
            min-height: 100vh;
            display: flex; align-items: center; justify-content: center;
            text-align: center; padding: 40px 20px;
          }

          .not-found-icon {
            width: 120px; height: 120px;
            margin: 0 auto 32px;
            background: var(--md-sys-color-error-container);
            border-radius: 30px;
            display: flex; align-items: center; justify-content: center;
          }

          .not-found-icon .material-symbols-outlined { font-size: 60px; color: var(--md-sys-color-on-error-container); }
          .not-found h1 { color: var(--md-sys-color-on-background); margin: 0 0 16px; }
          .not-found p { color: var(--md-sys-color-on-surface-variant); margin: 0 0 32px; }

          .btn-back {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 16px 32px;
            background: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
            text-decoration: none; border-radius: 50px;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 16px; font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: var(--md-sys-elevation-2);
          }

          .btn-back:hover { box-shadow: var(--md-sys-elevation-4); transform: translateY(-4px); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container hero-top">
          <Link href="/projects" className="back-link">
            <span className="material-symbols-outlined">arrow_forward</span>
            {backLink}
          </Link>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <span className="category-badge">{project.category}</span>
            <h1 className="display-large">{project.title}</h1>
            <p className="headline-small">{project.shortDescription}</p>
          </div>
        </div>
      </section>

      <div className="container project-container">
        {/* Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <span className="material-symbols-outlined">calendar_today</span>
            <div className="info-content">
              <span className="label-large">{infoLabels.date}</span>
              <span className="body-large">{project.date}</span>
            </div>
          </div>
          <div className="info-card">
            <span className="material-symbols-outlined">timer</span>
            <div className="info-content">
              <span className="label-large">{infoLabels.duration}</span>
              <span className="body-large">{project.duration}</span>
            </div>
          </div>
          <div className="info-card">
            <span className="material-symbols-outlined">person</span>
            <div className="info-content">
              <span className="label-large">{infoLabels.role}</span>
              <span className="body-large">{project.role}</span>
            </div>
          </div>
          <div className="info-card">
            <span className="material-symbols-outlined">business</span>
            <div className="info-content">
              <span className="label-large">{infoLabels.client}</span>
              <span className="body-large">{project.client}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="project-section">
          <h2 className="headline-large">{sections.about}</h2>
          <p className="body-large description-text">{project.description}</p>
        </section>

        {/* Gallery */}
        {project.images && project.images.length > 1 && (
          <section className="project-section">
            <h2 className="headline-large">{sections.gallery}</h2>
            <div className="gallery-grid">
              {project.images.map((src, index) => (
                <button key={index} type="button" className="gallery-img-btn" onClick={() => setLightboxSrc(src)}>
                  <img src={src} alt={`${project.title} ${index + 1}`} className="gallery-img" />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="project-section">
          <h2 className="headline-large">{sections.technologies}</h2>
          <div className="tech-grid">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="material-symbols-outlined">code</span>
                <span className="title-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="project-section">
          <h2 className="headline-large">{sections.features}</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="body-large">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Results */}
        <div className="two-column-section">
          {project.challenges && (
            <section className="project-section">
              <h2 className="headline-large">{sections.challenges}</h2>
              <div className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="challenge-item">
                    <span className="material-symbols-outlined">extension</span>
                    <span className="body-medium">{challenge}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.results && (
            <section className="project-section">
              <h2 className="headline-large">{sections.results}</h2>
              <div className="results-list">
                {project.results.map((result, index) => (
                  <div key={index} className="result-item">
                    <span className="material-symbols-outlined">trending_up</span>
                    <span className="body-medium">{result}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Navigation */}
        <div className="project-navigation">
          <Link href="/projects" className="nav-link">
            <span className="material-symbols-outlined">grid_view</span>
            {navigation.allProjects}
          </Link>
          <Link href="/contact" className="nav-link primary">
            {navigation.similarProject}
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
      </div>

      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <button type="button" className="lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="بستن">
            <span className="material-symbols-outlined">close</span>
          </button>
          <img src={lightboxSrc} alt={project.title} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style jsx>{`
        .project-detail { min-height: 100vh; background: var(--md-sys-color-background); }

        .project-hero { padding-top: 120px; margin-bottom: 60px; }

        .hero-top { padding-bottom: 24px; }

        .back-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--md-sys-color-on-surface-variant);
          font-family: 'Vazirmatn', sans-serif; font-size: 14px; font-weight: 600;
          text-decoration: none; padding: 10px 20px; border-radius: 50px;
          background: var(--md-sys-color-surface-variant);
          transition: all 0.3s ease;
        }

        .back-link:hover { background: var(--md-sys-color-secondary-container); transform: translateX(4px); }

        .hero-text { animation: fadeInUp 0.8s ease-out; }

        .category-badge {
          display: inline-block; padding: 8px 20px; border-radius: 50px;
          background: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px; font-weight: 700; margin-bottom: 20px;
        }

        .hero-text h1 { color: var(--md-sys-color-on-background); margin: 0 0 16px; }
        .hero-text p { color: var(--md-sys-color-on-surface-variant); max-width: 800px; margin: 0; }

        .project-container { padding: 0 24px 80px; }

        .info-cards {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 20px; margin-bottom: 80px;
          animation: fadeInUp 0.6s ease-out 0.2s backwards;
        }

        .info-card {
          display: flex; align-items: center; gap: 16px;
          padding: 24px;
          background: var(--md-sys-color-surface);
          border-radius: 20px;
          border: 2px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }

        .info-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); transform: translateY(-4px); }
        .info-card > .material-symbols-outlined { font-size: 36px; color: var(--md-sys-color-primary); flex-shrink: 0; }
        .info-content { display: flex; flex-direction: column; gap: 4px; }
        .info-content .label-large { color: var(--md-sys-color-on-surface-variant); }
        .info-content .body-large { color: var(--md-sys-color-on-surface); font-weight: 600; }

        .project-section { margin-bottom: 60px; animation: fadeInUp 0.6s ease-out backwards; }

        .project-section h2 {
          color: var(--md-sys-color-on-background); margin: 0 0 24px;
          padding-bottom: 16px; border-bottom: 2px solid var(--md-sys-color-outline-variant);
        }

        .description-text { color: var(--md-sys-color-on-surface-variant); line-height: 1.8; margin: 0; }

        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
        .gallery-img-btn { display: block; padding: 0; border: none; background: none; cursor: pointer; border-radius: 16px; }
        .gallery-img { width: 100%; height: 220px; object-fit: contain; background: var(--md-sys-color-surface-variant); border-radius: 16px; border: 2px solid var(--md-sys-color-outline-variant); transition: all 0.3s ease; }
        .gallery-img-btn:hover .gallery-img { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); transform: translateY(-4px); }

        .lightbox {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.85);
          display: flex; align-items: center; justify-content: center;
          padding: 40px; cursor: zoom-out;
        }
        .lightbox-img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; cursor: default; }
        .lightbox-close {
          position: absolute; top: 24px; left: 24px;
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,0.15); border: none; color: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.3s ease;
        }
        .lightbox-close:hover { background: rgba(255,255,255,0.3); }

        .tech-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }

        .tech-item {
          display: flex; align-items: center; gap: 12px;
          padding: 18px 24px;
          background: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
          border-radius: 16px; transition: all 0.3s ease;
        }

        .tech-item:hover { box-shadow: var(--md-sys-elevation-2); transform: translateY(-4px); }
        .tech-item .material-symbols-outlined { font-size: 24px; }

        .features-grid { display: grid; gap: 16px; }

        .feature-card {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 24px;
          background: var(--md-sys-color-surface);
          border-radius: 16px;
          border-right: 4px solid var(--md-sys-color-primary);
          box-shadow: var(--md-sys-elevation-1);
          transition: all 0.3s ease;
        }

        .feature-card:hover { box-shadow: var(--md-sys-elevation-2); transform: translateX(-4px); }
        .feature-card .material-symbols-outlined { color: var(--md-sys-color-primary); font-size: 24px; flex-shrink: 0; }
        .feature-card span:last-child { color: var(--md-sys-color-on-surface); line-height: 1.6; }

        .two-column-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 60px; }

        .challenges-list, .results-list { display: flex; flex-direction: column; gap: 12px; }

        .challenge-item, .result-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px 20px;
          background: var(--md-sys-color-surface);
          border-radius: 12px;
          border: 1px solid var(--md-sys-color-outline-variant);
        }

        .challenge-item .material-symbols-outlined { color: var(--md-sys-color-secondary); font-size: 22px; flex-shrink: 0; }
        .result-item .material-symbols-outlined { color: var(--md-sys-color-tertiary); font-size: 22px; flex-shrink: 0; }
        .challenge-item span:last-child, .result-item span:last-child { color: var(--md-sys-color-on-surface-variant); line-height: 1.6; }

        .project-navigation {
          display: flex; justify-content: space-between; gap: 20px;
          padding-top: 40px;
          border-top: 2px solid var(--md-sys-color-outline-variant);
        }

        .nav-link {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 50px;
          background: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
          border: 2px solid var(--md-sys-color-outline);
          font-family: 'Vazirmatn', sans-serif; font-size: 15px; font-weight: 600;
          text-decoration: none; transition: all 0.3s ease;
        }

        .nav-link:hover { background: var(--md-sys-color-surface-variant); border-color: var(--md-sys-color-primary); }

        .nav-link.primary {
          background: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
          border-color: transparent;
        }

        .nav-link.primary:hover { box-shadow: var(--md-sys-elevation-2); }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .info-cards { grid-template-columns: repeat(2, 1fr); }
          .two-column-section { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .project-hero { padding-top: 100px; margin-bottom: 40px; }
          .project-container { padding: 0 20px 60px; }
          .info-cards { grid-template-columns: 1fr; }
          .tech-grid { grid-template-columns: 1fr; }
          .project-navigation { flex-direction: column; }
          .nav-link { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}