const express=require('express');
const chalk=require('chalk');
const path=require('path');
const nav=[
    {link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'},
    {link:'/Aboutus',title:'About_us'},
    {link:'/contactus',title:'contact_us'},
    {link:'/addbook',title:'Add new book'}
]
var app=new express();


app.use(express.static(path.join(__dirname,"/")));
const bookrouter=require('./route/bookroute')(nav)
const authorrouter=require('./route/authorroute')(nav)
const aboutrouter=require('./route/aboutroute')(nav)
const contactrouter=require('./route/contactroute')(nav)
const addrouter=require('./route/addroute')(nav)

app.use('/books',bookrouter);
app.use('/authors',authorrouter);
app.use('/Aboutus',aboutrouter);
app.use('/contactus',contactrouter);
app.use('/addbook',addrouter);
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',function(req,res)
{
    res.render('index',{
              title:"library",
              nav

    });
});

app.listen(3000,function()
{
    console.log("listening to server 3000"+chalk.green('3000'));
});
