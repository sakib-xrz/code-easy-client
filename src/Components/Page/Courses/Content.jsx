import React from "react";
import { Link } from "react-router-dom";
import Star from "../../../Assets/star.png";
import Students from "../../../Assets/study-group.png";

const Content = ({ course }) => {
  const { id, name, img, student, rating, description, price } = course;
  return (
    <div>
      <div className="text-neutral px-6">
        <div className="container grid grid-cols-12 rounded-md mx-auto my-8 bg-zinc-100 drop-shadow-xl">
          <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
            <img
              className="rounded-md lg:h-full lg:w-auto lg:object-content"
              src={img}
              alt=""
            />
          </div>
          <div className="flex flex-col col-span-12 lg:col-span-8 px-6 py-3">
            <div className="flex"></div>
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="pt-2">{description}</p>
            <p className="font-bold text-primary text-2xl mb-3 mt-2">${price}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <img className="w-6" src={Students} alt="" />
                <span className="self-center font-medium text-sm">
                  Enrolled Student: {student}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img className="h-4" src={Star} alt="" />
                <span className="self-center font-medium text-sm mt-1">
                  {rating}
                </span>
              </div>
              <div className="hidden lg:block">
                <Link
                  to={`/course/${id}`}
                  class="w-28 text-primary flex items-center justify-end"
                >
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="lg:hidden mb-2">
              <Link
                to={`/course/${id}`}
                class="w-28 text-primary flex items-center"
              >
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
