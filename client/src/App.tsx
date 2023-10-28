import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
