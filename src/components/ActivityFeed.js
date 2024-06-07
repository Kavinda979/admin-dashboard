import React from "react";
import man from "../assets/people/man.jpg";
import girl from "../assets/people/girl.png";

// const data = [
//   {
//     image: "path/to/image1.jpg",
//     text: "Text for image 1",
//   },
//   {
//     image: "path/to/image2.jpg",
//     text: "Text for image 2",
//   },
// ];

function ActivityFeed() {
  return (
    <div
      style={{
        width: "414px",
        height: "363px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        overflow:"scroll-y"
      }}
    >
      <div
        style={{ width: "full", height: "49px", border: "1px solid #D0D5DD" }}
      >
        <div className="pt-3 pl-4 font-inter text-lg font-medium leading-6 text-left">
          Activity Feed
        </div>
      </div>
      <div
        className="flex flex-row"
        style={{
          border: "1px solid #D0D5DD",
          height: "auto",
          width: "full",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "16px",
        }}
      >
        <div>
          <img
            src={man}
            alt="man"
            style={{
              padding: "4px",
              width: "32px",
              height: "32px",
              borderRadius: "100px",
            }}
          />
        </div>
        <div className="grid grid-rows-2">
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            <p className="whitespace-nowrap">
              <b>Kushantha Charuka</b> created
              <div style={{ color: "#BC006D"}}>
                Contract #00124 needs John Beige’s signature
              </div>
            </p>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "22px",
              textAlign: "left",
              color: "#757575",
            }}
          >
            Sep 16, 2022 at 11:30 AM
          </div>
        </div>
      </div>

      <div
        className="flex flex-row"
        style={{
          border: "1px solid #D0D5DD",
          height: "auto",
          width: "full",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "16px",
        }}
      >
        <div>
          <img
            src={girl}
            alt="girl"
            style={{
              padding: "4px",
              width: "32px",
              height: "32px",
              borderRadius: "100px",
              fontSize: "4px",
            }}
          />
        </div>
        <div className="grid grid-rows-2">
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            <p>
              Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit.
              <b>Maecenas</b> pretium neque
            </p>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "22px",
              textAlign: "left",
              color: "#757575",
            }}
          >
            Sep 16, 2022 at 11:30 AM
          </div>
        </div>
      </div>

      <div
        className="flex flex-row"
        style={{
          border: "1px solid #D0D5DD",
          height: "auto",
          width: "full",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "16px",
        }}
      >
        <div>
          <img
            src={girl}
            alt="girl"
            style={{
              padding: "4px",
              width: "32px",
              height: "32px",
              borderRadius: "100px",
              fontSize: "4px",
            }}
          />
        </div>
        <div className="grid grid-rows-2">
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            <p>
              Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit.
              <b>Maecenas</b> pretium neque
            </p>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "22px",
              textAlign: "left",
              color: "#757575",
            }}
          >
            Sep 16, 2022 at 11:30 AM
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
