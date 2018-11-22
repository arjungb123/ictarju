const express=require('express');
const bookrouter=express.Router();
function router(nav){
var books=[
    {bname:'macbath',aname:'shakesper',cat:'horror' },
    {bname:'romeo and juliet',aname:'shakespere',cat:'romance'} 

 ];
bookrouter.route('/')//routing books
.get((req,res)=>{res.render('book',{
    nav,
    books,
    
    title:"library"

});
    
});
bookrouter.route('/:id')//routing boooks to id,by using : id become a variable
.get((req,res)=>{
    const id=req.params.id;
    res.render(
        'buk',
        {nav,
            
            title:"library",
            buk: books[id]
        }
    );
    
});
return bookrouter;
}
module.exports=router;
