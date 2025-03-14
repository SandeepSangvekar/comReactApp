import projectData from '../../../api/home/comp3/projectData.json';
console.log('project data',projectData);
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
export const Comp3 = () => {
    return (
        <>
            <div className="fullWrapper paddingY">
                <div className="custom-container">
                    {/* <h5>Driving digital evolution with intelligent solutions that enhance outcomes, combining cutting-edge technology with industry expertise to create lasting value</h5> */}
                    <h5>{projectData.title}</h5>
                    {projectData.sections.map((item, index) => (
                        index % 2 === 0 ? (
                            <RightContent key={index} data={item}/>
                        ) : (
                            <LeftContent key={index} data={item}/>
                        )
                    ))}
                    {/* <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src="/images/iot-img.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-content">
                                <h2>Internet of Things (IoT)</h2>
                                <p>The internet of things helps people live and work smarter, as well as gain complete control over their lives. In addition to offering smart devices to automate homes, IoT is essential to business.</p>
                                <table className="detailList2" style={{ 'margin': '2rem 0' }}>
                                    <tbody>
                                        <tr>
                                            <td className="list-icon">
                                                <img src="/images/tick-icon.png" className="img-fluid" />
                                            </td>
                                            <td className="list-txt" style={{ 'color': '#343434' }}>
                                            IOT Software & Telematic Devices
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list-icon">
                                                <img src="/images/tick-icon.png" className="img-fluid" />
                                            </td>
                                            <td className="list-txt" style={{ 'color': '#343434' }}>
                                            Data Security and Encryption
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list-icon">
                                                <img src="/images/tick-icon.png" className="img-fluid" />
                                            </td>
                                            <td className="list-txt" style={{ 'color': '#343434' }}>
                                            Firmware and Software
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <button className="fancy-button">
                                    Learn more <span className="arrow-bg"><i className="fas fa-chevron-right arrow"></i></span>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    )
}