const http = require("http");

const newServer = http.createServer((request, response) => {
  const { url, method } = request;

  if (url === "/api" && method === "GET") {
    const body = "hello";
    response.write(JSON.stringify(body));
    response.end();
  }
});

newServer.listen(8080, () => {
  console.log("listening!");
});
