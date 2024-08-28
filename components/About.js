import AboutParallax from "./AboutParallax";

const About = () => {

  return (
      <section className="about-section" id="about">
        <AboutParallax />
        <div data-scroll data-scroll-speed="0.1" className="about-inner">
          <article className="top-left">
            <div className="cavalier-content">
              <h1>About Me</h1>
              <p>
                I am a recent graduate with a degree in Information Technology,
                driven by a deep passion for software development. Throughout my
                college years, I consistently excelled, achieving top grades and
                gaining a solid foundation in both front-end and back-end
                technologies. My academic journey was highlighted by completing a
                capstone project that received recognition for its innovative
                approach to solving real-world problems.
              </p>
              <p>
                In my free time, I love experimenting with new technologies,
                building web applications, and contributing to open-source
                projects. I am particularly passionate about creating
                user-friendly, responsive interfaces, and have been honing my
                skills by working on personal projects like &apos;Flavorly,&apos; a web app
                that suggests recipes based on available ingredients. My goal is
                to continue growing as a full-stack developer and bring creative
                solutions to real-world challenges.
              </p>
            </div>
          </article>
          <article className="middle-right">
            <div className="cavalier-content">
              <h1>Languages / Skills</h1>
              <p>
                <bold>Javascript</bold> is my main language with{" "}
                <bold>ReactJS</bold> being my preferred <bold>Front-End</bold>{" "}
                framework. My favorite stack is <bold>Javascript</bold>,{" "}
                <bold>ReactJS</bold>,<bold>Redux</bold>, <bold>Tailwind</bold>,{" "}
                <bold>HTML</bold>, <bold>CSS</bold>,{" "}
                <bold>Styled-Components</bold>, <bold>Bootstrap</bold>,{" "}
                <bold>GSAP</bold>, <bold>Framer Motion</bold>. A list of my
                frameworks and languages is:
                <bold>JavaScript</bold>, <bold>Python</bold>,{" "}
                <bold>ReactJS</bold>,<bold>Redux</bold>, <bold>Tailwind</bold>,{" "}
                <bold>HTML</bold>, <bold>CSS</bold>,{" "}
                <bold>Styled-Components</bold>, <bold>Bootstrap</bold>,{" "}
                <bold>GSAP</bold>, <bold>Framer Motion</bold>, <bold>NodeJS</bold>
                , <bold>Django</bold>, <bold>ExpressJS</bold>,{" "}
                <bold>MongoDB</bold>, <bold>APIs</bold>.
              </p>
            </div>
          </article>

          <article className="bottom-left">
            <div className="cavalier-content">
              <h1>Passion for Learning</h1>
              <p>
                I thrive on learning new technologies and applying them to solve
                problems creatively. Whether it&apos;s exploring the latest trends in
                Web3 or diving into the intricacies of JavaScript frameworks, I am
                always eager to expand my knowledge. My enthusiasm for continuous
                learning drives me to take on challenges, collaborate with others,
                and contribute to meaningful projects.
              </p>
            </div>
          </article>
          <article className="bottom-left">
            <div className="cavalier-content">
              <h1>Projects</h1>
              <p>
                <bold>BookNest.In</bold>: A platform for book lovers to share
                reviews and recommendations. Built with React, Node.js, and
                MongoDB.
              </p>
              <p>
                <bold>Flavorly</bold>: A recipe suggestion app that analyzes
                ingredients to provide dish ideas. Built with React, Tailwind CSS,
                Express, and integrated with the Spoonacular API.
              </p>
              <p>
                <bold>Capstone Project</bold>: Developed an innovative solution
                that was recognized for its practical application in solving
                real-world challenges, showcasing my ability to integrate
                technical skills with creative problem-solving.
              </p>
            </div>
          </article>
        </div>
      </section>
  );
};

export default About;
