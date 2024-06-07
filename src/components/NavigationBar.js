import React from "react";
import bellIcon from "../assets/icon/Bell-off.svg";
import profileImage from "../assets/people/Ellipse 6.png";
import downListIcon from "../assets/icon/Icon.svg";

function NavigationBar() {
  return (
    <div>
      <nav
        className="bg-white shadow-md"
        style={{ width: "1076px", height: "80px", left: "272px" }}
      >
        <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center h-full">
          <div className="text-xl font-semibold ">Dashboard</div>
          <div className="flex items-center space-x-4">
            <button>
              <img
                src={bellIcon}
                alt="Bell Icon"
                className="w-6 h-6 font-semibold"
              />
            </button>
            <div>
              <img
                src={profileImage}
                alt="User Photo"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <button>
              <img
                src={downListIcon}
                alt="Dropdown Icon"
                className="w-6 h-6 pr-1.5 font-semibold"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
