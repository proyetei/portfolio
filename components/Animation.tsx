import "./animation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faDocker, faJava, faJs, faAmazon, faReact } from "@fortawesome/free-brands-svg-icons";
export default function Animation(){
    return(
        <div className="hidden md:flex items-center justify-center">
            <div className = "stage-cube-cont">
                <div className = "cubespinner"> 
                    <div className = "face1">
                        <FontAwesomeIcon icon={faAmazon}/>
                    </div>
                    <div className = "face2">
                        <FontAwesomeIcon icon={faJs} color="#F06529"/>
                    </div>
                    <div className = "face3">
                        <FontAwesomeIcon icon={faDocker} color="#28A4D9"/>
                    </div>
                    <div className = "face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className = "face5">
                        <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                    </div>
                    <div className = "face6">
                        <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )
}