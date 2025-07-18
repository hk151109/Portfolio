import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const workTimeline = [
  {
    type: "CDSL – Central Depository Services (India) Ltd.",
    position: "Machine Learning Intern",
    time: "May 2025 – July 2025",
    place: "Lower Parel, Mumbai",
    info1: `Built an Azure-hosted micro-services pipeline that ingests and cleans investor-grievance & help-desk records, standardising 40+ text fields with Python/SQL for downstream modelling.
`,
    info2: `Fine-tuned BERT, RoBERTa, and Sentence-Transformers classifiers to auto-tag complaint category and escalation probability, with F1-score of 0.87 and accelerating response SLA.
`,
    info3: `Risk-Score Model: merged four years of complaint frequency and turnaround metrics to predict a risk score for every DP/broker, powered by a matplotlib dashboard used by compliance teams for early-warning alerts.
`,
    info4: `Retrieval-Augmented Generation assistant: indexed 10 k+ SEBI circulars & internal SOPs and deployed a local LLM workflow that drafts compliant responses and suggest actions, trimming manual triage time.
`,
    info5: `Collaborated with Risk, Grievance Redressal, and Back-Office teams to gather requirements, present insights, and iterate on ML solutions, strengthening cross-functional communication skills.
`,
  },

  {
    type: "KJSCE – Software Development Center",
    position: "Software Engineer Intern",
    time: "June 2024 – January 2025",
    place: "Mumbai",
    info1: `Faculty Appointment Management System: Developed a MERN-based platform to manage faculty appointments for assessments, re-evaluations, and academic duties, with automated email notifications for real-time updates.`,
    info2: `FDC Funding & Reimbursement Portal: Built a multi-step form system with dynamic fields, file uploads, and role-based access for funding requests and reimbursements using React, Node.js, Cloudinary, and MongoDB.`,
    info3: `Implemented secure authentication and role-based access control to ensure data privacy and compliance with institutional policies.`,
    info4: `Enhanced performance, responsiveness, and scalability through React optimizations, RESTful APIs, and efficient MongoDB queries.`,
  },

];

const collegeTimeline = [
  {
    type: "Emfinity KJSCE",
    position: "Tech Team Member",
    time: "January 2023 – May 2024",
    place: "Mumbai",
    info1: `Responsible for maintaining and creating datasets of math problems required for events and workshops.`,
    info2: `Oversaw all mathematical logic behind events, workshops, and social media series, ensuring quality and accuracy.`,
    info3: `Participated in daily technical sessions, conducted technical events, and created/solved challenging math problems.`,
    info4: `Classified and categorized questions for events while brainstorming innovative math competitions and event formats.`,
  },
  {
    type: "KJSCE Yugandhar",
    position: "Audio & Media Head",
    time: "January 2023 – May 2024",
    place: "Mumbai",
    info1: `Served as the Audio Head, managing end-to-end audio production for cultural fest (3000+ attendees) and backstage setup.`,
    info2: `Contributed to video editing, promotional content creation, and script writing for cultural events and performances.`,
  },
  {
    type: "KJSCE SAHAS",
    position: "Tech Head",
    time: "December 2022 – May 2023",
    place: "Mumbai",
    info1: `Handled all technical details and backend systems for council events, including website and data management.`,
    info2: `Organized and coordinated impactful events like social drives in orphanages, beach cleanups, and awareness campaigns.`,
  },
];


const riseUp = {
  initial: { y: 50, opacity: 0 },
  inView: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
};

const Detail = ({ entry }) => {
  const ref = useRef(null);
  const infoKeys = Object.keys(entry).filter((key) => key.startsWith("info"));

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full md:w-[95%] ml-[80px] flex flex-col"
    >
      <LiIcon reference={ref} />
      <motion.div
        variants={riseUp}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-3xl sm:text-xl">{entry.type}</h3>
        <h4 className="font-semibold text-dark/75 dark:text-primaryDark/75 text-xl sm:text-lg">
          {entry.position}
        </h4>
        <span className="block text-dark/60 dark:text-primaryDark/60 text-sm mb-2">
          {entry.time} | {entry.place}
        </span>
        {infoKeys.map((key, idx) => (
          <p key={idx} className="font-medium md:text-sm mt-1">
            ▶ {entry[key]}
          </p>
        ))}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const workRef = useRef(null);
  const collegeRef = useRef(null);
  const { scrollYProgress: workScroll } = useScroll({
    target: workRef,
    offset: ["start end", "center start"],
  });
  const { scrollYProgress: collegeScroll } = useScroll({
    target: collegeRef,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mt-0 mb-32 md:mb-24 sm:mb-16">
      {/* Work Experience */}
      <h3 className="text-center font-bold text-5xl md:text-4xl sm:text-3xl mb-12 md:mb-10">
        WORK EXPERIENCE
      </h3>
      <div ref={workRef} className="relative w-full mx-auto pl-[60px]">
        <motion.span
          style={{ scaleY: workScroll }}
          className="absolute left-9 md:left-[30px] xs:left-[20px] top-0 w-[4px] md:w-[2px] h-full bg-dark dark:bg-primary origin-top"
        />
        <ul className="flex flex-col items-start xs:ml-2">
          {workTimeline.map((entry, idx) => (
            <Detail key={idx} entry={entry} />
          ))}
        </ul>
      </div>

      {/* College Positions */}
      <h3 className="text-center font-bold text-5xl md:text-4xl sm:text-3xl mt-20 mb-12 md:mb-10">
        COLLEGE POSITIONS
      </h3>
      <div ref={collegeRef} className="relative w-full mx-auto pl-[60px]">
        <motion.span
          style={{ scaleY: collegeScroll }}
          className="absolute left-9 md:left-[30px] xs:left-[20px] top-0 w-[4px] md:w-[2px] h-full bg-dark dark:bg-primary origin-top"
        />
        <ul className="flex flex-col items-start xs:ml-2">
          {collegeTimeline.map((entry, idx) => (
            <Detail key={idx} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
