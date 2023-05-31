import arrow from "../assets/whiteArrow.png"
import "../styles/LandingPage.css"

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
                        <a href="https://google.com"><h3 className="projects">Projects</h3></a>
                        <a className="aTag1" href="https://google.com:"><img className="arrowImageRight" src={arrow} alt="arrow"/></a>
                    </div>
                
            </div>
        </div>
        <div className="bottomBar">
            <div className="forCenteringBottom">
                <a href="https://google.com"><h3 className="about">About</h3></a>
                <a className="aTag1" href="https://google.com"><img className="arrowImageBottom" src={arrow} alt="arrow"/></a>
            </div>
        </div>
    </> 
}