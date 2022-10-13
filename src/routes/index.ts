import { Router, Request, Response } from "express";


const router = Router()

router.get('/',(req:Request, res:Response)=>
    res.render('pages/home')
)

router.get('/login',(req:Request, res:Response)=>
    res.render('pages/login')
)

router.get('/loja',(req:Request, res:Response)=>
    res.render('pages/loja')
)



export default router