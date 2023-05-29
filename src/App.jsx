import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from './components/pages/AboutMe.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Contact from './components/pages/Contact.jsx'
import Resume from './components/pages/Resume.jsx'
import NotFound from './components/pages/NotFound.jsx'
import NavTabs from "./components/NavTabs";

function App() {
    <BrowserRouter>
        <NavTabs/>
        <Routes>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
