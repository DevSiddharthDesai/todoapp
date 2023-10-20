import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Tasks from "./pages/tasks/Tasks";

function App() {
  return (
    <>
      <div className="container mx-auto px-24 sm:px-12 lg:px-24 py-24">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
