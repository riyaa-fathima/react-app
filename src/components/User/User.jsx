import { useContext } from "react";
import { MovieContext } from "../Content/content";
function User() {
  const movies = useContext(MovieContext);
  return (
    <div className="card-container">
      <div className="card">
        {movies.map((movie) => {
          return <h4 key={movie.id}>{movie.name}</h4>;
        })}
      </div>
    </div>
  );
}
export default User;
