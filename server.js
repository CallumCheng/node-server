const http = require("http");


const server = http.createServer((req,res)=> {
    // server logic 
    console.log(req.url)

    let body, code;
    switch (req.url){
        case "/":
            body = "Welcome to the crazy cat corner";
            code = 200;
            break;
        case "/cats":
            body = "My cat's name is cleo"
            code = 200
            break;
        default:
            body = `${req.url} does not exist`
            code = 404
    }

    res.statusCode = 200
    res.end(body)

    
});

server.listen(80, ()=> {            //running the server on localhost 80
    console.log('Server running on port 80')
});

