import React from "react";
import User from "../User/User.jsx";
export const MovieContext = React.createContext();
export const movies = [
  {
    id: "a-111",
    name: "INTERSTELLAR",
    director: "Christopher Nolan",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: "b-222",
    name: "FIGHT CLUB",
    director: "David Fincher",
    image:
      "https://image.tmdb.org/t/p/original/8dR7Jd7DOEhU8cZ734Va17NRoZ2.jpg",
  },
  {
    id: "c-333",
    name: "LUCIFER",
    director: "Prithviraj Sukumaran",
    image:
      "https://th.bing.com/th/id/OIP.15Scc56Lce42ZYpzYEgD5wHaK9?w=202&h=300&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: "d-444",
    name: "SE7EN",
    director: "David Fincher",
    image: "https://wallpapercave.com/wp/wp2180181.jpg",
  },
  {
    id: "e-555",
    name: "MINNAL MURALI",
    director: "Basil Joseph",
    image:
      "https://www.filmibeat.com/fanimg/movie/17951/minnal-murali-photos-images-70005.jpg",
    desc: "sdfghjk",
    Cast: ["midelaj", "Riya", "asin", "arsha"],
    CastDeta: "fghjklrtyuiotyuio",
  },
];

function Content() {
  return (
    <MovieContext.Provider value={movies}>
      <User />
    </MovieContext.Provider>
  );
}

export default Content;
