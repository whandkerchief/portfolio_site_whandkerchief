import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

export default function Navbar({ currentLanguage, setLanguage }: NavbarProps) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className={`text-base ${currentLanguage === "en" ? "text-en" : "text-ja"}`}>
              {currentLanguage === "en" ? "Home" : "ホーム"}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className={`text-base ${currentLanguage === "en" ? "text-en" : "text-ja"}`}>
              {currentLanguage === "en" ? "Projects" : "作品一覧"}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className={`text-base ${currentLanguage === "en" ? "text-en" : "text-ja"}`}>
              {currentLanguage === "en" ? "About" : "自己紹介"}
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="language-toggle">
        <button
          className={`text-base ${currentLanguage === "en" ? "text-ja" : "text-en"}`}
          onClick={() => setLanguage(currentLanguage === "en" ? "ja" : "en")}
        >
          {currentLanguage === "en" ? "日本語" : "English"}
        </button>
      </div>
    </nav>
  );
}
