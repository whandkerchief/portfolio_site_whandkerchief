import React, { useRef, useState, useEffect } from 'react';
import PhotoGallery from './PhotoGallery';
import ButtonCarousel from './ButtonCarousel';
import image1 from './../assets/projects-gallery/Photo1.png';
import image2 from './../assets/projects-gallery/Photo2.png';
import image3 from './../assets/projects-gallery/Photo3.jpg';
import image4 from './../assets/projects-gallery/Photo4.png';
import image5 from './../assets/projects-gallery/Photo5.png';
import image6 from './../assets/projects-gallery/Photo6.png';
import ruskinImage3 from './../assets/ruskin-photos/Photo3.png';
import ruskinImage4 from './../assets/ruskin-photos/Photo4.png';
import ruskinImage5 from './../assets/ruskin-photos/Photo5.png';
import experimentsImage1 from './../assets/Experiments-photos-and-videos/Photo1.png';
import experimentsImage2 from './../assets/Experiments-photos-and-videos/Photo2.png';
import GameProjectContent from './GameProjectContent';
import GithubLink from './GithubBox';
import RuskinVRContent from './RuskinVRContent';
import ReplyChallengeContent from './ReplyChallengeContent';
import ExperimentsContent from './ExperimentsContent';
import PlaneteriumContent from './PlaneteriumContent';

const photos = [image6, image4, ruskinImage4, image1, image2, experimentsImage1, experimentsImage2, ruskinImage3, ruskinImage5, image3, image5];

interface ProjectsPageProps {
  currentLanguage: string;
}

export default function ProjectsPage({ currentLanguage }: ProjectsPageProps): JSX.Element {
  const [hasFaded, setHasFaded] = useState(false); // Track fade animation
  const [pageTitle, setPageTitle] = useState(''); 
  const [pageKey, setPageKey] = useState<string | null>(null); // Key to determine current content
  const carouselContainerRef = useRef<HTMLDivElement>(null); // Ref for carousel
  const pageContentRef = useRef<HTMLDivElement>(null); // Ref for content
  const [isPageContentInView, setIsPageContentInView] = useState(false); // Track content visibility

  const touchStartY = useRef<number | null>(null); 
  const touchEndY = useRef<number | null>(null); 

  const contentMap: Record<string, { title: (lang: string) => string; content: (lang: string) => JSX.Element }> = {
    'Ruskin VR Project': {
      title: (lang) => (lang === 'en' ? 'VR Ruskin' : 'VR Ruskinプロジェクト'),
      content: (lang) => <RuskinVRContent currentLanguage={lang} />,
    },
    'Planeterium Event Idea': {
        title: (lang) => (lang === 'en' ? 'Planeterium Event Idea' : 'イベント提案：プラネタリウム'),
        content: (lang) => <PlaneteriumContent currentLanguage={lang} />,
    },
    'Reply Challenge 2022': {
      title: (lang) => (lang === 'en' ? 'Reply Challenge 2022' : 'Reply Challenge 2022'),
      content: (lang) => <ReplyChallengeContent currentLanguage={lang} />,
    },
    'Experiments': {
      title: (lang) => (lang === 'en' ? 'Experiments' : '試作品'),
      content: (lang) => <ExperimentsContent currentLanguage={lang} />,
    },
    'Game Project': {
      title: (lang) => (lang === 'en' ? 'Game Project' : '自作ゲーム'),
      content: (lang) => <GameProjectContent currentLanguage={lang} />,
    },
  };

  const buttons = [
    { label: 'Ruskin VR Project', labelEn: 'Ruskin VR Project', labelJa: 'ラスキン VR' },
    { label: 'Planeterium Event Idea', labelEn: 'Planeterium Event Idea', labelJa: 'イベント　提案' },
    { label: 'Reply Challenge 2022', labelEn: 'Reply Challenge 2022', labelJa: 'Reply Challenge 2022' },
    { label: 'Experiments', labelEn: 'Experiments', labelJa: '試作品' },
    { label: 'Game Project', labelEn: 'Game Project', labelJa: '自作ゲーム' },
  ];

  // Update page title dynamically when pageKey or currentLanguage changes
  useEffect(() => {
    if (pageKey) {
      const content = contentMap[pageKey];
      if (content) {
        setPageTitle(content.title(currentLanguage));
      }
    }
  }, [pageKey, currentLanguage]);

  // Handle button click to load new content
  const handleButtonClick = (buttonLabel: string) => {
    const content = contentMap[buttonLabel];
    if (content) {
      setPageKey(buttonLabel); // Set current button label as key
      setHasFaded(true);
      pageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchEndY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (): void => {
    if (touchStartY.current !== null && touchEndY.current !== null) {
      const deltaY = touchStartY.current - touchEndY.current;

      // Check if the content is at the top
      const scrollTop = pageContentRef.current?.scrollTop ?? 0;
      const isAtTop = scrollTop <= 0;

      if (deltaY < -30 && !isPageContentInView && hasFaded && isAtTop) {
        // Dragging down and content is not in view
        setHasFaded(false);
        carouselContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

      if (deltaY > 30 && !hasFaded) {
        // Dragging up and content is not in view
        setHasFaded(true);
        pageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset touch positions
    touchStartY.current = null;
    touchEndY.current = null;
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>): void => {
    const delta = event.deltaY;

    // Check if the content is at the top
    const scrollTop = pageContentRef.current?.scrollTop ?? 0;
    const isAtTop = scrollTop <= 0;

    if (delta < 0 && !isPageContentInView && hasFaded && isAtTop) {
      // Scrolling up and content is not in view
      setHasFaded(false);
      carouselContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (delta > 0 && !hasFaded) {
      // Scrolling down and content is not in view
      setHasFaded(true);
      pageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="container"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd} 
    >
        <div ref={carouselContainerRef} className={`carousel-container ${hasFaded ? 'faded' : ''}`}>
            <GithubLink currentLanguage={currentLanguage}/>
            <ButtonCarousel buttons={buttons} onButtonClick={handleButtonClick} currentLanguage={currentLanguage}/>
        </div>

        <div ref={pageContentRef} className={`page ${hasFaded ? 'faded' : ''}`}>
        {pageTitle && (
            <div className={`page-title ${currentLanguage === 'en' ? 'title-en' : 'title-ja'}`}>
            {pageTitle}
            </div>
        )}
        {pageKey && contentMap[pageKey]?.content(currentLanguage)}
        <div className={`page-title ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
            {currentLanguage === 'en' ? 'Gallery' : 'ギャラリー'}
        </div>
        <div className={`page-body ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
            {currentLanguage === 'en' ? 'Watch my highlight reel:' : '過去の作品のハイライト動画をご覧ください：'}
        </div>
        <br />
            <iframe
                className="page-iframe"
                src="https://player.vimeo.com/video/1059974014?h=6ddd2bd16d"
            ></iframe>
        <br /><br/>
        <div className={`page-body ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
            {currentLanguage === 'en' ? 'See snapshots of past work:' : '過去に制作した作品の一部です：'}
        </div>
        <br />
        <PhotoGallery photos={photos} />
        </div>
    </div>
  );
}
