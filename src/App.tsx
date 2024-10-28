import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SoftwareDetailPage } from './pages/SoftwareDetailPage';
import { RankingPage } from './pages/RankingPage';
import { FeaturesPage } from './pages/FeaturesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/software/:id" element={<SoftwareDetailPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;