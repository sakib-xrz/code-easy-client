import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../Assets/banner.png";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-800 bg-base-100 -mt-10 lg:-mt-16">
        <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="md:text-5xl font-bold leading-tight text-3xl">
              Your Career in <br />
              Web Development <br />
              <span className="text-primary">Starts Here</span>
            </h1>
            <p className="mt-6 mb-8 text-justify md:text-lg text-md sm:mb-12">
              When it comes to starting a career in web development, getting
              started can be the hardest part. But once you do, you might be
              surprised at just how much you can learn in just a single day with
              the online resources available. Then it is just a matter of
              mastering your skills toward your new career. Hopefully, our
              courses can help you along the way.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/courses"
                className="px-8 py-3 text-lg font-semibold rounded text-secondary bg-primary"
              >
                Our Courses
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
