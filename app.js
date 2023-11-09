const express = require('express')
//databesi app.js e bagladik
const db_connect=require('./db/mysql_connect')
const app = express()

//app.get kısmı kök dizindir /dan sonra herhangi bir klasör açmadan yeni bir sayfa oluşturulabilir//
app.get('/', function(req, res){
    res.send('Hello World')

})

app.listen(3000)