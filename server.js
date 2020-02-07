const http = require("http");
const fs = require("fs");

const newServer = http.createServer((request, response) => {
  const { url, method } = request;

  if (url === "/api" && method === "GET") {
    const body = "hello";
    response.write(JSON.stringify(body));
    response.end();
  } else if (url === "/api/northcoders" && method === "GET") {
    fs.readFile("./northcoders.json", "utf8", (err, data) => {
      const body = JSON.parse(data);
      const objCoders = { coders: body };
      response.write(JSON.stringify(objCoders));
      response.end();
    });
  }
});

newServer.listen(8080, () => {
  console.log("listening!");
});
