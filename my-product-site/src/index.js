import React from "react";
import ReactDOM from "react-dom/client"; // ใช้ createRoot
import App from "./App";
import "./index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root")); // ใช้ createRoot
root.render(<App />); // ใช้ render แบบใหม่
