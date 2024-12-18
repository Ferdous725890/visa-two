import React, { useContext } from "react";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loding } = useContext(Authcontext);

  if (loding) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg flex "></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
