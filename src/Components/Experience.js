import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, position, time, place, info1, info2 }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
    <LiIcon reference={ref}/>
    <motion.div
     initial={{y:50}}
     whileInView={{y:0}}
     transition={{duration:0.5,type:"spring"}}>

      <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">{type}</h3>
      <h3 className="capitalize font-bold text-dark/75 dark:text-primaryDark/75 text-xl sm:text-xl xs:text-lg">{position}</h3>
      <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
        {time}|{place}
      </span>
      <p className="font-medium w-full md:text-sm">▶{info1}</p>
      <p className="font-medium w-full md:text-sm">▶{info2}</p>
    </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        EXPERIENCE
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="@CDSL – Central Depository Services (India) Ltd."
            position="Machine Learning Intern"
            time="May 2025 – Present"
            place="Lower Parel, Mumbai, Maharashtra, India"
            info1="
            Designed and implemented a high-throughput NLP pipeline to efficiently process and analyze large-scale, multilingual social-media data—enabling rapid sentiment analysis, intent detection, and entity extraction using transformer-based models.
            Developed LLM-powered microservices for investor-query resolution, combining prompt conditioning, regulatory-compliance integration, and human-in-the-loop validation to streamline response generation and improve turnaround time.
            "
            info2="
            Enabled AI-driven automation of internal compliance and customer-support processes, reducing manual workload and improving operational efficiency across stakeholder touchpoints.
            "
          />
          <Details
            type="@KJSCE – Software Development Center"
            position="Software Engineer Intern"
            time="June 2024 – January 2025"
            place="Mumbai, Maharashtra, India"
            info1="
            Spearheaded full-stack development of a production-grade MERN (MongoDB, Express.js, React, Node.js) platform used by 500+ campus users, achieving 30 % faster load times via code-splitting and lazy-loading.
            Implemented CI/CD with GitHub Actions and Docker, shrinking deployment cycles from hours to minutes while sustaining 95 % test coverage.
            "
            info2="
            Partnered with UI/UX teams to refine user flows, boosting feature adoption by 25 %; authored comprehensive documentation and onboarding guides for future maintainers.
            "
          />
          <Details
            type="@Emfinity KJSCE"
            position="Tech Team Member"
            time="January 2023 – May 2024"
            place="Mumbai, Maharashtra, India"
            info1="
            Engineered the club’s Next.js website and Firebase-backed event portal, streamlining registrations for 1 000+ participants and automating confirmation-email workflows.
            Built interactive math-puzzle visualizations with D3.js, increasing event engagement by 40 %.
            "
            info2="
            Deployed real-time analytics dashboards that informed data-driven scheduling and outreach decisions for the committee.
            "
          />
          <Details
            type="@KJSCE Yugandhar"
            position="Audio & Media Head"
            time="January 2023 – May 2024"
            place="Mumbai, Maharashtra, India"
            info1="
            Directed end-to-end audio production for a cultural fest hosting 3 000+ attendees, configuring digital mixing consoles, stage monitors, and wireless systems for broadcast-quality sound.
            Led cross-functional crews in scripting, filming, and editing promotional videos with Adobe Premiere Pro and After Effects.
            "
            info2="
            Introduced cloud-based asset-management with metadata tagging, halving retrieval time and establishing SOPs for stage setup and teardown.
            "
          />
          <Details
            type="@KJSCE SAHAS"
            position="Tech Head"
            time="December 2022 – May 2023"
            place="Mumbai, Maharashtra, India"
            info1="
            Oversaw development of a Django-PostgreSQL web app for event scheduling, finance tracking, and volunteer coordination across 20+ society events.
            Mentored six junior developers via weekly code reviews, Git workshops, and agile sprint ceremonies.
            "
            info2="
            Integrated Google OAuth 2.0 and role-based access control, eliminating unauthorized-access incidents during tenure.
            "
          />
        </ul>

      </div>
    </div>
  );
};

export default Experience;
