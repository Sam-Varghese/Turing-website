import EventsUnitComponent from "../Events/EventsUnit/EventsUnit";
import data from "./technex.json";
import "../Events/Events.scss";

const eventsUnitArray = data.events.map((value, index) => {
    return (
        <EventsUnitComponent
            imagePath={value.imagePath}
            title={value.title}
            desc={value.desc}
            eventLink={value.eventLink}
        />
    );
});

export default function Technex2023() {
    return (
        <div className="eventsOuterDiv">
            <h1>Technex 2023</h1>
            <p>
                It will be a 3-day event including multiple events relating to
                technology. The event is organized by The Techno Learning Club;
                Turing as a part of School of Technology Management and
                Engineering of NMIMS, Indore. Non proident sint qui deserunt sit Lorem et dolor excepteur id dolor sit elit. Voluptate excepteur officia ut labore commodo dolor laboris anim est reprehenderit ut ullamco. Consequat ipsum voluptate esse ex ad laborum minim. 
            </p>
            <div className="eventsInnerDiv">{eventsUnitArray}</div>
        </div>
    );
}
