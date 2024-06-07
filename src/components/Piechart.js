import React from "react";

function Piechart() {
  return (
    <div
      style={{
        width: "414px",
        height: "260px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
      }}
    >
      <div
        style={{ width: "full", height: "49px", border: "1px solid #D0D5DD" }}
      >
        <div className="pt-3 pl-4 font-inter text-lg font-medium leading-6 text-left">
          Tasks Priorities
        </div>
      </div>
    </div>
  );
}

export default Piechart;
