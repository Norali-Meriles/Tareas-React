import React,{useState} from "react";


const Web=({name,clave})=>{

      const [mensaje,setMensaje]= useState(name) 

      const reset=()=>{
          setMensaje (mensaje+clave)
          
      }

      return(
            <div className="container">
                  <div className="row">
                        <div className="col">
       <h1> Hello {mensaje}! </h1>
       <button className="btn btn btn-light btn-outline-dark mt-4" onClick={reset} >Click me </button> 
                        </div>
                  </div>
         
            </div>
      )
     
}
export default Web;