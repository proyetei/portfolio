import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaJava, FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { SiC, SiNextdotjs, SiAngular, SiSpringboot, SiTypescript, SiJavascript, SiMongodb, SiMysql, SiGraphql, SiFlask, SiSelenium, SiCucumber, SiPostman, SiAwsamplify, SiFirebase, SiGooglecloud } from 'react-icons/si';
import { motion } from 'framer-motion';
interface TechStackItem {
    name: string;
    icon: IconType;
}

const techStacks: Record<string, TechStackItem[]> = {
    languages: [
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
        { name: 'C', icon: SiC },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
    ],
    frameworks: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: FaReact },
        { name: 'Angular', icon: SiAngular },
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'Selenium', icon: SiSelenium },
    ],
    tools: [
        { name: 'Postman', icon: SiPostman },
        { name: 'Docker', icon: FaDocker },
        { name: 'AWS', icon: SiAwsamplify },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'GCP', icon: SiGooglecloud },
    ],
    databases: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'GraphQL', icon: SiGraphql },
    ],
};

const renderCategory = (title: string, items: TechStackItem[]): JSX.Element => (
    <div key={title}>
        <p className="md:text-xl text-base font-bold mb-4 ">{title}</p>
        <div className="flex space-x-4">
            {items.map(({ name, icon: Icon }) => (
                <div key={name} className=" flex flex-col items-center md:text-base text-sm">
                    <Icon size={24} />
                    <span>{name}</span>
                </div>
            ))}
        </div>
    </div>
);

const TechStack: FC = () => (
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
    <div className="p-4 flex flex-col space-y-8">
        {renderCategory('Languages', techStacks.languages)}
        {renderCategory('Frameworks', techStacks.frameworks)}
        {renderCategory('Tools', techStacks.tools)}
        {renderCategory('Databases', techStacks.databases)}
    </div>
    </motion.div>

);

export default TechStack;
