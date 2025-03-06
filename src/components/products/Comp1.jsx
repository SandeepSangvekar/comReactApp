import videoAnalyticsData from '../../api/products/comp1/videoAnalytics.json';
console.log('videoAnalyticsData:', videoAnalyticsData);
import aiHubData from '../../api/products/comp1/aiHub.json'; 
import rmsData from '../../api/products/comp1/rms.json'; 
import crmData from '../../api/products/comp1/crm.json'; 
import dmsData from '../../api/products/comp1/dms.json'; 
import amsData from '../../api/products/comp1/ams.json'; 
import itmsData from '../../api/products/comp1/itms.json'; 
import iotData from '../../api/products/comp1/iot.json'; 
import ymsData from '../../api/products/comp1/yms.json'; 

export const Comp1 = ({productId}) => {
  // Map serviceId to corresponding data
  // const productData = productId === "1" ? videoAnalyticsData : aiHubData;
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
  return (
    <>
      <div className="products-section">
        <div className="pro-bg">
          <div className="corner-shelf">
            <img src="/images/corner-shelf.png" className="img-fluid" alt="" />
          </div>
          <div className="custom-container prod-pad-right">
            <div className="row">
              <div className="col-md-7">
                <div className="product-headContent">
                  <h3>{productData.productsSection.content.heading}</h3>
                  <p> {productData.productsSection.content.description.replace(/\u00A0/g, ' ').trim()}</p>
                  
                </div>
                <table className="detailList2">
                  <tbody>
                    {productData.productsSection.features.map((feature, index) =>{
                      return (
                        <tr key={index}>
                          <td className="list-icon">
                            <img src={feature.icon} className="img-fluid" />
                          </td>
                          <td className="list-txt">
                            {feature.text}
                          </td>
                        </tr>
                      )
                    })}
                    
                    {/* <tr>
                      <td className="list-icon">
                        <img src="/images/tick-icon.png" className="img-fluid" />
                      </td>
                      <td className="list-txt">
                        Safety Gear Detection
                      </td>
                    </tr>
                    <tr>
                      <td className="list-icon">
                        <img src="/images/tick-icon.png" className="img-fluid" />
                      </td>
                      <td className="list-txt">
                        Facial Recognition
                      </td>
                    </tr> */}

                  </tbody>
                </table>
              </div>
              <div className="col-md-5">  
                {/* <div className="prod-img"></div> */}
                <img src={productData.productsSection.productImage} className="img-fluid" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}