import React from "react";
import { Pie } from "react-chartjs-2";

// Sample data
const todos = [
  {
    id: "1c62e7a0-bb4a-4bf6-aec4-cf6773a44a1d",
    name: "Jim Estrada",
    priority: "LOW",
    todo: "Cevlurhur gatjufej milomse ipoka nef va fawotge.",
    completed: false,
    createdAt: "2022-10-31T08:40:26.550Z",
  },
  {
    id: "1c62e7a0-bb4a-4bf6-aec4-cf6773a44a1b",
    name: "Jane Doe",
    priority: "HIGH",
    todo: "Lorem ipsum dolor sit amet.",
    completed: true,
    createdAt: "2022-10-31T08:40:26.550Z",
  },
  {
    id: "1c62e7a0-bb4a-4bf6-aec4-cf6773a44a1c",
    name: "John Smith",
    priority: "MEDIUM",
    todo: "Consectetur adipiscing elit.",
    completed: false,
    createdAt: "2022-10-31T08:40:26.550Z",
  },
];

function Piechart() {

  const priorityCount = todos.reduce((acc, todo) => {
    acc[todo.priority] = (acc[todo.priority] || 0) + 1;
    return acc;
  }, {});


  const labels = Object.keys(priorityCount);
  const data = Object.values(priorityCount);


  const priorityColors = {
    HIGH: "#eb5757",
    MEDIUM: "#F2C94C",
    LOW: "#2F80ED",
  };


  const dataset = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: labels.map((label) => priorityColors[label]),
      },
    ],
  };

  return (
    <div
      style={{
        width: "414px",
        height: "260px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        padding: "10px",
      }}
    >
      <div
        style={{ width: "100%", height: "49px", borderBottom: "1px solid #D0D5DD" }}
      >
        <div className="pt-3 pl-4 font-inter text-lg font-medium leading-6 text-left">
          Task Priorities
        </div>
      </div>
      <div style={{ height: "200px" }}>
        <Pie data={dataset} />
      </div>
    </div>
  );
}

export default Piechart;
