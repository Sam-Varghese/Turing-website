import "./navbar.scss";
export default function NavBar() {
    return (
        <div className="fixNavbar">
            <nav className="navbar">
                <div className="logo">
                    <img src={require("../images/logo.png")} />
                </div>
                <div>Home</div>
                <div>Events</div>
                <div>Team</div>
                <div>Contact</div>
            </nav>
        </div>
    );
}
