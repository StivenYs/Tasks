import React from "react";
import {useConnection} from "./connection";

const TaskContext = React.createContext();
 
 function TaskProvide(props){
     
     const {
         data,
         SaveTasks:SaveTasks,
         DeleteTask:DeleteTask,
         Update,
         loading,
         error
     } = useConnection();
     
     
     
     const [search, setSearchValue] = React.useState('');
     const [openModal,setOpenModal] = React.useState(false );
     
 
     const completedTasks = data.filter(item => item.completed).length;
     const totalTasks = data.length;

     
     let searchedTasks;

     if (!search.length >= 1){
         searchedTasks = data;
     }else{
         searchedTasks = data.filter(item => {
             const CorLetterMi = item.task.toLowerCase();
             const LetterMinState = search.toLowerCase();
             return CorLetterMi.includes(LetterMinState);
         })
     }


    

     //Complete
  
     const CompleteTask = (id,completed)=>{
         Update(id,completed);
     }
     
     
 
     //Add
     const AddTask = (text)=>{
         const newTasks = {
             id: text,
             task: text,
             completed:false
         }
         SaveTasks(newTasks);
        
     }
     
     
     return(
         <TaskContext.Provider value={{
             loading,
             error,
             search,
             setSearchValue,
             completedTasks,
             totalTasks,
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