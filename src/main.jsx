import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListItem from './components/List.jsx'


const dataArr = [
   {
  title : "My favourite movie" ,
  movieOne : "Fight Club" ,
  movieTwo : "The shutter island"
},
 {
  title : "Asin favourite movie" ,
  movieOne : "Oppenheimer" ,
  movieTwo : "Spider-man : no way home"
},
 {
  title : "Arshad favourite movie" ,
  movieOne : "Inception" ,
  movieTwo : "Interstellar"
},
];
createRoot(document.getElementById('root')).render(
  <div>
    {dataArr.map((data) => (
      <ListItem
        title = {data.title}
        movieOne = {data.movieOne}
        movieTwo = {data.movieTwo}
     />
    ))}
    
  </div>
  
);
//  <StrictMode>
//     <App />
//   </StrictMode>, 