// Components
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'


// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <>
      <div className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-8 xl:mt-20'>
            {/* Text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-12'
              >
                My Work
                <span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w[400px] mx-auto lg:mx-0'
              >
                Explore my portfolio, a showcase of my extensive experience in web development. I've crafted a diverse range of projects, interactive web applications, single-page applications, responsive & cross-browser websites, including e-commerce websites. See my work and discover how I can elevate your online presence.
              </motion.p>
            </div>

            {/* Slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-[65%]'
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  )
};

export default Work;