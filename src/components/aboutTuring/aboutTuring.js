import "../aboutNMIMS/aboutNMIMS.scss";
export default function AboutTuring() {
    return (
        <div className="aboutNMOuterDiv">
            <h1>About Turing</h1>
            <div className="innerNMDiv">
                <div>
                    <img src={require("../images/Turing.gif")} />
                </div>
                <div className="NMIndrDesc">
                    Turing, the techno learning club of NMIMS Indore aims at not
                    just organizing technical events but also to encourage the
                    club members to participate in other similar events and get
                    exposure to both the areas of participating and organizing.
                    We have organized various events and interesting workshops
                    which got participation from all over the country.
                </div>
            </div>
        </div>
    );
}
