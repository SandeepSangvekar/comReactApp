export const LeftContent = ({ data }) => {
    return (
        <>
            <div className="custom-container pad-right0">
                <div className="row gy-4">
                    <div className="col-md-6 prod-img-align mid-odd-img-mob">
                        <img src={data.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="prod-content">
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-end prod-img-align mid-odd-img-web">
                        <img src={data.image} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}