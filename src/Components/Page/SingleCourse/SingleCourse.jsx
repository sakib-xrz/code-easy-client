import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import SinglePageContent from './SinglePageContent';

const SingleCourse = () => {
    const course = useLoaderData()
    return (
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 lg:col-span-2 md:h-screen md:sticky md:top-[5rem] lg:top-[5.5rem]">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <SinglePageContent course={course}></SinglePageContent>
        </div>
      </div>
    );
};

export default SingleCourse;