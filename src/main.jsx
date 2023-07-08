import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { AddExpense } from "./Components/AddExpense/AddExpense.jsx";
import { Update } from "./Components/Update/Update.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addExpense" element={<AddExpense />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
