import { subTitle } from "@/fonts/font";
import Image from "next/image";
import { inView, motion, useInView } from "framer-motion"
import { useRef } from "react";
interface JobProps {
  image: string;
  logo: string;
  jobTitle: string;
  company: string;
  date: string;
  jobType: string;
  bulletpoints: string[];
}

const JobCard: React.FC<JobProps> = ({ image, logo, jobTitle, company, date, jobType, bulletpoints }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
  return (
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
      <div className="grid md:grid-cols-2 grid-cols-1 my-6 gap-4">
        <Image src={image} alt={`${company} group picture`} height={600} width={600} className="rounded-xl" />
        <div className="flex flex-row gap-4 rounded-3xl p-6">
          <div className="items-center justify-start">
            <Image src={logo} alt={`${company} logo`} height={150} width={150} />
          </div>
          <div className="flex flex-col space-y-3">
          <div className={`${subTitle.className}`}>
            <p className="md:text-2xl text-lg font-extrabold">{jobTitle}</p> 
            <p className="md:text-lg text-md font-extrabold">{company} · {jobType} </p>
            <p className="md:text-base text-md">{date}</p>
          </div>
          {bulletpoints.map((items, index) =>
             <li key={index} className="text-sm md:text-base opacity-70"> {items} </li>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default JobCard
