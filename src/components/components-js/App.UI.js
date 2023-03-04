import React from "react";
import {TaskCounter} from "./TaskCounter";
import {TaskContext} from "../../Context/Context";
import {TaskItem} from "./TaskItem";
import {CreateTaskButton} from "./CreateTaskButton";
import {TaskList} from "./TaskList";
import {TaskSearch} from "./TaskSearch";
import {Modal} from "./modal";
import {TaskForm} from "./form";
import {ReactContent} from "../react-Content";

function AppUI(){
    const {error,
        loading,
        searchedTasks,
        CompleteTask,
        DeleteTask,
        openModal,
        setOpenModal
    } = React.useContext(TaskContext);
    return(
        <React.Fragment>
            <TaskCounter/>
            <TaskSearch/>
            <TaskList>
                {error && <p>Desesperate, Hubo un error</p>}
                {loading  && <ReactContent/>}
                {(!loading  && !searchedTasks.length) && <p>!Crea tu primer taks  😂...</p>}
                {searchedTasks.map(item => (
                    <TaskItem
                        key={item.text}
                        text={item.text}
                        completed={item.completed}
                        onComplete={()=> CompleteTask(item.text)}
                        onDelete ={()=> DeleteTask(item.text)}
                    />
                ))}
            </TaskList>
            {!!openModal &&(
                <Modal>
                    <TaskForm/>
                </Modal>
            )}
            <CreateTaskButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};