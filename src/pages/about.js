import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "@/Components/Layout";
import AnimatedText from "@/Components/AnimatedText";
import Skills from "@/Components/Skills";
import Education from "@/Components/Education";
import Transitions from "@/Components/Transitions";
import ProfilePic from "../../public/images/profile/harikrishnan.jpeg";

const About = () => (
  <>
    <Head>
      <title>Harikrishnan | About</title>
      <meta
        name="description"
        content="Brief bio and background of Harikrishnan Gopal."
      />
    </Head>

    <Transitions />

    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        {/* headline */}
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-12 lg:!text-7xl md:!text-6xl sm:!text-4xl"
        />

        {/* bio + picture */}
        {/* bio + picture */}
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">

          {/* ─── bio ─────────────────────────────────────── */}
          <div className="col-span-5 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary">
              Biography
            </h2>

            <p className="font-medium">
              Harikrishnan Gopal is a final‑year B.Tech Computer Engineering student
              (CGPA 9.26) passionate about data science and machine learning. He has
              delivered Azure‑hosted NLP micro‑services at CDSL, built MERN‑stack
              applications at KJSCE‑SDC, and maintains open‑source projects like
              FinCredible and StockSage. Comfortable across Python, cloud platforms,
              and modern web stacks, he enjoys turning complex data into real‑world
              impact.

              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>
          </div>

          {/* ─── profile picture ─────────────────────────── */}
          <div className="col-span-3 self-start relative h-max rounded-2xl border-2 rounded-br-xl border-solid border-dark bg-light p-3 dark:bg-dark dark:border-primaryDark md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-primary" />
            <Image
              src={ProfilePic}
              alt="Profile picture"
              priority
              className="rounded-2xl border-2 dark:border-primaryDark max-h-[380px] md:max-h-[320px] w-auto object-cover"
              sizes="(max-width: 768px) 70vw,
                    (max-width: 1200px) 35vw,
                    25vw"
            />
          </div>
        </div>


        {/* skills & education */}
        <div className="mt-20">
          <Skills />
          <Education />
        </div>
      </Layout>
    </main>
  </>
);

export default About;
