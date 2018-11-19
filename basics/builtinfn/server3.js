const http=require('http');
const a=http.createServer(function(req,res){
    if(req.url=='/'){
    res.write('hello');
    res.end();
    }
    if(req.url=='/users'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
a.listen(3000);