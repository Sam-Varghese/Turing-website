import NavBar from "../navbar/navbar";
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
                <p className="subHeading">The Techno Learning Club</p>
            </div>
        </div>
    );
}