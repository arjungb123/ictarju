const express=require('express');
const bookrouter=express.Router();
const bookdata=require('./model/bookdata')
function router(nav){

bookrouter.route('/')//routing books
.get((req,res)=>{
    bookdata.find()
    .then(function(books){
        res.render('book',{nav,title:"library",books});
    });
    
    

});
    

bookrouter.route('/:id')//routing boooks to id,by using : id become a variable
.get((req,res)=>{
    const id=req.params.id;
    bookdata.findOne({_id:id})
    .then(function(book){
        res.render('buk',
    {
        nav,
        title:'library',
        book
    });
    
    });
    
});
return bookrouter;
}
module.exports=router;
