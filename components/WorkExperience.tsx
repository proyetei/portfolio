import { subTitle } from "@/fonts/font";
import TitleText from "./TitleText";
import { adpData, CanadaPostData, TDdata } from "@/lib/data";
import {Divider} from "@nextui-org/divider";
import JobCard from "./boiletplate";
const allCompanyData = [
  adpData,
  TDdata,
  CanadaPostData
];
export default function WorkExperience(){
    return(
        <div className="flex flex-col my-16 gap-4">
          <Divider />
            <div className={`${subTitle.className}`}>
            <TitleText text="EXPERIENCE"/>
            </div>
            <p className="text-sm md:text-base"><span className="opacity-60"> More detailed information on my resume. Contact me at </span> <span className="text-indigo-400 opacity-90 underline"> <a href="mailto:proyeteireavue@gmail.com"> proyeteireavue@gmail.com </a> </span></p>
            <div>
              {allCompanyData.map((companyData, index) => (
                <JobCard
                  key={index}
                  image={companyData.image}
                  logo={companyData.logo}
                  jobTitle={companyData.jobTitle}
                  company={companyData.company}
                  bulletpoints={companyData.bulletpoints}
                />
              ))}
            </div>            
        </div>
    )
}