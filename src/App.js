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
            </Routes>
        </Router>
    );
}

export default App;
