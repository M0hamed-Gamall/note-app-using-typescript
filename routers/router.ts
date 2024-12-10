import {Router} from 'express';
import path from 'path';


const router = Router();

router.get('/' , (req,res,next)=>{
    res.status(200).sendFile(path.resolve('public', 'home.html'));
})

router.get('/notes' , (req,res,next)=>{

})

router.post('/',async(req,res,next)=>{

})

router.use((req,res,next)=>{
    res.status(404).send('Page Note Found')
})

export default router; 