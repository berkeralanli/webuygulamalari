const express = require('express')
//databesi app.js e bagladik
const db_connect=require('./db/mysql_connect')
require('dotenv/config')

//routerlari import ediyoruz
const router=require('./routers')
const app = express()

//app.get kısmı kök dizindir /dan sonra herhangi bir klasör açmadan yeni bir sayfa oluşturulabilir//
app.get('/', function(req, res){
    res.send('Hello World')

})
//MiddleWares
//json veriyi dondurebilmek icin
// app.use(express.json())
// app.use(express.json({limit:'50mb'}))
app.use(express.json({limit:'50mb',extended:true, parameterLimit:50000}))

//api koyarak bir end point olusturuyoruz. 
app.use('/api',router)
// http://localhost:3000/api/login
app.listen(process.env.PORT)