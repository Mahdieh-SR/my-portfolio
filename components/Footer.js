// components/Footer.js
'use client';

import Link from 'next/link';
import { footerContent, footerContact } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const { brandTitle, brandDescription, quickLinksTitle, servicesTitle, contactTitle,
    copyrightSuffix, builtWith, builtWithTech, quickLinks, services,
    contactLocation, socialLinks } = footerContent[language];
  const { contactEmail, contactPhone, contactPhoneRaw } = footerContact;

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="brand-logo">
              <div className="logo-icon">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="brand-title">{brandTitle}</h3>
            </div>
            <p className="brand-description">{brandDescription}</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{'--hover-color': social.color}}
                >
                  <span className="material-symbols-outlined">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">
              <span className="material-symbols-outlined">link</span>
              {quickLinksTitle}
            </h4>
            <ul className="link-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="footer-link">
                    <span className="material-symbols-outlined">chevron_left</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="section-title">
              <span className="material-symbols-outlined">settings</span>
              {servicesTitle}
            </h4>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="material-symbols-outlined">check_circle</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">
              <span className="material-symbols-outlined">contact_mail</span>
              {contactTitle}
            </h4>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="material-symbols-outlined">mail</span>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </li>
              <li className="contact-item">
                <span className="material-symbols-outlined">call</span>
                <a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a>
              </li>
              <li className="contact-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>{contactLocation}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            <span className="material-symbols-outlined">copyright</span>
            <span>{currentYear} {copyrightSuffix}</span>
          </div>
          <div className="credit">
            <span>{builtWith}</span>
            <span className="heart">❤️</span>
            <span>{builtWithTech}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, var(--md-sys-color-surface) 0%, #f0ebf8 100%);
          margin-top: auto;
          position: relative;
        }

        .footer-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 60px;
          fill: var(--md-sys-color-background);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 24px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .brand-section {
          gap: 16px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--md-sys-elevation-2);
        }

        .logo-icon .material-symbols-outlined {
          color: var(--md-sys-color-on-primary);
          font-size: 28px;
        }

        .brand-title {
          font-family: 'Vazirmatn', sans-serif;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .brand-description {
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: var(--md-sys-color-on-surface-variant);
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--md-sys-color-surface);
          border-radius: 12px;
          color: var(--md-sys-color-on-surface);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--md-sys-elevation-1);
        }

        .social-link:hover {
          background: var(--hover-color, var(--md-sys-color-primary));
          color: white;
          transform: translateY(-4px);
          box-shadow: var(--md-sys-elevation-3);
        }

        .social-link .material-symbols-outlined {
          font-size: 22px;
        }

        .section-title {
          font-family: 'Vazirmatn', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--md-sys-color-on-surface);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title .material-symbols-outlined {
          font-size: 24px;
          color: var(--md-sys-color-primary);
        }

        .link-list,
        .services-list,
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px;
          color: var(--md-sys-color-on-surface-variant);
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .footer-link .material-symbols-outlined {
          font-size: 18px;
          opacity: 0;
          transform: translateX(4px);
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: var(--md-sys-color-primary);
          padding-right: 8px;
        }

        .footer-link:hover .material-symbols-outlined {
          opacity: 1;
          transform: translateX(0);
        }

        .services-list li {
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px;
          color: var(--md-sys-color-on-surface-variant);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .services-list .material-symbols-outlined {
          font-size: 18px;
          color: var(--md-sys-color-tertiary);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px;
          color: var(--md-sys-color-on-surface-variant);
        }

        .contact-item .material-symbols-outlined {
          font-size: 20px;
          color: var(--md-sys-color-primary);
          flex-shrink: 0;
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--md-sys-color-primary);
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 2px solid var(--md-sys-color-outline-variant);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright,
        .credit {
          font-family: 'Vazirmatn', sans-serif;
          font-size: 14px;
          color: var(--md-sys-color-on-surface-variant);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .copyright .material-symbols-outlined {
          font-size: 18px;
        }

        .heart {
          color: var(--md-sys-color-error);
          animation: heartbeat 1.5s ease-in-out infinite;
          font-size: 18px;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 60px 20px 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            padding-top: 24px;
          }

          .footer-wave svg {
            height: 40px;
          }
        }
      `}</style>
    </footer>
  );
}