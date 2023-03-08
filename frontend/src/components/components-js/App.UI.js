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
            
            {
                <TaskList>

                    {error && <p>Desesperate, Hubo un error</p>}
                    {loading  && <ReactContent/>}
                    {(!loading  && !searchedTasks.length) && <p>!No tienes taks  😂...</p>}
                    {searchedTasks.map(item => (
                        <TaskItem
                            key={item.task}
                            task={item.task}
                            completed={item.completed}
                            onComplete = {()=> CompleteTask(item.id,item.completed)}
                            onDelete={()=> DeleteTask(item.task)}
                        />
                    ))}
                </TaskList>
            }
           
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