const express=require('express');
const addrouter=express.Router();
function router(nav){
    addrouter.route('/')
    .get((req,res)=>{
        res.render('addbook',{
            nav,
            title:"add new book"
            

        });
    

    });
return addrouter;
}
module.exports=router;