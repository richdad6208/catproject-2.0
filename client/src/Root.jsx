import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default Root;
