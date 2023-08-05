import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, QuestionGenerator, Memorization, QuickMaths } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<QuestionGenerator />} path="/questiongenerator" />
        <Route element={<Memorization />} path="/memorization" />
        <Route element={<QuickMaths />} path="/quickmaths" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
