import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CardBlog = ({ image, heading4, paragraph1, paragraph2 }) => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="overflow-hidden rounded-2xl w-full self-start">
        <img
          className="aspect-3/2 object-cover w-full max-w-full h-full"
          src={image}
          alt="Blog Image"
        />
      </div>
      <div className="w-full max-md:pt-5 max-high-md:pt-6 high-md:pt-8"></div>
      <p className="max-md:text-body-small md:text-body-regular">
        {paragraph1}
      </p>
      <div className="flex flex-col justify-between flex-1">
        <div className="w-full pt-4"></div>
        <div>
          <h4 className="font-heading text-heading-4 font-medium leading-[1.1]">
            {heading4}
          </h4>
          <div className="w-full pt-4"></div>
          <p className="opacity-[0.5]">{paragraph2}</p>
          <div className="w-full pt-4"></div>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-4">
          <Link className="inline-flex max-w-full gap-2.5 font-heading text-black text-center justify-center items-center font-medium duration-300 hover:gap-4 hover:opacity-[0.5]">
            <div>Read More</div>
            <GoArrowRight className="w-4 h-4 group-hover:opacity-[0.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
