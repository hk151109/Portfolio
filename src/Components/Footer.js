import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { AiFillHeart } from "react-icons/ai";
import { CircularText, CircularTextFullStack } from "./Icons";
import HireMe from "./HireMe";


const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-2 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Made by
          &nbsp;
          <Link
            href={"https://github.com/hk151109"}
            className={"underline"}
            target="_blank"
          >
            {" "}
            Harikrishnan Gopal
          </Link>
        </div>
        <Link
          href={"https://linkedin.com/in/harikrishnangopal"}
          target="_blank"
          className={"underline"}
        >
          Say Hello on LinkedIn<span className="no-underline">😊</span>{" "}
        </Link>
      </Layout>
      <HireMe/>
   
    </footer>
  );
};

export default Footer;
