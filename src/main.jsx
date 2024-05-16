import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import Search from "./pages/Search";
import SearchIndex from "./pages/SearchIndex";
import StudentDetail from "./pages/StudentDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/search/" element={<SearchIndex />} />
      <Route path="/search/:searchParams" element={<Search />} />
      <Route path="/student/:idStudent" element={<StudentDetail />} />
    </Routes>
  </BrowserRouter>
);
