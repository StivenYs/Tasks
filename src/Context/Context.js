import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TaskContext = React.createContext();
 
 function TaskProvide(props){
     
     const {
         item: tasks,
         saveTasks:saveTasks,
         loading,
         error
     } = useLocalStorage('TODOS_V1',[]);
     const [search, setSearchValue] = React.useState('');
     const [openModal,setOpenModal] = React.useState(false );
     const completedTasks = tasks.filter(item => item.completed).length;
     const totalTasks = tasks.length;

     let searchedTasks = [];

     if (!search.length >= 1){
         searchedTasks = tasks;
     }else{
         searchedTasks = tasks.filter(item => {
             const CorLetterMi = item.text.toLowerCase();
             const LetterMinState = search.toLowerCase();
             return CorLetterMi.includes(LetterMinState);
         })
     }


     //Complete
     const CompleteTask = (text)=>{
         const taskIndex = tasks.findIndex(item => item.text === text);
         const newArrayTasks = [...tasks];
         newArrayTasks[taskIndex].completed = true;
         saveTasks(newArrayTasks);
     }
     //Delete 
     const DeleteTask = (text)=>{
         const taskIndex = tasks.findIndex(item => item.text === text);
         const newArrayTasks = [...tasks];
         newArrayTasks.splice(taskIndex,1);
         saveTasks(newArrayTasks);
     }
     //Add
     const AddTask = (text)=>{
         const newArrayTasks = [...tasks];
         newArrayTasks.push({
             completed: false,
             text,
         })
         saveTasks(newArrayTasks);
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
         <TaskContext.Provider value={{
             loading,
             error,
             totalTasks,
             completedTasks,
             search,
             setSearchValue,
             searchedTasks,
             CompleteTask,
             DeleteTask,
             AddTask,
             openModal,
             setOpenModal,
             
         }}>
             {props.children}
         </TaskContext.Provider>
     );
 }
 
export {TaskContext,TaskProvide};