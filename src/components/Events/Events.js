import EventsUnitComponent from "./EventsUnit/EventsUnit";
import data from "./events.json";
import "./Events.scss";

const eventsUnitArray = data.events.map((value, index) => {
    return (
        <EventsUnitComponent
            imagePath={value.imagePath}
            title={value.title}
            desc={value.desc}
            eventLink={value.eventLink}
        />
    );
})

export default function Events() {
    console.log(data);
    return (
        <div className="eventsOuterDiv">
            <h1>Events</h1>
            <div className = "eventsInnerDiv">
            {eventsUnitArray}
            </div>
        </div>
    );
}