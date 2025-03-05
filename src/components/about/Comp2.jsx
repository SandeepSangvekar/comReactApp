import cardData from '../../api/aboutOfferData.json';
// const cardData = [
//     {
//     //   icon: "🖥️",
//       icon: "/images/GPU-Orchestration.svg",
//       title: "GPU Orchestration",
//     //   description: "Delivering optimized GPU solutions to enhance performance."
//       description: "Delivering optimized GPU solutions to enhance performance and scalability for AI-driven workloads."
//     },
//     {
//     //   icon: "👁️",
//       icon: "/images/Computer-Vision.svg",
//       title: "Computer Vision",
//     //   description: "Extract actionable insights from visual data."
//       description: "Providing advanced computer vision solutions to extract actionable insights from visual data for smarter decision-making."
//     },
//     {
//     //   icon: "📊",
//       icon: "/images/Data-Science.svg",
//       title: "Data Science",
//     //   description: "Drive business insights from data analytics."
//       description: "Offering data science solutions that turn complex data into meaningful insights, driving informed business decisions."
//     },
//     {
//     //   icon: "🤖",
//       icon: "/images/Intelligent-Agent.svg",
//       title: "Intelligent Agent",
//     //   description: "Automate processes with AI-driven solutions."
//       description: "Creating intelligent agent solutions that automate processes, adapt to changes, and drive business innovation."
//     },
//     {
//     //   icon: "✨",
//       icon: "/images/Gen-AI.svg",
//       title: "Gen AI",
//     //   description: "Innovate operations using generative AI solutions."
//       description: "Empowering businesses with generative AI solutions that create innovative content and streamline operations."
//     }
//   ];
export const Comp2 = () => {
    return (
        <>
            <div className="about2nd-sec">
                <div className="abt-top-content">
                    <h2 className="title">What Do We Offer?</h2>
                    <p className="description">
                        At Augmented Transformations, we offer innovative solutions for data-driven businesses across a wide range of industry verticals, including Government, Manufacturing, IT & ITES, BFSI, Hospitality, and E-Commerce. Our expertise in these new technologies enables us to assist our clients in their digital transformation journey.
                    </p>
                </div>
                <div className="scroll-container">
                    
                    <div className="scroll-content">
                        {cardData.map((item, index) => (
                            <div key={index} className="scroll-card">
                                <div className="card-icon">
                                    {/* {item.icon} */}
                                    <img src={item.icon} className="img-fluid" alt="" />
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-text">{item.description}</p>
                            </div>
                        ))}
                        {/* Duplicate cards for infinite scrolling */}
                        {cardData.map((item, index) => (
                            <div key={`dup-${index}`} className="scroll-card">
                                <div className="card-icon">
                                    {/* {item.icon} */}
                                    <img src={item.icon} className="img-fluid" alt="" />
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-text">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}