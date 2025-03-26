import express from 'express';
const app = express();
app.use(express.json());

//app.use('/api/rm_edf', rm_edfRouter);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});