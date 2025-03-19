import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Import necessary Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

const ProjectSlider = () => {
  const itemRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartx] = useState(0);
  const [scrollLeft, setScroll] = useState(0);
  const brands = [
    { id: 1, name: 'Apple', src: 'images/project-card-1.png' },
    { id: 2, name: 'Apple2', src: 'images/project-card-1.png' },
    { id: 3, name: 'Apple3', src: 'images/project-card-1.png' },
    { id: 4, name: 'Apple4', src: 'images/project-card-1.png' },
    { id: 5, name: 'Apple5', src: 'images/project-card-1.png' },
    { id: 6, name: 'Apple6', src: 'images/project-card-1.png' },
    { id: 8, name: 'Apple7', src: 'images/project-card-1.png' },
    { id: 9, name: 'Apple7', src: 'images/project-card-1.png' },
  ]
  const handleMouseDown = () => {
    setIsMouseDown(true);
    setStartx(e.pageX - - itemRef.current.offsetLeft);
    setScrollLeft(itemRef.current.scrollLeft)
  }
  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }
  const handleMouseUp = () => {
    setIsMouseDown(false)
  }
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemRef.current.offsetLeft;
    const walk = (x - startX) * 2; //adjust the speed
    itemRef.current.scrollLeft = scrollLeft - walk
  }

  const projectData = [
    {
      title: "Smart Meter Data Management System",
      description:
        "Developed a robust Smart Meter Data Management System, surpassing customer expectations.",
      imgUrl: "images/project-card-1.png",
    },
    {
      title: "Quality Assurance CCTV",
      description:
        "To address quality assurance deployed our Video Analytics integrated with high-resolution along the production line.",
      imgUrl: "images/project-card-1.png",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimized supply chains with predictive data solutions.",
      imgUrl: "images/project-card-1.png",
    },
    {
      title: "Automated Quality Control",
      description: "Enhanced manufacturing efficiency with automation.",
      imgUrl: "images/project-card-1.png",
    },
  ];

  return (
    <div className="fullWrapper paddingB">
      {/* <div className="project-slider">
              <h3>See All Projects</h3>
              <div className="card custom-card mb-3" style={{"maxWidth": '870px'}}>
                <div className="row g-0">
                  
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="card-body cutom-card-body">
                      <div className="signal-dot"></div>
                      <h5 className="card-title">Smart Meter Data Management System</h5>
                      <p className="card-text">Developed a robust Smart Meter Data Management System, surpassing customer  expectations.</p>
                      <button className="btn btn-dark"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src="/images/project-card-1.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                </div>
              </div>
            </div> */}
      {/* <div className="project-slider">
              <h3>See All Projects</h3>
              <div className="slider-wrapper">

                <div className="card custom-card mb-3" style={{"maxWidth": '870px'}}>
                  <div className="row g-0">
                    
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="card-body cutom-card-body">
                        <div className="signal-dot"></div>
                        <h5 className="card-title">Smart Meter Data Management System</h5>
                        <p className="card-text">Developed a robust Smart Meter Data Management System, surpassing customer  expectations.</p>
                        <button className="btn btn-dark"><i className="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/project-card-1.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                  </div>
                </div>
                <div className="card custom-card mb-3" style={{"maxWidth": '870px'}}>
                  <div className="row g-0">
                    
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="card-body cutom-card-body">
                        <div className="signal-dot"></div>
                        <h5 className="card-title">Smart Meter Data Management System</h5>
                        <p className="card-text">Developed a robust Smart Meter Data Management System, surpassing customer  expectations.</p>
                        <button className="btn btn-dark"><i className="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/project-card-1.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      {/* <div className="chooseBrand" ref={itemRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        {
          brands.map((brand) => {
            return (
              <div className="brand grid grid-two-cols" key={brand.id}>
                <div className="brandContent">
                  {brand.name}
                  <h5>Smart Meter Data Management System</h5>
                  <p className="card-text">Developed a robust Smart Meter Data Management System, surpassing customer  expectations.</p>
                  <button className="btn btn-dark"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="brandImage">
                  <img src={brand.src} alt={brand.name} className="" />
                </div>

              </div>
            )
          })
        }
      </div> */}

      <div className="projects-section">
        <h2>See All Projects</h2>
        <div className="projects-wrapper">
          <div className="project-card grid grid-two-cols">
            {/* <div className="row"> */}
            <div className="project-content">
              <div className="dot-align">
                <div className="signal-dot"></div>
              </div>
              <h4>Smart Meter Data Management System</h4>
              <p>Developed a robust Smart Meter Data Management System, surpassing customer expectations.</p>
              <button className="btn project-button"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="project-img">
              <img src="/images/project-card-1.png" className='img-fluid' alt="" />
            </div>
            {/* </div> */}

          </div>
          <div className="project-card grid grid-two-cols">
            <div className="project-content">
              <div className="dot-align">
                <div className="signal-dot"></div>
              </div>
              <h4>Quality Assurance CCTV</h4>
              <p>To address quality assurance, deployed Video Analytics integrated with high-resolution cameras along the production line.</p>
              <button className="btn project-button"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="project-img">
              <img src="/images/project-card-2.png" className='img-fluid' alt="" />
            </div>
          </div>
          <div className="project-card grid grid-two-cols">
            <div className="project-content">
              <div className="dot-align">
                <div className="signal-dot"></div>
              </div>
              <h4>Safety Gear Detection</h4>
              <p>We provided them with our state-of-the-art Video Analytics Solution designed to leverage the power of artificial intelligence and computer vision to deliver real-time insights and actionable data.</p>
              <button className="btn project-button"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="project-img">
              <img src="/images/project-card-3.png" className='img-fluid' alt="" />
            </div>
          </div>

        </div>
      </div>



      {/* <div className="project-slider">
        <h3>See All Projects</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true} // Enable navigation
          pagination={{ clickable: true }} // Enable pagination
          loop={true} // Enable looping
          modules={[Navigation, Pagination]} // Register Swiper modules
          className="custom-swiper"
        >
          <SwiperSlide>
            <div className="card custom-card mb-3" style={{ maxWidth: '870px' }}>
              <div className="row g-0">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body cutom-card-body">
                    <div className="signal-dot"></div>
                    <h5 className="card-title">Smart Meter Data Management System</h5>
                    <p className="card-text">
                      Developed a robust Smart Meter Data Management System, surpassing customer expectations.
                    </p>
                    <button className="btn btn-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="/images/project-card-1.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card custom-card mb-3" style={{ maxWidth: '870px' }}>
              <div className="row g-0">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body cutom-card-body">
                    <div className="signal-dot"></div>
                    <h5 className="card-title">Another Project</h5>
                    <p className="card-text">
                      This project revolutionized data management with cutting-edge technology.
                    </p>
                    <button className="btn btn-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="/images/project-card-1.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default ProjectSlider;
