const express=require('express');
const chalk=require('chalk');
const path=require('path');
var app=new express();
const bookrouter=express.Router();
const authorrouter=express.Router();
app.use(express.static(path.join(__dirname,"/")));
app.use('/books',bookrouter);
app.use('/authors',authorrouter);
app.set('views','./src/views');
app.set('view engine','ejs');
bookrouter.route('/')//routing books
.get((req,res)=>{res.render('book',{
    nav:[
        {link:'/books',title:'Books'},
        {link:'/authors',title:'Authors'},
        {link:'/Aboutus',title:'About_us'},
        {link:'/contactus',title:'contact_us'}
    ],
    book:[
       {bname:'macbath',aname:'shakesper',cat:'horror'},
       {bname:'romeo and juliet',aname:'shakespere',cat:'romance'} 

    ],
    title:"library"

});
    
});
bookrouter.route('/single')//routing boooks to single
.get((req,res)=>{
    res.send("single book");
});
authorrouter.route('/')
.get((req,res)=>{
    res.send("helllo author");
});
authorrouter.route('/single')
.get((req,res)=>{
    res.send("hello single author");
});
app.get('/',function(req,res)
{
    res.render('index',{
        nav:[
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'},
            {link:'/Aboutus',title:'About_us'},
            {link:'/contactus',title:'contact_us'}
        ],
        title:"library"
    });
});

app.listen(3000,function()
{
    console.log("listening to server 3000"+chalk.green('3000'));
});
