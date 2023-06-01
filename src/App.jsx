import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "./styles/mainSection.css"
import AboutMe from './components/pages/AboutMe.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Contact from './components/pages/Contact.jsx'
import Resume from './components/pages/Resume.jsx'
import NotFound from './components/pages/NotFound.jsx'
import NavTabs from "./components/NavTabs";

function App() {
    return (
        <BrowserRouter>
            <NavTabs/>
            <div className={'container-fluid mainSection'}>
                <Routes>
                    <Route path="/" element={<AboutMe/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
