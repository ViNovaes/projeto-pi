import { Router, Request, Response } from "express";
import homeController from '../controllers/HomeController';
import usuarios from '../controllers/userController';

const router = Router()

router.get('/',homeController.home)

router.get('/login',usuarios.login)

router.get('/loja',(req:Request, res:Response)=>
    res.render('pages/loja')
)



export default router