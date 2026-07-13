'use client';

// my-portfolio/components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarContent } from '@/data/content';
import { personalInfo } from '@/data/personal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = navbarContent[language];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setVisible(current < lastScroll || current < 80);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
        <div className="navbar-container">

          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <div className="logo-texts">
              <span className="logo-name">{personalInfo.name[language]}</span>
              <span className="logo-role">{t.logoRole}</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {t.navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.name}</span>
                {isActive(item.path) && <span className="active-indicator" />}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="navbar-end">
            <div className="availability-badge">
              <span className="availability-dot" />
              {t.availabilityBadge}
            </div>
            <button type="button" className="lang-switch" onClick={toggleLanguage} aria-label="Switch language">
              <span className="material-symbols-outlined">language</span>
              {t.langSwitchLabel}
            </button>
            <Link href="/contact" className="navbar-cta">
              <span className="material-symbols-outlined">mail</span>
              {t.ctaText}
              <span className="cta-arrow">←</span>
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t.mobileMenuAriaLabel}
            >
              <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span /><span /><span />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-inner">
            {t.navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="mobile-link-icon">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <span className="material-symbols-outlined mobile-check">check_circle</span>
                )}
              </Link>
            ))}
            <button type="button" className="mobile-lang-switch" onClick={toggleLanguage}>
              <div className="mobile-link-icon">
                <span className="material-symbols-outlined">language</span>
              </div>
              <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
            </button>
            <Link href="/contact" className="mobile-cta" onClick={() => setIsOpen(false)}>
              <span className="material-symbols-outlined">mail</span>
              {t.ctaText}
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: rgba(250,250,250,0.7);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.95);
          border-bottom-color: var(--md-sys-color-outline-variant);
          box-shadow: 0 4px 24px rgba(91,33,182,0.08);
        }
        .navbar.hidden  { transform: translateY(-100%); }
        .navbar.visible { transform: translateY(0);     }

        .navbar-container {
          max-width: 1200px; margin: 0 auto;
          padding: 14px 24px;
          display: flex; justify-content: space-between; align-items: center;
        }

        /* ── Logo ── */
        .logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; transition: transform 0.3s ease;
        }
        .logo:hover { transform: scale(1.03); }
        .logo-icon {
          width: 42px; height: 42px;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary));
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--md-sys-elevation-2);
          transition: box-shadow 0.3s ease;
        }
        .logo:hover .logo-icon { box-shadow: var(--md-sys-elevation-4); }
        .logo-icon .material-symbols-outlined { color: white; font-size: 22px; }
        .logo-texts { display: flex; flex-direction: column; gap: 1px; }
        .logo-name {
          font-size: 16px; font-weight: 700;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .logo-role { font-size: 11px; color: var(--md-sys-color-on-surface-variant); font-weight: 400; }

        /* ── Desktop Nav ── */
        .desktop-menu { display: flex; gap: 8px; align-items: center; }

        .nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 9px 14px; border-radius: 12px;
          font-size: 14px; font-weight: 500;
          color: var(--md-sys-color-on-surface-variant);
          text-decoration: none; position: relative;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link .material-symbols-outlined { font-size: 18px; transition: transform 0.25s ease; }
        .nav-link:hover {
          background: var(--md-sys-color-surface-variant);
          color: var(--md-sys-color-primary);
        }
        .nav-link:hover .material-symbols-outlined { transform: translateY(-2px); }
        .nav-link.active {
          background: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-primary);
          font-weight: 700;
        }
        .active-indicator {
          position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--md-sys-color-primary);
        }

        /* ── Navbar End ── */
        .navbar-end { display: flex; align-items: center; gap: 12px; }

        /* نشانگر آمادگی — اصل روانشناسی: social proof + availability */
        .availability-badge {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 50px;
          background: #F0FDF4;
          border: 1.5px solid #86EFAC;
          font-size: 12px; font-weight: 600;
          color: #16A34A;
        }
        .availability-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.25);
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.25); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.1);  }
        }

        /* ── Language Switch ── */
        .lang-switch {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 50px;
          background: var(--md-sys-color-surface-variant);
          border: 1.5px solid var(--md-sys-color-outline-variant);
          color: var(--md-sys-color-on-surface);
          font-family: 'Vazirmatn', sans-serif;
          font-size: 13px; font-weight: 700;
          cursor: pointer; transition: all 0.25s ease;
        }
        .lang-switch:hover {
          background: var(--md-sys-color-primary-container);
          border-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-primary);
        }
        .lang-switch .material-symbols-outlined { font-size: 18px; }

        .mobile-lang-switch {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px; border-radius: 14px;
          font-size: 15px; font-weight: 500;
          color: var(--md-sys-color-on-surface);
          background: none; border: none; cursor: pointer;
          font-family: 'Vazirmatn', sans-serif;
          text-align: right; transition: all 0.25s ease;
        }
        .mobile-lang-switch:hover { background: var(--md-sys-color-surface-variant); }

        /* دکمه CTA — اصل روانشناسی: urgency + action-oriented */
        .navbar-cta {
          display: flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 50px;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
          color: white; font-size: 14px; font-weight: 700;
          text-decoration: none; font-family: 'Vazirmatn', sans-serif;
          box-shadow: 0 4px 14px rgba(91,33,182,0.35);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          white-space: nowrap; position: relative; overflow: hidden;
        }
        .navbar-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .navbar-cta:hover::before { opacity: 1; }
        .navbar-cta:hover {
          box-shadow: 0 6px 20px rgba(91,33,182,0.45);
          transform: translateY(-2px);
        }
        .navbar-cta .material-symbols-outlined { font-size: 16px; }
        .cta-arrow {
          font-size: 16px; transition: transform 0.3s ease;
          display: inline-block;
        }
        .navbar-cta:hover .cta-arrow { transform: translateX(-4px); }

        /* ── Hamburger ── */
        .mobile-menu-btn {
          display: none; background: none; border: none; cursor: pointer;
          padding: 8px; border-radius: 10px;
          transition: background 0.2s;
        }
        .mobile-menu-btn:hover { background: var(--md-sys-color-surface-variant); }

        .hamburger { width: 24px; display: flex; flex-direction: column; gap: 5px; }
        .hamburger span {
          display: block; height: 2px; border-radius: 2px;
          background: var(--md-sys-color-on-surface);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg);  }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0);          }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile Menu ── */
        .mobile-menu {
          display: none; overflow: hidden;
          max-height: 0; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
          background: white;
          border-top: 1px solid var(--md-sys-color-outline-variant);
        }
        .mobile-menu.open { max-height: 600px; box-shadow: var(--md-sys-elevation-3); }
        .mobile-menu-inner { padding: 12px 16px 20px; display: flex; flex-direction: column; gap: 4px; }

        .mobile-nav-link {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px; border-radius: 14px;
          font-size: 15px; font-weight: 500;
          color: var(--md-sys-color-on-surface); text-decoration: none;
          transition: all 0.25s ease;
        }
        .mobile-link-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--md-sys-color-surface-variant);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
        }
        .mobile-link-icon .material-symbols-outlined { font-size: 20px; color: var(--md-sys-color-on-surface-variant); }
        .mobile-nav-link:hover { background: var(--md-sys-color-surface-variant); }
        .mobile-nav-link:hover .mobile-link-icon { background: var(--md-sys-color-primary-container); }
        .mobile-nav-link:hover .mobile-link-icon .material-symbols-outlined { color: var(--md-sys-color-primary); }
        .mobile-nav-link.active { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary); font-weight: 700; }
        .mobile-nav-link.active .mobile-link-icon { background: var(--md-sys-color-primary); }
        .mobile-nav-link.active .mobile-link-icon .material-symbols-outlined { color: white; }
        .mobile-check { margin-right: auto; font-size: 20px; color: var(--md-sys-color-primary); }

        .mobile-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 12px; padding: 14px;
          background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
          color: white; border-radius: 14px;
          font-family: 'Vazirmatn', sans-serif; font-size: 15px; font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(91,33,182,0.3);
          transition: all 0.3s ease;
        }
        .mobile-cta:hover { box-shadow: 0 6px 20px rgba(91,33,182,0.4); }
        .mobile-cta .material-symbols-outlined { font-size: 20px; }

        @media (max-width: 768px) {
          .desktop-menu    { display: none; }
          .navbar-cta      { display: none; }
          .availability-badge { display: none; }
          .mobile-menu-btn { display: flex;  }
          .mobile-menu     { display: block; }
        }
      `}</style>
    </>
  );
}