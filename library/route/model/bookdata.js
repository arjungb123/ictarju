const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/librarydb');
const schema=mongoose.Schema;

var newsbookschema=new schema({
    title: String,
    author:String,
    catagory:String,
    prize:Number
});
var bookdata=mongoose.model('book-data',newsbookschema);
module.exports=bookdata;