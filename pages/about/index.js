import react, { useState } from "react";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";


//  Data
const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiBootstrap />,
          <SiTailwindcss />,
        ],
      },
    ],
  },

  {
    title: 'Expericence',
    info: [
      {
        title: 'Front-End Developer',
        Company: 'Crystallite Digital Pvt',
        stage: '2022 - Current',
      },
      {
        title: 'Front-End Developer',
        Company: 'Jawan Pakistan',
        stage: '2020 - 2021',
      },
      {
        title: 'Front-End Developer - Intern',
        Company: 'Jawan Pakistan',
        stage: '2020 - 2021',
      },
    ],
  },
  {
    title: 'Certification',
    info: [
      {
        title: 'Web & Mobile App Development',
        stage: 'Jawan Pakistan',
      },
      {
        title: 'Html5 & Css3',
        stage: 'pirple.com',
      },
      {
        title: 'WordPress',
        stage: 'DigiSkills',
      },
      {
        title: 'Certified Information Technology - (CIT)',
        stage: 'Global Computer Institute',
      },
    ],
  },
  {
    title: 'Credentials',
    info: [
      {
        title: 'Bachelor of Science - Software Engineering',
        Company: 'Indus University, Karachi',
        stage: '2018 - 2022',
      },
      {
        title: 'Intermediate - Computer Science',
        Company: 'Govt Atta Shad Degree Collage, Quetta',
        stage: '2014 - 2016',
      },
    ],
  },
];

// Components
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

// Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        {/* About me */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-0 -left-[370px]'
        >
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 pt-24'>
          {/* Text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'
            >
              About <span className='text-accent'>Me</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-xl xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            >
              Well-versed in numerous programming languages including HTML, CSS, JavaScript as well as proficiency in responsive design. My skills include expertise working with a variety of frameworks and tools, including Bootstrap, Tailwind, React Js, Next Js.
            </motion.p>
            {/* Counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            >
              <div className='flex flex-1 xl:gap-x-6'>
                {/* Experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 xl:after:right-[40px]'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={2} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Years of experience
                  </div>
                </div>
                {/* Clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 xl:after:right-[40px]'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Satisfied Clients
                  </div>
                </div>
                {/* Projects */}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={25} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished Projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[350px]'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mt-4 xl:mt-0'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className='flex-1 flex flex-row xl:flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60'
                  >
                    {/* Title */}
                    <div className='font-bold text-[16px] xl:text-[20px] mb-2 md:mb-0'>{item.title}</div>
                    <div>{item.Company}</div>
                    <div>{item.stage}</div>
                    {/* Icons */}
                    <div className='flex gap-x-8 mt-0 xl:mt-5'>
                      {item.icons?.map((icon, iconIndex) => {
                        return (
                          <div key={iconIndex}>
                            <span className='text-2xl xl:text-4xl text-white'>{icon}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
        <Bulb />
      </div>
    </>
  )
};

export default About;
