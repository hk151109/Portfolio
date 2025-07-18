import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import zostelimg from "../../public/images/projects/ZOSTEL.png";
import youtube from "../../public/images/projects/youtube.png";
import fabimg from "../../public/images/projects/Faballey.png";
import safeview from "../../public/images/projects/safeview.png";
import portfolio from "../../public/images/projects/Portfolio.png";
import shopimg from "../../public/images/projects/Shop.png";
import Transitions from "@/Components/Transitions";
import Portfolioimg from "../../public/images/projects/Portfolio.png";
import fincredible from "../../public/images/projects/fincredible.png";
import codesync from "../../public/images/projects/codesync.png";
import sqlassistant from "../../public/images/projects/Sql_assistant.png";
import Stocksage from "../../public/images/projects/Stocksage.png";
import uniqscan from "../../public/images/projects/uniqscan.png";
import sp500 from "../../public/images/projects/sp500.png";
import brownian from "../../public/images/projects/brownian.png";

const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="dark:bg-dark dark:border-light w-full flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-primary xs:-right-3 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:un"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark dark:text-light"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className=" dark:bg-dark dark:border-light w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full dark:text-light text-left text-3xl font-bold lg:text-xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10 md:w-6">
              {" "}
              <GithubIcon className={"dark:fill-light"} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Harikrishnan | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5 ">
          <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"FINCREDIBLE"}
                link="https://github.com/hk151109/FinCredible"
                github={"https://github.com/hk151109/FinCredible"}
                img={fincredible}
                summary={`
                Designed an ETL pipeline to integrate real-time market ticks and 10K+ daily news articles into MongoDB, powering user-specific feeds and portfolio analytics.<br /><br />
                Built gradient-boosted & LSTM predictive models that improved 1-day return-prediction, serving recommendations through a FastAPI micro-service.<br /><br />
                Visualized risk metrics and price-impact signals with Plotly dashboards, and deployed the solution on GCP for seamless scalability and faster investor action.`}

              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"STOCKSAGE"}
                link="https://github.com/hk151109/Stocksage"
                github={"https://github.com/hk151109/Stocksage"}
                img={Stocksage}
                summary={`
                Built a Flask micro-service that streams live OHLC data from Alpha Vantage, feeds it to an LSTM (TensorFlow/Keras), and serves rolling price forecasts via REST API.<br /><br />
                Visualized actual vs predicted prices and confidence bands with Matplotlib on a responsive dark-theme UI, giving traders an at-a-glance decision aid.
                `}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"UNIQSCAN"}
                link="https://github.com/hk151109/UniqScan"
                github={"https://github.com/hk151109/UniqScan"}
                img={uniqscan}
                summary={`
                Developed a full-stack web platform (FastAPI + MERN) that extracts text with NLTK and OCR, encodes it using a fine-tuned RoBERTa model, and flags plagiarised or LLM-generated content with 93% F1-score, maintaining plagiarism records in a structured MySQL table.<br /><br />
                Provided a virtual-classroom dashboard and on-demand visualization reports using Matplotlib, enabling educators to review submissions and uphold academic integrity.
                `}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"SQL ASSISTANT"}
                link="https://sqlassistant.streamlit.app/"
                github={"https://github.com/hk151109/Sql_Assistant"}
                img={sqlassistant}
                summary={`
                Built a Streamlit tool that converts plain-English questions into parameterised SQL via Google Gemini embeddings, enabling instant data exploration for non-technical users.<br /><br />
                Implemented seamless CSV upload with automatic table creation and a live MySQL connection for real-time database querying and results display.
                `}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"SAFEVIEW"}
                link="https://github.com/hk151109/SafeView"
                github={"https://github.com/hk151109/SafeView"}
                img={safeview}
                summary={`
                Developed SafeView, a real-time browser extension for automated NSFW content moderation using a fine-tuned MobileNet-V3 CNN (F1-score improved from 86% to 92%).<br /><br />

Built a dataset of 500k labeled images, automating data cleaning and augmentation in Python, and trained the model on NVIDIA A100 GPUs.<br /><br />

Engineered a JavaScript + TensorFlow.js pipeline for <50ms latency frame classification, with client-side processing to ensure privacy.<br /><br />

Integrated advanced features like asynchronous buffering, auto-blurring of flagged content, and whitelisting for seamless moderation.
                `}
                
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"CODESYNC"}
                link="https://github.com/hk151109/CodeSync"
                github={"https://github.com/hk151109/CodeSync"}
                img={codesync}
                summary={`
                A real-time collaborative coding platform enabling simultaneous multi-user code editing and execution using Firestore and Dockerized backend.<br /><br />
                Integrated a VS Code-style editor with live code sync, session sharing, and remote Python code execution via Flask API in an isolated environment.
                `}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"PORTFOLIO"}
                link="https://github.com/hk151109/portfolio"
                github={"https://github.com/hk151109/portfolio"}
                img={portfolio}
                summary={` A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, experience, skills, and about me. <br /><br />Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments.`}
              />
            </div>
            

            
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={driverDrowsiness}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS Portfolio using NextJS,Framer-Motion and TailwindCSS
                Portfolio using NextJS,Framer-Motion and TailwindCSS
                Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={youtube}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={blackScholes}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={uber}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={sp500}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={sp500}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div> */}
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
