import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="list-disc list-inside">
            {Array.isArray(work) && work.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const workWebinna = [
    'Co-founded a freelance company specializing in WordPress development and custom scripting for clients.',
    'Managed and executed end-to-end web development projects, ensuring timely delivery and high-quality results.',
    'Primarily focused on WordPress development, including theme customization, plugin integration, and performance optimization.',
    'Handled server maintenance, ensuring uptime, security, and scalability for client websites.',
    'Collaborated with clients to understand their requirements and provided tailored solutions to meet their business needs.',
    'Played a dual role as both a developer and server administrator, balancing technical tasks and project management.',
    'Contributed to the growth of the company by delivering reliable and efficient web solutions, fostering long-term client relationships.',
  ];

  const wordRayanPhone = [
    'Designed, developed, and optimized WordPress websites for various clients.',
    'Optimized websites for mobile responsiveness and cross-browser compatibility',
    'Customized themes and plugins to meet specific project requirements.',
    'Improved website performance and SEO to enhance visibility and user experience.',
    'Troubleshot and resolved WordPress-related technical issues efficiently.',
    'Integrated third-party APIs and implemented custom functionalities using PHP, HTML, CSS, and JavaScript.',
  ];
  const workSacalon = [
    'Designed and developed Sacalon, a general-purpose, open-source programming language for building optimal, maintainable, reliable, and efficient software.',
    'Led the development of the compiler, standard library, and core toolchain, ensuring high performance and scalability.',
    'Established the Sacalon Foundation to foster an open-source community and drive the language’s growth.',
    'Developed comprehensive documentation, tutorials, and learning resources to support developers at all levels.',
    'Engaged with the developer community, gathering feedback and iterating on language features to enhance usability and performance.',
    'Integrated modern programming paradigms and best practices to improve code maintainability, execution efficiency, and software reliability.',
  ];
  const workDlang = [
    'Contributed to the development and optimization of the D programming language and its ecosystem.',
    'Worked on compiler enhancements, standard library improvements, and performance optimizations.',
    'Developed and maintained core tools, frameworks, and libraries to support DLang developers.',
    'Collaborated with the open-source community to identify and resolve issues, implement new features, and improve documentation.',
    'Wrote and reviewed technical documentation, tutorials, and best practices to facilitate language adoption.',
    'Engaged in bug fixing, testing, and performance profiling to enhance the stability and efficiency of DLang applications.',
  ];
  const workParch = [
    'Developed system scripts and automation tools for ParchLinux using Python and C++ to enhance system functionality.',
    'Wrote custom shell scripts for package management, system monitoring, and performance optimization.',
    'Worked on automating system processes to streamline maintenance and user experience.',
  ];
  const workMajArts = [
    'Developed and optimized game mechanics, AI systems, and physics simulations for various projects.',
    'Worked with game engines (e.g., Unity, Unreal Engine) to build immersive and interactive gameplay experiences.',
    'Programmed core gameplay features using C++, C#, and Python, ensuring high performance and maintainability.',
    'Debugged and resolved gameplay and engine-related issues to ensure smooth and stable gameplay.',
  ];
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Co-Founder"
            company="Webinna.ir"
            companyLink= 'https://webinaa.ir'
            time="Dec 2023 - Nov 2024"
            address="Colorado Springs, CO"
            work={workWebinna}
          />
          <Details
            position="Web Developer"
            company="RayanPhone"
            companyLink="https://mobilerayan.com"
            time="Aug 2023 - Nov 2023"
            address="Qom, Iran"
            work={wordRayanPhone}
            />
            <Details
            position="Software Developer"
            company="DlangFoundation"
            companyLink="https://dlang.org"
            time="Dec 2022 - May 2023"
            address="Global"
            work={workDlang}
            />
            <Details
            position="Software Developer"
            company="ParchLinux"
            companyLink="https://parchlinux.com"
            time="Apr 2022 - Jan 2023"
            address="Global"
            work={workParch}
            />
            <Details
            position="Founder"
            company="SacalonFoundation"
            companyLink="https://sacalon.github.io"
            time="Oct 2019 - Jan 2023"
            address="Global"
            work={workSacalon}
            />
            <Details
            position="Game Developer"
            company="MajArts'Studio"
            companyLink="/"
            time="Sep 2018 - May 2019"
            address="Qom, Iran"
            work={workMajArts}
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
