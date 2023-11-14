import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/toastify-dark-theme.css";
import React from "react";


function App() {

  
  return (
    <div>
    

      <ToastContainer position="top-right" autoClose={3000} />
      <AppRoutes />
    </div>
  );
}
export default App;
