import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="max-high-md:px-7.5 high-md:px-10">
        <div className="container mx-auto">
          <div className="max-md:py-12 max-high-md:py-16 high-md:py-20">
            <div className="max-md:pb-12 max-high-md:pb-16 high-md:pb-20">
              <div className="grid max-high-md:grid-cols-[1fr] max-md:gap-y-12 max-high-md:gap-y-16 high-md:grid-cols-[0.75fr_1fr] grid-rows-[auto] items-start auto-cols-[1fr] gap-x-[8vw] high-md:gap-y-4">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <Link
                      to={"/"}
                      className="text-black duration-200 pl-0 hover:opacity-[0.5]"
                    >
                      <div className="font-heading text-heading-4 font-medium leading-[1.1]">
                        DriveLine®
                      </div>
                    </Link>
                  </div>
                  <div className="mb-4">
                    <div className="opacity-[0.5]">
                      Our extensive selection of new model vehicles for rent
                      will satisfy any traveler. Selections include exotic.
                    </div>
                  </div>
                </div>
                <div className="grid auto-cols-[1fr] items-start grid-rows-[auto] max-low-sm:gap-y-10 max-low-sm:grid-cols-[1fr_1fr] max-md:gap-x-6 md:gap-y-4 md:gap-x-8 low-sm:grid-cols-[1fr_1fr_1fr]">
                  <div>
                    <div className="mb-2">
                      <div className="font-heading text-body-medium font-medium leading-[1.2]">
                        Navigation
                      </div>
                    </div>
                    <div className="flex items-start justify-items-start flex-col">
                      <Link
                        to={"/"}
                        className="text-black opacity-[0.5] py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Home 1
                      </Link>
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Home 2
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <div className="font-heading text-body-medium font-medium leading-[1.2]">
                        Links
                      </div>
                    </div>
                    <div className="flex items-start justify-items-start flex-col">
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        About
                      </Link>
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Services
                      </Link>
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Blog
                      </Link>
                      <Link
                        to={"/contact"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <div className="font-heading text-body-medium font-medium leading-[1.2]">
                        Social
                      </div>
                    </div>
                    <div className="flex items-start justify-items-start flex-col">
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Instagram
                      </Link>
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        to={"/"}
                        className="text-black py-2 text-body-small duration-300 hover:opacity-[0.5]"
                      >
                        Dribbble
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-card-bg"></div>
            <div className="max-md:pt-5 max-high-md:pt-6 high-md:pt-8">
              <div className="flex justify-between max-md:flex-col-reverse max-md:items-start max-md:pb-4 md:items-center">
                <div className="text-body-small max-md:mt-6">
                  © Copyright 2025, DriveLine. Powered by{" "}
                  <Link
                    to={"https://webflow.com"}
                    target="_blank"
                    className="text-muted-foreground underline"
                  >
                    Webflow
                  </Link>
                </div>
                <div className="flex justify-center max-md:flex-col max-md:flex-nowrap max-md:gap-x-0 max-md:gap-y-4 md:gap-x-6 md:gap-y-0">
                  <Link className="text-black text-body-small duration-200 hover:opacity-[0.6]">
                    Style Guide
                  </Link>
                  <Link className="text-black text-body-small duration-200 hover:opacity-[0.6]">
                    License
                  </Link>
                  <Link className="text-black text-body-small duration-200 hover:opacity-[0.6]">
                    Changelog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
