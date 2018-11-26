const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/librarydb');
const schema=mongoose.Schema;

var authschema=new schema({
    title: String,
    author:String,
    catagory:String,
    prize:Number
});
var authordata=mongoose.model('author-data',authschema);
module.exports=authordata;