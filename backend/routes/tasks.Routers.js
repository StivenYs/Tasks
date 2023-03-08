const express = require('express');
const router = express.Router();
const tasksServices = require('../services/tasks')
const service = new tasksServices();

router.get('/',async (req, res)=>{
     await service.Read((resq) =>{
        res.status(200).json(resq);
    });
   
});

router.post("/", async (req, res)=>{
   const body = req.body;
   const rta = await service.Create(body);
    res.status(201).json({
        message: 'Created successfully'
    });
});

router.delete('/:id',async (req, res)=>{
    const {id} = req.params;
    await service.Delete(id);
    res.json({
        message: 'Deleted',
    });
});
router.patch('/:id', async (req,res)=>{
    const {id} = req.params;
    const body = req.body;
    const rta = await service.Update(id,body);
    res.json({message:rta})
});
module.exports = router;

