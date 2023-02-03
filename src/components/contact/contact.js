import "./contact.scss";

export default function Contact() {
    return (
        <div className="contactOuterDiv">
            <h1>Contact Us</h1>
            {/* Google maps */}
            <div className = "contactDivMap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.428817048826!2d75.79236321477988!3d22.74946208509207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301fb24138e1d%3A0xac456fd4ef7e05c9!2sSVKM&#39;s%20NMIMS%2C%20Indore!5e0!3m2!1sen!2sin!4v1675358142889!5m2!1sen!2sin"
                    // width="600"
                    // height="450"
                    // style="border:0;"
                    allow="" 
                    alt = "NMIMS, Indore location. "
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="socialMedia">
                <img src = {require("../images/icons/instagram.png")} />
                <img src = {require("../images/icons/gmail.png")} />
                <img src = {require("../images/icons/linkedin.png")} />
            </div>
        </div>
    );
}
