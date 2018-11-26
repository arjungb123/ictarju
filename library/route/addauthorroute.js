const express=require('express');
const authordata=require('./model/authordata');
const addauthorouter=express.Router();
function router(nav){
    addauthorouter.route('/')
    .get((req,res)=>{
        res.render('addauthor',{
            nav,
            title:"add new author"
            

        });
    

    });
    addauthorouter.route('/add')
    .get((req,res)=>{
    
        var item={
        title:req.param('title'),
        author:req.param('author'),
        catagory:req.param('catagory'),
        prize:req.param('prize')
        
    }
    var author= new authordata(item);
    author.save();
    res.redirect('/authors');

    });
return addauthorouter;
}
module.exports=router;