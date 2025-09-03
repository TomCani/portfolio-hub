import './styles/index.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import GalleryPage from './pages/GalleryPage.jsx';

export default function ProjectRoutes() {
  return (
    <div className="masonry-scope">
      <div className="container py-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="*" element={<div className="container py-4">Page not found.</div>} />
        </Routes>
      </div>
    </div>
  );
}
