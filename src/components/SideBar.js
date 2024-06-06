import React from "react";
import dashboardIcon from "../assets/icon/dashboard.svg";

//Devide by 2 rows for compny name and navigation list
function SideBar() {
  return (
    <div
      className="bg-[#33074f] grid grid-rows-2 gap-1"
      style={{ width: "272px", height: "900px", gridTemplateRows: "auto 1fr" }}
    >
{/*first row */}
      <div
        className="bg-[#ebe6ed1a] flex items-center justify-center"
        style={{ width: "100%", height: "80px" }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: "175px",
            height: "32px",
          }}
        >
          <h3
            className="font-inter text-xl font-semibold leading-8 text-center whitespace-nowrap text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Acmy Solutions
          </h3>
        </div>
      </div>

{/*second row*/}
      <div
        className="flex items-center p-4 gap-2 hover:bg-[#ebe6ed1a] rounded-2xl"
        style={{
          width: "240px",
          height: "40px",
          marginTop: "60px",
          marginLeft: "16px",
        }}
      >
        <img
          src={dashboardIcon}
          alt="Dashboard Icon font-normal text-white"
          style={{ width: "24px", height: "24px" }}
        />
        <span
          className="font-inter text-lg font-normal leading-6 text-left text-white hover-area"
          style={{
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Dashboard
        </span>
      </div>
    </div>
  );
}

export default SideBar;
