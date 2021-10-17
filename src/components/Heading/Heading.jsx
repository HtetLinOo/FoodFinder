import React, { childrenProps } from "react";
import "./Heading.css";

const Heading = ({ children }) => {
  console.log(children);
  // const headingName = "Dora Food";

  return <h1 className="heading">{children}</h1>;
};
export default Heading;
