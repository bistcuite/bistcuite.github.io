import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/ronio-vector-svg-1024-Code Typing Bro.png";
import AnimatedText from "../components/AnimatedText.js";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hasan&apos;s Portfolio</title>
        <meta name="description" content="Hasan&apos;s Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={profilePic} alt="Brian" className="w-full h-auto lg:hidden md:inline-block md:w-full " priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi! I&apos;m Hasan!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl sm:pt-2"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              I&apos;m a Backend Developer and AI enthusiast passionate about building intelligent, scalable systems. With expertise in Python, Node.js, and modern web technologies, I specialize in creating efficient backend solutions and integrating AI-driven features into applications. I also enjoy working on the frontend to bring seamless user experiences to life. Whether it&apos;s developing machine learning models or crafting robust APIs, I thrive on solving complex problems and pushing the boundaries of innovation. Let&apos;s build something amazing together!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/about"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 
                  border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  // download={true}
                >
                  Aboout Me
                  {/* <LinkArrow className={"w-6 ml-1"} /> */}
                </Link>
                <Link
                  href="mailto:hnk1440@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </layout>

        <HireMe />
      </main>
    </>
  );
}
