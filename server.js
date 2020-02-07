const http = require("http");
const fs = require("fs");

const newServer = http.createServer((request, response) => {
  const { url, method } = request;
  // response.write("I am testing this.");
  // response.end();


  if (url === "/api" && method === "GET") {
    const body = "hello";
    response.write(JSON.stringify(body));
    response.end();
  } 
  

  else if (url === "/api/northcoders" && method === "GET") {
    fs.readFile("./northcoders.json", "utf8", (err, data) => {
      const body = JSON.parse(data);
      const objCoders = { coders: body };
      response.write(JSON.stringify(objCoders));
      response.end();
    });
  }


  else if (/\/api\/northcoders\/[\w-]+/.test(url) && method === "GET") {
    const username = url.match(/\/[\w-]+$/)[0].slice(1)
        
    fs.readFile("./northcoders.json", "utf8", (err, data) => {
      const body = JSON.parse(data);
      const specificUser = { user: body.filter(worker => worker["username"] === username)[0] };
      response.write(JSON.stringify(specificUser));
      response.end();
    });

  }

  else if (/\/api\/pets\/[\w-]+/.test(url) && method === "GET") {
    const username = url.match(/\/[\w-]+$/)[0].slice(1)
        
    fs.readFile("./pets.json", "utf8", (err, data) => {
      const body = JSON.parse(data);
      const specificPets = {}
      specificPets[`Pets of ${username}`] = body.filter(worker => (worker) && worker["username"] === username)[0]["pets"];
      response.write(JSON.stringify(specificPets));
      response.end();
    });

  }

  else if (/\/api\/interests\/[\w-]+/.test(url) && method === "GET") {
    const username = url.match(/\/[\w-]+$/)[0].slice(1)
        
    fs.readFile("./interests.json", "utf8", (err, data) => {
      const body = JSON.parse(data);
      const specificInterests = {}
      specificInterests[`Interests of ${username}`] = body.filter(worker => (worker) && worker["username"] === username)[0]["interests"];
      response.write(JSON.stringify(specificInterests));
      response.end();
    });

  }

}
);

newServer.listen(8080, () => {
  console.log("listening!");
});
