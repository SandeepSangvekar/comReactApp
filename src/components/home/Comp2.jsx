import competenciesData from '../../api/competenciesData.json';
export const Comp2 = () => {
    return (
        <>
            <div className="fullWrapper competencies-sec">
                <div className="waveBottom"></div>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="comp-leftContent">
                                <small>- Driving Excellence Across Diverse Sectors</small>
                                <h2>Our core competencies</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>We specialize in delivering innovative AI-driven solutions across a wide range of technologies, empowering businesses to unlock new potential and drive transformation. Our expertise includes:</p>
                        </div>
                    </div>
                    <div className="row1">
                        <div className='grid grid-three-cols'>
                            {competenciesData.map((curElem) => {
                                return (
                                    // <div className="col-md-4 col-sm-6" key={curElem.id}>
                                    // <div className="card comp-card mb-3">
                                    //   <div className="row g-0">
                                    //     <div className="col-md-4 p-3 d-flex justify-content-center align-items-center">
                                    //       <img src={curElem.img_url} className="img-fluid rounded-start" alt="..." />
                                    //     </div>
                                    //     <div className="col-md-8">
                                    //       <div className="card-body">
                                    //         <h5 className="card-title">{curElem.name}</h5>
                                    //         <p className="card-text">{curElem.description}</p>
                                    //       </div>
                                    //     </div>
                                    //   </div>
                                    // </div>
                                    // </div>

                                    <div className="card1" key={curElem.id}>
                                        <div className="img-icon">
                                            <img src={curElem.img_url} alt={curElem.name} className="img-fluid" />
                                        </div>
                                        <div className="card-content">
                                            <div className="content-wrap">
                                                <h5 className="card-title">{curElem.name}</h5>
                                                <p className="card-text">{curElem.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}