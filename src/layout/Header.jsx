import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedMenuIcon from "../components/AnimatedMenuIcon";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BiBasketball } from "react-icons/bi";
import LogoImage from "../../public/Logo.svg";

const menu = [
  {
    href: "/",
    title: "HOME 1",
  },
  {
    href: "/",
    title: "HOME 2",
  },
  {
    href: "/",
    title: "ABOUT",
  },
  {
    href: "/",
    title: "SERVICES",
  },
  {
    href: "/",
    title: "BLOG",
  },
  {
    href: "/",
    title: "CONTACT",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-b-border flex flex-col justify-center items-center w-full min-h-16 md:min-h-18 low-sm:px-5 high-md:px-7.5 lg:px-10 fixed top-0 right-0 bottom-auto left-0 shadow-[0_1px_4px_#00000005] z-100">
      <div className="container grid gap-x-4 gap-y-4 grid-cols-[1fr_max-content_1fr] auto-cols-[1fr] justify-between items-center w-full max-w-7xl h-full mx-auto relative">
        <div onClick={toggleMenu}>
          <AnimatedMenuIcon isOpen={isMenuOpen} />
        </div>
        <Link
          to={"/"}
          className="max-md:pl-2.5 md:pl-0 z-2 float-left text-[#333] relative"
        >
          <img
            src={LogoImage}
            alt="Logo"
            className="inline-block max-w-full object-cover max-low-sm:h-9! text-muted-foreground w-auto low-sm:h-10!"
          />
        </Link>
        <div className="gap-x-4 flex justify-end items-center relative max-low-sm:justify-self-end">
          <nav
            className={`bg-[#ddd] shadow-none items-center w-[24rem] h-screen px-10 transition-transform duration-500 ease-in-out fixed top-0 right-0 bottom-0 overflow-auto z-50 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between items-stretch h-dvh py-12 text-left gap-4">
              <div className="content-center max-w-200 text-[2.5rem]">
                <div className="text-body-medium md:text-body-large opacity-[0.5] uppercase">
                  Menu
                </div>
                <div className="w-full pt-4"></div>
                <div className="bg-card-bg w-full h-px"></div>
                <div className="w-full pt-8"></div>
                <div className="flex flex-col">
                  {menu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={toggleMenu}
                      className="font-normal font-heading text-black uppercase mx-0 py-2 px-0 text-heading-2 max-md:text-heading-4 max-high-md:text-[2.5rem] duration-200 leading-[1.2] hover:opacity-[0.5]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <div className="font-medium">Get in touch</div>
                </div>
                <div className="mb-0.5 text-muted-foreground text-body-small md:text-body-regular underline">
                  <Link to={"#"}>0123 456 789</Link>
                </div>
                <div className="mb-0.5 text-muted-foreground text-body-small md:text-body-regular underline">
                  <Link to={"#"}>email@example.com</Link>
                </div>
                <div className="text-body-small md:text-body-regular">
                  St. Barkah No.99, Indonesia AZ09
                </div>
                <div className="max-md:mt-5 max-high-md:mt-6 high-md:mt-8">
                  <div className="grid gap-x-3 gap-y-0 whitespace-normal grid-flow-col auto-cols-max">
                    <FaInstagram className="text-heading-4 text-muted-foreground" />
                    <FaLinkedin className="text-heading-4 text-muted-foreground" />
                    <BiBasketball className="text-heading-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Link
            to={"/contact"}
            class="font-heading text-black text-center inline-flex justify-center items-center font-medium transition-all gap-y-2.5 gap-x-2.5 hover:opacity-[0.5] text-body-medium max-low-sm:text-body-small max-md:text-body-regular"
          >
            <div class="font-medium">Enroll Now</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
