import React from "react";
export const MovieContext = React.createContext();
const movies = [
  { id: "a-111", name: "Interstellar", director: "Christopher Nolan" },
  { id: "b-222", name: "Fight Club", director: "David Fincher" },
  { id: "c-333", name: "Lucifer", director: "Prithviraj" },
  { id: "d-444", name: "Seven", director: "David Fincher" },
  { id: "e-555", name: "Minnal Murali", director: "Basil Joseph" },
];
function Content() {
  return (<MovieContext.Provider value={movies}>
    
  </MovieContext.Provider>)
}
export default Content;
