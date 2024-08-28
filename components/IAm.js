import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXbox,
  faLetterboxd,
  faSquareLetterboxd,
  faSlideshare,
  faConnectdevelop,
  faContao,
  faMailchimp,
  faAmilia,
  faMandalorian,
  faGg,
  faGooglePlusSquare,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons/faGooglePlusG";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const IAm = () => {

  
  const hello = useRef(null);
  const myName = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(hello.current, {
      fontSize: 0,
      duration: 1,
      delay:3.2,
      opacity: -1,
      x: -150,
      ease: "slow(0.7,0.7,false)"
    })
    tl.from(myName.current, {
      fontSize: 0,
      duration: 1,
      opacity: -1,
      x: -150,
      ease: "slow(0.7,0.7,false)"
    },"-=0.8")
    tl.from('.adjust', {
      fontSize: 0,
      duration: 1,
      opacity: -1,
      x: -150,
      ease: "slow(0.7,0.7,false)"
    },"-=0.6")
    tl.from('.socials', {
      duration: 1,
      y:-5,
      yoyo: true,
      repeat: -1,
      ease: "slow(0.1,0.1,true)"
    },"-=0.6")
  });
  return (
    <section className="intro-section">
      <article className="intro-text">
        <p ref={hello}>Hello, I’m</p>
        <h1 ref={myName}>Rahul Roy</h1>
        <p className="adjust">Web Developer</p>
      </article>
      <div className="CTAs">
        <a className="download-resume" href="/Rahul_Roy_Resume.pdf">
          Checkout Resume
        </a>
        <div className="socials">
          <a
            href={"https://www.linkedin.com/in/rahul-roy-bak"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href={"https://github.com/RahulRoyBXT"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href={"mailto:rahul.roybak@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
          </a>
        </div>
      </div>
      <article className="some-details">
        <p>
          Skilled at bringing designs to life with a strong foundation in React
          and web development.
        </p>
        <p>
          Constantly learning and expanding my knowledge. Currently focusing on
          frontend development and full-stack projects.
        </p>
      </article>
    </section>
  );
};

export default IAm;
