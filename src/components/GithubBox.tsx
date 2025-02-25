import React from 'react';

interface GithubBoxProps {
  currentLanguage: string;
}

export default function GithubLink({ currentLanguage }: GithubBoxProps) {
  return (
    <div className="git-section">
      <div className="github-link">
        <a className={currentLanguage === "en" ? "g-text-en" : "g-text-ja"}
          href={`https://github.com/whandkerchief`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentLanguage === 'en' ? 'View GitHub profile' : 'GitHubのプロフィールはこちら'}
        </a>
      </div>
    </div>
  );
}
