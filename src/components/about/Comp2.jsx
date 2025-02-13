// const cardData = [
//     { title: "GPU Orchestration", description: "Optimized solutions for AI-driven workloads." },
//     { title: "Computer Vision", description: "Extract actionable insights for decision-making." },
//     { title: "Data Science", description: "Complex data into meaningful business insights." },
//     { title: "Intelligent Agent", description: "Automating processes and driving business innovation." },
//     { title: "Gen AI", description: "Empowering businesses with generative AI." },
// ];
const cardData = [
    {
      icon: "🖥️",
      title: "GPU Orchestration",
      description: "Delivering optimized GPU solutions to enhance performance."
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Extract actionable insights from visual data."
    },
    {
      icon: "📊",
      title: "Data Science",
      description: "Drive business insights from data analytics."
    },
    {
      icon: "🤖",
      title: "Intelligent Agent",
      description: "Automate processes with AI-driven solutions."
    },
    {
      icon: "✨",
      title: "Gen AI",
      description: "Innovate operations using generative AI solutions."
    }
  ];
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
                                <div className="card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                        {/* Duplicate cards for infinite scrolling */}
                        {cardData.map((item, index) => (
                            <div key={`dup-${index}`} className="scroll-card">
                                <div className="card-icon">{item.icon}</div>
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