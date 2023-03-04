import React from "react";
import {TaskContext} from "../../Context/Context";

function TaskForm(){
    const {AddTask,setOpenModal} = React.useContext(TaskContext);
    const [newValue,setNewValue] = React.useState("");
    const onUpdate = (event) =>{
        setNewValue(event.target.value);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onAdd = (event) =>{
        event.preventDefault();
        AddTask(newValue);
        setOpenModal(false);
    }
    return(
        <form className="form" onSubmit={onAdd}>
            <label htmlFor="textTask">Write a new task</label>
            <textarea
                cols={25}
                rows={5}
                id="textTask"
                value={newValue}
                onChange={onUpdate}
                placeholder="Write"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                
                <button
                    type="submit"
                >
                    añadir
                </button>
            </div>
            
        </form>
    );
}




export {TaskForm};