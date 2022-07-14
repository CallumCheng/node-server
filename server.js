const http = require("http");


const server = http.createServer((req,res)=> {
    // server logic 
});

server.listen(80, ()=> {            //callback function
    console.log('Server running on port 80')
});

console.log('hello there')
