export const Comp4 = () => {
    return (
        <>
            <div className="career-content4 paddingY">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="left-car-content">
                                <h3>Grow With Us!</h3>
                                <p>We’re on a mission to build something incredible—and we want you to be a part of it. Explore opportunities to grow, collaborate, and make an impact with us.</p>
                                <div className="newsletter-form">
                                    <form action="#" method="POST">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Please compose your message and send it via this email."
                                                aria-label="Email Address"
                                                required
                                            />
                                            <button type="submit" className="btn submit-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                                    <path d="M15.364.636a.5.5 0 0 1 .11.548l-6.418 14.792a.5.5 0 0 1-.948-.076L7.313 9.207 1.924 7.893a.5.5 0 0 1-.07-.96l13.5-6a.5.5 0 0 1 .51.085zM6.539 8.868l-.322 3.221 1.604-3.978-1.282.757z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-car-img">
                                <img src="../../public/images/career-coworking-spaces.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}