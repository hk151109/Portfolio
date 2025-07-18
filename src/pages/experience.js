import Head from "next/head";
import React from "react";
import Layout from "@/Components/Layout";
import Transitions from "@/Components/Transitions";
import AnimatedText from "@/Components/AnimatedText";
import Experience from "@/Components/Experience";

const ExperiencePage = () => {
  return (
    <>
      <Head>
        <title>Harikrishnan | Experience</title>
        <meta
          name="description"
          content="Explore Harikrishnan's professional journey through his internships, leadership roles, and technical contributions."
        />
      </Head>
      <Transitions />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* <AnimatedText
            text="Journey Through Experience!"
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:!mb-8 text-center"
          /> */}
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default ExperiencePage;
