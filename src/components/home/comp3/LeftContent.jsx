
export const LeftContent = ({ data }) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="img-wrap proj-img-mob">
                        <img src={data.image} className="img-fluid" alt="" />
                    </div>
                    <div className="img-content">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <table className="detailList2" style={{ 'margin': '2rem 0' }}>
                            <tbody>
                                {data.features.map((item, index) => (
                                    <tr key={index}>
                                        <td className="list-icon">
                                            <img src="/images/tick-icon.png" className="img-fluid" />
                                        </td>
                                        <td className="list-txt" style={{ 'color': '#343434' }}>
                                            {item}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="fancy-button">
                            Learn more <span className="arrow-bg"><i className="fas fa-chevron-right arrow"></i></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-wrap proj-img-web">
                        <img src={data.image} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}