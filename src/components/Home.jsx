
import React, {useState} from "react";
import './Home.css';
// importing Link from react-router-dom to navigate to 
// different end points.
import SearchBar from "./SearchBar";


import { Link } from "react-router-dom";


  
function Home(){
  const [isHidden, setisHidden] = React.useState(true);
  function onClickElsewhere (){
  setisHidden(!isHidden)
  }





  return (
    <div className="container1" onClick={onClickElsewhere} >
      <div className="container">
        {/* <h1>Hacker News</h1> */}
        <div className="main">
         <div className="title"  >Search</div>
          <SearchBar  placeholder="Search title" isHidden = {isHidden}/> 
        </div>
        
      </div>
      <div className="container2" 
        >
        <Link to="/problem2">Go to Problem #2</Link>
      </div>
      

    </div>
  );
};
  
export default Home;