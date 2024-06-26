// components/Layout/Loading.js
import React from "react";
import "./Loading.css"; // Ensure you have appropriate CSS for the loader

const Loading = ({show}) => {
  return show && (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
