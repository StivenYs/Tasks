import React from 'react'

function useLocalStorage(itemName,initialValue){
    //estado de carga
    const [loading,setLoading] = React.useState(true);

    const [error,setError] = React.useState(false);

    //estado des espera
    //states
    const [item,setItem] = React.useState(initialValue);

    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (localStorageItem === null){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else{
                    parsedItem = JSON.parse(localStorageItem);

                }
                setItem(parsedItem);
                setLoading(false);
            }catch (error){
                setError(error);
            }

        },1000);
    });
    //local storage

    //save this state in the local storage
    const saveTodos = (newTodos) => {
        try {
            const stingfielldTodo = JSON.stringify(newTodos);
            localStorage.setItem(itemName,stingfielldTodo)
            setItem(newTodos);

        }catch (error){
            setError(error);
        }
    }


    return {
        item,
        saveTodos,
        loading,
        error
    };



}

export {useLocalStorage};