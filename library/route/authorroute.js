const express=require('express');
const authorrouter=express.Router();
const authordata=require('./model/authordata')
function router(nav){

authorrouter.route('/')//routing books
.get((req,res)=>{
    authordata.find()
    .then(function(authors){
        res.render('author',{nav,title:"library",authors});
    });
    
    

});
    

authorrouter.route('/:id')//routing boooks to id,by using : id become a variable
.get((req,res)=>{
    const id=req.params.id;
    bookdata.findOne({_id:id})
    .then(function(authors){
        res.render('author',
    {
        nav,
        title:'library',
        authors
    });
    
    });
    
});
return authorrouter;
}
module.exports=router;
