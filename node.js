
const http = require("http");

const url= require("url");
const port= 3000;
 
const server= http.createServer((req,res) => {
    let path=url.parse(req.url).pathname;
    if(path === "/") {
    
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write (` <form action="/api" method= "get">
    <label for="fname">Username:</label><br>
    <input type="text" name="username" placeholder="username">
    <input type="email" name="email" placeholder="email">

    <input type="submit">
</form> `);
    res.end();}

    if(path==="/api"){
     let query= url.parse(req.url,true).query;   
     res.write(`username is ${ /^[a-z0-9]{4,}$/.test(query.username) ? "valid" : "Invalid"}
     Email ID is ${ /^[a-z0-9]+\.[a-z]{2,6}$/.test(query.email)? "valid" : "Invalid"}
     `)
    
    res.end();

    }

})
server.listen(port,(error) => {

if(error) {
console.log(error);

}else{
    console.log("server started on port"+ port);
}

}
)
