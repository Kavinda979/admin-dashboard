import React, { useState } from "react";
import bellIcon from "../assets/icon/bell-ringing-03.svg";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: "1c62e7a0-bb4a-4bf6-aec4-cf6773a44a1a",
      name: "Jim Estrada",
      priority: "LOW",
      todo: "Cevlurhur gatjufej milomse ipoka nef va fawotge.",
      completed: true,
      createdAt: "2022-10-31T08:40:26.550Z",
    },
    {
      id: "1c62e7a0-bb4a-4bf6-aec4-cf6773a44a1b",
      name: "Jim Estrada",
      priority: "HIGH",
      todo: "Ce.",
      completed: false,
      createdAt: "2022-10-31T08:40:26.550Z",
    },
    {
      id: "1c62e7a0-bb4a-4bf6-aec4-cf6773a44a1c",
      name: "Jim Estrada",
      priority: "MEDIUM",
      todo: "Cevlurhur gatjufva fawotge.",
      completed: true,
      createdAt: "2022-10-31T08:40:26.550Z",
    },
  ]);

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return <Tasks todos={todos} markAsDone={markAsDone} />;
}

const PRIORITY_COLORS = {
  HIGH: "#eb5757",
  MEDIUM: "#F2C94C",
  LOW: "#2F80ED",
};


function Tasks({ todos, markAsDone }) {
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
      {todos.map((todo, index) => (
        <div
          className="flex flex-row"
          key={todo.id}
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
            <img
              src={bellIcon}
              alt="bellicon"
              style={{
                padding: "4px",
                width: "20px",
                height: "20px",
                backgroundColor: PRIORITY_COLORS[todo.priority],
                borderRadius: "8px",
                fontSize: "4px",
              }}
            />
          </div>
          <div
            className="font-inter text-base font-normal leading-6 text-left"
            style={{
              width: "450px",
              paddingTop: "14px",
              paddingBottom: "14px",
              paddingLeft: "10px",
            }}
          >
            {todo.todo}
            <br />
            {!todo.completed && (
              <button
                style={{
                  color: "#BC006D",
                  fontSize: "12px",
                }}
                onClick={() => markAsDone(todo.id)}
              >
                Mark as done
              </button>
            )}
          </div>
          <div
            style={{
              paddingTop: "14px",
              paddingBottom: "14px",
              paddingLeft: "20px",
              width: "90px",
              height: "26px",
            }}
          >
            <div>
              {todo.completed && (
                <div
                  style={{
                    color: "#219653",
                    backgroundColor: "#E8F5E9",
                    borderRadius: "16px",
                    padding: "2px, 8px, 2px, 8px",
                    fontSize: "12px",
                  }}
                >
                  Done
                </div>
              )}
              {!todo.completed && (
                <div
                  style={{
                    color: "#F2C94C",
                    backgroundColor: "#F2C94C 10%",
                    borderRadius: "8px",
                    padding: "2px, 8px, 2px, 8px",
                    fontSize: "12px",
                  }}
                >
                  In-Progress
                </div>
              )}
            </div>
          </div>
          <div
            className="font-inter text-sm font-normal text-right text-[#757575]"
            style={{
              paddingTop: "14px",
              paddingBottom: "14px",
              paddingLeft: "10px",
            }}
          >
            {new Date(todo.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
