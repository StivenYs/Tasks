const express = require('express');
const app =  express();
const cors = require('cors');
const {routerApi} = require("./routes/index");

app.use(express.json());
app.use(cors());

const port = "3000";

app.get('/',(req, res)=>{
    res.send("page 1");
});

routerApi(app);

app.listen(port,(error)=>{
    if (error){console.log(` error ${error}`)}
    else{
        console.log("http://localhost:3000/api/v1")
    }
})

