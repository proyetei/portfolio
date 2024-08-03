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

export function TabsComponent() {
  return (
    <Tabs defaultValue="experience" className="flex flex-col items-center justify-center md:p-16 p-4">
      <TabsList className="drop-shadow-white">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <div className="items-center justify-center py-12 px-4">
        <TabsContent value="experience"> 
          <Intro />
          <WorkExperience />
        </TabsContent>
        <TabsContent value="projects"> 
          Not implemented yet 
        </TabsContent>
        <TabsContent value="skills"> 
          <Skills />
        </TabsContent>
      </div>
    </Tabs>
  )
}
