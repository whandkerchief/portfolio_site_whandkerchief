import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

export default function Navbar({ currentLanguage, setLanguage }: NavbarProps) {
  const location = useLocation(); // Get the current URL path

  const handleNavLinkClick = (path: string) => {
    if (location.pathname === path) {
      const scrollableContainer = document.querySelector('.page'); 
  
      if (scrollableContainer) {
        if(scrollableContainer.scrollTop === 0){
          const wheelEvent = new WheelEvent('wheel', {
            deltaY: -1, 
            bubbles: true,
            cancelable: true,
          });

          scrollableContainer.dispatchEvent(wheelEvent);
        }
        scrollableContainer.scrollTo({ top: 0, behavior: 'smooth' });
  
        // Wait for the scroll to finish
        const onScroll = () => {
          const scrollTop = scrollableContainer.scrollTop;
  
          if (scrollTop === 0) {
            scrollableContainer.removeEventListener('scroll', onScroll);
  
            const wheelEvent = new WheelEvent('wheel', {
              deltaY: -1, // Negative simulates scrolling up
              bubbles: true,
              cancelable: true,
            });
  
            scrollableContainer.dispatchEvent(wheelEvent);
          }
        };
  
        scrollableContainer.addEventListener('scroll', onScroll);
      }
    }
  };
  

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('/')} 
          >
            <span className={`text-base ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
              {currentLanguage === 'en' ? 'Home' : 'ホーム'}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('/projects')}  
          >
            <span className={`text-base ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
              {currentLanguage === 'en' ? 'Projects' : '作品一覧'}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('/about')}
          >
            <span className={`text-base ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
              {currentLanguage === 'en' ? 'About' : '自己紹介'}
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="language-toggle">
        <button
          className={`text-base ${currentLanguage === 'en' ? 'text-ja' : 'text-en'}`}
          onClick={() => setLanguage(currentLanguage === 'en' ? 'ja' : 'en')}
        >
          {currentLanguage === 'en' ? '日本語' : 'English'}
        </button>
      </div>
    </nav>
  );
}
