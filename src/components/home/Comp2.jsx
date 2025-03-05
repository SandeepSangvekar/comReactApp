import { useState } from "react"; 
import { motion, useScroll, useTransform } from "framer-motion";
import competenciesData from '../../api/competenciesData.json';

export const Comp2 = () => {
    const { scrollY } = useScroll();  // Get scroll position

    // Change background color based on scroll position
    const bgColor = useTransform(scrollY, [0, 500, 1000], ["#ECECEC", "#333", "#000"]);
    const textColor = useTransform(scrollY, [0, 500, 1000], ["#000", "#fff", "#fff"]);

    const [hovered, setHovered] = useState(false); // State for hover effect

    return (
        <>
            <motion.div 
                className="fullWrapper competencies-sec"
                style={{ backgroundColor: hovered ? "#111" : bgColor }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                <div className="waveBottom"></div>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="comp-leftContent">
                                <motion.small style={{ color: textColor }}>
                                    - Driving Excellence Across Diverse Sectors
                                </motion.small>
                                <h2>Our core competencies</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <motion.p style={{ color: textColor }}>
                                We specialize in delivering innovative AI-driven solutions across a wide range of technologies, empowering businesses to unlock new potential and drive transformation.
                            </motion.p>
                        </div>
                    </div>
                    <div className="row1">
                        <div className='grid grid-three-cols'>
                            {competenciesData.map((curElem, index) => (
                                <motion.div 
                                    key={curElem.id}
                                    className="card1"
                                    initial={{ opacity: 0, y: 50 }} // Fade in and slide up
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.5, delay: index * 0.4 }} // Staggered effect
                                    viewport={{ once: true }} // Animate only once
                                >
                                    <div className="img-icon">
                                        <img src={curElem.img_url} alt={curElem.name} className="img-fluid" />
                                    </div>
                                    <div className="card-content">
                                        <div className="content-wrap">
                                            <h5 className="card-title">{curElem.name}</h5>
                                            <p className="card-text">{curElem.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
