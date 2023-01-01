const http = require('http')

// Create a server
const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to Home Page')
    }
    if(req.url === '/about'){
        res.end('This is our About Page')
    }
    if(req.url === '/contact'){
        res.end('Contact : 987456321')
    }


})

// Server listens to the arbitary port number 1234
server.listen(1234)
console.log("Server listening to the http://localhost:1234/")
// The server will continue to listen the requests until it is terminated
