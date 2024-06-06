import React, { useState } from "react";
import bellIcon from "../assets/icon/bell-ringing-03.svg";

export default function TodoList(){
    const [todos,setTodos]=useState([{}])
}

function Tasks() {
  return (
    <div
      style={{
        width: "645px",
        height: "632px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
      }}
    >
      <div
        style={{ width: "full", height: "49px", border: "1px solid #D0D5DD" }}
      >
        <div className="pt-3 pl-4 font-inter text-lg font-medium leading-6 text-left">
          Tasks
        </div>
      </div>
      <div
        className="flex flex-row"
        style={{
          border: "1px solid #D0D5DD",
          height: "auto",
          width: "full",
        }}
      >
        <div
          style={{
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "16px",
          }}
        >
          {" "}
          <img
            src={bellIcon}
            alt="bellicon"
            style={{
              padding: "4px",
              width: "20px",
              height: "20px",
              backgroundColor: "blue",
              borderRadius: "8px",
              fontSize: "4px",
            }}
          />
        </div>
        <div
          className="font-inter text-base font-normal leading-6 text-left"
          style={{
            width: "480px",
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "10px",
          }}
        >
          Contract #00124 need John Beige’s signature
        </div>
        <div
          style={{
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "20px",
          }}
        >
          <h2
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "auto",
              borderRadius: "8px",
              height: "26px",
              padding: "1px",
            }}
          >
            flex3
          </h2>
        </div>
        <div
          className="font-inter text-sm font-normal text-right text-[#757575]"
          style={{
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "10px",
          }}
        >
          Sep 16
        </div>
      </div>
    </div>
  );
}

