import React from 'react';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { Reveal } from '@/components/ui/reveal';
import dclixLogo from '@/assets/dclix-logo.svg';
import { BarChart3, LineChart, Package, ShoppingCart, Users, FolderKanban, Mail, Image as ImageIcon } from 'lucide-react';

export default function AboutDclix() {
  return (
    <div className="min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <MarketingNavbar />
      <main className="pt-28 pb-20">
        
        {/* SECTION 1: ABOUT US (Mobile Mockup) */}
        <section className="px-6 py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <Reveal>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter dark:text-white text-dark-gray">
                  About Us
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted-gray text-lg leading-relaxed">
                  Welcome to D-Clix, your ultimate club management solution. Designed for sports and martial arts clubs, we streamline operations with a focus on efficiency, convenience, and innovation. Our platform simplifies key processes, including seamless member registration, secure online payments, and real-time attendance tracking.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-muted-gray text-lg leading-relaxed">
                  What sets D-Clix apart is our tailored features specifically designed for martial arts clubs, addressing unique requirements to support your growth and success. Accessible via both web and mobile applications, D-Clix empowers administrators and members with a modern, user-friendly experience that adapts to your needs.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-muted-gray text-lg leading-relaxed font-medium dark:text-gray-300 text-gray-700 border-l-4 border-rose-pink pl-6">
                  At D-Clix, we're committed to helping clubs thrive by providing the tools you need to focus on what truly matters—your passion and your members.
                </p>
              </Reveal>
            </div>

            {/* Right Content - Mobile Mockup */}
            <Reveal delay={0.2} className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              {/* Background abstract shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-pink/20 blur-3xl rounded-full -z-10"></div>
              
              {/* iPhone Frame */}
              <div className="relative w-[320px] h-[650px] bg-dark-gray dark:bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl shadow-rose-pink/10 border-4 border-gray-200 dark:border-white/10 z-10 flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-200 dark:bg-white/10 rounded-b-3xl z-20 flex items-center justify-center gap-2">
                  <div className="w-12 h-1.5 bg-dark-gray/20 dark:bg-black/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-dark-gray/20 dark:bg-black/40 rounded-full"></div>
                </div>

                {/* Screen */}
                <div className="bg-white dark:bg-dark-gray w-full h-full rounded-[2.2rem] overflow-hidden relative flex flex-col items-center justify-center p-6 text-center shadow-inner">
                  
                  {/* Top Logo Graphic */}
                  <div className="w-48 h-48 rounded-full border-[12px] border-rose-pink flex flex-col items-center justify-center bg-deep-black shadow-lg mb-12 relative overflow-hidden">
                    <img src={dclixLogo} alt="D-CLIX" className="w-24 h-24 relative z-10" />
                    <div className="absolute bottom-0 w-full h-1/3 bg-white/5 backdrop-blur-md"></div>
                  </div>

                  <h3 className="text-xl font-black dark:text-white text-dark-gray tracking-tight mb-3">
                    Welcome to Martial Arts<br />Club App
                  </h3>
                  <p className="text-sm text-muted-gray mb-8 leading-relaxed">
                    Let's join our community<br />to track your training and grading!
                  </p>

                  <div className="text-xs text-muted-gray mb-8">
                    Web portal : <a href="#" className="text-rose-pink hover:underline">https://maclubsystem.com</a>
                  </div>

                  <button className="w-full mt-auto py-4 rounded-2xl bg-rose-pink text-white font-bold tracking-wide shadow-lg shadow-rose-pink/30 hover:bg-rose-pink-light transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-px bg-gray-100 dark:bg-white/5"></div>
        </div>

        {/* SECTION 2: IN DEPTH (Laptop Mockup) */}
        <section className="px-6 py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Reveal>
                <div className="text-rose-pink font-black text-xl tracking-tight mb-4">In Depth</div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter dark:text-white text-dark-gray leading-[1.1]">
                  Management<br />
                  Tools To Manage<br />
                  Your Club To Full<br />
                  Potential
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted-gray text-lg leading-relaxed">
                  Monitor real time update of your club performance and and manage registration, approval, attendance and payment (RAP)
                </p>
              </Reveal>
            </div>

            {/* Right Content - Laptop Mockup */}
            <Reveal delay={0.2} className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-pink/10 blur-3xl rounded-full -z-10"></div>
              
              {/* MacBook Base/Frame */}
              <div className="w-full bg-[#E5E7EB] dark:bg-[#2A2A2A] rounded-t-2xl p-3 pb-4 shadow-2xl shadow-rose-pink/5 relative border border-gray-300 dark:border-white/10 border-b-0">
                {/* Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/50 rounded-full"></div>
                
                {/* Screen */}
                <div className="w-full aspect-[16/10] bg-white dark:bg-[#111111] rounded-lg overflow-hidden flex flex-col border border-gray-200 dark:border-white/5 shadow-inner">
                  
                  {/* Top Bar */}
                  <div className="h-10 border-b border-gray-100 dark:border-white/5 flex items-center px-4 justify-between bg-gray-50/50 dark:bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-rose-pink/20 flex items-center justify-center text-rose-pink">
                        <img src={dclixLogo} className="w-3 h-3" />
                      </div>
                      <span className="text-[10px] font-bold dark:text-white text-dark-gray">Wing Chun Malaysia</span>
                    </div>
                    <div className="w-48 h-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md flex items-center px-2">
                      <span className="text-[8px] text-muted-gray">Search...</span>
                    </div>
                  </div>

                  {/* App Body */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-36 border-r border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-transparent py-4 px-3 flex flex-col gap-1">
                      <div className="text-[8px] font-bold text-muted-gray mb-1 uppercase tracking-wider px-2">Apps</div>
                      
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-rose-pink/10 text-rose-pink">
                        <BarChart3 className="w-3 h-3" />
                        <span className="text-[9px] font-bold">Home</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-gray hover:bg-gray-100 dark:hover:bg-white/5">
                        <ShoppingCart className="w-3 h-3" />
                        <span className="text-[9px] font-medium">Ecommerce</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-gray hover:bg-gray-100 dark:hover:bg-white/5">
                        <FolderKanban className="w-3 h-3" />
                        <span className="text-[9px] font-medium">Projects</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-gray hover:bg-gray-100 dark:hover:bg-white/5">
                        <Users className="w-3 h-3" />
                        <span className="text-[9px] font-medium">CRM</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-gray hover:bg-gray-100 dark:hover:bg-white/5">
                        <Mail className="w-3 h-3" />
                        <span className="text-[9px] font-medium">Email</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-gray hover:bg-gray-100 dark:hover:bg-white/5">
                        <ImageIcon className="w-3 h-3" />
                        <span className="text-[9px] font-medium">Gallery</span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-4 bg-white dark:bg-deep-black overflow-hidden flex flex-col gap-4">
                      {/* Top Big Chart Placeholder */}
                      <div className="w-full h-32 border border-gray-100 dark:border-white/5 rounded-lg p-3 relative flex flex-col">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="currentColor" strokeWidth="0.5" className="text-gray-100 dark:text-white/5" />
                          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" className="text-gray-100 dark:text-white/5" />
                          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="0.5" className="text-gray-100 dark:text-white/5" />
                          
                          {/* Data line (blue/rose) */}
                          <path d="M 0 80 Q 20 80 40 70 T 80 70 T 120 70 T 160 40 T 200 40 T 240 10 T 280 30 T 320 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-pink" vectorEffect="non-scaling-stroke" />
                          <path d="M 0 90 Q 40 90 80 80 T 160 80 T 240 50 T 320 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-white/20" vectorEffect="non-scaling-stroke" />
                        </svg>
                        <div className="mt-auto flex justify-between text-[7px] text-muted-gray relative z-10 pt-28">
                          <span>01 May</span>
                          <span>15 May</span>
                        </div>
                      </div>

                      {/* Bottom Widgets */}
                      <div className="flex gap-4 h-full">
                        {/* KPI Cards + Bar Chart */}
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex gap-4">
                            <div className="flex-1 border border-gray-100 dark:border-white/5 rounded-lg p-3">
                              <div className="text-[9px] font-bold text-muted-gray mb-1 flex items-center gap-2">
                                Total orders
                                <span className="bg-rose-pink/10 text-rose-pink px-1 py-0.5 rounded text-[6px]">-6.8%</span>
                              </div>
                              <div className="text-sm font-black dark:text-white text-dark-gray">16,247</div>
                            </div>
                            <div className="flex-1 border border-gray-100 dark:border-white/5 rounded-lg p-3">
                              <div className="text-[9px] font-bold text-muted-gray mb-1 flex items-center gap-2">
                                New customers
                                <span className="bg-green-500/10 text-green-500 px-1 py-0.5 rounded text-[6px]">+26.5%</span>
                              </div>
                              <div className="text-sm font-black dark:text-white text-dark-gray">3,492</div>
                            </div>
                          </div>
                          
                          {/* Bar chart placeholder */}
                          <div className="flex-1 border border-gray-100 dark:border-white/5 rounded-lg p-3 flex flex-col justify-end gap-1 pb-1">
                            <div className="flex items-end gap-1 h-full justify-center">
                              <div className="w-2 h-[40%] bg-rose-pink rounded-t-sm"></div>
                              <div className="w-2 h-[60%] bg-rose-pink/40 rounded-t-sm"></div>
                              <div className="w-2 h-[80%] bg-rose-pink rounded-t-sm"></div>
                              <div className="w-2 h-[30%] bg-rose-pink/40 rounded-t-sm"></div>
                              <div className="w-2 h-[50%] bg-rose-pink rounded-t-sm"></div>
                              <div className="w-2 h-[90%] bg-rose-pink rounded-t-sm"></div>
                              <div className="w-2 h-[70%] bg-rose-pink/40 rounded-t-sm"></div>
                            </div>
                            <div className="flex justify-between text-[6px] text-muted-gray mt-2 pt-2 border-t border-gray-100 dark:border-white/5">
                              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-rose-pink rounded-[1px]"></div> Completed <span className="dark:text-white text-dark-gray font-bold ml-1">52%</span></div>
                              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-rose-pink/40 rounded-[1px]"></div> Pending <span className="dark:text-white text-dark-gray font-bold ml-1">48%</span></div>
                            </div>
                          </div>
                        </div>

                        {/* Mini Right Chart */}
                        <div className="w-1/3 border border-gray-100 dark:border-white/5 rounded-lg p-3 relative flex flex-col">
                           <div className="text-[9px] font-bold text-muted-gray mb-2">Revenue</div>
                           <svg className="absolute inset-0 w-full h-full mt-4" preserveAspectRatio="none">
                              <path d="M 0 50 Q 10 60 20 40 T 40 30 T 60 40 T 80 20 T 100 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-pink" vectorEffect="non-scaling-stroke" />
                           </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop Bottom Lip */}
              <div className="w-[105%] h-3 bg-[#D1D5DB] dark:bg-[#1f1f1f] rounded-b-xl -ml-[2.5%] border border-gray-300 dark:border-white/10 border-t-0 shadow-xl flex justify-center">
                 <div className="w-24 h-1.5 bg-[#9CA3AF] dark:bg-[#111] rounded-b-md"></div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

