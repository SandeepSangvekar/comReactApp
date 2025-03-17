export const LeftContent = ({ data }) => {
    return (
        <>
            <div className="grid grid-two-cols">
                <div className="exp-img-right exp-img-mob">
                    <img src={data.image} className="img-fluid" alt="smart meter app" />
                </div>
                <div className="exp-content-left">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <button className="custom-button">
                        Learn more <span className="arrow2"><i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                </div>
                <div className="exp-img-right exp-img-web">
                    <img src={data.image} className="img-fluid" alt="smart meter app" />
                </div>
            </div>
        </>
    )
}