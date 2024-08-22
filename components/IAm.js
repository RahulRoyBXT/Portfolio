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

const IAm = () => {
  return (
    <section className="intro-section">
      <article className="intro-text">
        <p>Hello, I’m</p>
        <h1>Rahul Roy</h1>
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
