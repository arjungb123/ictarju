const express=require('express');
const aboutrouter=express.Router();
function router(nav){
    aboutrouter.route('/')
    .get((req,res)=>{
        res.render('about',{
            nav,
            title:"About",
            about:"  This project of “ LIBRARY ” of gives us the complete information about the library. We can enter the record of new books and retrieve the details of books available in the library. We can issue the books to the students and maintain their records and can also check how many books are issued and stock available in the library"

        });
    

    });
return aboutrouter;
}
module.exports=router;