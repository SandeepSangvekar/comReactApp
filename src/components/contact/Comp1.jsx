import { useRef } from "react";
export const Comp1 = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    setTimeout(() => {
      formRef.current.reset(); // Reset the form after submission
    }, 1000); // Add a slight delay to ensure Formspree processes it
  };
  return (
    <>
      <div className="custom-container">
        {/* <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="contact-wrapper">
                    <div className="row">
                      <div className="col-md-6 contact-form">
                        <div className="">
                          <h5>Get in touch</h5>
                          <p>Let’s connect and explore how Augmented Transformations can take your business to the next level—reach out below, and our team will respond promptly to begin your transformation journey.</p>
                          <hr />
                          <form action="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="input-group">
                              <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="input-group">
                              <textarea type="text" className="form-control" placeholder="Message" rows={5}></textarea>
                            </div>
                            <div className="col-auto mt-5">
                              <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6 contact-wrap-right">
                        <div className="">
                          <div className="contact-img">
                            <img src="/images/contact-img.png" className="img-fluid" alt="contact image" />
                          </div>
                          <div className="contact-detail">
                            <table className="detailList">
                              <tbody>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/mail-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Email ID</h6>
                                    <small>info@augtrans.com</small>
                                  </td>
                                  
                                </tr>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/phone-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Phone</h6>
                                    <small>020-67250600</small>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/location-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Location</h6>
                                    <small>I-Space, 301A, Pranjali Patil Nagar, Bavdhan, Pune, Maharashtra.</small>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/time-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Time</h6>
                                    <small>Monday- Friday: 10:00 AM - 6:00 PM</small>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
        <div className="row">
          <div className="col-md-9 mx-auto">
            {/* <div className="custm-container contact-wrapper">
                    <div className="contact-item item1">
                    <div className="contact-form">
                          <h5>Get in touch</h5>
                          <p>Let’s connect and explore how Augmented Transformations can take your business to the next level—reach out below, and our team will respond promptly to begin your transformation journey.</p>
                          <hr />
                          <form action="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="input-group">
                              <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="input-group">
                              <textarea type="text" className="form-control" placeholder="Message" rows={5}></textarea>
                            </div>
                            <div className="col-auto mt-5">
                              <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                          </form>
                        </div>
                    </div>
                    <div className="contact-item item2">
                          <div className="contact-img">
                            <img src="/images/contact-img.png" className="img-fluid" alt="contact image" />
                          </div>
                          <div className="contact-detail">
                            <table className="detailList">
                              <tbody>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/mail-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Email ID</h6>
                                    <small>info@augtrans.com</small>
                                  </td>
                                  
                                </tr>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/phone-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Phone</h6>
                                    <small>020-67250600</small>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/location-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Location</h6>
                                    <small>I-Space, 301A, Pranjali Patil Nagar, Bavdhan, Pune, Maharashtra.</small>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="contact-icon">
                                    <img src="/images/time-icon.png" className="img-fluid"/>
                                  </td>
                                  <td className="contact-txt">
                                    <h6>Time</h6>
                                    <small>Monday- Friday: 10:00 AM - 6:00 PM</small>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                    </div>
                  </div> */}

            <div className="contact-container contact-wrapper">
              <div className="left-column contact-form">
                <h5>Get in touch</h5>
                <p>Let’s connect and explore how Augmented Transformations can take your business to the next level—reach out below, and our team will respond promptly to begin your transformation journey.</p>
                <hr />
                <form ref={formRef} action="https://formspree.io/f/xaneqzvo" method="POST" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                  </div>
                  <div className="input-group">
                    <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="input-group">
                    <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="input-group">
                    <textarea type="text" name="message" className="form-control" placeholder="Message" rows={5} required></textarea>
                  </div>
                  <div className="input-group">
                    <button type="submit" className="btn btn-primary contactButton">Send Message</button>
                  </div>
                </form>
              </div>
              <div className="right-column">
                <div className="row2 contact-img">
                  <div className="">
                    <img src="/images/contact-img.png" className="img-fluid" alt="contact image" />
                  </div>
                </div>
                <div className="row2 contact-detail">
                  <div className="">
                    <table className="detailList">
                      <tbody>
                        <tr>
                          <td className="contact-icon">
                            <img src="/images/mail-icon.png" className="img-fluid" />
                          </td>
                          <td className="contact-txt">
                            <h6>Email ID</h6>
                            <small>info@augtrans.com</small>
                          </td>

                        </tr>
                        <tr>
                          <td className="contact-icon">
                            <img src="/images/phone-icon.png" className="img-fluid" />
                          </td>
                          <td className="contact-txt">
                            <h6>Phone</h6>
                            <small>020-67250600</small>
                          </td>
                        </tr>
                        <tr>
                          <td className="contact-icon">
                            <img src="/images/location-icon.png" className="img-fluid" />
                          </td>
                          <td className="contact-txt">
                            <h6>Location</h6>
                            <small>I-Space, 301A, Pranjali Patil Nagar, Bavdhan, Pune, Maharashtra.</small>
                          </td>
                        </tr>
                        <tr>
                          <td className="contact-icon">
                            <img src="/images/time-icon.png" className="img-fluid" />
                          </td>
                          <td className="contact-txt">
                            <h6>Time</h6>
                            <small>Monday- Friday: 10:00 AM - 6:00 PM</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}