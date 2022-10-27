import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
      return (
        <div className="flex flex-col mx-auto m-8 rounded-md shadow-md w-60 sm:w-80 animate-pulse h-96 my-24">
          <div className="h-48 rounded-t dark:bg-gray-300"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-400">
            <div className="w-full h-6 rounded-md dark:bg-gray-300"></div>
            <div className="w-full h-6 rounded-md dark:bg-gray-300"></div>
            <div className="w-3/4 h-6 rounded-md dark:bg-gray-300"></div>
          </div>
        </div>
      );
    }

     if (!user) {
       return (
         <Navigate to="/login" state={{ from: location }} replace></Navigate>
       );
     }
     return children;
};

export default PrivateRoute;