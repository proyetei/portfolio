import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Intro from "./Intro"
import WorkExperience from "./WorkExperience"
import { motion } from "framer-motion"
import Projects from "./Projects"
export function TabsComponent() {
  return (
    <Tabs defaultValue="experience" className="flex flex-col items-center justify-center md:p-16 p-4">
      <TabsList className="drop-shadow-white">
        <TabsTrigger value="experience">Work experience</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      <div className="items-center justify-center py-12 px-4">
      <motion.div
        initial={{y: 100, opacity: 0,}}
        animate={{
          y: 0,
          opacity: 1,
          transition: {duration: 0.5, ease: 'easeInOut'}
        }}
        exit={{
          opacity: 0,
          transition: {duration: 0.25, ease: 'easeInOut'}
        }}>
        <TabsContent value="experience"> 
          <Intro />
          <WorkExperience />
        </TabsContent>
        <TabsContent value="projects"> 
          <Projects/> 
        </TabsContent>
        </motion.div>
      </div>
    </Tabs>
  )
}
