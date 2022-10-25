import React from "react";
import { Link } from "react-router-dom";
import {BiLockAlt} from "react-icons/bi"

const SinglePageContent = ({ course }) => {
  const { img, name, author, goals } = course;
  return (
    <div>
      <section className="text-neutral">
        <div className="md:text-4xl pb-6 text-center text-2xl font-semibold max-w-xl mx-auto underline underline-offset-[10px] decoration-wavy mt-6 md:mt-12 mb-8">
          <h2>{name}</h2>
        </div>
        <div className="container px-5 pb-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg">
              <img
                alt="content"
                className="mx-auto object-cover object-center rounded-lg md:h-64 md:w-auto shadow-lg"
                src={img}
              />
            </div>
            <div className="flex items-center flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 ">
                  <img
                    className="rounded-full object-cover w-20 h-20"
                    src={author.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-lg">
                    {author.name}
                  </h2>
                  <small>
                    <p className="text-sm">{author.title}</p>
                  </small>
                  <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                  <p className="text-sm">{author.about}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="font-semibold text-xl pb-6">
                  What you have learn from this course?
                </h3>
                <p className="leading-relaxed text-sm md:text-md mb-4 text-justify">
                  {goals}
                </p>
                <Link
                  to="/"
                  className="bg-primary text-secondary px-3 py-2 transition duration-200 rounded shadow-md inline-flex items-center"
                >
                  <BiLockAlt className="mr-2"></BiLockAlt>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePageContent;
