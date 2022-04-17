import React from "react";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="title">3423</span>
        <span className="link">See all Users</span>
      </div>
      <div className="rigt">
        <div className="percentage">20%</div>
      </div>
    </div>
  );
};

export default Widget;
