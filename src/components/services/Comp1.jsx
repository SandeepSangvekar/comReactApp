import React from "react";

export const Comp1 = () =>{
    return (
        <>
          <div className="services-section">
            <div className="ser-bg">
              <div className="corner-shelf">
                <img src="../../public/images/corner-shelf.png" className="img-fluid" alt="" />
              </div>
              <div className="custom-container">
                <div className="service-headContent">
                  <h3>Why Choose Us for Mobile App Development?</h3>
                  <p>We combine quality, innovation, and expertise to deliver mobile apps tailored to your unique 
  business needs. Whether native or Flutter, our solutions ensure exceptional performance, cost-effectiveness, and a seamless user experience.</p>
                </div>
              </div>
              <div className="service-cards">
                <div className="container">
                  <div className="row gy-4">
                    <div className="col-md-4 vert-card-center">
                      <div className="vert-card">
                        <div className="vert-card-img">
                          <img src="../../public/images/mob-icon.png" className="img-fluid" alt="" />
                        </div>
                        <div className="vert-card-content">
                          <h4>Our Expertise in Mobile App Development</h4>
                          <p>We craft exceptional mobile apps with unmatched performance through native development or cost-effective versatility with Flutter’s single codebase for Android and iOS.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 vert-card-center">
                      <div className="vert-card vert-mt">
                        <div className="vert-card-img">
                          <img src="../../public/images/ideas-icon.png" className="img-fluid" alt="" />
                        </div>
                        <div className="vert-card-content">
                        <h4>Your Ideas, Brought to Life</h4>
                          <p>Bring your ideas to life with precision—choose native for unmatched performance or Flutter for fast, budget-friendly apps that make a lasting impact.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 vert-card-center">
                      <div className="vert-card">
                        <div className="vert-card-img">
                          <img src="../../public/images/que-icon.png" className="img-fluid" alt="" />
                        </div>
                        <div className="vert-card-content">
                          <h4>Why Choose Us?</h4>
                          <p>With a commitment to quality and innovation, we align our solutions with your vision to deliver apps that exceed expectations and achieve your goals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-container">
              <div className="mobApp-section">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="row">
                      <div className="col-md-5 col-sm-6 col-6">
                        <div className="mob-icon-grp">
                          <img src="../../public/images/apple-icon.png" className="img-fluid" alt="" />
                          <img src="../../public/images/tringle-icon.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-6 col-6">
                        <div className="msg-img">
                            <img src="../../public/images/msg-icon.png" className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                    <h2 className="mob-title">Smarter</h2>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 mid-img-position">
                    <div className="mob-with-hand">
                    <img src="../../public/images/iPhoneWoodenHand2.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-6">
                    <div className="mob-content">
                      <p>We deliver innovative, high-quality mobile apps tailored to your needs, offering seamless performance with native or cost-effective solutions through Flutter.</p>
                      <h3>with APP</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}