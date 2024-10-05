import React, { useEffect, useState } from "react";
import ProjectsCart from "./projectsCart";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isClient, setIsClient] = useState(false); // New state to check if we are on the client

  const projects = [
    {
      project: "Stealth Startup",
      description: `<strong>Stealth Startup</strong> is a cutting-edge website tailored to enhance the RO (Reverse Osmosis) selling and service industry. Designed to provide an exceptional user experience, <strong>Stealth Startup</strong> leverages advanced technologies like <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. With the mobile view successfully launched, we are gearing up to introduce the desktop version soon, ensuring accessibility across all devices. The platform not only streamlines the purchasing process for customers but also offers a comprehensive service management system for businesses. By integrating essential features like service scheduling and customer support, it aims to simplify interactions and improve overall satisfaction, revolutionizing how RO products and services are offered online.`,
      image: '/Stealth.png',
      github:'https://github.com/RahulRoyBXT/Stealth-Startup',
      web:'https://stealthstartup.netlify.app/'
    },
    {
      project: "BookNest",
      description: `<strong>BookNest</strong> is an innovative e-commerce platform designed to revolutionize the online book retail market by integrating traditional offline bookstores into the digital marketplace. Developed as our final year project through collaboration, <strong>BookNest.In</strong> utilizes advanced technologies like <strong>React</strong>, <strong>Django</strong>, and <strong>Machine Learning</strong>, including <strong>KNN</strong>, to handle over 1 lakh data points. The platform offers sellers effective inventory management tools and buyers personalized book recommendations. It supports local bookstores, promotes reading, and provides a seamless, efficient online shopping experience.`,
      image: '/Project_BookNest.png',
      github:'https://github.com/RoushanStarboy/book-shop-ecommerce',
      web:'https://github.com/RoushanStarboy/book-shop-ecommerce'
    },
    {
      project: "Flavorly",
      description: "<strong>Flavorly</strong> is a unique recipe discovery platform aimed at transforming how users find and create meals. Developed as a dynamic project, <strong>Flavorly</strong> leverages the power of <strong>React</strong> and <strong>Node.js</strong> to allow users to input available ingredients and receive tailored recipe suggestions. The platform utilizes smart algorithms to analyze ingredients, providing users with creative and delicious meal options. <strong>Flavorly</strong> is designed to simplify meal planning, reduce food waste, and inspire culinary creativity by making the most of what you already have in your kitchen.",
      image: '/cms2.jpg',
      github:'https://github.com/RahulRoyBXT/Flavorly',
      web:'https://github.com/RahulRoyBXT/Flavorly'
    },
    {
      project: "Arock",
      description: "Yet another cool project...",
      image: '/cms3.jpg',
      github:'https://github.com/RahulRoyBXT/Arock',
      web:'https://github.com/RahulRoyBXT/Arock'
    },
    {
      project: "RealTime Chat",
      description: "Coming Soon",
      image: '/cms1.jpg',
      github:'',
      web:''
    },
  ];

  const size = projects.length;

  // Determine if we are on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  let slicedProjects = projects.slice(currentProject, currentProject + 1);

  return (
    <div id="projects">
      <button id="preMain"
        onClick={() => {
          setCurrentProject((prev) => (prev - 1 >= 0 ? prev - 1 : size - 1));
        }}
      >
        Previous
      </button>
      <ProjectsCart projects={slicedProjects} currentProject={currentProject + 1} size={size} />
      <div id="mobileBtn">
        <button id="pre"
          onClick={() => {
            setCurrentProject((prev) => (prev - 1 >= 0 ? prev - 1 : size - 1));
          }}
        >
          Previous
        </button>

        <button id="nextbtn"
          onClick={() => {
            setCurrentProject((prev) => (prev + 1 < size ? prev + 1 : 0));
          }}
        >
          Next
        </button>
      </div>
      {/* Only render links if we are on the client */}
      {isClient && (
        <div key={currentProject} id='Sitelinks'>
          <a href={slicedProjects[0]?.web} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt id='webLink' />
          </a>
          <a href={slicedProjects[0]?.github} target="_blank" rel="noopener noreferrer">
            <FaGithub id='gitLink' />
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
