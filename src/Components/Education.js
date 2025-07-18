import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

/* ────────────────────────────────────────────────────────── */
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[75%] lg:w-[85%] md:w-[90%] mx-auto flex flex-col" // increased width
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-3xl sm:text-xl">{type}</h3>

        <span className="block font-medium text-dark/60 dark:text-primaryDark/60 text-sm mb-2">
          {time} | {place}
        </span>

        <p className="font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

/* ────────────────────────────────────────────────────────── */
const Education = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mt-0 mb-32 md:mb-24 sm:mb-16">
      <h3 className="text-center font-bold text-5xl md:text-4xl sm:text-3xl mb-12 md:mb-10">
        EDUCATION
      </h3>

      <div
        ref={timelineRef}
        className="relative w-[85%] lg:w-[90%] md:w-full mx-auto" // increased width
      >
        {/* vertical timeline line */}
        <motion.span
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 md:left-[30px] xs:left-[20px] top-0 w-[4px] md:w-[2px] h-full bg-dark dark:bg-primary origin-top"
        />

        <ul className="flex flex-col items-start xs:ml-2">
          <Details
            type="B.Tech in Computer Engineering"
            time="2022 – 2026"
            place="KJ Somaiya School of Engineering"
            info={
              <>
                Pursuing a Bachelor of Technology in Computer Engineering with a CGPA of 9.26/10, expected to graduate in 2026.
                <br /><br />
                Honours Degree in Data Science & Analytics.
                <br /><br />
                Key coursework: Artificial Intelligence, Machine Learning, Data Science, 
                Database Management Systems (DBMS), Data Structures & Algorithms (DSA), 
                Operating Systems, Computer Networks, and Full-Stack Development (MERN).
              </>
            }
          />

          <Details
            type="Higher Secondary Education (12th Board – HSC)"
            time="2022"
            place="Ratanbai Walbai Junior College, Maharashtra"
            info={<>Scored 83% – Mumbai, Maharashtra, India</>}
          />

          <Details
            type="Secondary Education (10th Board – CBSE)"
            time="2020"
            place="Holy Angels’ School"
            info={<>Scored 96.6% – Mumbai, Maharashtra, India</>}
          />
        </ul>
      </div>
    </section>
  );
};

export default Education;
