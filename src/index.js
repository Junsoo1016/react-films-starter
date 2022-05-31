import React from "react";
import ReactDOM from "react-dom";
// COMPONENTS
import FilmListing from "./components/FilmListing";
import FilmDetails from "./components/FilmDetails"
import TMDB from "./TMDB"

import "./styles.css";

function App() {
  console.log(TMDB)
  return (
    <div className="film-library">
      <FilmListing TMDB={TMDB}/>
      <FilmDetails TMDB={TMDB}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
