import React from "react";
import Header from "../Header/Header.jsx";


function LayOut({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default LayOut;
