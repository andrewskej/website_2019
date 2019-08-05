const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
// app.use(favicon(path.join(__dirname, '/build', 'favicon.ico')))

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-with, Content-Type, Accept");
    next();
})

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const mailRouter = require('./routes/mail')


app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/mail', mailRouter)
app.use('/build', express.static('build'))
app.use('/images', express.static('images'))   //I always forget this... c'mon man
app.use('/uploads', express.static('uploads'))

http.Server(app).listen(port=3000, ()=>{
    console.log(`Server on ${port}`)
})