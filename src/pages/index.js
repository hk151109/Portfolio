import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profilepic from "../../public/images/profile/homeimage.png";
import { RiContactsBookFill } from "react-icons/ri";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transitions from "@/Components/Transitions";
import { ImUserTie } from "react-icons/im";
import { GoProject } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Head>
        <title> Harikrishnan | Home </title>
      </Head>
      <Transitions />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-2 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-2/5 md:w-full">
              <Image
                src={Profilepic}
                alt={"DEVELOPER IMAGE"}
                className="w-full h-auto lg:w-full md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-3/5 flex flex-col items-center self-center lg:w-full lg:text-center">
              {/* <AnimatedText
                text="Hey ! "
                className="!text-6xl  !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              /> */}
              <AnimatedText
                text="Hi! 👋 I'm"
                className="text-5xl font-medium !text-left xl:!text-4xl lg:!text-center lg:!text-4xl lg:!mb-1 md:!text-4xl sm:!text-2xl sm:!mb-1"
              />

              <AnimatedText
                text="Harikrishnan"
                className="text-7xl font-extrabold mt-2 !text-left xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <AnimatedText
                text="Software Engineer | Machine Learning"
                className="text-2xl font-semibold text-gray-300 mt-2 !text-left xl:!text-xl lg:!text-center lg:!text-2xl md:!text-xl sm:!text-lg"
              />

              <ul className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                <li className="m-1">I&apos;m a Software Engineer and Machine Learning Enthusiast passionate about 
                unraveling data&apos;s secrets. From predictive modeling to deep learning, I thrive on turning data into 
                innovative solutions. Join me on this journey of transforming ideas into intelligent outcomes. 
                Explore my work and let&apos;s shape the future together.</li>
              </ul>
              {/* <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                As a Full-Stack Developer, I am well versed in Web
                Development,MERN Development,Backend Development. With prior
                interest in UX and UI, I also have a proficiency in creating
                efficient, effective and engaging web designs. Kindly, explore
                my previous works in Projects section that appropriately
                showcases my expertise in the field.
              </p> */}
              <div className="flex flex-wrap  items-center self-start mt-2 lg:self-center">
                <Link
                  href="../Harikrishnan_Gopal_Resume.pdf"
                  className="flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  RESUME <LinkArrow />
                </Link>

                <a
                  href="/resume.html" // Path to your resume HTML file in the public folder
                  target="_blank"
                  className="ml-4 flex items-center m-1.5 bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Plain View <GoProject className="ml-2" />
                </a>              
                {/* <Link
                  href={"/projects"}
                  target="_self"
                  className="ml-4 flex items-center m-1.5 bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  PROJECT <GoProject className="ml-2" />
                </Link> */}
                {/* <Link
                  href="/about"
                  target={"_self"}
                  className="flex items-center m-1.5  bg-dark text-light m-1.5 p-2 w-[130px] rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  ABOUT <ImUserTie className="ml-4" />
                </Link>
                <Link
                  href={"/contact"}
                  target={"_self"}
                  className="ml-4 flex items-center m-1.5 bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CONTACT
                  <RiContactsBookFill className="ml-2" />
                </Link> */}
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center"></div>
            </div>
          </div>
        </Layout>
        <div className="absolute w-24 right-8 bottom-1  inline-block">
          <Image
            src={LightBulb}
            alt="Bulb"
            className="w-full h-auto md:hidden"
          />
        </div>
      </main>
    </>
  );
}
