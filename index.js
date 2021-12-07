const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) =>{
    res.end('hi everyone!')
})
server.listen(6000, '127.0.0.1', () =>{
    console.log("listing to request on port 6000")
})