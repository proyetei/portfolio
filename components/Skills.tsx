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
                <p> My strongest soft skill is my ability to work and handle high-pressure situations well. I have learned this skill through working as SWE intern in various fast-paced, agile companies.
                <br/> I am a self-starter who solves problems efficiently, takes ownership of tasks, and collaborates well in cross-functional teams. </p>
            </div>
            <div className="grid grid-cols-2">
                <TechStack />
                <Animation />
            </div>
        </motion.div>
        </div>
    )
}