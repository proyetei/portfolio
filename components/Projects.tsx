import Draggable from "react-draggable";
import MacWindow from "./MacWindow";
import { motion } from "framer-motion";

export default function Projects(){
    return(
        <div className="min-h-screen overflow-hidden">
        <motion.div
        initial={{ opacity: 0,}}
        animate={{
          opacity: 1,
          transition: {duration: 0.5, ease: 'easeInOut', delay:0.25}
        }}>
            <MacWindow /> 
        </motion.div>
        </div>
    )
}