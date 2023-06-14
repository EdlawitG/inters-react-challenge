// import React, { useState } from "react";

function Detail({ detail }) {
  return (
    <div className="root">
      {detail ? (
        <div class="card-1">
          <p> Name: {detail.name}</p>
          <p> Height: {detail.height}</p>
          <p> Mass: {detail.mass}</p>
          <p> Hair_Color: {detail.hair_color}</p>
          <p> Skin_Color: {detail.skin_color}</p>
          <p> Eye_Color: {detail.birth_year}</p>
          <p> Gender: {detail.gender}</p>
          <p> Birth_year: {detail.birth_year}</p>
          {detail.films.map((film) => (
            <p>{film.title}</p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Detail;
