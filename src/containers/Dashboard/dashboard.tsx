import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div>
      <div>
        <div>
          <div></div>
          <h1>Dashboard</h1>
        </div>
        <h2>Welcome to home page.</h2>
        <Link to="/">home page</Link>
      </div>
    </div>
  );
};
