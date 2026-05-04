/**
 * EurekaOrange Design System — Shared Navigation
 * Drop <script src="nav.js"></script> anywhere in <head> or <body>.
 * Works independently of whether eureka-orange.css is loaded.
 */
(function () {
  'use strict';

  /* ─── NAV ITEMS ─────────────────────────────────────────── */
  const NAV = [
    {
      label: 'Foundation',
      items: [
        { label: 'Token Reference',  href: 'tokens.html' },
        { label: 'Figma Variables',  href: 'figma-variables.html' },
        { label: 'Light / Dark',     href: 'light-mode-tokens.html' },
      ],
    },
    {
      label: 'Components',
      items: [
        { label: 'Component Catalog', href: 'components.html' },
      ],
    },
    {
      label: 'Design',
      items: [
        { label: 'Brand Assets', href: 'brand-assets.html' },
        { label: 'Icon System',  href: 'icons.html' },
        { label: 'Grid System',  href: 'grid.html' },
        { label: 'Motion',       href: 'motion.html' },
      ],
    },
    {
      label: 'Product',
      items: [
        { label: 'Dashboard', href: 'dashboard.html' },
        { label: 'Settings',  href: 'settings.html' },
      ],
    },
  ];

  /* ─── THEME HELPERS ──────────────────────────────────────── */
  const STORAGE_KEY = 'eo-theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Update toggle button icon if already rendered
    const btn = document.getElementById('eo-theme-toggle');
    if (btn) btn.innerHTML = theme === 'dark' ? ICON_SUN : ICON_MOON;
    btn && (btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  /* ─── ICONS (inline SVG) ─────────────────────────────────── */
  const ICON_LOGO = `<svg width="26" height="26" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs><linearGradient id="eo-nl" x1="2" y1="2" x2="78" y2="78">
      <stop offset="0%" stop-color="#52e2bc"/>
      <stop offset="100%" stop-color="#1ecfa3"/>
    </linearGradient></defs>
    <circle cx="40" cy="40" r="38" stroke="url(#eo-nl)" stroke-width="2"/>
    <path d="M40 20L54 28L54 52" stroke="#1ecfa3" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26 28L40 20" stroke="#52e2bc" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="40" cy="40" r="4" fill="#1ecfa3"/>
  </svg>`;

  const ICON_SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>`;

  const ICON_MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`;

  const ICON_CHEVRON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>`;

  /* ─── CURRENT PAGE DETECTION ─────────────────────────────── */
  function currentPage() {
    const path = location.pathname;
    return path.split('/').pop() || 'index.html';
  }

  function isActive(href) {
    return currentPage() === href;
  }

  function groupHasActive(group) {
    return group.items.some(i => isActive(i.href));
  }

  /* ─── CSS ────────────────────────────────────────────────── */
  const CSS = `
  body { padding-top: 52px !important; }
  #eo-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9000;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    background: rgba(13, 13, 11, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    font-family: 'Space Grotesk', system-ui, sans-serif;
    gap: 16px;
  }
  [data-theme="light"] #eo-nav {
    background: rgba(252, 252, 249, 0.92);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  #eo-nav * { box-sizing: border-box; }

  /* Logo */
  #eo-nav .eo-nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #fff;
    flex-shrink: 0;
  }
  [data-theme="light"] #eo-nav .eo-nav-brand { color: #0d0d0b; }
  #eo-nav .eo-nav-brand-name {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
  #eo-nav .eo-nav-version {
    font-size: 10px;
    font-family: 'DM Mono', 'Space Mono', monospace;
    background: rgba(30, 207, 163, 0.12);
    color: #1ecfa3;
    border: 1px solid rgba(30, 207, 163, 0.25);
    padding: 2px 8px;
    border-radius: 999px;
    letter-spacing: 0.04em;
  }

  /* Navigation groups */
  #eo-nav .eo-nav-groups {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }

  /* Group trigger */
  .eo-nav-group { position: relative; }
  .eo-nav-group-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 8px;
    font-family: 'DM Mono', 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.55);
    transition: color 160ms, background 160ms;
    white-space: nowrap;
  }
  [data-theme="light"] .eo-nav-group-btn { color: rgba(13, 13, 11, 0.5); }
  .eo-nav-group-btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
  }
  [data-theme="light"] .eo-nav-group-btn:hover {
    color: #0d0d0b;
    background: rgba(0, 0, 0, 0.05);
  }
  .eo-nav-group-btn.active {
    color: #1ecfa3;
  }
  .eo-nav-group-btn .eo-chevron {
    transition: transform 200ms;
    opacity: 0.6;
  }
  .eo-nav-group.open .eo-nav-group-btn .eo-chevron {
    transform: rotate(180deg);
  }

  /* Dropdown */
  .eo-nav-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
    min-width: 180px;
    background: #131311;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 6px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms, transform 150ms;
    z-index: 9100;
  }
  [data-theme="light"] .eo-nav-dropdown {
    background: #ffffff;
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06);
  }
  .eo-nav-group.open .eo-nav-dropdown {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  .eo-nav-dropdown a {
    display: block;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    transition: color 120ms, background 120ms;
    white-space: nowrap;
  }
  [data-theme="light"] .eo-nav-dropdown a { color: rgba(13, 13, 11, 0.7); }
  .eo-nav-dropdown a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
  }
  [data-theme="light"] .eo-nav-dropdown a:hover {
    color: #0d0d0b;
    background: rgba(0, 0, 0, 0.05);
  }
  .eo-nav-dropdown a.active {
    color: #1ecfa3;
    background: rgba(30, 207, 163, 0.08);
  }

  /* Actions */
  #eo-nav .eo-nav-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  /* Hub link */
  #eo-nav .eo-nav-hub {
    font-family: 'DM Mono', 'Space Mono', monospace;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    padding: 5px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 160ms, border-color 160ms, background 160ms;
    white-space: nowrap;
  }
  [data-theme="light"] #eo-nav .eo-nav-hub {
    color: rgba(13, 13, 11, 0.5);
    border-color: rgba(0, 0, 0, 0.12);
  }
  #eo-nav .eo-nav-hub:hover {
    color: #1ecfa3;
    border-color: rgba(30, 207, 163, 0.4);
    background: rgba(30, 207, 163, 0.06);
  }
  #eo-nav .eo-nav-hub.active {
    color: #1ecfa3;
    border-color: rgba(30, 207, 163, 0.35);
    background: rgba(30, 207, 163, 0.08);
  }

  /* Theme toggle */
  #eo-theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: background 160ms, color 160ms;
    flex-shrink: 0;
  }
  [data-theme="light"] #eo-theme-toggle {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(13, 13, 11, 0.6);
  }
  #eo-theme-toggle:hover {
    background: rgba(30, 207, 163, 0.12);
    color: #1ecfa3;
  }
  #eo-theme-toggle:focus-visible {
    outline: 2px solid #1ecfa3;
    outline-offset: 2px;
  }

  /* Hub page: skip the "Hub" link to avoid self-reference clutter */
  #eo-nav .eo-nav-hub[aria-current="page"] {
    pointer-events: none;
  }

  /* Responsive — hide group labels on small viewports */
  @media (max-width: 640px) {
    #eo-nav .eo-nav-groups { display: none; }
    #eo-nav { padding: 0 16px; }
  }
  `;

  /* ─── BUILD HTML ─────────────────────────────────────────── */
  function buildNav() {
    const page = currentPage();
    const isHub = page === 'index.html' || page === '';

    // Groups
    const groupsHtml = NAV.map(group => {
      const hasActive = groupHasActive(group);
      const itemsHtml = group.items.map(item => {
        const active = isActive(item.href);
        return `<a href="${item.href}"${active ? ' class="active" aria-current="page"' : ''}>${item.label}</a>`;
      }).join('');
      return `
        <div class="eo-nav-group" data-group>
          <button class="eo-nav-group-btn${hasActive ? ' active' : ''}" aria-expanded="false" aria-haspopup="true">
            ${group.label}<span class="eo-chevron">${ICON_CHEVRON}</span>
          </button>
          <div class="eo-nav-dropdown" role="menu">
            ${itemsHtml}
          </div>
        </div>`;
    }).join('');

    const theme = getTheme();
    const hubActive = isHub ? ' active" aria-current="page"' : '"';

    return `
      <a href="index.html" class="eo-nav-brand" aria-label="EurekaOrange Design System — hub">
        ${ICON_LOGO}
        <span class="eo-nav-brand-name">EurekaOrange</span>
        <span class="eo-nav-version">v1.0.0</span>
      </a>
      <nav class="eo-nav-groups" aria-label="Design system sections">
        ${groupsHtml}
      </nav>
      <div class="eo-nav-actions">
        ${!isHub ? `<a href="index.html" class="${'eo-nav-hub' + (isHub ? ' active' : '')}">← Hub</a>` : ''}
        <button id="eo-theme-toggle" title="${theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="Toggle colour theme">
          ${theme === 'dark' ? ICON_SUN : ICON_MOON}
        </button>
      </div>`;
  }

  /* ─── INJECT ─────────────────────────────────────────────── */
  function inject() {
    // Styles
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Nav element
    const nav = document.createElement('header');
    nav.id = 'eo-nav';
    nav.setAttribute('role', 'banner');
    nav.innerHTML = buildNav();

    // Insert before existing first child of body (before any skip-link etc.)
    const existingSkipLink = document.body.querySelector('.eo-skip-link');
    if (existingSkipLink) {
      document.body.insertBefore(nav, existingSkipLink.nextSibling);
    } else {
      document.body.prepend(nav);
    }

    // Apply persisted theme
    applyTheme(getTheme());

    // Theme toggle
    const toggleBtn = document.getElementById('eo-theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }

    // Dropdown open/close
    nav.querySelectorAll('[data-group]').forEach(group => {
      const btn = group.querySelector('.eo-nav-group-btn');
      const dropdown = group.querySelector('.eo-nav-dropdown');

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = group.classList.contains('open');
        // Close all other dropdowns
        nav.querySelectorAll('[data-group].open').forEach(g => {
          g.classList.remove('open');
          g.querySelector('.eo-nav-group-btn').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          group.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      // Keyboard: Escape closes dropdown
      group.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          group.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    });

    // Click outside closes all dropdowns
    document.addEventListener('click', () => {
      nav.querySelectorAll('[data-group].open').forEach(g => {
        g.classList.remove('open');
        g.querySelector('.eo-nav-group-btn').setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ─── ENTRY POINT ────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
