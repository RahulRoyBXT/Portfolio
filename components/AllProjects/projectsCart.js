import React, {useEffect } from 'react';
import Image from 'next/image';

const ProjectsCart = ({ projects }) => {

  return (
    <>
      <div className='projectList'><h1>Project List</h1></div>
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
                fill style={{ objectFit: 'cover' }}
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
