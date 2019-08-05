const express = require('express')
const router = express.Router()
const path = require('path')
const dbConn = require('./dbconn.js')
const db = dbConn.connection

router.get('/allThreads', getAllThreads)
router.get('/read/:seq', readThread)
router.post('/writeNew', writeNewThread)
router.patch('/edit/:seq', editThread)
router.delete('/del/:seq', delThread)

router.get('/user/:id', getUser)



function getUser(req,res){
    // console.log(req.params)
    const {id} = req.params

    const query = `SELECT id from user WHERE id = ?`
    const param = id
    db.query(query, param, (err, result) => {
        if(err) console.log(err)
        res.json(result)
    })
}


function getAllThreads(req,res){
    const query = `SELECT * FROM thread order by regdate desc`
    db.query(query, (err,result)=> {
        if(err) console.log(err)
        res.json(result)
    })
}


function readThread(req,res){
    const {seq} = req.body
    const query = `SELECT * FROM thread where seq = ?`
    const param = seq
    db.query(query, param, (err, result) => {
        if(err) console.log(err)
        res.json(result)
    })
}


function writeNewThread(req,res){
    let {title, writer, content, file} = req.body;
    title ="noTitleYet"
    writer = "dev"
    file = "noFileYet"
    const query = `INSERT into thread SET title=?, writer=?, content=?, file=?`
    const params = [title, writer, content, file]
    db.query(query, params, (err, result)=>{
        if(err) console.log(err)
        res.json(result)
    })
}


function editThread(req,res){

}


function delThread(req,res){
    const {seq} = req.params;
    const query = `DELETE from thread where seq=?`
    const params = seq
    db.query(query, params, (err, result)=> {
        if(err) console.log(err)
        res.json(result)
    })
}


module.exports = router;