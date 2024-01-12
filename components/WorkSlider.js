// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Required Modules
import { Pagination } from "swiper";

// Swiper Style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Icons
import { BsArrowRight, BsCodeSlash, BsCodeSquare, BsLaptop, BsStar, BsWindowDesktop } from "react-icons/bs";

// Images
import Image from "next/image";
import { useState } from "react";


// Data
const workData = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
          url: 'https://www.bitswits.co/'
        },
        {
          title: 'title',
          path: '/thumb2.png',
          url: 'https://www.bookwritingexperts.com/'
        },
        {
          title: 'title',
          path: '/thumb3.png',
          url: 'https://amazonsquare.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb4.png',
          url: 'https://bestsellingpublisher.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb5.png',
          url: 'https://fsf-mart-pk.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb6.png',
          url: 'https://crystallite-digital.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb7.png',
          url: 'https://my-gym-pk.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb8.png',
          url: 'https://seoresultspro.com/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb9.png',
          url: 'https://barbaracamp.com/'
        },
        {
          title: 'title',
          path: '/thumb10.png',
          url: 'https://www.realestateagents.com/'
        },
        {
          title: 'title',
          path: '/thumb11.png',
          url: 'https://edesignmind.com/'
        },
        {
          title: 'title',
          path: '/thumb12.png',
          url: 'https://jobestow.com/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb13.png',
          url: 'https://prescription-pk.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb14.png',
          url: 'https://www.dowco.com/'
        },
        {
          title: 'title',
          path: '/thumb15.png',
          url: 'https://travel-pk.netlify.app/'
        }
      ],
    },
  ],
};

const workData1 = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb6.png',
          url: 'https://crystallite-digital.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb7.png',
          url: 'https://my-gym-pk.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb8.png',
          url: 'https://seoresultspro.com/'
        },
        {
          title: 'title',
          path: '/thumb10.png',
          url: 'https://www.realestateagents.com/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
          url: 'https://www.bitswits.co/'
        },
        {
          title: 'title',
          path: '/thumb2.png',
          url: 'https://www.bookwritingexperts.com/'
        },
        {
          title: 'title',
          path: '/thumb3.png',
          url: 'https://amazonsquare.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb4.png',
          url: 'https://bestsellingpublisher.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb11.png',
          url: 'https://edesignmind.com/'
        },
        {
          title: 'title',
          path: '/thumb12.png',
          url: 'https://jobestow.com/'
        },
        {
          title: 'title',
          path: '/thumb14.png',
          url: 'https://www.dowco.com/'
        },
        {
          title: 'title',
          path: '/thumb15.png',
          url: 'https://travel-pk.netlify.app/'
        }
      ],
    }
  ],
};

const workData2 = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb5.png',
          url: 'https://fsf-mart-pk.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb9.png',
          url: 'https://barbaracamp.com/'
        },
        {
          title: 'title',
          path: '/thumb13.png',
          url: 'https://prescription-pk.netlify.app/'
        }
      ],
    }
  ],
};


const WorkSlider = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedWorkUrl, setSelectedWorkUrl] = useState(null);

  const handleTabClick = (tabId, workUrl) => {
    setActiveTab(tabId);
    setSelectedWorkUrl(workUrl);
  };

  return (
    <>
      <div className="tabs flex gap-x-8 mb-8">
        <button
          className={`tab ${activeTab === "All" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
          onClick={() => handleTabClick("All")}
        >
          <BsStar />
          <span className="mb-[-5px]">All</span>
        </button>
        <button
          className={`tab ${activeTab === "Web Development" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
          onClick={() => handleTabClick("Web Development")}
        >
          <BsCodeSlash />
          <span className="mb-[-2px]">Web Development</span>

        </button>
        <button
          className={`tab ${activeTab === "ECommerce" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
          onClick={() => handleTabClick("ECommerce")}
        >
          <BsLaptop />
          <span className="mb-[-4px]">ECommerce</span>
        </button>
      </div>

      <div className="swiper-container">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-[280px] sm:h-[500px]"
        >
          {activeTab === "All" && (
            <>
              {workData.slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                      {
                        slide.images.map((image, index) => {
                          return (
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                              <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                key={index}
                              >
                                {/* Images */}
                                <Image src={image.path} width={500} height={300} alt="Work" />
                                {/* Overlay Gradirnt */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                {/* Title */}
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                    {/* Title part 1 */}
                                    <div className="delay-100">
                                      VISIT
                                    </div>
                                    {/* Title part 2 */}
                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                      WEBSITE
                                    </div>
                                    {/* Icons */}
                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                      <BsArrowRight />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          )
                        })
                      }
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          )}

          {activeTab === "Web Development" && (
            <>
              {workData1.slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                      {
                        slide.images.map((image, index) => {
                          return (
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                              <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                key={index}
                              >
                                {/* Images */}
                                <Image src={image.path} width={500} height={300} alt="Work" />
                                {/* Overlay Gradirnt */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                {/* Title */}
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                    {/* Title part 1 */}
                                    <div className="delay-100">
                                      VISIT
                                    </div>
                                    {/* Title part 2 */}
                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                      WEBSITE
                                    </div>
                                    {/* Icons */}
                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                      <BsArrowRight />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          )
                        })
                      }
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          )}

          {activeTab === "ECommerce" && (
            <>
              {workData2.slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                      {
                        slide.images.map((image, index) => {
                          return (
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                              <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                key={index}
                              >
                                {/* Images */}
                                <Image src={image.path} width={500} height={300} alt="Work" />
                                {/* Overlay Gradirnt */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                {/* Title */}
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                    {/* Title part 1 */}
                                    <div className="delay-100">
                                      VISIT
                                    </div>
                                    {/* Title part 2 */}
                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                      WEBSITE
                                    </div>
                                    {/* Icons */}
                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                      <BsArrowRight />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          )
                        })
                      }
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default WorkSlider;

