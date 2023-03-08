import React from "react";
import  '../css/TodoCounter.css'
import {TaskContext} from "../../Context/Context";

function TaskCounter(){
    const { totalTasks, completedTasks} = React.useContext(TaskContext)
    return(
        <h2 className="todoCounter">Has completado {completedTasks} de {totalTasks}</h2>
    );
}
 
export  {TaskCounter};