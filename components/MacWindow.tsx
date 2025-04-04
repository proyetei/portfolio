"use client"
import { FaXmark } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { MdOutlineOpenInFull } from "react-icons/md";
import Draggable from 'react-draggable';
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPython, FaReact, FaNodeJs, FaMinus, FaBootstrap } from 'react-icons/fa';
import { SiClerk, SiDocker, SiHaskell, SiTailwindcss, SiTypescript, SiMongodb, SiAwsamplify, SiFirebase, SiGooglecloud, SiPostgresql, SiGraphql } from 'react-icons/si';
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, useInView } from "framer-motion"
import { useRouter } from "next/navigation";
import { subTitle } from "@/fonts/font";
export const AetherTechStack =  [
    { name: 'React', icon: FaReact },
    { name: "NodeJS", icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'AWS S3', icon: SiAwsamplify },
]
export const SystemBenchmarkingTechStack = [
    { name: "Python", icon: FaPython },
    { name: "Haskell", icon: SiHaskell },
    { name: "Go", icon: FaGolang },
    { name: "Docker", icon: SiDocker },
]
export const AmimaTechStack = [
    { name: 'AngularJS 13', icon: FaReact },
    { name: "NodeJS", icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Firebase', icon: SiFirebase },
]

export default function MacWindow(){
    const customTransform = () => {
        switch (activeTab) {
          case "amima":
            return "translateY(0%)";
          case "aether":
            return "translateY(100%)";
          default:
            return "translateY(0%)";
        }
      };
    const [activeTab, setActiveTab] = useState("amima");
    const nodeRef = useRef(null); // Create a node ref for Draggable
    return(
        <div className=" w-screen flex flex-col items-center justify-center text-slate-300">
            <Draggable defaultPosition={{ x: 0, y: 0 }} nodeRef={nodeRef}>
        <div ref = {nodeRef} className=" rounded-xl w-4/6 h-[400px]">
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
                    <button className={`${subTitle.className} hover:bg-stone-600 hover:text-stone-800 md:text-lg text-sm p-2`} onClick={() => setActiveTab("amima")}> Amima </button>
                    <button className={`${subTitle.className} hover:bg-stone-600 hover:text-stone-800 md:text-lg text-sm p-2`} onClick={() => setActiveTab("aether") }> Aether </button>
                </div>
                {activeTab === "aether" ? (
                <div className="bg-stone-900 rounded-br-xl p-2">
                    <motion.div
            initial={{ opacity: 0,}}
            animate={{
                opacity: 1,
                transition: {duration: 0.5, ease: 'easeInOut', delay:0.5}
            }}>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="w-4/5 flex items-center justify-center">
                        <Image src="/overview.png" width={400} height={600} alt="overview" /> 
                        </div>
                         
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
                            {AetherTechStack.map(({ name, icon: Icon }) => (
                                <div key={name} className=" flex flex-col items-center md:text-base text-sm mx-2 p-2 rounded hover:bg-stone-700">
                                    <Icon size={22} />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                        <ScrollArea className="h-[250px] w-11/12 rounded-md border p-4">
                        <div className="p-4">
                            <p className="text-2xl text-bold"> Project description </p>
                            <li> Unlock hidden clues of your mind with our gamified mental health app, combining AI-driven insights from correlation between your dreams and daily journaling. </li>
                            <li> Earn points through daily journaling and through daily activities like tracking your moods with the easy to use calendar mood tracker.  </li>
                            <li> View mood analytics charts that summarizes your yearly and monthly mood report. </li>
                        </div>
                    </ScrollArea>

                    </div>
                    </motion.div>
                </div>
                ) :  (
                    <div className="bg-stone-900 rounded-r-xl p-2">
                    <div className="p-8">
                    <motion.div 
                    initial={{opacity: 0,}}
                    animate={ {
                        opacity: 1,
                        transition: {duration: 0.75, ease: 'easeInOut', delay:0.5}} } className="flex flex-col items-center justify-center gap-8">
                        <Image src="/amima_pic.jpg" height={500} width={500} alt="amima" />
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
                            {AmimaTechStack.map(({ name, icon: Icon }) => (
                                <div key={name} className=" flex flex-col items-center md:text-base text-sm mx-2 p-2 rounded hover:bg-stone-700">
                                    <div>

                                    </div>
                                    <Icon size={24} />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4">
                            <p className="text-2xl text-bold"> Project description </p>
                            <p> Amima is a university product review and social media platform designed to help students share reviews and connect. The platform supports CRUD operations for sharing multimedia content, allowing users to create, manage, and interact with posts seamlessly. RESTful API endpoints handle follow and comment functionality, while content-based filtering ensures a personalized homefeed showcasing relevant product reviews.</p>

                    </div>
                    </motion.div> 
                    </div>
                              

                </div> 
                ) }
            </div>
        </div>
        </Draggable>
        </div>
    )
}