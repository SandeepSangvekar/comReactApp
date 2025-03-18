
export const LeftContentCard = ({ data }) => {
    return (
        <>
            <div className="suc-container suc-space">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left-suc-img-wrap suc-img-mob">
                            <img src={data.image.src} className="img-fluid" alt="" />
                        </div>
                        <h3 className="mb-3">{data.title}</h3>
                        {data.sections.map((section, index) => {
                            return (
                                <div key={index} className="suc-content">
                                    <h6>{section.heading}:</h6>
                                    <p>{section.content}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-6">
                        <div className="left-suc-img-wrap suc-img-web">
                            <img src={data.image.src} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}