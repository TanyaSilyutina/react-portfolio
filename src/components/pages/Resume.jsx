import { Component } from "react";
import Pdf from '../../assets/Tanya_Silyutina_Resume.pdf'
import "../../styles/Resume.css"

export default function Resume() {
    class Download extends Component {
        render() {

            return (
                <div className = "resume mb-4">
                    <a href = {Pdf} target = "_blank"><h2>My Resume - Pdf</h2></a>
                </div>
            );
        }
    }
    return <div>
        <div className={"p-5"} >
            < Download />
            <h3>
                Front End Proficiencies:
            </h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>
                Back End Proficiencies:
            </h3>
            <ul>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
        </div>
    </div>
}