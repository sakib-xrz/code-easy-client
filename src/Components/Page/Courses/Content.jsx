import React from 'react';
import { Link } from 'react-router-dom';
import Star from "../../../Assets/star.png"
import Students from "../../../Assets/study-group.png"

const Content = ({course}) => {
    const {id, name, img, student, rating, description } = course;
    return (
      <div>
        <div className=" text-neutral px-6">
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
              <p className="flex-1 pt-2">{description}</p>
              <Link
                rel="noopener noreferrer"
                to={`/course/${id}`}
                className="w-28 inline-flex items-center mb-4 pt-4 lg:pt-0 space-x-2 text-sm text-primary font-medium"
              >
                <span>See Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Content;