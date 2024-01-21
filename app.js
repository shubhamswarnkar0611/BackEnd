const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;

  if (url === "/") {
    fs.readFile("message.txt", (err, data) => {
      res.write("<html>");
      res.write("<header><title>Node</title></header>");
      res.write(
        `<body><p>${data}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
 
});

server.listen(3000);
