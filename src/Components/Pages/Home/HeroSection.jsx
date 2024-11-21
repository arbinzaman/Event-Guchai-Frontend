import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className=" font-serif bg-white text-black">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Unlock Seamless Events with us
          </h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12 text-green-800 font-serif">
            Plan, Execute, and Wow with Ease <br />
          </p>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            {" "}
            Transform your event planning with our intuitive system. Streamline registration, engage attendees, and elevate experiences. Say goodbye to headaches and hello to success. Make your next event unforgettable.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-cyan-300 text-black-900"
            >
              Get Started
            </a>
            <Link to="/contactus">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-black-100"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://image.wedmegood.com/resized/1000X/uploads/member/2978812/1650002897_1124_Nikki_Beach_Dubai_Wedding.jpeg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-xl rounded-t-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
