import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Dashboard from "./Dashboard";
import MissionCenter from "./MissionCenter";
import Roadmap from "./Roadmap";
import Documents from "./Documents";
import Agents from "./Agents";
import AgentChat from "./AgentChat";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mission-center" element={<MissionCenter />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/chat/:agentId" element={<AgentChat />} />
      </Routes>
    </BrowserRouter>
  );
}
