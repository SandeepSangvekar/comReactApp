export const RightContent = ({ data }) => {
    return (
        <>
            <div className="grid grid-two-cols">
                <div className="exp-img-left">
                    <img src={data.image} className="img-fluid" alt="smart meter app" />
                </div>
                <div className="exp-content-right">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <button className="custom-button">
                        Learn more <span className="arrow2"><i className="fa-solid fa-arrow-right"></i></span>
                    </button>
                    {/* Animated Ball Images */}
                    <img src="/images/blueBall1.png" className="animated-ball ball1" alt="Floating Ball" />
                    <img src="/images/blueBall2.png" className="animated-ball ball2" alt="Floating Ball" />
                </div>
            </div>
        </>
    )
}