import "./eventsPage.scss";
import Button from "../button/button";
export default function EventsPage(props) {
    return (
        <div className="eventsPageDiv">
            <div className="eventsPageHeadingDiv">
                <h1>{props.title}</h1>
            </div>
            <div className="eventsPageImageDiv">
                <img src={props.imagePath} alt={props.imagePath} />
            </div>
            <div className="eventsPageDescDiv">
                <p>{props.desc}</p>
            </div>
            <div className="eventsPageInstructions">
                <h2>Instructions:</h2>
                <ul>
                    {props.instructions.map((value, index) => {
                        return <li>{value}</li>;
                    })}
                </ul>
            </div>
            <div className="registrationButton">
                <a href={props.registrationLink}>
                    <Button content="Register" />
                </a>
            </div>
        </div>
    );
}
