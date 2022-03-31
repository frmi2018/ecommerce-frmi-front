import React from "react";
import Menu from "./Menu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  return (
    <div className="container">
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron container-fluid">
          <h2>{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
