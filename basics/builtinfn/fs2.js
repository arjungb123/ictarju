const f=require("fs");
f.readdir('./',function(err,files){
    if(err) console.log("error",err);
    else console.log("files",files);
});
