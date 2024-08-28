import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import BlackLoader from '../components/BlackLoader.js';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
function MyApp({ Component, pageProps }) {
  const mainPage =useRef(null);

    useEffect(() => {
      gsap.to(mainPage.current, {
        delay:2.8,
        duration: 1,
        opacity: 1,
        bottom:"100%",
        display:"block",
        ease: "power4.easeInOut"
      })
    })
  return (
    <>
      <BlackLoader/>
      <div ref={mainPage} className="mainPage">
      <Navbar />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      </div>
    </>
  )
}

export default MyApp
