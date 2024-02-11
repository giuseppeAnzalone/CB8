import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div
      style={{
        width: "50%",
        height: "16px",
        backgroundColor: "#191919",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        className="percentages"
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: "#5dbe62",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        {`${percentage}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
