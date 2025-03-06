import React from "react";
import mobileData from '../../api/services/comp1/mobileDevlopmentData.json';
import softwareData from '../../api/services/comp1/softwareDevelopment.json';
// import { useParams } from "react-router-dom";
console.log('mobileData-->', mobileData);
import { motion } from "framer-motion";
export const Comp1 = ({ serviceId }) => {

  // Map serviceId to corresponding data
  const serviceData = serviceId === "1" ? mobileData : softwareData;
  return (
    <>
      <div className="services-section">
        <div className="ser-bg">
          <div className="corner-shelf">
            <img src="/images/corner-shelf.png" className="img-fluid" alt="" />
          </div>
          <h2 className="ser-heading">{serviceData.banner.heading}</h2>
          <div className="custom-container">
            <div className="service-headContent">
              <h3>{serviceData.banner.title}</h3>
              <p>{serviceData.banner.description}</p>
            </div>
          </div>
          <div className="service-cards">
            <div className="container">
              <div className="row gy-4">
                {serviceData.serviceCards.map((card, index) => {
                  return (
                    // <div className="col-lg-4 col-md-6 vert-card-center" key={index}>
                    <div className={`vert-card-center ${index === 2 ? "col-md-12 col-lg-4" : "col-lg-4 col-md-6"}`} key={index}>
                      <motion.div 
                      className="vert-card"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }} // add zoom in effect
                      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
                      whileHover={{ scale: 1.05 }}  // ⬅️ Add hover scale effect
                    >
                      {/* <div className="vert-card"> */}
                        <div className="vert-card-img hover-scale">
                          <img src={card.image} className="img-fluid" alt={card.title} />
                        </div>
                        <div className="vert-card-content">
                          <h4>{card.title}</h4>
                          <p>{card.description}</p>
                        </div>
                      {/* </div> */}
                      </motion.div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container">
          <div className="mobApp-section">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="row">
                  <div className="col-md-5 col-sm-6 col-6">
                    <div className="mob-icon-grp">
                      <img src="/images/apple-icon.png" className="img-fluid" alt="" />
                      <img src="/images/tringle-icon.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-6 col-6">
                    <div className="msg-img">
                      <img src="/images/msg-icon.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <h2 className="mob-title">Smarter</h2>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 mid-img-position">
                <div className="mob-with-hand">
                  <img src="/images/iPhoneWoodenHand2.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="mob-content">
                  <p>We deliver innovative, high-quality mobile apps tailored to your needs, offering seamless performance with native or cost-effective solutions through Flutter.</p>
                  <h3>with APP</h3>
                </div>
                <div className="mob-view-only">
                  <img src="/images/iPhoneWoodenHand2.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}