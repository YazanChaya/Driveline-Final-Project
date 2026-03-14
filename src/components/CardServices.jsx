const CardServices = ({ image, heading4, paragraph }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl w-full">
        <img
          className="object-cover duration-[0.6s] aspect-[1] w-full h-full max-w-full hover:scale-[1.05]"
          src={image}
          alt="image card"
        />
      </div>
      <div className="w-full max-md:pt-5 max-high-md:pt-6 high-md:pt-8"></div>
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-heading text-body-large font-medium leading-[1.2]">
            {heading4}
          </h4>
          <div className="w-full pt-4"></div>
          <p className="opacity-[0.5]">{paragraph}</p>
          <div className="w-full pt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
