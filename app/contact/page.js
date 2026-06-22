'use client';

// my-portfolio/app/contact/page.js
import { useState } from 'react';
import { personalInfo } from '@/data/personal';
import { contactContent } from '@/data/content';

export default function ContactPage() {
  const { hero, infoSection, form, contactMethods: methods, socialLinks: socials } = contactContent;

  const [formData, setFormData]     = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]         = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    { ...methods[0], value: personalInfo.email,    link: `mailto:${personalInfo.email}`              },
    { ...methods[1], value: personalInfo.phone,    link: `tel:${personalInfo.phone.replace(/\s/g,'')}` },
    { ...methods[2], value: personalInfo.location, link: null                                         },
  ];

  const socialLinks = [
    { ...socials[0], url: personalInfo.social.github              },
    { ...socials[1], url: personalInfo.social.linkedin            },
    { ...socials[2], url: personalInfo.social.telegram            },
    { ...socials[3], url: `mailto:${personalInfo.email}`          },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const v = form.validation;
    const newErrors = {};
    if (!formData.name.trim())                          newErrors.name    = v.nameRequired;
    if (!formData.email.trim())                         newErrors.email   = v.emailRequired;
    else if (!/\S+@\S+\.\S+/.test(formData.email))     newErrors.email   = v.emailInvalid;
    if (!formData.subject.trim())                       newErrors.subject = v.subjectRequired;
    if (!formData.message.trim())                       newErrors.message = v.messageRequired;
    else if (formData.message.trim().length < 10)       newErrors.message = v.messageTooShort;
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="material-symbols-outlined">forum</span>
          </div>
          <h1 className="display-large">{hero.title}</h1>
          <p className="headline-small">{hero.subtitle}</p>
        </div>
      </section>

      <div className="container contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-section">
              <h2 className="headline-medium">{infoSection.title}</h2>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method" style={{'--icon-color': method.color}}>
                    <div className="method-icon">
                      <span className="material-symbols-outlined">{method.icon}</span>
                    </div>
                    <div className="method-content">
                      <span className="label-large">{method.title}</span>
                      {method.link
                        ? <a href={method.link} className="title-medium">{method.value}</a>
                        : <span className="title-medium">{method.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-section">
              <h2 className="headline-medium">{infoSection.socialTitle}</h2>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                    className="social-link" aria-label={social.label} style={{'--social-color': social.color}}>
                    <span className="material-symbols-outlined">{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-icon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="availability-content">
                <h3 className="title-large">{infoSection.availabilityTitle}</h3>
                <p className="body-medium">{personalInfo.availability.message}</p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-card">
              <h2 className="headline-medium">{form.title}</h2>
              <p className="body-medium form-description">{form.description}</p>

              <form onSubmit={handleSubmit} className="contact-form">
                {[
                  { id: 'name',    type: 'text',  icon: 'person'  },
                  { id: 'email',   type: 'email', icon: 'mail'    },
                  { id: 'subject', type: 'text',  icon: 'subject' },
                ].map((field) => (
                  <div key={field.id} className="form-field">
                    <label htmlFor={field.id} className="label-large">{form.fields[field.id].label}</label>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined">{field.icon}</span>
                      <input type={field.type} id={field.id} name={field.id}
                        value={formData[field.id]} onChange={handleChange}
                        className={`form-input ${errors[field.id] ? 'error' : ''}`}
                        placeholder={form.fields[field.id].placeholder} />
                    </div>
                    {errors[field.id] && <span className="error-text">{errors[field.id]}</span>}
                  </div>
                ))}

                <div className="form-field">
                  <label htmlFor="message" className="label-large">{form.fields.message.label}</label>
                  <div className="input-wrapper textarea-wrapper">
                    <span className="material-symbols-outlined">chat</span>
                    <textarea id="message" name="message" value={formData.message}
                      onChange={handleChange} rows="6"
                      className={`form-input ${errors.message ? 'error' : ''}`}
                      placeholder={form.fields.message.placeholder} />
                  </div>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className={`submit-button ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                  {isSubmitting
                    ? <><span className="spinner" />{form.submittingButton}</>
                    : <><span className="material-symbols-outlined">send</span>{form.submitButton}</>
                  }
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>{form.successMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page { min-height: 100vh; background: var(--md-sys-color-background); }

        .contact-hero {
          padding: 140px 0 80px;
          background: linear-gradient(160deg, #FAFAFA 0%, #F5F3FF 50%, #EDE9FE 100%);
          text-align: center; position: relative; overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(91,33,182,0.12) 0%, transparent 70%);
          top: -150px; left: 50%; transform: translateX(-50%);
          border-radius: 50%;
        }

        .hero-badge {
          width: 80px; height: 80px; margin: 0 auto 24px;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary));
          border-radius: 20px; display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-3); animation: scaleIn 0.5s ease-out;
        }
        .hero-badge .material-symbols-outlined { font-size: 40px; color: white; }
        .contact-hero h1 { color: var(--md-sys-color-on-surface); margin: 0 0 16px; animation: fadeInUp 0.6s ease-out 0.1s backwards; }
        .contact-hero p  { color: var(--md-sys-color-on-surface-variant); margin: 0; animation: fadeInUp 0.6s ease-out 0.2s backwards; }

        .contact-container { padding: 80px 24px; }

        .contact-grid {
          display: grid; grid-template-columns: 400px 1fr;
          gap: 48px; animation: fadeInUp 0.6s ease-out 0.3s backwards;
        }

        .contact-info { display: flex; flex-direction: column; gap: 32px; }
        .info-section h2 { color: var(--md-sys-color-on-surface); margin: 0 0 20px; }
        .contact-methods { display: flex; flex-direction: column; gap: 16px; }

        .contact-method {
          display: flex; align-items: center; gap: 16px;
          padding: 20px; background: white;
          border-radius: 16px; border: 1.5px solid var(--md-sys-color-outline-variant);
          transition: all 0.3s ease;
        }
        .contact-method:hover { border-color: var(--icon-color); box-shadow: var(--md-sys-elevation-2); transform: translateX(-4px); }

        .method-icon {
          width: 56px; height: 56px; background: var(--md-sys-color-surface-variant);
          border-radius: 14px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.3s ease;
        }
        .contact-method:hover .method-icon { background: var(--icon-color); }
        .method-icon .material-symbols-outlined { font-size: 28px; color: var(--md-sys-color-on-surface); transition: color 0.3s ease; }
        .contact-method:hover .method-icon .material-symbols-outlined { color: white; }

        .method-content { display: flex; flex-direction: column; gap: 4px; flex: 1; }
        .method-content .label-large { color: var(--md-sys-color-on-surface-variant); }
        .method-content .title-medium, .method-content a { color: var(--md-sys-color-on-surface); text-decoration: none; transition: color 0.3s ease; }
        .method-content a:hover { color: var(--md-sys-color-primary); }

        .social-links { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .social-link {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 20px; background: white; border-radius: 16px;
          border: 1.5px solid var(--md-sys-color-outline-variant);
          text-decoration: none; transition: all 0.3s ease;
        }
        .social-link:hover { background: var(--social-color); border-color: var(--social-color); transform: translateY(-4px); box-shadow: var(--md-sys-elevation-3); }
        .social-link .material-symbols-outlined { font-size: 32px; color: var(--md-sys-color-on-surface); transition: color 0.3s ease; }
        .social-link:hover .material-symbols-outlined { color: white; }
        .social-link span:last-child { font-family: 'Vazirmatn', sans-serif; font-size: 13px; font-weight: 600; color: var(--md-sys-color-on-surface); transition: color 0.3s ease; }
        .social-link:hover span:last-child { color: white; }

        .availability-card { display: flex; gap: 16px; padding: 24px; background: var(--md-sys-color-primary-container); border-radius: 20px; }
        .availability-icon { width: 48px; height: 48px; background: var(--md-sys-color-primary); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .availability-icon .material-symbols-outlined { font-size: 28px; color: white; }
        .availability-content h3 { color: var(--md-sys-color-on-primary-container); margin: 0 0 8px; }
        .availability-content p  { color: var(--md-sys-color-on-primary-container); margin: 0; line-height: 1.6; }

        .form-card { background: white; border-radius: 24px; padding: 40px; box-shadow: var(--md-sys-elevation-2); border: 1.5px solid var(--md-sys-color-outline-variant); }
        .form-card h2 { color: var(--md-sys-color-on-surface); margin: 0 0 12px; }
        .form-description { color: var(--md-sys-color-on-surface-variant); margin: 0 0 32px; }
        .contact-form { display: flex; flex-direction: column; gap: 24px; }
        .form-field { display: flex; flex-direction: column; gap: 8px; }
        .form-field label { color: var(--md-sys-color-on-surface); }

        .input-wrapper { position: relative; display: flex; align-items: flex-start; }
        .input-wrapper .material-symbols-outlined { position: absolute; right: 16px; top: 16px; font-size: 20px; color: var(--md-sys-color-on-surface-variant); pointer-events: none; transition: color 0.3s ease; z-index: 1; }
        .textarea-wrapper .material-symbols-outlined { top: 16px; }

        .form-input {
          width: 100%; padding: 16px 16px 16px 48px;
          background: var(--md-sys-color-surface-variant);
          border: 2px solid transparent; border-radius: 12px;
          color: var(--md-sys-color-on-surface);
          font-family: 'Vazirmatn', sans-serif; font-size: 16px;
          transition: all 0.3s ease; outline: none;
        }
        textarea.form-input { resize: vertical; min-height: 150px; line-height: 1.6; }
        .form-input::placeholder { color: var(--md-sys-color-on-surface-variant); }
        .form-input:focus { background: white; border-color: var(--md-sys-color-primary); box-shadow: 0 0 0 4px var(--md-sys-color-primary-container); }
        .input-wrapper:focus-within .material-symbols-outlined { color: var(--md-sys-color-primary); }
        .form-input.error { border-color: var(--md-sys-color-error); }
        .error-text { color: var(--md-sys-color-error); font-family: 'Vazirmatn', sans-serif; font-size: 13px; display: flex; align-items: center; gap: 6px; }
        .error-text::before { content: '⚠'; font-size: 14px; }

        .submit-button {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 18px 32px;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
          color: white; border: none; border-radius: 50px;
          font-family: 'Vazirmatn', sans-serif; font-size: 18px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; box-shadow: var(--md-sys-elevation-2);
        }
        .submit-button:hover:not(:disabled) { box-shadow: var(--md-sys-elevation-4); transform: translateY(-4px); }
        .submit-button:disabled { opacity: 0.6; cursor: not-allowed; }

        .spinner { width: 20px; height: 20px; border: 3px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.8s linear infinite; }

        .success-message {
          display: flex; align-items: center; gap: 12px;
          padding: 18px 24px; background: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          border-radius: 16px; font-family: 'Vazirmatn', sans-serif;
          font-size: 15px; font-weight: 500; animation: slideIn 0.4s ease-out;
          border: 1.5px solid var(--md-sys-color-primary);
        }
        .success-message .material-symbols-outlined { font-size: 28px; color: var(--md-sys-color-primary); }

        @keyframes spin     { to { transform: rotate(360deg); } }
        @keyframes slideIn  { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px);  } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn  { from { opacity: 0; transform: scale(0.8);        } to { opacity: 1; transform: scale(1);    } }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-info { order: 2; }
          .form-section { order: 1; }
        }
        @media (max-width: 768px) {
          .contact-hero { padding: 120px 0 60px; }
          .contact-container { padding: 60px 20px; }
          .form-card { padding: 28px 20px; }
          .social-links { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}