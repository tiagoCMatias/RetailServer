const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server started on port 3000');
});
  
server.close = function (callback) {
    this.server.close(callback);
};

module.exports = server;
