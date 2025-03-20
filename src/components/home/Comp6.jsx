import Marquee from "react-fast-marquee";
export const Comp6 = () => {
    return (
        <>
            <div className="fullWrapper">
                <div className="custom-container">
                    <h2 className="mb-4">Our customers & Partner</h2>
                </div>
                {/* <div className="customer-partner">
                    <div>
                        <img src="/images/DSC-img.png" className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src="/images/ajax-img.png" className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src="/images/ovino-img.png" className="img-fluid" alt="" />

                    </div>
                    <div>
                        <img src="/images/ace-img.png" className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src="/images/apollo-img.png" className="img-fluid" alt="" />
                    </div>
                    <div>
                        <img src="/images/gepdec-img.png" className="img-fluid" alt="" />
                    </div>
                </div> */}
                <div className="customer-partner">
                    <Marquee speed={50} pauseOnHover={true} gradient={false}>
                        {/* Duplicate the images to ensure seamless looping */}
                        <img src="/images/DSC-img.png" className="img-fluid" alt="" />
                        <img src="/images/ajax-img.png" className="img-fluid" alt="" />
                        <img src="/images/ovino-img.png" className="img-fluid" alt="" />
                        <img src="/images/ace-img.png" className="img-fluid" alt="" />
                        <img src="/images/apollo-img.png" className="img-fluid" alt="" />
                        <img src="/images/gepdec-img.png" className="img-fluid" alt="" />

                        {/* Duplicate again to create a seamless transition */}
                        <img src="/images/DSC-img.png" className="img-fluid" alt="" />
                        <img src="/images/ajax-img.png" className="img-fluid" alt="" />
                        <img src="/images/ovino-img.png" className="img-fluid" alt="" />
                        <img src="/images/ace-img.png" className="img-fluid" alt="" />
                        <img src="/images/apollo-img.png" className="img-fluid" alt="" />
                        <img src="/images/gepdec-img.png" className="img-fluid" alt="" />
                    </Marquee>
                </div>
            </div>
        </>
    )
}