import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  // console.log("router: ", router);
  // console.log(router.asPath === href);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-primary
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  // console.log("router: ", router);
  // console.log(router.asPath === href);
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block bg-primary  absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-primary
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handlleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 w-full px-32 lg:px-16 md:px-12 sm:px-6 font-medium py-8 flex items-center justify-between dark:text-light relative">
      {/* hamburger */}
      <button
        className="flex-col justify-center items-center hidden z-30 lg:flex"
        onClick={handlleClick}
      >
        <span
          className={`bg-dark transition-all duration-0.6 dark:bg-light block h-0.5 rounded-sm w-6 -translate-y-0.5  ${
            isOpen ? `rotate-45 translate-y-2` : `-translate-y-0.5`
          } `}
        ></span>
        <span
          className={`bg-dark transition-all duration-0.6 dark:bg-light block h-0.5 rounded-sm w-6 my-0.5 ${
            isOpen ? ` opacity-0` : ` opacity-100`
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-0.6 dark:bg-light block h-0.5 rounded-sm w-6 translate-y-0.5 ${
            isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
          }`}
        ></span>
      </button>

      {/* large screen */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className={"mr-4"}></CustomLink>
          <CustomLink
            href="/about"
            title={"About"}
            className={"mx-4"}
          ></CustomLink>
          <CustomLink
            href="/projects"
            title={"Projects"}
            className={"ml-4"}
          ></CustomLink>
          <CustomLink
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gauravsingh13020@gmail.com"
            title={"Contact"}
            className={"ml-6"}
          ></CustomLink>
        </nav>
        <nav className="flex item-center justify-center flex-wrap">
          <motion.a
            href={"https://github.com/gaurav13020"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={
              "https://www.linkedin.com/in/gaurav13020/"
            }
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
          {/* darktheme button  */}
          {/*mode === "light" ? "bg-light text-dark" : "bg-dark text-light"*/}
          <button
            className={`ml-4 flex items-center justify-center rounded-full p-1`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* mobile screen  */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] z-30 flex flex-col fixed justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-sm py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              toggle={handlleClick}
              href="/"
              title={"Home"}
              className={""}
            ></CustomMobileLink>
            <CustomMobileLink
              toggle={handlleClick}
              href="/about"
              title={"About"}
              className={""}
            ></CustomMobileLink>
            <CustomMobileLink
              toggle={handlleClick}
              href="/projects"
              title={"Projects"}
              className={""}
            ></CustomMobileLink>
            <CustomMobileLink
              toggle={handlleClick}
              href={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gauravsingh13020@gmail.com"}
              title={"Contact"}
              className={""}
            ></CustomMobileLink>
          </nav>
          <nav className="flex item-center justify-center flex-wrap mt-2">
            <motion.a
              href={"https://github.com/gaurav13020"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 bg-light rounded-full dark:bg-primary"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://www.linkedin.com/in/gaurav13020"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 ml-3"
            >
              <LinkedInIcon />
            </motion.a>
            {/* darktheme button  */}
            {/*mode === "light" ? "bg-light text-dark" : "bg-dark text-light"*/}
            <button
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
