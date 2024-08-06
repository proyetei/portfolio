import { useRef } from "react";
import Animation from "./Animation";
import TechStack from "./TechStack";
import { motion, useInView } from "framer-motion"
export default function Skills(){
    const ref = useRef(null);
	const inView = useInView(ref, { once: true });
    return(
        <div className="min-h-screen overflow-hidden">
            <motion.div
            ref={ref}
            initial={{ opacity: 0,}}
            animate={{
                opacity: 1,
                transition: {duration: 1, ease: 'easeInOut', delay:0.5}
            }}>
            <div className="grid grid-cols-2">
                <TechStack />
                <Animation />
            </div>
        </motion.div>
        </div>
    )
}