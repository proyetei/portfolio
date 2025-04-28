import { subTitle } from "@/fonts/font";
import { Divider } from "@nextui-org/divider";
import TitleText from "./TitleText";
import Image from "next/image";
import { inView, motion, useInView } from "framer-motion"
import { useRef } from "react";
export default function Education(){
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
    return(
      <motion.div
      ref={ref}
      initial={{y: 100, opacity: 0,}}
      animate={inView ? {
        y: 0,
        opacity: 1,
        transition: {duration: 0.75, ease: 'easeInOut'}
      } : {}}
      exit={{
        opacity: 0,
        transition: {duration: 0.5, ease: 'easeInOut'}
    }}>
        <div className="flex flex-col my-16 gap-4 font-semibold">
          <Divider/>
            <div className={`${subTitle.className}`}>
            <TitleText text="EDUCATION"/>
            </div>
            <div className="dark:bg-white/10 bg-blue-900/20 backdrop-blur-xl rounded-xl p-4">
            <div className="flex flex-row gap-4 rounded-3xl p-6">
          <div className="items-center justify-start">
            <Image src="/mcmaster-logo.png" alt="mcmaster logo" height={150} width={150} />
          </div>
          <div className="flex flex-col space-y-3">
          <div className={`${subTitle.className}`}>
            <p className="md:text-2xl text-lg font-extrabold"> McMaster University </p> 
            <p className="md:text-lg text-md font-extrabold"> Bachelor of Applied Science - BASc, Computer Science Co-op </p>
            <p className="md:text-base text-md">Sep 2020 - Sep 2025 </p>
          </div>
             <p className="text-sm md:text-base opacity-70"> Relevant Courses: CS 1MD3 Introduction to Programming (A+) <br/>
                CS 1XC3 Development Basics (A) <br/>
                CS 1XD3 Introduction to Software Design using Web Programming (A) <br/>
                CS 2ME3 Introduction to Software Development (A+) <br/>
                CS 2LC3 Logical Reasoning for Computer Science (A) <br/>
                CS 2GA3 Computer Architecture (A) <br/>
                CS 3DM3 Data Mining (A) <br/>
                CS 3AC3 Data Structure: Algorithms and Complexity (A) <br/>
                CS 4ZP6A Capstone (A+) </p>
          </div>
        </div>
            </div>
        </div>
        </motion.div>
    )
}