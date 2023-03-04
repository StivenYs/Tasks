import React from "react";
import '../css/TodoList.css'
function TaskList (props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export {TaskList};