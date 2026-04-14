import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import HomeTop from './home/HomeTop';
import HomeBottom from './home/HomeBottom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <MarketingNavbar />
      <main className="pt-28">
        <HomeTop onStartToday={() => navigate('/plan-pricing')} />
        <HomeBottom onStartToday={() => navigate('/plan-pricing')} />
      </main>

      <MarketingFooter />
    </div>
  );
}
