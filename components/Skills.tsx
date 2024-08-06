import { useRef } from "react";
import Animation from "./Animation";
import TechStack from "./TechStack";
import { motion, useInView } from "framer-motion"
export default function Skills(){
    const ref = useRef(null);
	const inView = useInView(ref, { once: true });
    return(
        <div className="min-h-screen overflow-hidden mt-6">
            <motion.div
            ref={ref}
            initial={{ opacity: 0,}}
            animate={{
                opacity: 1,
                transition: {duration: 1, ease: 'easeInOut', delay:0.5}
                
            }}>
            <div className="flex text-left mb-6">
                <p> My strongest soft skill is my exceptional ability to thrive under high pressure, honed through extensive experience as a Software Engineer in three dynamic, fast-paced, and agile companies.
                <br/> I am a dedicated learner, problem solver, and a persistent self starter who is able to take ownership of tasks and collaborate across teams.   </p>
            </div>
            <div className="grid grid-cols-2">
                <TechStack />
                <Animation />
            </div>
        </motion.div>
        </div>
    )
}