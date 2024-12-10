import {Router} from 'express';
import path from 'path'
const router = Router();

router.get('/' , (req,res,next)=>{
    res.status(200).sendFile(path.resolve('public', 'home.html'));
})

router.get('/notes' , (req,res,next)=>{

})

router.post('/',(req,res,next)=>{
    res.send("post request was sended")
})

export default router; 