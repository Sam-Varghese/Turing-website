import "./aboutNMIMS.scss"
export default function AboutNMIMS() {
    return (
        <div className="aboutNMOuterDiv">
            <h1>About NMIMS</h1>
            <div className="innerNMDiv">
                <div className = "NMIndrDesc">
                    With a legacy of 40 years, NMIMS has grown to be not only
                    one of the top-10 B-schools in India but has also emerged as
                    a multi-disciplinary university with 6 campuses at Mumbai,
                    Shirpur, Bengaluru, Hyderabad, Indore, and Navi Mumbai and
                    12 constituent schools that include Management, Engineering,
                    Pharmacy, Architecture, Commerce, Business Economics,
                    Science, Law, Aviation, Liberal Arts, Design & Distance
                    Learning.
                </div>
                <div className = "gifDiv">
                    <img src = {require("../images/NMIMS.gif")} />
                </div>
            </div>
        </div>
    );
}