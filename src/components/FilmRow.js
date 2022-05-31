import React from "react";

function FilmRow(props) {
  return (
    <div className="film-row">
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{new Date(props.film.release_date).getFullYear()}</p>
      </div>
    </div>
  );
}

export default FilmRow;
