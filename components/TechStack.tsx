import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaJava, FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { SiC, SiNextdotjs, SiAngular, SiSpringboot, SiTypescript, SiJavascript, SiMongodb, SiMysql, SiGraphql, SiFlask, SiSelenium, SiCucumber, SiPostman, SiAwsamplify, SiFirebase, SiGooglecloud, SiPostgresql } from 'react-icons/si';
interface TechStackItem {
    name: string;
    icon: IconType;
}

const techStacks: Record<string, TechStackItem[]> = {
    languages: [
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
        { name: 'C', icon: SiC },
        { name: 'Typescript', icon: SiTypescript },
        { name: 'Javascript', icon: SiJavascript },
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
        { name: "Cucumber", icon: SiCucumber},
    ],
    databases: [
        { name: "Postgre SQL", icon: SiPostgresql},
        { name: 'Mongo DB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'AWS S3', icon: SiAwsamplify },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'GCP', icon: SiGooglecloud },
    ],
};

const renderCategory = (title: string, items: TechStackItem[]): JSX.Element => (
    <div key={title}>
        <p className="md:text-xl text-base font-bold mb-4">{title}</p>
        <div className="flex">
            <div className='grid grid-cols-4 md:grid-rows-1 gap-x-16 gap-y-4 md:gap-4'>
            {items.map(({ name, icon: Icon }) => (
                <div key={name} className="items-center md:text-base text-sm">
                    <Icon size={24} />
                    <span>{name}</span>
                </div>
            ))}
            </div>
        </div>
    </div>
);

const TechStack: FC = () => (
    <div className="p-4 flex flex-col space-y-8">
        {renderCategory('Languages', techStacks.languages)}
        {renderCategory('Frameworks', techStacks.frameworks)}
        {renderCategory('Tools', techStacks.tools)}
        {renderCategory('Databases & storage', techStacks.databases)}
    </div>
);

export default TechStack;
