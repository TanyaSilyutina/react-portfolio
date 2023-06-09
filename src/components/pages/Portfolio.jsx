import Footer from "../Footer.jsx"
import "../../styles/Portfolio.css"
import Nomads from "../../assets/drty_nomad.png";
import Calendar from "../../assets/calendar-project-one.png";
import Schedule from "../../assets/schedualer.png";
import PswGen from "../../assets/psw-generator.png";


export default function Portfolio() {
    const breakpoints = "col-sm-12 col-md-6 col-lg-4 mb-4"


    return (
        <div>
            <div className={"container"}>
                <div className={"row mb-3"}>
                    <div className={"col-12 gy-4"}>
                        <div className={'fs-2'}>
                            Portfolio
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={`${breakpoints}`}>
                        <div className={"image"}>
                            <img className={"img-fluid myImgs rounded"} src={Nomads}
                                 alt={"dirty nomad project icon"}/>
                            <div className={"content rounded"}>
                                <a href={"https://drty-nomad-2023.herokuapp.com/"} target={"_blank"} className={"rounded proName"}> DRTY NOMADS</a>
                                <a href={"https://github.com/RyanWood2334/drty-nomads"}  className={"proGit"} target={"_blank"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                                         className="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${breakpoints}`}>
                        <div className={"image"}>
                            <img className={"img-fluid myImgs rounded"} src={Calendar}
                                 alt={"calendar project icon"}/>
                            <div className={"content rounded"}>
                                <a href={"https://amman98.github.io/Random-Word-Calendar/"} target={"_blank"} className={"rounded proName"}> Random Word Calendar</a>
                                <a href={"https://github.com/amman98/Random-Word-Calendar"}  className={"proGit"} target={"_blank"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                                         className="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${breakpoints}`}>
                        <div className={"image"}>
                            <img className={"img-fluid myImgs rounded"} src={PswGen}
                                 alt={"dirty nomad project icon"}/>
                            <div className={"content rounded"}>
                                <a href={"https://tanyasilyutina.github.io/js-password-generator-HW/"} target={"_blank"} className={"rounded proName"}> Password Generator</a>
                                <a href={"https://github.com/TanyaSilyutina/js-password-generator-HW"}  className={"proGit"} target={"_blank"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                                         className="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${breakpoints}`}>
                        <div className={"image"}>
                            <img className={"img-fluid myImgs rounded"} src={Schedule}
                                 alt={"dirty nomad project icon"}/>
                            <div className={"content rounded"}>
                                <a href={"https://tanyasilyutina.github.io/work-day-scheduler/"} target={"_blank"} className={"rounded proName"}> Day Scheduler</a>
                                <a href={"https://github.com/TanyaSilyutina/work-day-scheduler"}  className={"proGit"} target={"_blank"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                                         className="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    < Footer/>
                </div>

            </div>
        </div>
    )
}