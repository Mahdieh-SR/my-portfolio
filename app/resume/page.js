// app/resume/page.js
'use client';

import { education, experience, skills, languages, certifications, awards } from '@/data/resume';
import { resumeContent } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ResumePage() {
  const { language } = useLanguage();
  const { hero, sections, skillCategories, experience: expContent, education: eduContent } = resumeContent[language];

  return (
    <div className="resume-page">
      {/* Hero Section */}
      <section className="resume-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="material-symbols-outlined">description</span>
          </div>
          <h1 className="display-large">{hero.title}</h1>
          <p className="headline-small">{hero.subtitle}</p>
          <button className="btn-download">
            <span className="material-symbols-outlined">download</span>
            {hero.downloadButton}
          </button>
        </div>
      </section>

      <div className="container resume-container">
        {/* Experience Section */}
        <section className="resume-section">
          <div className="section-title-wrapper">
            <span className="material-symbols-outlined">work</span>
            <h2 className="headline-large">{sections.experience}</h2>
          </div>

          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <div className="exp-main-info">
                    <h3 className="title-large">{exp[language].position}</h3>
                    <div className="company-info">
                      <span className="material-symbols-outlined">business</span>
                      <span>{exp[language].company}</span>
                      {exp.current && (
                        <span className="current-badge">{expContent.currentBadge}</span>
                      )}
                    </div>
                  </div>
                  <div className="exp-meta">
                    <div className="meta-item">
                      <span className="material-symbols-outlined">schedule</span>
                      <span>{exp.startDate[language]} - {exp.endDate[language]}</span>
                    </div>
                    <div className="meta-item">
                      <span className="material-symbols-outlined">location_on</span>
                      <span>{exp.location[language]}</span>
                    </div>
                  </div>
                </div>

                <p className="body-large exp-description">{exp[language].description}</p>

                <div className="responsibilities">
                  <h4 className="label-large">{expContent.responsibilitiesLabel}</h4>
                  <ul>
                    {exp[language].responsibilities.map((resp, idx) => (
                      <li key={idx} className="body-medium">
                        <span className="material-symbols-outlined">check_circle</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="resume-section">
          <div className="section-title-wrapper">
            <span className="material-symbols-outlined">school</span>
            <h2 className="headline-large">{sections.education}</h2>
          </div>

          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="edu-icon">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div className="edu-content">
                  <h3 className="title-large">{edu[language].degree}</h3>
                  <div className="edu-details">
                    <span className="label-large">{edu[language].field}</span>
                    <span className="separator">•</span>
                    <span className="body-medium">{edu.university[language]}</span>
                  </div>
                  <div className="edu-meta">
                    <div className="meta-item">
                      <span className="material-symbols-outlined">calendar_today</span>
                      <span>{edu.startDate[language]} - {edu.endDate[language]}</span>
                    </div>
                    <div className="meta-item">
                      <span className="material-symbols-outlined">star</span>
                      <span>{eduContent.gpaLabel} {edu.gpa}</span>
                    </div>
                  </div>
                  <p className="body-medium">{edu[language].description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section">
          <div className="section-title-wrapper">
            <span className="material-symbols-outlined">code</span>
            <h2 className="headline-large">{sections.skills}</h2>
          </div>

          <div className="skills-container">
            <div className="skill-category">
              <h3 className="title-large">{skillCategories.frontend}</h3>
              <div className="skills-grid">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="material-symbols-outlined">{skill.icon}</span>
                        <span className="label-large">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="title-large">{skillCategories.backend}</h3>
              <div className="skills-grid">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="material-symbols-outlined">{skill.icon}</span>
                        <span className="label-large">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="title-large">{skillCategories.tools}</h3>
              <div className="skills-grid">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="material-symbols-outlined">{skill.icon}</span>
                        <span className="label-large">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Certifications */}
        <div className={`two-column-section${certifications.length === 0 ? ' single-column' : ''}`}>
          <section className="resume-section">
            <div className="section-title-wrapper">
              <span className="material-symbols-outlined">language</span>
              <h2 className="headline-large">{sections.languages}</h2>
            </div>

            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <div className="lang-header">
                    <span className="title-medium">{lang[language].name}</span>
                    <span className="body-medium lang-level">{lang[language].level}</span>
                  </div>
                  <div className="lang-bar">
                    <div className="lang-progress" style={{width: `${lang.proficiency}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {certifications.length > 0 && (
            <section className="resume-section">
              <div className="section-title-wrapper">
                <span className="material-symbols-outlined">workspace_premium</span>
                <h2 className="headline-large">{sections.certifications}</h2>
              </div>

              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <span className="material-symbols-outlined">verified</span>
                    <div className="cert-content">
                      <h4 className="title-medium">{cert.title}</h4>
                      <div className="cert-meta">
                        <span className="body-small">{cert.issuer}</span>
                        <span className="separator">•</span>
                        <span className="body-small">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section">
            <div className="section-title-wrapper">
              <span className="material-symbols-outlined">emoji_events</span>
              <h2 className="headline-large">{sections.awards}</h2>
            </div>

            <div className="awards-grid">
              {awards.map((award, index) => (
                <div key={index} className="award-card">
                  <div className="award-icon">
                    <span className="material-symbols-outlined">emoji_events</span>
                  </div>
                  <h3 className="title-large">{award.title}</h3>
                  <div className="award-meta">
                    <span className="body-medium">{award.issuer}</span>
                    <span className="separator">•</span>
                    <span className="body-medium">{award.date}</span>
                  </div>
                  <p className="body-medium">{award.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .resume-page { min-height: 100vh; background: var(--md-sys-color-background); }

        .resume-hero {
          padding: 140px 0 80px;
          background: linear-gradient(135deg, #FEF7FF 0%, #F6EDFF 100%);
          text-align: center;
        }

        .hero-badge {
          width: 80px; height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-3);
        }

        .hero-badge .material-symbols-outlined { font-size: 40px; color: white; }
        .resume-hero h1 { color: var(--md-sys-color-on-background); margin: 0 0 16px; }
        .resume-hero p { color: var(--md-sys-color-on-surface-variant); margin: 0 0 32px; }

        .btn-download {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 16px 32px;
          background: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
          border: none; border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif; font-size: 16px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
          box-shadow: var(--md-sys-elevation-2);
        }

        .btn-download:hover { transform: translateY(-4px); box-shadow: var(--md-sys-elevation-4); }

        .resume-container { padding: 80px 24px; }
        .resume-section { margin-bottom: 80px; }

        .section-title-wrapper { display: flex; align-items: center; gap: 12px; margin-bottom: 40px; }
        .section-title-wrapper .material-symbols-outlined { font-size: 36px; color: var(--md-sys-color-primary); }
        .section-title-wrapper h2 { color: var(--md-sys-color-on-background); margin: 0; }

        .experience-list { display: flex; flex-direction: column; gap: 32px; }

        .experience-card {
          padding: 32px;
          background: var(--md-sys-color-surface);
          border-radius: 24px;
          border: 2px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }

        .experience-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); }

        .exp-header { display: flex; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 16px; }
        .exp-main-info h3 { color: var(--md-sys-color-on-surface); margin: 0 0 8px; }

        .company-info {
          display: flex; align-items: center; gap: 8px;
          color: var(--md-sys-color-on-surface-variant);
          font-family: 'Vazirmatn', sans-serif; font-size: 14px;
        }

        .company-info .material-symbols-outlined { font-size: 18px; }

        .current-badge {
          padding: 4px 12px;
          background: var(--md-sys-color-tertiary-container);
          color: var(--md-sys-color-on-tertiary-container);
          border-radius: 50px; font-size: 12px; font-weight: 600;
        }

        .exp-meta { display: flex; flex-direction: column; gap: 8px; }

        .meta-item {
          display: flex; align-items: center; gap: 6px;
          color: var(--md-sys-color-on-surface-variant);
          font-family: 'Vazirmatn', sans-serif; font-size: 14px;
        }

        .meta-item .material-symbols-outlined { font-size: 18px; }
        .exp-description { color: var(--md-sys-color-on-surface-variant); margin: 16px 0; line-height: 1.7; }

        .responsibilities { margin: 20px 0; }
        .responsibilities h4 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .responsibilities ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }

        .responsibilities li {
          display: flex; align-items: flex-start; gap: 8px;
          color: var(--md-sys-color-on-surface-variant); line-height: 1.6;
        }

        .responsibilities .material-symbols-outlined { font-size: 18px; color: var(--md-sys-color-tertiary); flex-shrink: 0; margin-top: 2px; }

        .technologies { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }

        .tech-tag {
          padding: 6px 14px;
          background: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
          border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif; font-size: 12px; font-weight: 600;
        }

        .education-list { display: flex; flex-direction: column; gap: 24px; }

        .education-card {
          display: flex; gap: 24px; padding: 32px;
          background: var(--md-sys-color-surface);
          border-radius: 24px;
          border: 2px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }

        .education-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); }

        .edu-icon {
          width: 60px; height: 60px;
          background: var(--md-sys-color-primary-container);
          border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .edu-icon .material-symbols-outlined { font-size: 32px; color: var(--md-sys-color-on-primary-container); }

        .edu-content { flex: 1; }
        .edu-content h3 { color: var(--md-sys-color-on-surface); margin: 0 0 8px; }
        .edu-details { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .separator { color: var(--md-sys-color-outline); }
        .edu-meta { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 12px; }
        .edu-content p { color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.6; }

        .skills-container { display: flex; flex-direction: column; gap: 40px; }

        .skill-category h3 { color: var(--md-sys-color-on-surface); margin: 0 0 24px; padding-bottom: 12px; border-bottom: 2px solid var(--md-sys-color-outline-variant); }
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

        .skill-item {
          padding: 20px;
          background: var(--md-sys-color-surface);
          border-radius: 16px;
          border: 1px solid var(--md-sys-color-outline-variant);
        }

        .skill-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .skill-name { display: flex; align-items: center; gap: 8px; color: var(--md-sys-color-on-surface); }
        .skill-name .material-symbols-outlined { font-size: 20px; color: var(--md-sys-color-primary); }
        .skill-percentage { font-family: 'Vazirmatn', sans-serif; font-size: 14px; font-weight: 600; color: var(--md-sys-color-primary); }

        .skill-bar { height: 8px; background: var(--md-sys-color-surface-variant); border-radius: 50px; overflow: hidden; }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 50px; transition: width 1s ease-out;
        }

        .two-column-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 80px; }
        .two-column-section.single-column { grid-template-columns: 1fr; max-width: 600px; margin-left: auto; margin-right: auto; }

        .languages-list { display: flex; flex-direction: column; gap: 20px; }

        .language-item {
          padding: 20px;
          background: var(--md-sys-color-surface);
          border-radius: 16px;
          border: 1px solid var(--md-sys-color-outline-variant);
        }

        .lang-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .lang-header span:first-child { color: var(--md-sys-color-on-surface); }
        .lang-level { color: var(--md-sys-color-on-surface-variant); }
        .lang-bar { height: 8px; background: var(--md-sys-color-surface-variant); border-radius: 50px; overflow: hidden; }

        .lang-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--md-sys-color-secondary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 50px; transition: width 1s ease-out;
        }

        .certifications-list { display: flex; flex-direction: column; gap: 16px; }

        .cert-item {
          display: flex; gap: 12px; padding: 20px;
          background: var(--md-sys-color-surface);
          border-radius: 16px;
          border: 1px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }

        .cert-item:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-1); }
        .cert-item > .material-symbols-outlined { font-size: 24px; color: var(--md-sys-color-primary); flex-shrink: 0; }
        .cert-content h4 { color: var(--md-sys-color-on-surface); margin: 0 0 6px; }
        .cert-meta { display: flex; align-items: center; gap: 6px; color: var(--md-sys-color-on-surface-variant); }

        .awards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .award-card {
          padding: 32px;
          background: var(--md-sys-color-surface);
          border-radius: 24px;
          border: 2px solid var(--md-sys-color-outline-variant);
          text-align: center; transition: all 0.3s ease;
        }

        .award-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); transform: translateY(-4px); }

        .award-icon {
          width: 70px; height: 70px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-2);
        }

        .award-icon .material-symbols-outlined { font-size: 36px; color: white; }
        .award-card h3 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .award-meta { display: flex; justify-content: center; align-items: center; gap: 8px; margin-bottom: 12px; color: var(--md-sys-color-on-surface-variant); }
        .award-card p { color: var(--md-sys-color-on-surface-variant); margin: 0; line-height: 1.6; }

        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: 1fr; }
          .awards-grid { grid-template-columns: 1fr; }
          .two-column-section { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .resume-hero { padding: 120px 0 60px; }
          .resume-container { padding: 60px 20px; }
          .exp-header { flex-direction: column; }
          .education-card { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}