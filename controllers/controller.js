const login=async(req,res)=>{
  console.log(req.body)
  //postman'e cevap gonderebilmek icin return
  return res.json(req.body)
}
//async bu is sonlanmadan bir sonraki isleme gecme demek
const register=async(req,res)=>{
  console.log(req.body)
}
module.exports={login,register}