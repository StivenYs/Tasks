const {pool} = require('../db/connection.db');

class TasksService {
    constructor() {
     
       
    }
    async Create(body){
        const {id,task,completed} = body;
        const sql = `INSERT INTO tasks (id,task,completed) VALUES ('${id}','${task}',${completed})`;
        
       await pool.query(sql, (err,result)=>{
            if (err)console.log(err);
           
       });
       
   
    }
    async Read(res){
       await pool.query('SELECT * FROM tasks;',(err,result)=>{
           if (err)console.log(err);
           if (result.completed <= 0)result.completed = false;
           else result.completed = true;
           res(result);
       })
    }

    async Delete(id){
        await pool.query(`DELETE FROM tasks WHERE id = '${id}'`,(err,result)=>{
            if (err)  console.log(err);
        });
        
    }
    async Update(id,body){
        const {completed} = body;
        const sql = `UPDATE tasks SET completed = '${(completed === true) ? 1:0}' WHERE id = '${id}'`;
        await pool.query(sql ,(err,resul)=>{
            if (err)console.log(err);
        });
        return `successfully ${id}`;
    }
 
}

module.exports  = TasksService;


   

