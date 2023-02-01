import TeamMembers from "./teamMembers/teamMembers";
import data from "./team.json";
import "./team.scss";

const membersComponentArray = data.teamMembers.map((value, index) => {
    return (
        <TeamMembers
            name={value.name}
            post={value.post}
            profileImage={value.profileImage}
            profileLink={value.profileLink}
            mailId = {value.mailId}
        />
    );
});

export default function Team() {
    return (
        <div className="teamOuterDiv">
            <h1>Team</h1>
            <div className="teamInnerDiv">{membersComponentArray}</div>
        </div>
    );
}
