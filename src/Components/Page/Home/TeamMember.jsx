import React from "react";

const TeamMember = ({ course }) => {
  const { author } = course;
  return (
    <div className="flex flex-col items-center">
      <img
        alt=""
        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src={author.img}
      />
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">{author.name}</p>
        <p className="text-sm text-gray-800">{author.title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
