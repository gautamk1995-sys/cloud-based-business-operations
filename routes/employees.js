
const router=require('express').Router();

router.get('/', (req,res)=>{
 res.json([{id:1,name:'John Employee'}]);
});

module.exports=router;
