import React from "react";
import '../css/CreateTodoButton.css'
function CreateTaskButton(props){
    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState);
    };
    return(
        <button className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTaskButton};