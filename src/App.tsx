import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import AboutDclix from './pages/AboutDclix';
import Pricing from './pages/Pricing';
import EduHub from './pages/EduHub';
import Referral from './pages/Referral';
import LandingPage from './pages/LandingPage';
import WatchLive from './pages/WatchLive';
import ClubRegister from './pages/ClubRegister';
import PlayerRegister from './pages/PlayerRegister';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-dclix" element={<AboutDclix />} />
          <Route path="/plan-pricing" element={<Pricing />} />
          <Route path="/eduhub" element={<EduHub />} />
          <Route path="/referral" element={<Referral />} />

          <Route path="/competition" element={<LandingPage />} />
          <Route path="/competition/:sport/live" element={<WatchLive />} />
          <Route path="/competition/:sport/club/register" element={<ClubRegister />} />
          <Route path="/competition/:sport/player/register" element={<PlayerRegister />} />
          <Route path="/competition/:sport/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
