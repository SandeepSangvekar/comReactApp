import React, { useRef } from 'react';
import projectSliderData from '../../api/home/projectSlider/projectSliderData.json'

const ProjectSlider = () => {

  const projectsRef = useRef(null);

  const scrollRight = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="fullWrapper paddingB">
      <div className="projects-section">
        <h2>See All Projects</h2>
        {/* <div className="projects-wrapper">
          {projectSliderData.projects?.map((item, index) => (
            <div key={index} className="project-card grid grid-two-cols">
              <div className="project-content">
                <div className="dot-align">
                  <div className="signal-dot"></div>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button className="btn project-button" onClick={scrollRight}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className="project-img">
                <img src={item.image} className='img-fluid' alt="" />
              </div>

            </div>
          )
          )}


        </div> */}

        <div className="projects-container">
          <div className="projects-wrapper" ref={projectsRef}>
            {projectSliderData.projects?.map((item, index) => (
              <div key={index} className="project-card grid grid-two-cols">
                <div className="project-content">
                  <div className="dot-align">
                    <div className="signal-dot"></div>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="project-img">
                  <img src={item.image} className='img-fluid' alt="" />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Button */}
          <div className="scroll-buttons">
            <button className="btn project-button scroll-left" onClick={scrollLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn project-button scroll-right" onClick={scrollRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
