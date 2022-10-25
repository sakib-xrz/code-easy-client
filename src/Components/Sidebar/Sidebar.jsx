import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="">
      <div className="flex flex-col p-3 h-screen bg-zinc-100 text-neutral border-r-2">
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between text-xl font-semibold ml-2">
            <h2 className="w-full text-center md:text-left">All Courses</h2>
          </div>
          <div className="divider"></div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-md md:text-lg flex flex-wrap md:flex-col md:flex-nowrap">
              {courses.map((course) => (
                <CourseList key={course.id} course={course}></CourseList>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
