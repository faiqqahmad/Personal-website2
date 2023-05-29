import { useState } from "react"
import "./LandingPage.css"
import arrow from "./assets/right-chevron.png"

export default function App() {

// const [name, setName] = useState("Josesph");
// function handleClick() {
//   setName("Bobby");
// }
// return <p onClick={handleClick}> {name} is some age</p>

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
        <div className="rightcol"></div>
    </div>
    <div className="bottomBar">
        <div className="forCentering">
            <h3 className="about">About</h3>
            <img className="arrowImages" src={arrow} alt="arrow"/>
        </div>
    </div>
</>
}