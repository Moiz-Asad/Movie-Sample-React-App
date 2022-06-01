import React from "react";
import Card from "./components/Card";
import {Data} from './data';
import './index.css';

function App() {  
  return (
    <div className="App">
      {/* <Card 
      src={Data.Movies[0].images[0].thumbnail} 
      title={Data.Movies[0].title} 
      date={Data.Movies[0].release_date}      
      /> */}

      {
        Data.Movies.map((movie)=>{
          return <Card 
          src={movie.images[0].thumbnail}
          title={movie.title} 
          date={movie.release_date}      
          />
        })
      }
    </div>
  );
}

export default App;
