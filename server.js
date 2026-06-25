
const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/employees', require('./routes/employees'));
app.use('/api/customers', require('./routes/customers'));

app.get('/',(req,res)=>res.json({message:'API Running'}));

app.listen(process.env.PORT || 5000, ()=>{
 console.log('Server started');
});
