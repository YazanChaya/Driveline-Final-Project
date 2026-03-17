import CardServices from "../components/CardServices";
import VideoLightbox from "../components/VideoLightbox";
import ImageHero from "../../src/assets/images/hero-image.png";
import Image1 from "../../src/assets/images/Explore service/first-image-here.png";
import Image2 from "../../src/assets/images/Explore service/second-image-here.png";
import Image3 from "../../src/assets/images/Explore service/third-image-here.png";
import ImageVideo from "../../src/assets/images/first-video-image.png";
import ImageWrapper from "../../src/assets/images/wrapper-image.png";
import ImageBlog1 from "../../src/assets/images/Latest insights/first-image.jpg";
import ImageBlog2 from "../../src/assets/images/Latest insights/second-image.jpg";
import ImageLast from "../../src/assets/images/last-image.png";
import { FaPlay } from "react-icons/fa6";
import { LuCrosshair } from "react-icons/lu";
import { SlDiamond } from "react-icons/sl";
import { LuShieldCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import CardBlog from "../components/CardBlog";

const Home = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col justify-start max-md:h-auto max-md:max-h-none">
        <div className="w-full px-4 low-sm:px-5 high-md:px-7.5 lg:px-10">
          <div className="container mx-auto">
            <div className="py-16 max-high-md:py-24 high-md:py-32">
              <div className="text-center">
                <div className="w-full max-w-5xl mx-auto">
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className="font-heading text-heading-1 font-light leading-[0.9] md:text-[4rem] high-md:text-[6rem]"
                  >
                    Limitless Opulence
                  </h1>
                  <div className="w-full pt-4"></div>
                  <div className="w-full max-w-3xl mx-auto">
                    <p
                      data-aos="fade-up"
                      data-aos-delay="150"
                      className="opacity-[0.5] text-body-medium md:text-body-large"
                    >
                      Embrace the journey with unmatched style and performance.
                      Our exclusive range of new model vehicles, including
                      exotic options, ensures that every traveler experiences
                      the pinnacle of luxury and excitement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade" data-aos-delay="200" className="w-full">
          <img
            className="aspect-video object-cover w-full"
            src={ImageHero}
            alt="Hero Image"
          />
        </div>
      </div>

      {/* Explore Services Section */}
      <div>
        <div className="px-4 low-sm:px-5 high-md:px-7.5 lg:px-10">
          <div className="container mx-auto">
            <div className="max-md:py-12 max-high-md:py-16 high-md:py-20">
              <div className="w-full h-px bg-card-bg"></div>
              <div className="w-full max-md:pt-8 max-high-md:pt-12 high-md:pt-16"></div>
              <div className="grid grid-cols-[1fr_1fr] grid-rows-[auto] auto-cols-[1fr] items-start gap-16 max-md:flex max-md:justify-start max-md:items-start max-md:flex-col max-md:flex-nowrap max-md:gap-8">
                <div data-aos="fade-up">
                  <h1 className="font-heading font-normal leading-none max-md:text-heading-2 md:text-[3rem]">
                    Explore service
                  </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <p className="opacity-[0.5] max-md:text-body-medium md:text-body-large">
                    Our clients can rely on access to the largest private jet
                    fleet in the world, as well as exclusive invitations to
                    extraordinary opportunities, on the ground and in the sky.
                  </p>
                </div>
              </div>
              <div className="w-full max-md:pt-8 max-high-md:pt-12 high-md:pt-16"></div>
              <div className="grid auto-cols-[1fr] max-md:gap-6 max-md:grid-cols-[1fr] max-high-md:gap-4 max-high-md:grid-cols-[1fr_1fr_1fr] high-md:gap-8 high-md:grid-cols-[1fr_1fr_1fr] high-md:grid-rows-[auto]">
                <div data-aos="fade-up" data-aos-delay="0">
                  <CardServices
                    image={Image1}
                    heading4={"Ground"}
                    paragraph={
                      "It's about the journey, not the arrival. With uncompromising style and unparalleled.."
                    }
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <CardServices
                    image={Image2}
                    heading4={"Private Aviation"}
                    paragraph={
                      "Our clients can rely on access to the largest private jet fleet in the world, as well.."
                    }
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <CardServices
                    image={Image3}
                    heading4={"Yarch Charter"}
                    paragraph={
                      "If you're tempted to revel in the fresh air, the warm seas and the unencumbered.."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <VideoLightbox
        isOpen={openVideo}
        onClose={() => setOpenVideo(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
      <section>
        <div className="px-4 low-sm:px-5 high-md:px-7.5 lg:px-10">
          <div className="container mx-auto">
            <div className="max-md:py-8 md:py-12">
              <div data-aos="fade-up">
                <button
                  onClick={() => setOpenVideo(true)}
                  className="rounded-2xl flex justify-center items-center w-full overflow-hidden relative text-white cursor-pointer"
                >
                  <img
                    className="aspect-video w-full object-cover duration-[3s] h-full max-w-full hover:scale-[1.05]"
                    src={ImageVideo}
                    alt="Video Image"
                  />
                  <FaPlay className="z-2 text-white absolute w-12 h-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Performance Section */}
      <section>
        <div className="px-4 low-sm:px-5 high-md:px-7.5 lg:px-10">
          <div className="container mx-auto">
            <div className="max-md:py-8 md:py-12">
              <div className="max-md:flex max-md:flex-col max-md:flex-nowrap max-md:gap-16 md:grid md:grid-cols-[1fr_0.25fr_1fr] md:grid-rows-[auto] md:auto-cols-[1fr] max-high-md:gap-4 high-md:gap-8">
                <div data-aos="fade-right" className="max-high-md:self-start">
                  <h2 className="font-heading max-md:text-heading-2 md:text-[3rem] font-normal leading-none">
                    We will take good service performance
                  </h2>
                  <div className="w-full max-md:pt-12 max-high-md:pt-16 high-md:pt-20"></div>
                  <div className="bg-white">
                    <img
                      className="inline-block w-full h-full max-w-full object-cover mix-blend-hard-light grayscale"
                      src={ImageWrapper}
                      alt="Wrapper"
                    />
                  </div>
                </div>
                <div className="max-md:hidden justify-self-center md:bg-border md:w-px md:h-full"></div>
                <div data-aos="fade-left">
                  <div className="flex flex-col flex-nowrap gap-8">
                    <div className="flex flex-col flex-nowrap items-start max-md:gap-4 max-high-md:gap-6 high-md:gap-8">
                      <div className="border-b border-b-[#0000001f]">
                        <div className="flex max-md:gap-4 max-high-md:gap-6 high-md:gap-4">
                          <LuCrosshair className="w-6 h-6" />
                          <div className="font-heading text-heading-4 font-medium leading-[1.1]">
                            Precise Experience
                          </div>
                        </div>
                        <div className="w-full pt-4"></div>
                        <p className="opacity-[0.5]">
                          Every panel, mold, and structure is fabricated with
                          expert care—down to the last detail. We don't cut
                          corners; we shape legacies.
                        </p>
                        <div className="w-full max-md:pt-5 max-high-md:pt-6 high-md:pt-8"></div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-nowrap items-start max-md:gap-4 max-high-md:gap-6 high-md:gap-8">
                      <div className="border-b border-b-[#0000001f]">
                        <div className="flex max-md:gap-4 max-high-md:gap-6 high-md:gap-4">
                          <SlDiamond className="w-6 h-6" />
                          <div className="font-heading text-heading-4 font-medium leading-[1.1]">
                            Premium Vehicles
                          </div>
                        </div>
                        <div className="w-full pt-4"></div>
                        <p className="opacity-[0.5]">
                          We uphold the highest standards of professionalism
                          when servicing your experience.
                        </p>
                        <div className="w-full max-md:pt-5 max-high-md:pt-6 high-md:pt-8"></div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-nowrap items-start max-md:gap-4 max-high-md:gap-6 high-md:gap-8">
                      <div className="border-b border-b-[#0000001f]">
                        <div className="flex max-md:gap-4 max-high-md:gap-6 high-md:gap-4">
                          <LuShieldCheck className="w-6 h-6" />
                          <div className="font-heading text-heading-4 font-medium leading-[1.1]">
                            High-Level Security and Privacy
                          </div>
                        </div>
                        <div className="w-full pt-4"></div>
                        <p className="opacity-[0.5]">
                          We understand the importance of privacy and security
                          for their our clientele.
                        </p>
                        <div className="w-full max-md:pt-5 max-high-md:pt-6 high-md:pt-8"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-start items-center gap-4">
                      <Link className="inline-flex max-w-full gap-2.5 font-heading text-black text-center justify-center items-center font-medium duration-300 hover:gap-4 hover:opacity-[0.5]">
                        <div>Sign up now</div>
                        <GoArrowUpRight className="w-4 h-4 group-hover:opacity-[0.5]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <div>
        <div className="px-4 low-sm:px-5 high-md:px-7.5 lg:px-10">
          <div className="container mx-auto">
            <div className="max-md:py-12 max-high-md:py-16 high-md:py-20">
              <div className="w-full h-px bg-card-bg"></div>
              <div className="w-full max-md:pt-8 max-high-md:pt-12 high-md:pt-16"></div>
              <div className="grid grid-cols-[1fr_1fr] grid-rows-[auto] auto-cols-[1fr] items-start gap-16 max-md:flex max-md:justify-start max-md:items-start max-md:flex-col max-md:flex-nowrap max-md:gap-8">
                <div data-aos="fade-up">
                  <h1 className="font-heading font-normal leading-none max-md:text-heading-2 md:text-[3rem]">
                    Latest insights
                  </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <p className="opacity-[0.5] max-md:text-body-medium md:text-body-large">
                    Stories and insights that go beyond destinations — covering
                    experiences, ideas, and inspiration to help you travel
                    smarter, deeper, and more comfortably. Stay updated with our
                    latest news, industry insights, travel tips, and exclusive
                    experiences.
                  </p>
                </div>
              </div>
              <div className="w-full max-md:pt-8 max-high-md:pt-12 high-md:pt-16"></div>
              <div className="grid auto-cols-[1fr] max-md:gap-6 max-md:grid-cols-[1fr] max-high-md:gap-4 max-high-md:grid-cols-[1fr_1fr] high-md:gap-8 high-md:grid-cols-[1fr_1fr] high-md:grid-rows-[auto] high-md:auto-cols-[1fr]">
                <div data-aos="fade-up" data-aos-delay="0">
                  <CardBlog
                    image={ImageBlog1}
                    heading4={"The Art of Traveling in Comfort"}
                    paragraph1={"November 22, 2026"}
                    paragraph2={
                      "Why comfort is more than luxury — and how thoughtful planning can completely change the way you experience a journey."
                    }
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                  <CardBlog
                    image={ImageBlog2}
                    heading4={"Why the Journey Matters"}
                    paragraph1={"January 12, 2026"}
                    paragraph2={
                      "The moments between departure and arrival often define the experience more than the destination itself."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section>
        <div className="px-4 low-sm:px-5 high-md:px-7.5 lg:px-10">
          <div className="container mx-auto">
            <div className="max-md:py-8 md:py-12">
              <div data-aos="fade-up">
                <div className="flex flex-col items-start justify-center rounded-2xl overflow-hidden relative max-md:min-h-0 max-md:py-16 max-md:px-4 md:min-h-160 md:p-16 text-white">
                  <div className="z-1 relative">
                    <div className="w-full max-w-lg">
                      <h2 className="font-heading max-md:text-heading-2 md:text-[3rem] font-normal leading-none">
                        Book your luxury vehicles today
                      </h2>
                      <div className="w-full pt-4"></div>
                      <p className="opacity-[0.5] max-md:text-body-medium md:text-body-large">
                        Click the link bellow. Fill out the details and we'll
                        get back to you in less than 24 hours.
                      </p>
                      <div className="w-full max-md:pt-5 max-high-md:pt-6 high-md:pt-8"></div>
                      <div className="flex flex-wrap justify-start items-center gap-4">
                        <Link className="inline-flex max-w-full gap-2.5 font-heading text-white text-center justify-center items-center font-medium duration-300 hover:gap-4 hover:opacity-[0.5]">
                          <div className="text-[18px]">Sign up now</div>
                          <GoArrowUpRight className="w-5 h-5 group-hover:opacity-[0.5]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="z-0 absolute rounded-2xl overflow-hidden inset-0">
                    <img
                      className="w-full max-w-full h-full object-cover inline-block"
                      src={ImageLast}
                      alt="Last Image"
                    />
                  </div>
                  <div className="z-0 absolute bg-overlay inset-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

