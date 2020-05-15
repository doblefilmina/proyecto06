const express = require("express")

const server = express()

const docs = express.static("docs")

server.use( docs )


server.get("/index.html", function(request, response){
    response.end("Hola desde Node.js + Express")
})
server.get("/index.html", function(request, response){
    response.end("Aca debo ver el catalogo")
})


// server.post()

server.listen(2000)