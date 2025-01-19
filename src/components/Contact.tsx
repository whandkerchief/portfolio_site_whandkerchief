import React from 'react';

interface ContactProps {
  currentLanguage: string;
}

export default function ContactSection({ currentLanguage }: ContactProps) {
  return (
    <div className="contact-section">
      <div className="contact-box">
        <a className={currentLanguage === "en" ? "c-text-en" : "c-text-ja"}
          href={`mailto:williamhandkerchief@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentLanguage === 'en' ? 'Contact' : 'お問い合わせ'}
        </a>
      </div>
    </div>
  );
}
