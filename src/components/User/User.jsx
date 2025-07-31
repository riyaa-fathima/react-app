import { useContext } from "react";
import { MovieContext } from "../Content/content";
import "./User.css";
import { movies } from "../Content/content";

function User() {
  // const movies = useContext(MovieContext);
  // console.log(movies);
  return (
    <div className="card-container">
      <div className="card">
        {movies.map((movie) => {
          return (
            <div className="movie-card">
              <img src={movie.image} alt={movie.name} className="movie-image" />
              <h4 key={movie.id} className="movie">
                {movie.name}
              </h4>
              
              <p>{movie.director}</p>
            </div>
          );
        })}
      </div>

      {/* {clicked ? <Description/> : ""} */}
    </div>
  );
}
export default User;


