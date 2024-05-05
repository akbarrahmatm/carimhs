import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Search from "./Search";
import SearchIndex from "./SearchIndex";
import StudentDetail from "./StudentDetail";

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
