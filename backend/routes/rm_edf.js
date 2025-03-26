import express from 'express';

const router = express.Router();

router.get('/', async(req,res)=>{
    try {
        const data = req.body;
    } catch (error) {
        console.log(error);
    }
});