
const router=require('express').Router();

router.get('/', (req,res)=>{
 res.json([{id:1,name:'ABC Customer'}]);
});

module.exports=router;
