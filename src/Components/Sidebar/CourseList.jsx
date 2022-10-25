import React from "react";
import { NavLink } from "react-router-dom";

const CourseList = ({ course }) => {
  const {id, title, icon } = course;
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center p-2 space-x-3 rounded-sm font-medium text-secondary bg-primary"
            : "flex items-center p-2 space-x-3 rounded-sm font-medium hover:text-secondary hover:bg-primary"
        }
        rel="noopener noreferrer"
        to={`/course/${id}`}
      >
        <img className="w-6 h-auto" src={icon} alt="" />
        <span>{title}</span>
      </NavLink>
    </div>
  );
};

export default CourseList;
