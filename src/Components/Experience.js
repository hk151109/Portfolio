import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const timeline = [
  {
    type: "@CDSL – Central Depository Services (India) Ltd.",
    position: "Machine Learning Intern",
    time: "May 2025 – Present",
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
    type: "@KJSCE – Software Development Center",
    position: "Software Engineer Intern",
    time: "June 2024 – January 2025",
    place: "Mumbai",
    info1: `Led full-stack MERN build for 500+ users, achieving 30% faster
            load times via code-splitting & lazy-loading.
            Introduced CI/CD with GitHub Actions + Docker (hours → minutes).`,
    info2: `Collaborated with UI/UX to improve flows (+25% adoption) and
            wrote onboarding docs for future maintainers.`,
  },
  {
    type: "@Emfinity KJSCE",
    position: "Tech Team Member",
    time: "January 2023 – May 2024",
    place: "Mumbai",
    info1: `Engineered the club’s Next.js website and Firebase-backed event portal,
            streamlining registrations for 1000+ participants.
            Built interactive math-puzzle visualizations with D3.js.`,
    info2: `Deployed real-time analytics dashboards for event planning.`,
  },
  {
    type: "@KJSCE Yugandhar",
    position: "Audio & Media Head",
    time: "January 2023 – May 2024",
    place: "Mumbai",
    info1: `Directed end-to-end audio production for cultural fest (3000+ attendees),
            configured digital consoles and wireless systems.`,
    info2: `Managed promotional media production and editing.`,
  },
  {
    type: "@KJSCE SAHAS",
    position: "Tech Head",
    time: "December 2022 – May 2023",
    place: "Mumbai",
    info1: `Oversaw Django-PostgreSQL web app for event scheduling and finance tracking.
            Mentored junior developers on Git and Agile sprints.`,
    info2: `Implemented OAuth 2.0 and role-based access control for security.`,
  },
];

const riseUp = {
  initial: { y: 50, opacity: 0 },
  inView: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
};

const Detail = ({ entry }) => {
  const ref = useRef(null);

  // Dynamically get all info keys
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
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mt-0 mb-32 md:mb-24 sm:mb-16">
      <h3 className="text-center font-bold text-5xl md:text-4xl sm:text-3xl mb-12 md:mb-10">
        EXPERIENCE
      </h3>

      <div
        ref={timelineRef}
        className="relative w-full md:w-full mx-auto pl-[60px]"
      >
        {/* Timeline Line */}
        <motion.span
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 md:left-[30px] xs:left-[20px] top-0 w-[4px] md:w-[2px] h-full bg-dark dark:bg-primary origin-top"
        />
        <ul className="flex flex-col items-start xs:ml-2">
          {timeline.map((entry, idx) => (
            <Detail key={idx} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
