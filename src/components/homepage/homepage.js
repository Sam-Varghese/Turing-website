import NavBar from "../navbar/navbar";
import Button from "../button/button";
import "./homepage.scss";
export default function Homepage() {
    
    return (
        <div className="page">
            <NavBar />
            <div className="turingHeadingDiv">
                <img
                    src={require("../images/turingText.png")}
                    className="turingHeading"
                />
                <p className="subHeading">
                    The Techno Learning Club of NMIMS, Indore
                </p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeI8_vYyaJgM7SJM4Y9AWfLq-tglWZh6yt7bEXEOJr_L-hV1A/viewform?formkey=dGx0b1ZrTnoyZDgtYXItMWVBdVlQQWc6MQ"
                    target="_blank"
                >
                    <Button content = "Join Turing"/>
                </a>
            </div>
        </div>
    );
}