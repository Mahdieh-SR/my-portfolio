// app/about/page.js
'use client';

import { personalInfo } from '@/data/personal';
import { aboutContent } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const { hero, sections, journey, values, cta } = aboutContent[language];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="material-symbols-outlined">person</span>
          </div>
          <h1 className="display-large">{hero.title}</h1>
          <p className="headline-small">{hero.subtitle}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {sections.map((section, index) => (
              <div key={index} className="about-card">
                <div className="card-icon">
                  <span className="material-symbols-outlined">{section.icon}</span>
                </div>
                <h3 className="title-large">{section.title}</h3>
                <p className="body-large">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <h2 className="display-medium">{journey.sectionTitle}</h2>
            <p className="headline-small">{journey.sectionSubtitle}</p>
          </div>

          <div className="timeline">
            {journey.items.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="title-large">{item.title}</h3>
                  <p className="body-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="display-medium">{values.sectionTitle}</h2>
            <p className="headline-small">{values.sectionSubtitle}</p>
          </div>

          <div className="values-grid">
            {values.items.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span className="material-symbols-outlined">{value.icon}</span>
                </div>
                <h3 className="title-large">{value.title}</h3>
                <p className="body-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="display-medium">{cta.title}</h2>
            <p className="headline-small">{cta.subtitle}</p>
            <a href="/contact" className="btn-cta">
              <span className="material-symbols-outlined">mail</span>
              {cta.buttonText}
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page { min-height: 100vh; }

        .about-hero {
          padding: 140px 0 80px;
          background: linear-gradient(135deg, #FEF7FF 0%, #F6EDFF 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(103, 80, 164, 0.1) 0%, transparent 70%);
          top: -150px; right: -150px;
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
        .about-hero h1 { color: var(--md-sys-color-on-background); margin: 0 0 16px; animation: fadeInUp 0.6s ease-out 0.1s backwards; }
        .about-hero p { color: var(--md-sys-color-on-surface-variant); margin: 0; animation: fadeInUp 0.6s ease-out 0.2s backwards; }

        .about-content { padding: 80px 0; background: var(--md-sys-color-background); }

        .about-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .about-card {
          padding: 40px;
          background: var(--md-sys-color-surface);
          border-radius: 24px;
          transition: all 0.3s ease;
          border: 2px solid var(--md-sys-color-outline-variant);
        }

        .about-card:hover { transform: translateY(-8px); box-shadow: var(--md-sys-elevation-3); border-color: var(--md-sys-color-primary); }

        .card-icon {
          width: 70px; height: 70px;
          background: var(--md-sys-color-primary-container);
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
        }

        .card-icon .material-symbols-outlined { font-size: 36px; color: var(--md-sys-color-on-primary-container); }
        .about-card h3 { color: var(--md-sys-color-on-surface); margin: 0 0 16px; }
        .about-card p { color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.8; }

        .journey-section { padding: 100px 0; background: var(--md-sys-color-surface); }

        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { color: var(--md-sys-color-on-background); margin: 0 0 16px; }
        .section-header p { color: var(--md-sys-color-on-surface-variant); margin: 0; }

        .timeline { max-width: 800px; margin: 0 auto; position: relative; }

        .timeline::before {
          content: '';
          position: absolute;
          right: 30px; top: 0; bottom: 0;
          width: 3px;
          background: var(--md-sys-color-outline-variant);
        }

        .timeline-item { position: relative; padding-right: 80px; margin-bottom: 60px; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-marker { position: absolute; right: 18px; top: 0; }

        .marker-dot {
          width: 24px; height: 24px;
          background: var(--md-sys-color-primary);
          border-radius: 50%;
          border: 4px solid var(--md-sys-color-surface);
          box-shadow: 0 0 0 4px var(--md-sys-color-primary-container);
        }

        .timeline-content {
          background: var(--md-sys-color-background);
          padding: 32px;
          border-radius: 20px;
          border: 2px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }

        .timeline-content:hover { transform: translateX(-8px); box-shadow: var(--md-sys-elevation-2); border-color: var(--md-sys-color-primary); }

        .timeline-year {
          display: inline-block;
          padding: 8px 16px;
          background: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
          border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px; font-weight: 700;
          margin-bottom: 16px;
        }

        .timeline-content h3 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .timeline-content p { color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.7; }

        .values-section { padding: 100px 0; background: var(--md-sys-color-background); }

        .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

        .value-card {
          padding: 40px;
          background: var(--md-sys-color-surface);
          border-radius: 24px;
          transition: all 0.3s ease;
          border: 2px solid var(--md-sys-color-outline-variant);
          text-align: center;
        }

        .value-card:hover { transform: translateY(-8px); box-shadow: var(--md-sys-elevation-3); border-color: var(--md-sys-color-primary); }

        .value-icon {
          width: 80px; height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-2);
        }

        .value-icon .material-symbols-outlined { font-size: 40px; color: white; }
        .value-card h3 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .value-card p { color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.7; }

        .contact-cta {
          padding: 100px 0;
          background: linear-gradient(135deg, #6750A4 0%, #7D5260 100%);
        }

        .cta-content { text-align: center; max-width: 700px; margin: 0 auto; }
        .cta-content h2 { color: white; margin: 0 0 16px; }
        .cta-content p { color: rgba(255, 255, 255, 0.9); margin: 0 0 40px; }

        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 18px 40px;
          background: white;
          color: var(--md-sys-color-primary);
          border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 18px; font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: var(--md-sys-elevation-3);
        }

        .btn-cta:hover { transform: translateY(-4px); box-shadow: var(--md-sys-elevation-5); }
        .btn-cta .material-symbols-outlined { font-size: 24px; }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .about-hero { padding: 120px 0 60px; }
          .about-content, .journey-section, .values-section, .contact-cta { padding: 60px 0; }
          .timeline::before { right: 15px; }
          .timeline-marker { right: 3px; }
          .timeline-item { padding-right: 60px; margin-bottom: 40px; }
          .timeline-content { padding: 24px; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}