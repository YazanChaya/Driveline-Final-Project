import { Link } from "react-router-dom";
import NotFoundImage from "../../src/assets/images/notFound-Image.jpg";

const NotFound = () => {
  return (
    <div className="h-screen w-screen max-h-full max-w-full bg-black flex items-center justify-center px-4">
      <div className="max-w-[20rem] flex flex-col items-center text-center gap-5">
        {/* Image */}
        <div className="w-80 overflow-hidden rounded-lg">
          <img
            src={NotFoundImage}
            alt="Not Found"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="w-full font-heading text-white max-md:text-heading-3 md:text-heading-2 font-medium leading-none">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="opacity-[0.5] text-white text-[18px]">
          The page you are looking for doesn't exist or has been moved
        </p>

        {/* Button */}
        <Link
          to="/"
          className="w-full text-[18px] bg-white font-heading text-black font-medium px-3.75 py-2.25 rounded-lg hover:opacity-[0.7] duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
