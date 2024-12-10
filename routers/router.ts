import {Router} from 'express';
import path from 'path';
import NoteModel from '../models/noteSchema'


const router = Router();

router.get('/' , (req,res,next)=>{
    res.status(200).sendFile(path.resolve('public', 'home.html'));
})

router.get('/notes' , (req,res,next)=>{
    
})

router.post('/',async(req,res,next)=>{
    try{
        const newNote = new NoteModel({
            content : req.body.note as string
        });
        await newNote.save();
        res.redirect('/');
    }catch(err){
        console.error("can't add new note because : " ,err);
        res.status(500).send("Internal Server Error");
    }
})

router.use((req,res,next)=>{
    res.status(404).send('Page Note Found')
})

export default router; 