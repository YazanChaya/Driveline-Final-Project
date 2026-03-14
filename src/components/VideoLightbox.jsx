import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const VideoLightbox = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close video"
      >
        <IoClose size={36} />
      </button>

      <div
        className="relative w-[90vw] max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full rounded-lg"
          src={videoUrl}
          title="Video"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoLightbox;
