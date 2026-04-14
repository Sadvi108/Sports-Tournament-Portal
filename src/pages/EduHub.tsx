import React, { useMemo } from 'react';
import { Download, BookOpen, MonitorPlay } from 'lucide-react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { Reveal } from '@/components/ui/reveal';

async function downloadGuide() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 56;

  page.drawText('Elevate Your Club: A Comprehensive Guide to D-Clix', {
    x: margin,
    y: 780,
    size: 18,
    font: bold,
    color: rgb(0.88, 0.11, 0.28),
  });
  page.drawText('A quick start guide for registration, payments, attendance, and reporting.', {
    x: margin,
    y: 752,
    size: 11,
    font,
    color: rgb(0.35, 0.38, 0.42),
  });

  const lines = [
    '1) Digitalize member registration and approvals',
    '2) Enable online payments and automated receipts',
    '3) Track attendance with QR / fingerprint / manual methods',
    '4) Manage grading schedules and results',
    '5) Use reports to retain members and improve operations',
    '',
    'Need help? Contact D-Clix support for onboarding assistance.',
  ];

  let y = 700;
  for (const line of lines) {
    page.drawText(line, { x: margin, y, size: 12, font, color: rgb(0.12, 0.12, 0.12) });
    y -= 22;
  }

  const bytes = await doc.save();
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Elevate-Your-Club-DClix-Guide.pdf';
  a.click();
  URL.revokeObjectURL(url);
}

export default function EduHub() {
  const courses = useMemo(
    () => [
      {
        title: 'Introduction to D-Clix (Basic)',
        desc: 'Learn how to digitalize registration and payment in your club in a simple, step-by-step flow.',
        icon: BookOpen,
      },
      {
        title: 'User Experience Center',
        desc: 'Hands-on interaction space to explore the dashboard and mobile app modules safely.',
        icon: MonitorPlay,
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <MarketingNavbar />
      <main className="pt-28">
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <Reveal>
              <div className="space-y-4 text-center">
                <div className="text-rose-pink text-xs font-black uppercase tracking-[0.2em]">D-Clix Edu-Hub</div>
                <h1 className="text-5xl font-black tracking-tighter dark:text-white text-dark-gray">Learn and More</h1>
                <p className="text-muted-gray text-lg font-medium max-w-3xl mx-auto">
                  D-Clix Edu-Hub is a self-learning portal with on-demand access to guides, training, and best practices to help you run your club digitally.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08} y={18}>
                  <div className="dark-card bg-white dark:bg-white/5 p-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-black tracking-tighter dark:text-white text-dark-gray">{c.title}</div>
                    <div className="text-muted-gray font-medium leading-relaxed">{c.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.06}>
              <div className="dark-card bg-white dark:bg-white/5 p-12 border-l-8 border-rose-pink flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="space-y-2">
                  <div className="text-3xl font-black tracking-tighter dark:text-white text-dark-gray">Downloadable PDF Guide</div>
                  <div className="text-muted-gray font-medium">
                    “Elevate Your Club: A Comprehensive Guide to D-Clix” – a concise PDF you can share with your team.
                  </div>
                </div>
                <button onClick={downloadGuide} className="rose-btn-primary flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

