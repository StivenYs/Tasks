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

        },2500);
    });
    //local storage

    //save this state in the local storage
    const saveTasks = (newTasks) => {
        try {
            const stingfielldTask = JSON.stringify(newTasks);
            localStorage.setItem(itemName,stingfielldTask)
            setItem(newTasks);

        }catch (error){
            setError(error);
        }
    }


    return {
        item,
        saveTasks,
        loading,
        error
    };



}

export {useLocalStorage};