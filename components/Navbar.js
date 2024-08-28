import React, { useState, useEffect, useRef } from 'react'
import { Link as ReactScrollLink} from 'react-scroll';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setHasScroll(document.documentElement.scrollTop > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => setHasScroll(document.documentElement.scrollTop > 100));

    return _ => {
      window.removeEventListener('scroll', () => setHasScroll(document.documentElement.scrollTop > 100));
    }
  }, [setHasScroll])

  const handleHamburgerClick = () => {
    mobileNavOpen ? document.body.classList.remove('blur') : document.body.classList.add('blur');
    setMobileNavOpen(!mobileNavOpen);
  }

  useEffect(() => {
    const tl = gsap.timeline();

    // Use `current` to access the DOM node
    tl.from('.nav-title', {
      duration: 1,
      opacity: 0,
      delay: 3.1,
      y: -50,
      ease: "slow(0.7,0.7,false)"
    })
    tl.from('.right-side', { // Access the DOM node with `current`
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "slow(0.7,0.7,false)"
    }, "-=0.5");
  }, []); // Add dependencies if needed

  return (
    <>
      <header className={`header ${hasScroll ? 'scrolled' : ''}`}>
        <div className="left-side">
          <Link
            href={`/`}
            passHref
          >
            <h1 className="nav-title">Rahul Roy</h1>
          </Link>
        </div>
          <div className="right-side">
            <ReactScrollLink activeClass="active" to="main" spy={true} smooth={true} offset={-125}>Main</ReactScrollLink>
            <ReactScrollLink to="about" spy={true} smooth={true} offset={-125}>About</ReactScrollLink>
            <ReactScrollLink to="projects" spy={true} smooth={true} offset={-125}>Projects</ReactScrollLink>
            <a href="./Rahul_Roy_Resume.pdf" className="resume-link">Resume</a>
        </div>
      </header>
      <div className="mobile-header">
        <div>
          <button aria-label="Menu" className={`${mobileNavOpen ? 'close-button' : 'hamburger-button'}`} onClick={() => handleHamburgerClick()}>
            <div className="ham-box">
              <div className="ham-box-inner"></div>
            </div>
          </button>
          <aside aria-hidden="true" tabIndex="-1" className={`${mobileNavOpen ? 'side-bar-open' : 'side-bar'}`}>
            <nav>
              <ol>
                <li>
                  <ReactScrollLink activeClass="active" to="main" spy={true} smooth={true} offset={-125} onClick={() => handleHamburgerClick()}>Main</ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="about" spy={true} smooth={true} offset={-125} onClick={() => handleHamburgerClick()}>About</ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink to="projects" spy={true} smooth={true} offset={-125} onClick={() => handleHamburgerClick()}>Projects</ReactScrollLink>
                </li>
              </ol>
              <a href="./Rahul_Roy_Resume.pdf" className="resume-link">Resume</a>
            </nav>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Navbar;