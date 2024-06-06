import React from "react";
import bellIcon from "../assets/icon/Bell-off.svg";
import profileImage from "../assets/people/Ellipse 6.png";
import downListIcon from "../assets/icon/Icon.svg";

function NavigationBar() {
  return (
    <div>
      <nav
        class="bg-white shadow-md"
        style={{ width: "1076px", height: "80px", left: "272px" }}
      >
        <div class="max-w-screen-lg mx-auto px-4 flex justify-between items-center h-full">
          <div class="text-xl font-semibold ">Dashboard</div>
          <div class="flex items-center space-x-4">
            <div>
              <img
                src={bellIcon}
                alt="Bell Icon"
                class="w-6 h-6 font-semibold"
              />
            </div>
            <div>
              <img
                src={profileImage}
                alt="User Photo"
                class="w-8 h-8 rounded-full"
              />
            </div>
            <div>
              <img
                src={downListIcon}
                alt="Dropdown Icon"
                class="w-6 h-6 pr-1.5 font-semibold"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
