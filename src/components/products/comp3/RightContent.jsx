export const RightContent = ({ data }) => {
    return (
        <>
            <div className="custom-container pad-left0">
                <div className="row gy-4">
                    <div className="col-md-6 prod-img-align">
                        <img src={data.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="prod-content">
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}