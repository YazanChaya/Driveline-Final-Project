const AnimatedMenuIcon = ({ isOpen }) => {
  return (
    <button
      className="relative flex items-center justify-center w-12 h-12 focus:outline-none"
      aria-label="menu"
      role="button"
      aria-expanded={isOpen}
    >
      <div className="relative flex flex-col items-center justify-center w-12 h-12">
        <div className="flex flex-col items-center justify-start">
          {/* Top Line */}
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          ></div>

          {/* Middle Line Container */}
          <div className="relative flex items-center justify-center w-6 h-0.5 my-1.5">
            {/* Middle Line Top (rotates 45deg) */}
            <div
              className={`absolute inset-0 w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            ></div>

            {/* Middle Line Base (rotates -45deg) */}
            <div
              className={`absolute inset-0 w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "-rotate-45" : "rotate-0"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            ></div>
          </div>

          {/* Bottom Line */}
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          ></div>
        </div>
      </div>
    </button>
  );
};

export default AnimatedMenuIcon;
