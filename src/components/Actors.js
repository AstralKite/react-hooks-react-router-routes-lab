import React from "react";
import { actors } from "../data";

function Actors() {


  const actorsList = actors.map( (actor)=>{

    let movies = actor.movies.map( (movie)=>{
      return(
        <li key={movie}>{movie}</li>
      )
    })

    return(
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>{movies}</ul>
      </div>
    )
  })


  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
