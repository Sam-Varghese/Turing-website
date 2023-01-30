import "./EventsUnit.scss";
import Button from "../../button/button";
export default function EventsUnitComponent(props) {
    return (
        <div className="EventsUnitCompOuterDiv">
            <div className="EventsUnitCompImageDiv">
                <img src={props.imagePath} alt={ props.title} />
            </div>
            <div className="EventsUnitCompHeadingDiv">
                {props.title }
            </div>
            <div className="EventsUnitCompDescriptionDiv">
                {props.desc}
            </div>
            <div className="EventsUnitCompLinkDiv">
                < a href={props.eventLink}>
                    <Button content = "More" />
                </a>
            </div>
        </div>
    );
}