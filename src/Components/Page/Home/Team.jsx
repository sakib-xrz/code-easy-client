import React from "react";
import TeamMember from "./TeamMember";

const Team = ({ courseData }) => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <h2 className="max-w-lg font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Meet Our Instructor
          </h2>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          {courseData.map((course) => (
            <TeamMember key={course.id} course={course}></TeamMember>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
