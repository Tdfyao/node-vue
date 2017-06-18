const app = require('./init');
const port = 5000;
const hostname = '127.0.0.1';
const server = app.listen(port, hostname, 1024, () =>{
    console.debug(`${server.address().address}:${server.address().port}`);
});