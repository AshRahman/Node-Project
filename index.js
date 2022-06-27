/**?
 * 
 * Title:Uptime Monitor 
 * Description: Restful API
 */
const http = require('http');
const { listenerCount } = require('process');

/// app object

const app= {};

// configuration

app.config= {
    port:3000
};


//create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to  ${app.config.port} `);
    });
}

// handle req-res

app.handleReqRes = (req, res) =>{
    //response handle
    res.end('Hello World');
};

//start the server

app.createServer();