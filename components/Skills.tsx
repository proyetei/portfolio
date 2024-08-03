import Animation from "./Animation";
import TechStack from "./TechStack";

export default function Skills(){
    return(
        <div className="min-h-screen overflow-hidden">
            <div className="grid grid-cols-2">
                <TechStack />
                <Animation />
            </div>
        </div>
    )
}