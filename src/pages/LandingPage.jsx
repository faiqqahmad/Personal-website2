import arrow from "../assets/whiteArrow.png"
import "../styles/LandingPage.css"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return <>
        <div className="nameBox">
            <p className="name">/Faiq Ahmad</p>
        </div>
        <div className="mainBody">
            <div className="leftcol">
                <div className="line"></div>
            </div>
            <div className="centercol">
                <h1 className="welcomeText">Welcome to my portfolio.</h1>
                <h3 className="subtext">I am an aspiring full-stack software engineer, hoping to make my mark.</h3>
            </div>
            <div className="rightcol">
                    <div className="forCenteringRight">
                        <Link to="/ProjectsPage"><h3 className="projects">Projects</h3></Link>
                        <Link className="aTag1" to="/ProjectsPage"><img className="arrowImageRight" src={arrow} alt="arrow"/></Link>
                    </div>
                
            </div>
        </div>
        <div className="bottomBar">
            <div className="forCenteringBottom">
                <Link to="/AboutPage"><h3 className="about">About</h3></Link>
                <Link className="aTag1" to="/AboutPage"><img className="arrowImageBottom" src={arrow} alt="arrow"/></Link>
            </div>
        </div>
    </> 
}