import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <article className="project-wrapper">
        <div className="project-content">
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              BookNest
            </a>
          </h3>
          <div className="project-description">
            <p>
              <strong>BookNest.In</strong> is an innovative e-commerce platform
              designed to revolutionize the online book retail market by
              integrating traditional offline bookstores into the digital
              marketplace. Developed as our final year project through
              collaboration, <strong>BookNest.In</strong> utilizes advanced
              technologies like <strong>React</strong>, <strong>Django</strong>,
              and <strong>Machine Learning</strong>, including{" "}
              <strong>KNN</strong>, to handle over 1 lakh data points. The
              platform offers sellers effective inventory management tools and
              buyers personalized book recommendations. It supports local
              bookstores, promotes reading, and provides a seamless, efficient
              online shopping experience.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>Javascript</li>
            <li>React</li>
            <li>CSS</li>
            <li>Django</li>
            <li>ML</li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/RoushanStarboy/book-shop-ecommerce"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ height: "1.5em" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-roy-bak"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                style={{ height: "1.5em" }}
              />
            </a>
            <a
              href="https://x.com/Rahulroycob"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ height: "1.5em" }}
              />
            </a>
          </div>
        </div>
        <div className="project-image">
          <a
            href="https://simpleplanets.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/Project_BookNest.png" alt="BookNest Landing Section"/>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Projects;
