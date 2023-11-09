const router=require('express').Router()
const {login,register}=require('../controllers/controller')
router.post("login",login)
router.post("/login")
router.post("/register")

//post: veri gonderme get:veri alma put: veri guncelleme patch: veri guncelleme
//delete: veri silme 

module.exports=router