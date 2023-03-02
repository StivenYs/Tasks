import React from "react";
import  '../css/TodoCounter.css'
function TodoCounter({ total, Completed}){
    
    return(
        <h2 className="todoCounter">Has completado {Completed} de {total}</h2>
    );
}
 
export  {TodoCounter};