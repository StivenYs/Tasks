import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();
 
 function TodoProvide(props){
     const {
         item: todos,
         saveItem:saveTodos,
         loading,
         error
     } = useLocalStorage('TODOS_V1',[]);
     const [search, setSearchValue] = React.useState('');

     const completedTodos = todos.filter(item => item.completed).length;
     const totalTodos = todos.length;

     let searchedTodos = [];

     if (!search.length >= 1){
         searchedTodos = todos;
     }else{
         searchedTodos = todos.filter(item => {
             const CorLetterMi = item.text.toLowerCase();
             const LetterMinState = search.toLowerCase();
             return CorLetterMi.includes(LetterMinState);
         })
     }


     //Complete
     const CompleteTodo = (text)=>{
         const todoIndex = todos.findIndex(item => item.text === text);
         const newArrayTodos = [...todos];
         newArrayTodos[todoIndex].completed = true;
         saveTodos(newArrayTodos);
     }
     //Delete 
     const DeleteTodo = (text)=>{
         const todoIndex = todos.findIndex(item => item.text === text);
         const newArrayTodos = [...todos];
         newArrayTodos.splice(todoIndex,1);
         saveTodos(newArrayTodos);
     }

     /*
         console.log('render antes del efecto');
     
         //react effect
         //en el array especificamos cuando se va a ejecutar //si no tiene array ejecutara cada vez que inicie el render
         React.useEffect(()=>{
             console.log('user effect');
         },[])
     
         console.log('Despues del efect');
         
         
      */
     
     return(
         <TodoContext.Provider value={{
             loading,
             error,
             totalTodos,
             completedTodos,
             search,
             setSearchValue,
             searchedTodos,
             CompleteTodo,
             DeleteTodo,
         }}>
             {props.children}
         </TodoContext.Provider>
     );
 }
 
export {TodoContext,TodoProvide};