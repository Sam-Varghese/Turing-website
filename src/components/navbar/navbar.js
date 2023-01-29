import "./navbar.scss";
export default function NavBar() {
    return (
        <div className="fixNavbar">
            <nav className="navbar">
                <div className="logo">
                    <img src={require("../images/logo.png")} />
                </div>
                <div className = "navbarItem">Home</div>
                <div className = "navbarItem">Events</div>
                <div className = "navbarItem">Team</div>
                <div className = "navbarItem">Contact</div>
            </nav>
        </div>
    );
}
