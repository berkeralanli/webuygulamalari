// npm mysql de kodlarin aynisi var
//dotenv yukleyip require yapiyoruz password gizliligi icin 
//.env dosyasi acip 'process.env.' ile o dosyadan bilgileri buraya cekiyoruz
const mysql = require('mysql')
require('dotenv/config')
var dbConn =mysql.createConnection({
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DB_NAME,
  host:process.env.MYSQL_INSTANCE_NAME

})

dbConn.connect((err)=>{
  if(!err){
    console.log('veritabanina baglandi')
  }else {
    console.log('Baglanti hatasi')
  }
})
module.export=dbConn;
