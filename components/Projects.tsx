import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import MacWindow from "./MacWindow";
import InstagramMockup from "./InstagramMockup";

export default function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div className="min-h-screen overflow-hidden">
        {isMobile ? (<motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
        }}
      >
        <InstagramMockup />
        </motion.div>)
         : 
         (<motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      >
         <MacWindow />
      </motion.div> )}
    </div>
  );
}
