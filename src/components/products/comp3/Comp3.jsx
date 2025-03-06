import videoAnalyticsData from '../../../api/products/comp3/videoAnalytics.json';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
export const Comp3 = ({productId}) =>{
  console.log('VAS id:', productId);
  // videoAnalyticsData  = productId === "1";
    return (
        <>
            <div className="prod-3rd-sec">
              {videoAnalyticsData.map((item, index) => (
                  index % 2 === 0 ? (
                      <RightContent key={index} data={item} />
                  ) : (
                      <LeftContent key={index} data={item} />
                  )
              ))}
                
                {/* <div className="custom-container pad-left0">
                <div className="row gy-4">
                    <div className="col-md-6 prod-img-align">
                    <img src="/images/prod-img5.webp" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                    <div className="prod-content">
                        <h5>Toll Monitoring Solution</h5>
                        <p>We understand the challenges faced by toll plaza owners in ensuring smooth traffic flow, minimizing revenue leakage, and maintaining efficient operations. To address these key business problems, we have developed an advanced Toll Monitoring System that revolutionizes the way toll plazas are managed. Our solution combines real-time data analytics, traffic control, and comprehensive monitoring to optimize toll plaza performance and enhance overall efficiency.</p>
                    </div>
                    </div>
                </div>
                </div> */}
            </div>

{/* <div className="prod-3rd-sec">
      {videoAnalyticsData.map((product, index) => (
        <div
          key={product.id}
          className={`custom-container ${index % 2 === 0 ? "pad-left0" : "pad-right0"}`}
        >
          <div className="row gy-4">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 prod-img-align">
                  <img src={product.image} className="img-fluid" alt={product.title} />
                </div>
                <div className="col-md-6">
                  <div className="prod-content">
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
              <div className="col-md-6 prod-img-align mid-odd-img-mob">
                    <img src="/images/prod-img4.webp" className="img-fluid" alt="" />
                    </div>
                <div className="col-md-6">
                  <div className="prod-content">
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                  </div>
                </div>
                <div className="col-md-6 text-end prod-img-align mid-odd-img-web">
                  <img src={product.image} className="img-fluid" alt={product.title} />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div> */}
        </>
    )
}