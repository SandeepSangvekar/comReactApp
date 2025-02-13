export const Comp2 = () => {
    return (
        <>
            <div className="map-section">
                <div className="map-border-img"></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3674953772215!2d73.76751057423716!3d18.512287969429064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be67eacc3dd3%3A0x86936c0e08b2446f!2sI-Space%20IT%20Park!5e0!3m2!1sen!2sin!4v1738646737606!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    )
}