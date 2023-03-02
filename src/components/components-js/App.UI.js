import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";


function AppUI(){
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch
                search = {search}
                setSearchValue ={setSearchValue}
            />
            <TodoList>
                {error && <p>Desesperate, Hubo un error</p>}
                {loading  && <p>Estamos cargando ...</p>}
                {(!loading  && !searchedTodos.length) && <p>!Crea tu primer taks  😂...</p>}
                {searchedTodos.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onComplete={()=> CompleteTodo(item.text)}
                        onDelete ={()=> DeleteTodo(item.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>
            <button>+</button>
        </React.Fragment>
    );
}

export {AppUI};