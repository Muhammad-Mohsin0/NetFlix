import React from "react";
import Card from "./Components/Card";
import logo from '../src/assets/logo.png.png'
import Moviesdata from "./Components/MoviesData";
import './index.css'
 

const Mdata =(value)=>{
     return (

          
          <div className="container"> 
          <Card 
               key={value.id}
               sname={value.sname}
               imgsrc={value.imgsrc}
               title={value.title} 
               link={value.links}
          />
          </div>
          
     )
}
function App(){
    return (
        
        <> 
        
        <div className="backgrnd"><img src={logo} alt="logo" className="photo"/></div>
        <h1 className="heading_style">List Top 10 Movies <span>NETFLIX</span> In March-2024 </h1>
        {Moviesdata.map(Mdata)}
        
      
        </>
   
    )
}

export default App;