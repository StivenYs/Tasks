import React from "react";
import '../css/CreateTodoButton.css'
function CreateTodoButton(props){
    const onClickButton = (msg)=>{
        alert(msg);
    }
    return(
        <button className='CreateTodoButton'
            onClick={()=>onClickButton("esto es el texto")}
        >+
        </button>
    );
}

export {CreateTodoButton};