import { useContext } from "react";
import { MovieContext } from "../Content/content";
import "./User.css";
import { movies } from "../Content/content";
import { ThemeContext } from "../../context/ThemeContext";

function User() {
  // const movies = useContext(MovieContext);
  // console.log(movies);
  const { theme, light, dark } = useContext(ThemeContext);
  const userTheme = theme ? light : dark;
  return (
    <div className="card-container" style={userTheme}>
      <div className="card" style={userTheme}>
        {movies.map((movie) => {
          return (
            <div className="movie-card" style={theme ? dark : light}>
              <img src={movie.image} alt={movie.name} className="movie-image" />
              <h4 key={movie.id} className="movie">
                {movie.name} <br />
                {movie.director}
              </h4>

              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default User;
