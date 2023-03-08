import React from "react";
import {AppUI} from "./App.UI";
import {TaskProvide} from "../../Context/Context";

function App() {
    return (
        <TaskProvide>
            <AppUI />
        </TaskProvide>
  );
}

export default App;
