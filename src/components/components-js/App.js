import React from "react";
import {AppUI} from "./App.UI";
import {TodoProvide} from "../../Context/Context";

/*
const todosItems = [
  {text:"cortar cebolla",completed:false,id: "1"},
  {text:"cortar ",completed:false,id: "2"},
  {text:"cebolla",completed:false,id: "3"}
];

 */

function App() {
    
    return (
        <TodoProvide>
            <AppUI />
        </TodoProvide>
  );
}

export default App;
