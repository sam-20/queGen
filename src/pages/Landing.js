import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          display: "flex",
          borderRadius: 10,
          border: "none",
          boxShadow: "0px 0px 5px 1px dodgerblue",
          padding: 10,
          backgroundColor: "white",
          color: "dodgerblue",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 10,
        }}
        onClick={() => {
          navigate("/questiongenerator");
        }}
      >
        Questions Generator
      </button>

      <button
        style={{
          display: "flex",
          borderRadius: 10,
          border: "none",
          boxShadow: "0px 0px 5px 1px dodgerblue",
          padding: 10,
          backgroundColor: "white",
          color: "dodgerblue",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 10,
        }}
        onClick={() => {
          navigate("/memorization");
        }}
      >
        Word Phrase Memorization
      </button>

      <button
        style={{
          display: "flex",
          borderRadius: 10,
          border: "none",
          boxShadow: "0px 0px 5px 1px dodgerblue",
          padding: 10,
          backgroundColor: "white",
          color: "dodgerblue",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 10,
        }}
        onClick={() => {
          navigate("/quickmaths");
        }}
      >
        Quick Maths
      </button>
    </div>
  );
}

export default Landing;
