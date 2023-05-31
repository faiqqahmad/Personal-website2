import { useState } from "react"
import LandingPage from "./pages/LandingPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import { Route, Routes} from "react-router-dom"


export default function App() {

return <>
    <div>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} /> */}
        </Routes>
    </div>
   
    
    </>
}