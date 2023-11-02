const http = require('http')

const{createArr, readArr, updateArr, deleteArr}=require('./newModule.js')

const server = http.createServer(function (req, res) {
    console.log(req.method, req.url);
    if (req.url == '/') {
        res.write("request looks good ");
    }
    if (req.url=='/create'&& req.method=='POST'){
        res.write(JSON.stringify(createArr(10)))
    }
   else if(req.url=='/read'&& req.method=='GET'){
        res.write(JSON.stringify(readArr()))
    }
   else if(req.url=='/update'&& req.method=='PUT'){
        res.write(JSON.stringify(updateArr(0,10)))
   }
   else if(req.url=='/delete'&& req.method=='DELETE'){
    res.write(JSON.stringify(deleteArr(0)))
   }
    else if (req.url == '/pizza') {
        res.write("pizza is ready");
    }
    
    res.end();
})

server.listen(5000, function () {
     console.log("server running on 5000")
}
)//event listsner