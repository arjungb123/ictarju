const a=require('fs');
a.readFile('home.txt','utf8',function (err,data){
    if(err) console.log("error",err);
    else console.log("data",data);
});