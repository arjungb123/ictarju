const express=require('express');
const authorrouter=express.Router();
function router(nav){
var authors=[
    {aname:'shakespiere',alang:'english',acat:'drama',url:'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg'},
    {aname:'vayalar',alang:'malayalam',acat:'poem',url:''},
    {aname:'thakazhi',alang:'malayalam',acat:'novel',url:''}
]
authorrouter.route('/')
.get((req,res)=>{res.render('authors',{
     nav,
authors,
title:"libarary"

});


});
authorrouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;
    res.render('author',
    {
    nav,
    title:"author",
    author:authors[id]

    }
    );
});
return authorrouter;
}
module.exports=router;
