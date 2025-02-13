export const Comp1 = () =>{
    return (
        <>
          <div className="products-section">
            <div className="pro-bg">
              <div className="corner-shelf">
                <img src="../../public/images/corner-shelf.png" className="img-fluid" alt="" />
              </div>
              <div className="custom-container prod-pad-right">
                <div className="row">
                  <div className="col-md-7">
                  <div className="product-headContent">
                  <h3>Video Analytics  Solution  (VAS)</h3>
                  <p>At Augmented Transformations, we are dedicated to providing innovative solutions that enhance safety, security, and efficiency in various industries. Our state-of-the-art Video Analytics Solution is designed to leverage the power of artificial intelligence and computer vision to deliver real-time insights and actionable data. With a range of advanced features and use cases, our solution offers comprehensive safety and security solutions for organizations across different sectors.
We are committed to delivering cutting-edge solutions that transform the way organizations approach safety, security, and efficiency.
Contact us today to learn more about our Video Analytics Solution (VAS) and how it can benefit your specific needs. </p>
                  </div>
                  <table className="detailList2">
                              <tbody>
                                <tr>
                                  <td className="list-icon">
                                    <img src="../../public/images/tick-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="list-txt">
                                    Quality Assurance through CCTV
                                  </td>
                                </tr>
                                <tr>
                                  <td className="list-icon">
                                    <img src="../../public/images/tick-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="list-txt">
                                    Safety Gear Detection
                                  </td>
                                </tr>
                                <tr>
                                  <td className="list-icon">
                                    <img src="../../public/images/tick-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="list-txt">
                                    Facial Recognition
                                  </td>
                                </tr>
                               
                              </tbody>
                            </table>
                  </div>
                  <div className="col-md-5">
                    {/* <div className="prod-img"></div> */}
                    <img src="../../public/images/prod-img1.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </>
    )
}