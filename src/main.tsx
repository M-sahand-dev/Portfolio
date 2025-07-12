import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';



import { Blog } from './components/Blog/Blog';
import { HeroSection , About , Portfolio, Contact} from './components';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HeroSection />} />
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
