'use client';

// my-portfolio/app/page.js
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { homeContent } from '@/data/content';

export default function HomePage() {
  const { hero, skills, features, cta } = homeContent;

  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <div className="container">
          <div className="hero-grid">

            <div className="hero-content">
              <div className="badge">
                <span className="badge-dot" />
                {hero.badge}
              </div>

              <h1 className="display-large hero-title">
                سلام، من{' '}
                <span className="gradient-text">{personalInfo.name}</span>
                {' '}هستم
              </h1>

              <p className="headline-small hero-subtitle">
                {personalInfo.title}
              </p>

              <p className="body-large hero-description">
                {personalInfo.bio}
              </p>

              <div className="skills-chips">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="material-symbols-outlined">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <Link href="/projects" className="btn-primary">
                  <span className="material-symbols-outlined">work</span>
                  {hero.ctaPrimary}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <span className="material-symbols-outlined">mail</span>
                  {hero.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="avatar-wrapper">
                <div className="avatar-ring ring-1" />
                <div className="avatar-ring ring-2" />
                <div className="avatar-main">
                  <span className="avatar-initial">م</span>
                </div>
                <div className="float-card card-1">
                  <span className="material-symbols-outlined">code</span>
                  <span>Next.js</span>
                </div>
                <div className="float-card card-2">
                  <span className="material-symbols-outlined">palette</span>
                  <span>UI/UX</span>
                </div>
                <div className="float-card card-3">
                  <span className="material-symbols-outlined">psychology</span>
                  <span>هوش مصنوعی</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">چرا من؟</span>
            <h2 className="display-medium">{features.sectionTitle}</h2>
            <p className="body-large section-subtitle">{features.sectionSubtitle}</p>
          </div>
          <div className="features-grid">
            {features.items.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h3 className="title-large">{f.title}</h3>
                <p className="body-medium">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <div className="cta-content">
              <h2 className="display-medium">{cta.title}</h2>
              <p className="headline-small">{cta.subtitle}</p>
            </div>
            <Link href="/contact" className="btn-cta">
              <span className="material-symbols-outlined">send</span>
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page { min-height: 100vh; overflow-x: hidden; }

        .blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.35; pointer-events: none; z-index: 0;
        }
        .blob-1 { width: 600px; height: 600px; background: radial-gradient(circle, #7C3AED 0%, transparent 70%); top: -200px; right: -200px; }
        .blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, #A855F7 0%, transparent 70%); bottom: -100px; left: -100px; }
        .blob-3 { width: 300px; height: 300px; background: radial-gradient(circle, #5B21B6 0%, transparent 70%); top: 50%; left: 50%; }

        .hero-section {
          padding: 140px 0 100px; position: relative;
          background: linear-gradient(160deg, #FAFAFA 0%, #F5F3FF 50%, #EDE9FE 100%);
          overflow: hidden;
        }

        .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 60px; align-items: center; position: relative; z-index: 1;
        }

        .hero-content {
          display: flex; flex-direction: column; gap: 22px;
          animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; background: white;
          border: 1.5px solid var(--md-sys-color-outline-variant);
          border-radius: 50px; font-size: 13px; font-weight: 600;
          color: var(--md-sys-color-primary); width: fit-content;
          box-shadow: var(--md-sys-elevation-1);
        }
        .badge-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.1); }
        }

        .hero-title { color: var(--md-sys-color-on-surface); line-height: 1.2; }
        .gradient-text {
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-subtitle { color: var(--md-sys-color-primary); font-weight: 600; }
        .hero-description { color: var(--md-sys-color-on-surface-variant); line-height: 1.8; }

        .skills-chips { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px; background: white;
          border: 1.5px solid var(--md-sys-color-outline-variant);
          border-radius: 50px; font-size: 13px; font-weight: 500;
          color: var(--md-sys-color-on-surface);
          transition: all 0.25s ease; box-shadow: var(--md-sys-elevation-1);
        }
        .skill-chip .material-symbols-outlined { font-size: 16px; color: var(--md-sys-color-primary); }
        .skill-chip:hover {
          background: var(--md-sys-color-primary-container);
          border-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-primary);
          transform: translateY(-2px); box-shadow: var(--md-sys-elevation-2);
        }

        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary, .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 15px; font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
          color: white; box-shadow: var(--md-sys-elevation-3);
        }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: var(--md-sys-elevation-5); }
        .btn-secondary {
          background: white; color: var(--md-sys-color-primary);
          border: 2px solid var(--md-sys-color-outline-variant);
          box-shadow: var(--md-sys-elevation-1);
        }
        .btn-secondary:hover {
          background: var(--md-sys-color-primary-container);
          border-color: var(--md-sys-color-primary);
          transform: translateY(-3px);
        }
        .btn-primary .material-symbols-outlined,
        .btn-secondary .material-symbols-outlined { font-size: 18px; }

        .hero-visual {
          display: flex; justify-content: center; align-items: center;
          animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.15s both;
        }
        .avatar-wrapper { position: relative; width: 380px; height: 380px; }
        .avatar-ring {
          position: absolute; border-radius: 50%;
          border: 2px solid var(--md-sys-color-outline-variant);
          animation: spin-slow linear infinite;
        }
        .ring-1 { inset: -20px; animation-duration: 20s; border-style: dashed; }
        .ring-2 { inset: -50px; animation-duration: 35s; animation-direction: reverse; opacity: 0.5; }
        @keyframes spin-slow { to { transform: rotate(360deg); } }

        .avatar-main {
          position: absolute; inset: 30px;
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-5);
        }
        .avatar-initial { font-size: 100px; font-weight: 800; color: white; line-height: 1; }

        .float-card {
          position: absolute;
          display: flex; align-items: center; gap: 8px;
          padding: 10px 16px; background: white;
          border-radius: 50px; font-size: 13px; font-weight: 600;
          color: var(--md-sys-color-on-surface);
          box-shadow: var(--md-sys-elevation-3);
          border: 1.5px solid var(--md-sys-color-outline-variant);
          white-space: nowrap;
        }
        .float-card .material-symbols-outlined { font-size: 18px; color: var(--md-sys-color-primary); }
        .card-1 { top: 10px; right: -20px; animation: float 4s ease-in-out infinite; }
        .card-2 { bottom: 40px; right: -30px; animation: float 4s ease-in-out 1.3s infinite; }
        .card-3 { bottom: 10px; left: -10px; animation: float 4s ease-in-out 2.6s infinite; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }

        /* ── Features ── */
        .features-section { padding: 100px 0; background: var(--md-sys-color-background); }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-tag {
          display: inline-block; padding: 6px 16px;
          background: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-primary);
          border-radius: 50px; font-size: 13px; font-weight: 600;
          margin-bottom: 14px;
        }
        .section-header h2 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .section-subtitle { color: var(--md-sys-color-on-surface-variant); max-width: 500px; margin: 0 auto; }
        .features-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
        .feature-card {
          padding: 36px; border-radius: 24px; background: white;
          border: 1.5px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }
        .feature-card:hover { transform: translateY(-6px); box-shadow: var(--md-sys-elevation-3); border-color: var(--md-sys-color-primary); }
        .feature-icon {
          width: 60px; height: 60px; border-radius: 16px;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary));
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; box-shadow: var(--md-sys-elevation-2);
        }
        .feature-icon .material-symbols-outlined { font-size: 30px; color: white; }
        .feature-card h3 { color: var(--md-sys-color-on-surface); margin: 0 0 10px; }
        .feature-card p { color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.7; }

        /* ── CTA ── */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #3B0764 0%, #5B21B6 50%, #7C3AED 100%);
        }
        .cta-card {
          position: relative; overflow: hidden;
          display: flex; justify-content: space-between; align-items: center;
          padding: 56px 60px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1.5px solid rgba(255,255,255,0.2);
        }
        .cta-glow {
          position: absolute; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%);
          top: -100px; left: -100px; pointer-events: none;
        }
        .cta-content { position: relative; z-index: 1; }
        .cta-content h2 { color: white; margin: 0 0 10px; }
        .cta-content p { color: rgba(255,255,255,0.85); margin: 0; }
        .btn-cta {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 16px 36px; background: white;
          color: var(--md-sys-color-primary); border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 16px; font-weight: 700;
          box-shadow: var(--md-sys-elevation-4);
          transition: all 0.3s ease; white-space: nowrap;
        }
        .btn-cta:hover { transform: translateY(-4px); box-shadow: var(--md-sys-elevation-5); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-visual { order: -1; }
          .avatar-wrapper { width: 300px; height: 300px; }
          .avatar-initial { font-size: 76px; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 120px 0 60px; }
          .hero-actions { flex-direction: column; }
          .btn-primary, .btn-secondary { justify-content: center; }
          .cta-card { flex-direction: column; gap: 28px; padding: 36px 24px; text-align: center; }
          .btn-cta { width: 100%; justify-content: center; }
          .avatar-wrapper { width: 250px; height: 250px; }
          .avatar-initial { font-size: 60px; }
          .float-card { display: none; }
          .card-3 { display: flex; bottom: -20px; left: 50%; transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}