export const Comp5 = () => {
    return (
        <>
            <div className="fullWrapper paddingY">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Our Expertise in Action</h2>
                            <p>Transforming challenges into success with innovative solutions tailored to meet business needs</p>
                        </div>
                    </div>

                </div>
                <div className="expertise-sec">
                    {/* <div className="row">

                </div> */}
                    <div className="grid grid-two-cols">
                        <div className="exp-img-left">
                            <img src="../../public/images/mobile-img.png" className="img-fluid" alt="smart meter app" />
                        </div>
                        <div className="exp-content-right">
                            <h2>E-Commerce Platform</h2>
                            <p>We specialize in building robust and scalable E-Commerce platforms tailored to your business needs. Our solutions provide seamless user experiences with features like easy ordering, secure payments, efficient logistics management, and customer engagement tools. Whether it's a web or app-based platform, we deliver end-to-end solutions designed to enhance operational efficiency and drive customer satisfaction. Trust us to create a powerful online presence for your business, no matter the industry.</p>
                            {/* <button className="btn btn-dark">Learn More</button> */}
                            <button className="custom-button">
                            Learn more <span className="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-two-cols">
                        <div className="exp-content-left">
                            <h2>Smart Metering Solution</h2>
                            <p>We specialize in building robust and scalable E-Commerce platforms tailored to your business needs. Our solutions provide seamless user experiences with features like easy ordering, secure payments, efficient logistics management, and customer engagement tools. Whether it's a web or app-based platform, we deliver end-to-end solutions designed to enhance operational efficiency and drive customer satisfaction. Trust us to create a powerful online presence for your business, no matter the industry.</p>
                            <button className="custom-button">
                            Learn more <span className="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                            </button>
                        </div>
                        <div className="exp-img-right">
                            <img src="../../public/images/smartMeterApp.png" className="img-fluid" alt="smart meter app" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}