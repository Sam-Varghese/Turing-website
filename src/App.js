import logo from "./logo.svg";
import "./App.scss";
import Homepage from "./components/homepage/homepage";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import AboutTuring from "./components/aboutTuring/aboutTuring";
import Carousel from "./components/carousel/homepageCarousel";
import Events from "./components/Events/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Team from "./components/team/team";
import Technex2023 from "./components/technex/technex";
import EventsPage from "./components/eventsPage/eventsPage";
import data from "./components/eventDetails/eventDetails.json";
import Contact from "./components/contact/contact";
console.log("%c Turing Website ", "background-color: black; color: white; font-size: 5vw; text-align: center; display: block");
console.log(
    "This website is made by Sam Varghese, the Tech Lead of Turing, NMIMS, Indore.\nProfile link: https://www.linkedin.com/in/sam-varghese2003/"
);
function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact={true}
                    path="/"
                    element={
                        <div className="App">
                            <Homepage />
                            <Carousel />
                            <AboutNMIMS />
                            <AboutTuring />
                            <Contact />
                        </div>
                    }
                />
                <Route
                    exact={true}
                    path="*"
                    element={
                        <div>
                            <h1 style={{ color: "black" }}>Page Not Found</h1>
                        </div>
                    }
                />
                <Route
                    exact={true}
                    path="/events"
                    element={
                        <div className="App">
                            <NavBar />
                            <Events />
                        </div>
                    }
                />
                <Route
                    exact={true}
                    path="/team"
                    element={
                        <div className="App">
                            <NavBar />
                            <Team />
                        </div>
                    }
                />
                <Route
                    exact={true}
                    path="/technex2023"
                    element={
                        <div className="App">
                            <NavBar />
                            <Technex2023 />
                        </div>
                    }
                />
                {/* Following is the page for Enigma which falls under technex events. eventDetails.json file is read to create a new webpage for enigma. */}
                <Route
                    exact={true}
                    path="/technex2023/events/enigma"
                    element={
                        <div className="App">
                            <NavBar />
                            <EventsPage
                                title={data.technexEvents[0].name}
                                desc={data.technexEvents[0].desc}
                                instructions={data.technexEvents[0].instructions}
                                imagePath={data.technexEvents[0].imagePath} 
                                registrationLink={data.technexEvents[0].registrationLink}
                            />
                        </div>
                    }
                />
                <Route
                    exact={true}
                    path="/contact"
                    element={
                        <div className="App">
                            <NavBar />
                            <Contact />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
