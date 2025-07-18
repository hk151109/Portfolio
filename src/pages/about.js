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
              I’m Harikrishnan Gopal, a Computer Engineering student at K. J. Somaiya School of Engineering with a deep passion for data science, machine learning, and artificial intelligence. With a CGPA of 9.26, I have combined academic excellence with hands-on experience, building AI-driven systems that solve real-world problems. My journey spans projects like FinCredible, where I integrated real-time market data with LSTM models for return prediction, and SafeView, a browser extension leveraging a fine-tuned MobileNet-V3 CNN for NSFW content moderation. I have also worked as an AI/ML Intern at CDSL, where I developed NLP pipelines, risk-scoring models, and dashboards used by compliance teams.
              <br /><br />
              Beyond AI, I enjoy building scalable web platforms with MERN and FastAPI, cloud-based architectures on AWS, GCP, and Azure, and advanced data visualizations using Plotly and Tableau. I thrive at the intersection of technology and creativity—whether it’s designing technical workflows, leading math-tech events as part of Emfinity, or crafting interactive solutions. I’m also an avid chess player and reader, always eager to learn, innovate, and contribute to meaningful data-driven innovations.
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
