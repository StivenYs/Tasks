import React from "react";
import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})



function useConnection(){
   
   
    //state loading
    const [loading,setLoading] = React.useState(true);
    //state  error
    const [error,setError] = React.useState(false);
    //state data

    //states
    const [data,setData] = React.useState([]);
    const [rest,setReset] = React.useState(false);
    
   
    //GET
  
    
   React.useEffect(()=>{
       try {
           async function GetTasks (){
               const data = await instance.get('/Tasks');
               setData(data.data);
               setLoading(false);
           }
           GetTasks();
       }catch (error){
           console.log(`error ${error}`);
       }
       
       
   },[rest]);
   
    //POST
    const SaveTasks = (body) => {
        async function posData(){
            await instance.post('/Tasks',body)
            setReset(prevState => !prevState);
          
        }
        posData();

    }
    
    //DELETE
    
    async function DeleteTask(id){
       await instance.delete(`/Tasks/${id}`);
        setReset(prevState => !prevState);
     
    }
    
    //UPDATE
    
    async function Update (id ,completed){
        await instance.patch(`/Tasks/${id}`,{
            completed: !completed
        });
        setReset(prevState => !prevState);
      
    }

    
    return {
        data,
        SaveTasks,
        DeleteTask,
        Update,
        loading,
        error
    };
}

export {useConnection};