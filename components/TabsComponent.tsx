import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Intro from "./Intro"
import WorkExperience from "./WorkExperience"
import { motion } from "framer-motion"
import Skills from "./Skills"
import { useState } from "react"
import Projects from "./Projects"
import Education from "./Education"

export function TabsComponent() {
  const [activeTab, setActiveTab] = useState("experience");
  const customTransform = () => {
    switch (activeTab) {
      case "experience":
        return "translateX(-280%)";
      case "projects":
        return "translateX(0%)";
      case "skills":
        return "translateX(280%)";
      default:
        return "translateX(0%)";
    }
  };
  return (
    <Tabs defaultValue="experience" className="flex flex-col items-center justify-center md:p-16 p-4">
      <motion.div 
          className="border fixed top-1 md:w-8 w-7 h-0.5 rounded-t-full bg-custom-light border-white transition-transform transform duration-300 ease-in-ou drop-shadow-white"
          style={{ transform: customTransform() }}
        ></motion.div>
      <TabsList>
        <TabsTrigger value="experience" className="relative z-10" onClick={() => setActiveTab("experience")}>WORK</TabsTrigger>
        <TabsTrigger value="projects" className="relative z-10" onClick={() => setActiveTab("projects")}>PROJECTS</TabsTrigger>
        <TabsTrigger value="skills" className="relative z-10" onClick={() => setActiveTab("skills")}>SKILLS</TabsTrigger>
      </TabsList>
        <TabsContent value="experience"> 
          <Intro />
          <WorkExperience />
          <Education />
        </TabsContent>
        <TabsContent value="projects"> 
          <Projects />
        </TabsContent>
        <TabsContent value="skills"> 
          <Skills />
        </TabsContent>
    </Tabs>
  )
}
