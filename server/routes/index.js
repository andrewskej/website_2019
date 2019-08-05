const express = require('express')
const router = express.Router()

router.get('/', mainPage)

function mainPage(req,res){
    res.render('index.html')
}

module.exports = router;