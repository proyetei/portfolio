import { subTitle } from "@/fonts/font";
import Image from "next/image";

interface JobProps {
  image: string;
  logo: string;
  jobTitle: string;
  company: string;
  bulletpoints: string[];
}

const JobCard: React.FC<JobProps> = ({ image, logo, jobTitle, company, bulletpoints }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 my-6 gap-4">
        <Image src={image} alt={`${company} group picture`} height={600} width={600} className="rounded-xl" />
        <div className="flex flex-row gap-4 rounded-3xl p-6">
          <div className="items-center justify-start">
            <Image src={logo} alt={`${company} logo`} height={150} width={150} />
          </div>
          <div className="flex flex-col space-y-3">
          <div className={`${subTitle.className}`}>
            <p className="md:text-2xl text-lg font-extrabold">{jobTitle}</p>
            <p className="md:text-lg text-md font-extrabold">{company}</p>
          </div>
          {bulletpoints.map((items, index) =>
             <li key={index} className="text-sm md:text-base opacity-70"> {items} </li>)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobCard
