import React from "react";
import FilmRow from "./FilmRow";

function FilmListing(props) {
  let allFilms = props.TMDB.films.map((d, i) => {
    return <FilmRow film={d} />;
  });
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {allFilms}
    </div>
  );
}

export default FilmListing;
