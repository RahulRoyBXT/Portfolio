import React from 'react';
import Image from 'next/image';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';


const ProjectsCart = ({ projects,currentProject,size }) => {

  let sizeOfOneDiv = (100/size)*currentProject; // (100% / 4)*1 = 25% 

  return (
    <>
      <div className='projectList'><h1>Project List</h1></div>
      <div id='scrollImage'>
        <div id='scrollImageMain'>
        <div id='scrollImageMain2' style={{height:'100%', width:`${sizeOfOneDiv}%`, backgroundColor:'white', transition: 'all 0.8s ease'}}></div>
      </div>
      </div>
      <div className='projectWrapper'>
        
        {projects.map((project, index) => (
          <div className="pcart-main" key={index}>
            <div className="pcart-des">
              <h2 >{project.project}</h2>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
            <div className="pcart-img">
              <Image
              
              id='projectImage'
                src={project.image}
                fill
                alt="Project Image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsCart;
