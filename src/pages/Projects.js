import React from 'react';
import Header from '../components/header';
import { FaLaptopCode } from 'react-icons/fa'
import projectsdata from "../pages/projectsdata";
import '../stylesheets/projects-courses.css'
function Projects() {
  return (
    <div>
      <Header />
      <div className='container projects-intro'>
        <div className='row flex-with-center mt-5'>
          <div className='col-md-6 n-box2 px-4 py-5'data-aos= 'fade-down'>
            <div>
              <h1 className='font-bold'>Projects</h1>
              <p className='font-bold'>Good ideas are not adopted automatically. They must be driven into practice with couragrous patience</p>
              <button className='primary-button'><a href="#projects-list"> Get Started!</a></button>
            </div>
          </div>
          <div className="col-md-6 position-relative"data-aos= 'fade-left'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0F62FE" d="M50.4,-67.3C66.1,-57.9,80.3,-44.3,84.6,-28.2C88.9,-12,83.4,6.6,77.2,24.9C71,43.1,64,60.9,51.1,70.2C38.1,79.5,19,80.4,0.7,79.4C-17.7,78.5,-35.4,75.8,-49,66.6C-62.6,57.5,-72.1,42,-78.9,24.7C-85.8,7.5,-90.1,-11.6,-84.5,-27C-78.8,-42.4,-63.4,-54.2,-47.7,-63.5C-31.9,-72.9,-16,-79.8,0.7,-80.8C17.3,-81.7,34.7,-76.6,50.4,-67.3Z" transform="translate(100 100)" />
            </svg>

            <FaLaptopCode
              color='white'
              size={150}
              className="position-absolute top-50 start-50 translate-middle" />

          </div>
        </div>
      </div>

      <div className="container projects-list" id='projects-list'>

        <h3 className="font-bold">Take a look of our projects</h3>
        <hr />

        <div className="row">
          {projectsdata.map(project => {
            return <div className="col-md-4">
              <div className="position-relative project">
                <img className = 'project-image' src={project.image} alt="" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p>{project.description}</p>
                  <button className='primary-button'>DEMO</button>
                </div>
              </div>
            </div>
          })}


        </div>



      </div>





    </div>
  );
}
export default Projects
