import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from "./components/Navbar";
import BGvid from "./assets/BackgroundVideoBoomerang.mp4";
import SiteTitle from "./components/Title";
import ContactSection from "./components/Contact";
import BottomText from "./components/BRText";
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';

function App() {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Default to English

  return (
    <div className="main">
      <video className='bg-video' src={BGvid} autoPlay loop muted />
      <div>
        <Navbar currentLanguage={currentLanguage} setLanguage={setCurrentLanguage} />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300} // Adjust duration as needed
          >
            <Routes location={location}>
              <Route path="/" element={
                <div>
                  <SiteTitle/>
                  <ContactSection currentLanguage={currentLanguage}/>
                  <BottomText/>
                </div>
              } />
              <Route path="/projects" element={
                <div>
                  <ProjectsPage currentLanguage={currentLanguage}/>
                  <BottomText/>
                </div>
              } />
              <Route path="/about" element={
                <div>
                  <AboutPage currentLanguage={currentLanguage}/>
                  <BottomText/>
                </div>
              } />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
