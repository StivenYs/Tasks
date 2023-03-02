import React from "react";
import '../css/TodoSearch.css'
function TodoSearch({search, setSearchValue}){
   //const [search, setSearchValue] = React.useState('');
   const onSearchValueChange = (event)=>{
       
       console.log(event.target.value)
       setSearchValue(event.target.value);
        }
        return(
            <input 
                className='TodoSearch' placeholder="Text"
                value={search}
                onChange={onSearchValueChange}
            />
        );
   
   
}

export {TodoSearch};



