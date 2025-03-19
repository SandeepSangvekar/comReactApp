export const RightContentCard = ({ data }) => {
    return (
        <>
            <div className="suc-container suc-space">
                <div className="row">
                    <div className="col-md-6">
                        <div className="right-suc-img-wrap">
                            <img src={data.image.src} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-3">{data.title}</h3>
                        <div className="suc-content">
                            {data.sections.map((section, index) => {
                                return (
                                    <div key={index}>
                                        <h6>{section.heading}</h6>
                                        <p>{section.content}</p>
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