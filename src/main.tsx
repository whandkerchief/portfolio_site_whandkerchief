import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './css/index.css';
import './css/navbar.css';
import './css/contact-box.css';
import './css/welcome_text.css';
import './css/bottom_text.css';
import './css/animations.css';
import './css/page.css'
import './css/button-carousel.css'
import './css/github-link.css'

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
