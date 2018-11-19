const http=require('http');
const a=http.createServer(function(req,res){
    res.write('hello');
    res.end();
});
a.listen(3000);