import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ResendOTP from "./components/ResendOTP";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resend-otp" element={<ResendOTP />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
