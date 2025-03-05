import careerData from '../../api/careerData.json'
import { motion } from "framer-motion";
export const Comp3 = () => {
    return (
        <>
            <div className="career-content3 paddingY">
                <div className="custom-container">
                    <div className="row gy-5 mob-tab-gy">
                        {
                            careerData.map((career, index) => (
                                <motion.div
                                    className="col-md-6" key={index}
                                    initial={{ opacity: 0, y: 50 }} // Fade in and slide up
                                    whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                                    transition={{ duration: 0.5, delay: index * 0.4 }} // Staggered effect
                                    viewport={{ once: true }} // Animate only once
                                >
                                    {/* <div className="col-md-6" key={index}> */}
                                    <div className="row">

                                        <div className="col-md-4">
                                            <div className="career-icon">
                                                <img src={career.img} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="career-text">
                                                <h5 className="career-title">{career.title}:</h5>
                                                <p>{career.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}

                                </motion.div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}