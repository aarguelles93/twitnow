const config = require("./config");

const app =  require("./server");

/*app.get('/', function (req, res) {
  res.send('Hello World!');
});*/

/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
});*/

app.listen(config.port,config.hostname,() =>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});