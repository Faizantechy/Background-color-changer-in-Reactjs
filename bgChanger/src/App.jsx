import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className={`w-full h-screen text-white bg-${
        color === "yellow"
          ? "yellow-400"
          : color === "black"
          ? "black"
          : `${color}-800`
      }`}
    >
      <div className="bgColor-changer fixed bottom-20 left-20">
        <button
          className="bg-red-800"
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>

        <button
          onClick={() => {
            setColor("blue");
          }}
          className="bg-blue-800"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="bg-green-800"
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="bg-yellow-400"
          onclick="functionName()"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("purple");
          }}
          className="bg-purple-800"
        >
          Purple
        </button>

        <button
          onClick={() => {
            setColor("black");
          }}
          className="bg-black"
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
