import express from 'express';
import path from 'path';
import dotenv from 'dotenv'
import logger from 'morgan' 
import router from './routers/router';
import connectDB from './config/connectDB';

dotenv.config();
const app= express();
app.use(logger('dev'))
app.use(express.urlencoded({extended: true} ));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname , 'public')))

app.use(async(req,res,next)=>{
    if(await connectDB()) next();
    else res.status(500).send("Internal Server Error");
})
app.use(router);

app.listen(process.env.PORT , ()=>{
    console.log("server running on port ",process.env.PORT)
})


