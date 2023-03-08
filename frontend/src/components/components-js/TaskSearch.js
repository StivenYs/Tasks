import React from "react";
import '../css/TodoSearch.css'
import {TaskContext} from "../../Context/Context";
function TaskSearch(){
   const {search, setSearchValue} = React.useContext(TaskContext)
   const onSearchValueChange = (event)=>{
       setSearchValue(event.target.value);
   }
    return(
        <input
            className='TodoSearch'
            placeholder="Text"
            value={search}
            onChange={onSearchValueChange}
        />
    );
   
}

export {TaskSearch};



