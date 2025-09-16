import './styles/theme.css';

import { Routes, Route } from 'react-router-dom';

import PricingApp from './App.tsx';

export default function ProjectRoutes() {
  return (
    <div className="container py-4">
      <Routes>
        <Route path="" element={<PricingApp />} />
        <Route path="*" element={<div className="container py-4">Page not found.</div>} />
      </Routes>
    </div>
  );
}
