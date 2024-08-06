"use client"
import { FaXmark } from "react-icons/fa6";
import { MdOutlineOpenInFull } from "react-icons/md";
import Draggable from 'react-draggable';
import Image from "next/image";
import { useState } from "react";
import { FaPython, FaReact, FaNodeJs, FaMinus, } from 'react-icons/fa';
import { SiClerk, SiTailwindcss, SiTypescript, SiMongodb, SiAwsamplify, SiFirebase, SiGooglecloud } from 'react-icons/si';
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";
import { subTitle } from "@/fonts/font";
export const AetherTechStack =  [
    { name: 'React', icon: FaReact },
    { name: "NodeJS", icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'AWS', icon: SiAwsamplify },
    { name: "Clerk", icon: SiClerk },
]
export const AttendEaseTechStack = [
    { name: "Python", icon: FaPython },
    { name: "Firebase", icon: SiFirebase},
    { name: "Google Cloud Platform", icon: SiGooglecloud},
]
export default function MacWindow(){
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const customTransform = () => {
        switch (activeTab) {
          case "aether":
            return "translateY(0%)";
          case "attendease":
            return "translateY(100%)";
          default:
            return "translateY(0%)";
        }
      };
    const [activeTab, setActiveTab] = useState("aether");
    return(
        <div className=" w-screen flex flex-col items-center justify-center">
            <Draggable>
        <div className=" rounded-xl md:h-[300px] md:w-3/5 w-[350px] h-[400px]">

            <div className="bg-stone-800 h-10 w-full rounded-t-xl p-2"> 
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-2 items-center justify-start">
                    <div className="rounded-full bg-red-500 hover:opacity-50 " >
                        <FaXmark className="scale-80"/>
                    </div>
                    <div className="rounded-full bg-yellow-500 hover:opacity-50">
                    <FaMinus className="scale-80" />
                    </div>
                    <div className="rounded-full bg-green-500 hover:opacity-50">
                    <MdOutlineOpenInFull className="scale-75"/>
                    </div>
                    </div>
                </div> 
            </div>
            <div className="grid grid-cols-[1fr_4fr] h-full">
                <div className="bg-stone-700 rounded-bl-xl flex flex-col">
                <motion.div 
          className="border fixed h-11 w-0.5 rounded-t-full border-white transition-transform transform duration-300 ease-in-out drop-shadow-white"
          style={{ transform: customTransform() }}
        ></motion.div>
                    <button className={`${subTitle.className} hover:bg-stone-600 hover:text-stone-800 md:text-lg text-sm p-2`} onClick={() => setActiveTab("aether") }> Aether </button>
                    <button className={`${subTitle.className} hover:bg-stone-600 hover:text-stone-800 md:text-lg text-sm p-2`} onClick={() => setActiveTab("attendease")}> AttendEase </button>
                </div>
                {activeTab === "aether" ? (
                <div className="bg-stone-900 rounded-br-xl p-2">
                    <motion.div
            initial={{ opacity: 0,}}
            animate={{
                opacity: 1,
                transition: {duration: 0.5, ease: 'easeInOut'}
            }}>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <Image src="/overview.png" width={500} height={500} alt="overview" />
                        <div className="flex space-x-4">
                            {AetherTechStack.map(({ name, icon: Icon }) => (
                                <div key={name} className=" flex flex-col items-center md:text-base text-sm mx-2 p-2 rounded hover:bg-stone-700">
                                    <Icon size={24} />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                        <ScrollArea className="h-[250px] w-11/12 rounded-md border p-4">
                        <div className="p-4">
                            <p className="text-2xl text-bold"> Project description </p>
                            <p> Unlock hidden clues of your mind with our gamified mental health app, combining AI-driven insights from correlation between your dreams and daily journaling and various fun activities!
                            <li> Generate images with AI and generate hidden pyschological patterns found from the correlation of your dreams and personal life events to undrstand your psyche! </li>
                            <li> Earn points through daily journaling and through daily activities like tracking your moods with the easy to use calendar mood tracker.  </li>
                            <li> View mood analytics charts that summarizes your yearly and monthly mood report. </li>
                            </p>
                        </div>
                    </ScrollArea>

                    </div>
                    </motion.div>
                </div>
                ) :
                (<div className="bg-stone-900 rounded-r-xl p-2">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <Image src="/attend-ease.png" height={500} width={500} alt="attend ease" />
                        <div className="flex space-x-4">
                            {AttendEaseTechStack.map(({ name, icon: Icon }) => (
                                <div key={name} className=" flex flex-col items-center md:text-base text-sm mx-2 p-2 rounded hover:bg-stone-700">
                                    <Icon size={24} />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4">
                            <p className="text-2xl text-bold"> Project description </p>
                    <p>A student attendance tracking software utilizing facial recognition via webcam using the Haar Cascade algorithm, integrating with GCP and Firebase to manage user data.
                    </p>
                    </div>
                    </div>
                                        

                </div> ) }
            </div>
        </div>
        </Draggable>
        </div>
    )
}