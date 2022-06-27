//dependency
const http = require('http');
const { parse } = require('path');
const url = require('url');

//app-object

const  app= {};

//configuration
app.config ={
    port: 3000
};

//create server
app.createServer = () =>{
    const server =http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to ${app.config.port}`);
    });
}

//handle request response

app.handleReqRes=(req,res) =>{
    // req handling
    //get the url and parse
    const parsedUrl = url.parse(req.url, true);
    const path =parsedUrl.pathname;
    const trimmedPath =path.replace(/^\/+|\/+$/g, '');
    console.log(trimmedPath);
    res.end('Hello Pog');
};

app.createServer();