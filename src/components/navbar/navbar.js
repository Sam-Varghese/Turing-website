import "./navbar.scss";
export default function NavBar() {
    return (
        <div className="fixNavbar">
            <nav className="navbar">
                <a href="/">
                    <div className="logo">
                        <img src={require("../images/logo.png")} />
                    </div>
                </a>
                <a href="/">
                    <div className="navbarItem">Home</div>
                </a>
                <a href="/events">
                    <div className="navbarItem">Events</div>
                </a>
                <a href="/team">
                    <div className="navbarItem">Team</div>
                </a>
                <a href="/contact">
                    <div className="navbarItem">Contact</div>
                </a>
            </nav>
        </div>
    );
}
