import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
      <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
        {time}|{place}
      </span>
      <p className="font-medium w-full md:text-sm">{info}</p>
    </motion.div>
    </li>
  );
};

const Education = () => {
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
        EDUCATION
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="B.Tech in Computer Engineering"
            time="2022 - 2026"
            place="KJ Somaiya School of Engineering, Somaiya Vidyavihar University"
            info={
              <>
                Honours Degree in Data Science and Analytics.
                <br />
                Mumbai, Maharashtra, India
                <br />
                Related Coursework:
                <br />
                Artificial Intelligence, Machine Learning, Data Science, 
                <br />
                Database Management Systems, Data Structures and Algorithms,
                <br />
                Operating Systems, Computer Networks, Software Engineering, Web Development.
              </>
            }
          />
          <Details
            type="12th board (CBSE)"
            time="2022"
            place="Maharashtra State Board of Secondary & Higher Secondary Education"
            info={
              <>
                Mumbai, Maharashtra, India
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
