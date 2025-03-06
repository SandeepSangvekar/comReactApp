import videoAnalyticsData from '../../api/products/comp2/videoAnalytics.json';
import aiHubData from '../../api/products/comp2/aiHub.json'; 
import rmsData from '../../api/products/comp2/rms.json'; 
import crmData from '../../api/products/comp2/crm.json'; 
import dmsData from '../../api/products/comp2/dms.json'; 
import amsData from '../../api/products/comp2/ams.json'; 
import itmsData from '../../api/products/comp2/itms.json'; 
import iotData from '../../api/products/comp2/iot.json'; 
import ymsData from '../../api/products/comp2/yms.json'; 
export const Comp2 = ({productId}) =>{
  const productData = productId === "1" 
    ? videoAnalyticsData 
    : productId === "2" 
    ? aiHubData 
    : productId === "3" 
    ? rmsData
    : productId === "4"
    ? crmData
    : productId === "5"
    ? dmsData
    : productId === "6"
    ? amsData
    : productId === "7"
    ? itmsData
    : productId === "8"
    ? iotData
    : ymsData;
    // : aiHubData;
    return (
        <>
          <div className="prod-2nd-sec">
          
            <div className="pattern-grp">
              
              <div className="box-pattern1"></div>
              <div className="box-pattern2"></div>
            </div>
            <div className="text-container">
              <span className="main-text">
                {productData.sectionTitle?.mainText}<span className="highlight">{productData.sectionTitle?.highlight}</span>
              </span>
              <span className="solution-text">{productData.sectionTitle?.subText}</span>
            </div>
            <div className="box-pattern3"></div>
            
            <div className="solution-content">
              <div className="custom-container">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="prod-content-grp">
                      {/* <li>
                        <h6>Smart Object Detection</h6> 
                        <p>VAS employs advanced algorithms to intelligently identify and track objects of interest in your video footage, enhancing security and situational awareness.</p>
                      </li>
                      <li>
                        <h6>Data-driven Decision Making</h6> 
                        <p>Harness the power of video data analytics to make informed decisions, improve operational efficiency, and respond proactively to events.</p>
                        <img src="/images/prod-img2.webp" className="img-fluid" alt="" />
                      </li> */}
                      {/* {productData.features1?.map((feature, index) => {
                        return (
                          <li key={index}>
                            <h6>{feature.title}</h6>
                            <p>{feature.description}</p>
                            {feature.image && <img src={feature.image} className="img-fluid" alt="" />}
                          </li>
                        )
                      })} */}
                      {productData.features1?.map((feature, index) => (
                        <li key={index}>
                          <h6>{feature.title}</h6>
                          <p>{feature.description}</p>
                          {feature.image && <img src={feature.image} className="img-fluid" alt="" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="prod-content-grp">
                      {/* <li>
                        <h6>Dashboards & Alerts</h6>
                        <p>Tailor VAS with customizable dashboards, providing real-time insights & notifications for critical events.</p>
                      </li>
                      <li>
                        <h6>Scalability</h6>
                        <p>Whether you have a small-scale setup or a large-scale enterprise, VAS can scale to meet your needs, making it suitable for businesses of all sizes.</p>
                      </li>
                      <li>
                        <h6>User-friendly Interface</h6>
                        <p>The intuitive user interface of VAS makes it easy for staff at all levels to use and extract valuable insights from your video surveillance system.</p>
                      </li>
                      <li>
                        <h6>Integration Capabilities</h6>
                        <p>Seamlessly integrate VAS solutions seamlessly into your existing surveillance infrastructure, enabling a unified and comprehensive approach to video management.</p>
                      </li> */}

                        {productData.features2?.map((feature, index) => (
                          <li key={index}>
                            <h6>{feature.title}</h6>
                            <p>{feature.description}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}