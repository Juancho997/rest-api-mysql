const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', async(req,res)=>{

    try{
        mysqlConnection.query('SELECT * FROM employees', (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            } else {
                console.log(err);
            }
        })
    } catch(err){
        console.log(err)
    }
});

router.get('/:id', async (req,res)=>{    
    const { id } = req.params;
    
    try{
        mysqlConnection.query(`SELECT * FROM employees WHERE id = ${id}`, (err,rows,fields)=>{
            if(!err){
                res.json(rows[0]);
            } else {
                console.log(err);
            }
        });
    } catch(err){
        console.log(err)
    }
});

router.post('/', async(req,res)=>{
    const { id, name, salary} = req.body;
    const query = 'CALL employeeAddOrEdit( ?, ?, ?);';

    try{
        mysqlConnection.query(query, [ id, name, salary], (err,rows,fields)=>{
            if(!err){
                res.json({message : 'Employee Saved'});
            } else {
                console.log(err);
            }
        });
    } catch(err){
        console.log(err);
    }
});

router.put('/:id', async(req,res)=>{
    const { id } = req.params;
    const { name, salary} = req.body;
    const query = 'CALL employeeAddOrEdit( ?, ?, ?);';

    try{
        
        mysqlConnection.query(query, [id, name, salary], (err,rows,fields)=>{
            if(!err){
                res.json({message : 'Employee Updated'});
            } else {
                console.log(err);
            }
        });
    } catch(err) {
        console.log(err)
    };
});

router.delete('/:id', async(req,res)=>{
    const { id } = req.params;

    try{
        mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err,rows,fields)=>{
            if(!err){
                res.json({message : 'Employee Deleted'});
            } else {
                console.log(err);
            }
        })
    } catch(err){
        console.log(err)
    }

})



module.exports = router;