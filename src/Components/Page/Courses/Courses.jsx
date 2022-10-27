import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Content from "./Content";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://code-easy-server-seven.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3 lg:col-span-2 md:h-screen md:sticky md:top-[5rem] lg:top-[5.5rem]">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-10">
        {courses.map((course) => (
          <Content key={course.id} course={course}></Content>
        ))}
      </div>
    </div>
  );
};

export default Courses;
