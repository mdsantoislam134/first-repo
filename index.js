const http = require("http");
const fs = require("fs");
const PORT = 3020;




const server = http.createServer((req,res) => {
   
    if(req.url==="/"){
        fs.readFile("main.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    
    }else if(req.url==="/login"){
        fs.readFile("login.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    }else if(req.url==="/cart"){
        fs.readFile("cart.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    }else if(req.url==="/contrac"){
        fs.readFile("contrac.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    }else if(req.url==="/register"){
        fs.readFile("register.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    }else if(req.url==="/profile"){
        fs.readFile("profile.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    }else if(req.url==="/product"){
        fs.readFile("product.html", "utf-8", (err,data) => {
             if(err){
                console.log(err);
             }else{
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data);
                res.end();
             }
        })
    }else{
        fs.readFile("error.html", "utf-8", (err,data) => {
            if(err){
               console.log(err);
            }else{
               res.writeHead(404,{"Content-Type": "text/html"});
               res.write(data);
               res.end();
            }
        })
    }
})

server.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})