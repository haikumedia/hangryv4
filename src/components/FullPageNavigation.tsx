'use client';

import React, { useState } from 'react';
import styles from './FullPageNavigation.module.css';

type NavLink = {
  label: string;
  url: string;
};

type Props = {
  links?: NavLink[] | undefined | null; //test
};

const FullPageNavigation: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // Fallback to an empty array if links is not an array
  const safeLinks: NavLink[] = Array.isArray(links) ? links : [];

  return (
    <div className={`${styles.navigationWrapper} ${isOpen ? styles.navOpen : ''}`}>
      <button onClick={toggleMenu} className={styles.menuToggle} aria-label="Toggle navigation">
        <svg className={styles.iconMenuToggle} viewBox="0 0 60 30">
          <g className={styles.iconGroup}>
            <g className={styles.iconMenu}>
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g className={styles.iconClose}>
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </button>

      <nav className={styles.mainNavigation}>
        <ul>
          {safeLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.url} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FullPageNavigation;
