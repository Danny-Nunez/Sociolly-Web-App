import "./style.css";
import Header from "../../components/header";
import App from "../../components/youtubeVideos/App";
import React from "react";

export default function Movies() {
  return (
    <>
      <Header page="movies" />

      <div className="movies">
        <App />
        <div className="movies_left"></div>
        <div className="movies_right"></div>
      </div>
    </>
  );
}
