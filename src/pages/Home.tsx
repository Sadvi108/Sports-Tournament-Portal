import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { ParallaxKarateBackground } from '@/components/ParallaxKarateBackground';
import HomeTop from './home/HomeTop';
import HomeBottom from './home/HomeBottom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <ParallaxKarateBackground />
      <div className="relative z-10">
        <MarketingNavbar />
        <main className="pt-28">
          <HomeTop onStartToday={() => navigate('/plan-pricing')} />
          <HomeBottom onStartToday={() => navigate('/plan-pricing')} />
        </main>

        <MarketingFooter />
      </div>
    </div>
  );
}
