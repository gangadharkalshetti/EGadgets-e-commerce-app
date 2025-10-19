import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";       // main app component
// import "./index.css";              // global styles (optional)

// // Create root and render the App component
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

