const http = require("http");

let server = http.createServer((req, res) => {
  let url = req.url;
  if (url == "/node") {
    res.write("<html>");
    res.write("<header><title>Node</title></header>");
    res.write("<body><h2>Welcome to my Node Js project</h2></body>");
    res.write("</html>");
    return res.end();
  } else if (url == "/home") {
    res.write("<html>");
    res.write("<header><title>Home</title></header>");
    res.write("<body><h2>Welcome Home</h2></body>");
    res.write("</html>");
    return res.end();
  } else if (url == "/about"){
    res.write("<html>");
    res.write("<header><title>About</title></header>");
    res.write("<body><h2>Welcome to About Us page</h2></body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(3000);
