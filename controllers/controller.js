//mysql db baglantisi
const dbConn=require("../db/mysql_connect")
const login=async(req,res)=>{

}
const bcrypt=require("bcrypt")
// login icin kullanici_adi, sifreyi tanimlayarak db den kullanicilar - kullanici_adi ve sifre cekiliyor. eger sonuc harfleri 0 dan buyukse girisi dogrula degilse basarisiz olarak yazdir. 
  const kullanici_adi=req.body.kullanici_adi
  const sifre =req.body.sifre
dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=? AND sifre=?", [kullanici_adi,sifre], (error, results)=> {
  if (results.length>0){
    const comparePassowrd=bcrypt.compare(sifre,results[0].sifre)
    if(comparePassowrd){
      return res.status(200).json({
        succes:true,
        data:res.body,
        message:"Giris basarili"
      })
    }
    
  } else {
    return res.status(203).json({
      succes:false,
      message:"Kullanici girisi basarisiz"
    })
  }
})
  //postman'e cevap gonderebilmek icin return
  return res.json(req.body)

module.exports={login,register}
// degisken atayarak veritabanindaki degerleri esitliyoruz.
const register=async(req,res)=>{
  const kullanici_adi=req.body.kullanici_adi
  //sifreyi bcrypt ile sifreleme teknigiyle veritabanina yolluyor.
  const sifre=await bcrypt.hash(req.body.sifre,10)
  const eposta=req.body.eposta
  const adi=req.body.adi
  const soyadi=req.body.soyadi
  const tel_no=req.body.tel_no
  const cinsiyet=req.body.cinsiyet
  const dogum_tarihi=req.body.dogum_tarihi

  //kullanici adi veritabaninda kayitli mi diye bakilir, kayitliysa kayit mevcut ciktisi verir.
  //eger kullanici adi yoksa butun degerleri veritabanina insert ederiz.
  dbConn.query("select * from kullanicilar where kullanici_adi=?",kullanici_adi,(err,results)=>{
    if(results.length>0){
      return res.status(201).json({
        succes:false,
        message:"Kayit Mevcut"
      })
    }else{
      dbConn.query("INSERT INTO kullanicilar (kullanici_adi, sifre, eposta, adi, soyadi,tel_no, cinsiyet, dogum_tarihi) VALUES(?,?,?,?,?,?,?)", [kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi],(err,results)=>{
          if(!err) {
            return res.status(201).json({
              succes:true,
              message:"kayit basarili" 
          })
         
          }else {
            console.log(err)
          }

      })

    }
  })

}

console.log(kullanici_adi);