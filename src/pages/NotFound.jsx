import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/last-video-image.jpg";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center gap-5">
        {/* Image */}
        <div className="w-52 h-36 overflow-hidden rounded-lg">
          <img
            src={NotFoundImage}
            alt="Not Found"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="font-heading text-white text-2xl font-semibold">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-white/60 text-sm max-w-xs leading-relaxed">
          The page you are looking for doesn't exist or has been moved
        </p>

        {/* Button */}
        <Link
          to="/"
          className="bg-white text-black text-sm font-medium px-16 py-3 rounded-md hover:bg-white/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
