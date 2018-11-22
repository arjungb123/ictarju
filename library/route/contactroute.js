const express=require('express');
const contactrouter=express.Router();
function router(nav){
    contactrouter.route('/')
    .get((req,res)=>{
        res.render('contact',{
            nav,
            title:"contactus",
            contact:"arjunmv565gmail.com"

        });
    

    });
return contactrouter;
}
module.exports=router;