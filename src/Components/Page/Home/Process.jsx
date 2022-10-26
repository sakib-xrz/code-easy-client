import React from 'react';
import Learn from "../../../Assets/book.png"
import Build from "../../../Assets/html.png"
import Connected from "../../../Assets/social-media.png"

const Process = () => {
    return (
      <div>
        <section className="m-4 pt-2 lg:-mt-4 md:m-8 text-neutral">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="max-w-lg font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Everything you need to become a Web Developer
            </h2>
          </div>
          <div className="container mx-auto grid gap-4 justify-center sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <img className="w-32 h-auto rounded-md" src={Learn} alt="" />
              <h3 className="my-3 text-3xl font-medium pt-2">Learn</h3>
              <div className="space-y-1 leading-tight">
                <p className="max-w-[250px] text-center">
                  Learn from a curriculum with the best curated online
                  tutorials, blogs, and courses.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <img className="w-32 h-auto rounded-md" src={Build} alt="" />
              <h3 className="my-3 text-3xl font-medium pt-2">Build</h3>
              <div className="space-y-1 leading-tight">
                <p className="max-w-[250px] text-center">
                  Build dozens of portfolio-worthy projects along the way, from
                  simple scripts to full programs and deployed websites.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <img className="w-32 h-auto rounded-md" src={Connected} alt="" />
              <h3 className="my-3 text-3xl font-medium pt-2">Connect</h3>
              <div className="space-y-1 leading-tight">
                <p className="max-w-[250px] text-center">
                  You're not alone. Learn and get help from our friendly
                  community of beginner and experienced developers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Process;