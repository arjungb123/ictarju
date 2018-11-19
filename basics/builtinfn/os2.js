const ob=require("os");
var a=ob.totalmem();
var b=ob.freemem();
console.log(`total memory is  ${a}`);
console.log(`free memory is  ${b}`);