const express=require('express');
const bookdata=require('./model/bookdata');
const adminrouter=express.Router();
function router(nav){
    adminrouter.route('/')
    .get((req,res)=>{
        res.render('addbook',{
            nav,
            title:"add new book"
            

        });
    

    });
    adminrouter.route('/add')
    .get((req,res)=>{
    
        var item={
        title:req.param('title'),
        author:req.param('author'),
        catagory:req.param('catagory'),
        prize:req.param('prize')
        
    }
    var book= new bookdata(item);
    book.save();
    res.redirect('/books');

    });
return adminrouter;
}
module.exports=router;