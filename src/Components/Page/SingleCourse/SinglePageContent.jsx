import React from "react";
import { Link } from "react-router-dom";
import {BiLockAlt} from "react-icons/bi"
import ReactToPdf from "react-to-pdf";
import {AiOutlineDownload} from "react-icons/ai"

const SinglePageContent = ({ course }) => {
  const ref = React.createRef();
  const {id, img, name, author, goals } = course;
  return (
    <>
      <ReactToPdf y={25} scale={0.7} targetRef={ref} filename="code-easy.pdf">
        {({ toPdf }) => (
          <button
            className="fixed bottom-5 right-5 bg-neutral text-secondary text-2xl py-2 px-2 rounded-full"
            onClick={toPdf}
          >
            <AiOutlineDownload></AiOutlineDownload>
          </button>
        )}
      </ReactToPdf>
      <div>
        <section className="text-neutral" ref={ref}>
          <div className="md:text-4xl pb-6 text-center text-2xl font-semibold max-w-xl mx-auto underline underline-offset-[10px] decoration-wavy mt-6 md:mt-12 mb-8">
            <h2>{name}</h2>
          </div>
          <div className="container px-5 pb-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg">
                <img
                  alt="content"
                  className="mx-auto object-cover object-center rounded-lg md:h-72 md:w-auto shadow-lg"
                  src={img}
                />
              </div>
              <div className="flex items-center flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="shadow-xl rounded-full inline-flex items-center justify-center ">
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
                    <div className="w-12 h-1 bg-primary hover:bg-neutral rounded mt-2 mb-4"></div>
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
                    to={`/checkout/${id}`}
                    className="bg-primary hover:bg-neutral text-secondary px-3 py-2 transition duration-200 rounded shadow-md inline-flex items-center"
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
    </>
  );
};

export default SinglePageContent;
