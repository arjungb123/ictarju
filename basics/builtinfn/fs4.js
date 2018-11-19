const c=require('fs');
var data=c.readFileSync('home.txt','utf8');
console.log(data);