import "./teamMembers.scss";

export default function TeamMembers(props) {
    return (
        <div className="teamMembersOuterDiv">
            <div className="teamMembersDPDiv">
                <img src={props.profileImage} alt={props.name} />
            </div>
            <div className="teamMembersNameDiv">{props.name}</div>
            <div className="teamMembersPostDiv">{props.post}</div>
            <div className="teamMembersProfileDiv">
                <a href={props.mailId}>
                    <img src={require("../../images/icons/linkedin.png")} />
                </a>
                <a href={props.mailId}>
                    <img src={require("../../images/icons/gmail.png")} />
                </a>
                <a href={props.mailId}>
                    <img src={require("../../images/icons/instagram.png")} />
                </a>
            </div>
        </div>
    );
}
