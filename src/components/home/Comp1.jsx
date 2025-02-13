export const Comp1 = () => {
    const ballImages = [
        "images/ball1.png",
        "images/ball2.png",
        "images/ball3.png",
        "images/ball4.png",
        "images/ball5.png",
        "images/ball6.png",
        "images/ball7.png",
      ];
    return (
        <>
            {/* <div className="container-fluid custom-container">
                <div className="banner-sec">
                    <div className="bn-content">
                        <h2>The future is <span style={{ color: '#7FB5FB' }}>now</span></h2>
                        <p>Partner with <span style={{ borderBottom: '1px solid #4258BE', paddingBottom: '3px' }}>Augmented Transformation</span> & <br /> unlock the true potential of your organization through data-driven solutions.</p>
                        <button type="button" className="btn btn-outline-danger">Get Started</button>
                    </div>
                </div>
            </div> */}

<div className="container-fluid custom-container">
      <div className="banner-sec">
        {/* Render Ball Image Elements */}
        {ballImages.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`ball-${index + 1}`}
            className={`ball ball-${index + 1}`}
          />
        ))}

        <div className="bn-content">
          <h2>
            The future is <span style={{ color: "#7FB5FB" }}>now</span>
          </h2>
          <p>
            Partner with{" "}
            <span style={{ borderBottom: "1px solid #4258BE", paddingBottom: "3px" }}>
              Augmented Transformation
            </span>{" "}
            & <br /> unlock the true potential of your organization through
            data-driven solutions.
          </p>
          {/* <button type="button" className="btn btn-outline-danger">
            Get Started
          </button> */}
          <a href="#" className="get-started-btn">Get started</a>
        </div>
      </div>
    </div>
        </>
    )
}