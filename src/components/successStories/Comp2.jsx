export const Comp2 = () => {
    return (
        <>
            <div className="successStories-wrapper">
                <div className="suc-container suc-space">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="mb-3">Empowering Resource Management with Workspace Operator</h3>
                            <h6>Customer Requirement:</h6>
                            <p>A powerful server solution with 8 A100 GPUs to support 56 simultaneous users, each accessing a specific GPU portion. The system needed to host custom environments like YOLO and ESRT efficiently</p>
                            <h6>Our Solution:</h6>
                            <p>We delivered the Workspace Operator, a specialized application with pre-configured environments (YOLO, ESRT, BCSCN Super Resolution). This innovative solution leverages Multi-Instance GPU (MIG) for optimized resource allocation and seamless multi-user support. The user-friendly interface allows effortless switching between environments, enhancing productivity. To ensure data security, a robust Tunnel application was integrated, providing VPN access and safeguarding server integrity. This design meets the customer's needs with efficiency, flexibility, and security.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="../../public/images/suc-img1.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="suc-container suc-space">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="../../public/images/suc-img2.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="mb-3">Quality Assurance through CCTV</h3>
                            <h6>Business Challenge:</h6>
                            <p>In high-volume manufacturing, minor errors in product assembly or labeling can lead to major quality issues. The customer struggled with ensuring switch boxes met precise standards, as manual inspections often failed to catch sequence or marking errors.</p>
                            <h6>Solution Delivered:</h6>
                            <p>We implemented a Video Analytics Solution (VAS) integrated with high-resolution CCTV cameras across the production line. VAS monitors switch box sequences in real-time, verifying symbols against predefined standards like High, Medium, and Low. Instant alerts flag any errors, enabling immediate corrections and significantly reducing error rates. This automated solution has minimized reliance on manual inspections, enhanced operational efficiency, and ensured consistent product quality and compliance with rigorous standards.</p>
                        </div>

                    </div>
                </div>
                <div className="suc-container suc-space">
                    <div className="row">

                        <div className="col-md-6">
                            <h3 className="mb-3">Machinery performance monitoring</h3>
                            <h6>Challenge:</h6>
                            <p>A leading concreting equipment manufacturer sought a solution to monitor machinery performance, optimize productivity, streamline fleet operations, analyze critical data, and enhance after-sales service management.</p>
                            <h6>Solution Delivered:</h6>
                            <p>We implemented Sixth Chakra, our proprietary solution, seamlessly integrating it with their concrete machinery. This system delivers real-time insights into equipment health, performance, and productivity. It also features smart fleet management, advanced data analytics, and efficient after-sales service workflows.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="../../public/images/suc-img3.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="suc-container suc-space">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="../../public/images/suc-img4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="mb-3">Perimeter Intrusion Detection</h3>
                            <h6>Challenge:</h6>
                            <p>A large industrial facility faced significant security challenges in effectively monitoring its extensive perimeter. Traditional measures like security guards and fixed cameras provided limited coverage, often resulting in delayed intrusion detection and increased vulnerability to breaches.</p>
                            <h6>Solution Delivered:</h6>
                            <p>We introduced a robust VAS Perimeter Detection System powered by advanced video analytics. This solution continuously monitors the perimeter, instantly identifying potential intrusions and alerting security teams in real time. By enabling rapid response, the system enhances security coverage and mitigates risks effectively.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}