import React, { useEffect } from "react";
import ProjectsCart from "./projectsCart";
import gsap from "gsap";

const Projects = () => {
  const [currentProject, setCurrentProject] = React.useState(0);

  const projects = [
    {
      project: "BookNest",
      description: `<strong>BookNest</strong> is an innovative e-commerce platform
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
              online shopping experience.`,
      image: '/Project_BookNest.png',
    },
    {
      project: "Flavorly",
      description:
        "<strong>Flavorly</strong> is a unique recipe discovery platform aimed at transforming how users find and create meals. Developed as a dynamic project, <strong>Flavorly</strong> leverages the power of <strong>React</strong> and <strong>Node.js</strong> to allow users to input available ingredients and receive tailored recipe suggestions. The platform utilizes smart algorithms to analyze ingredients, providing users with creative and delicious meal options. <strong>Flavorly</strong> is designed to simplify meal planning, reduce food waste, and inspire culinary creativity by making the most of what you already have in your kitchen.",
      image: '/cms2.jpg',
    },
    {
      project: "Arock",
      description: "Yet another cool project...",
      image: '/cms3.jpg',
    },
    {
      project: "RealTime Chat",
      description: "Coming Soon",
      image: '/cms1.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".pcart-main h2, .pcart-des p, .pcart-img img", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setCurrentProject((prevProject) =>
            prevProject + 1 < projects.length ? prevProject + 1 : 0
          );

          gsap.to(".pcart-main h2, .pcart-des p, .pcart-img img", {
            opacity: 1,
            duration: 1,
          });
        },
      });
    }, 5000); // 10000 ms = 10 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const slicedProjects = projects.slice(currentProject, currentProject + 1);

  return (
    <div id="projects">
      <button id="preMain"
        onClick={() => {
          currentProject - 1 >= 0
            ? setCurrentProject(currentProject - 1)
            : setCurrentProject(projects.length - 1);
        }}
      >
        Previous
      </button>
      <ProjectsCart projects={slicedProjects} />
        <div id="mobileBtn">
        <button id="pre"
          onClick={() => {
            currentProject - 1 >= 0
              ? setCurrentProject(currentProject - 1)
              : setCurrentProject(projects.length - 1);
          }}
        >
          Previous
        </button>

        <button id="nextbtn"
          onClick={() => {
            currentProject + 1 < projects.length
              ? setCurrentProject(currentProject + 1)
              : setCurrentProject(0);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
