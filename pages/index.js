'use client';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import About from '../components/About';
import Footer from '../components/footer/Footer';
import Projects from '../components/AllProjects/Projects';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#content"),
        smooth: true,
      });
    })();
  }, []);

  return (
    <div className='container'>
      <Head>
        <title>Rahul Roy - Web Developer</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/icons8-r-50.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      </Head>
      <main className='full-page' id='content'>
        <LandingPage />
        <About />
        <Projects />
      </main>
      <div orientation="right" className="email-container">
        <div className="email-display">
          <a href="mailto:rahul.roybak@gmail.com">rahul.roybak@gmail.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
