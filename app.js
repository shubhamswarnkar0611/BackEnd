const http = require("http");
const route= require("./routes");

console.log(route.someText);

const server = http.createServer(route.setRoute);

server.listen(3000);
