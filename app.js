const express = require("express")

const server = express()

const docs = express.static("docs")

const port = process.env.PORT || 2000

server.use( docs )


server.get("/index.html", function(request, response){
    response.end("Hola desde Node.js + Express")
})
server.get("/index.html", function(request, response){
    response.end("Aca debo ver el catalogo")
})


// server.post()

server.listen(port)