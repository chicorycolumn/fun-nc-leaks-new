const http = require("http");
const fs = require("fs");

const newServer = http.createServer((request, response) => {
  const { url, method, query } = request;

  urlSplit = url.split(/\/|\?/) // YOU LEFT OFF HERE

  if (url === "/api" && method === "GET") {
    response.statusCode = 200
    response.write(JSON.stringify("hello"));
    response.end();
  } 

  else if (url === "/api/northcoders" && method === "GET") {
    fs.readFile("./northcoders.json", "utf8", (err, data) => {
      
      if (err){
        response.write(err)
        response.end()
      } else {
      response.statusCode = 200
      const objCoders = { coders: JSON.parse(data) };
      response.write(JSON.stringify(objCoders));
      response.end();
      }
    });
  }

  else if (/\/api\/northcoders\/[\w-]+/.test(url) && method === "GET") {
    const username = url.match(/\/[\w-]+$/)[0].slice(1)
        
    fs.readFile("./northcoders.json", "utf8", (err, data) => {
      
      if (err){
        response.write(err)
        response.end()
      } else {      
      const body = JSON.parse(data);
      if (!body.some(worker => (worker) && worker["username"] === username)){
        response.statusCode = 404
        response.write(JSON.stringify("I can find no such user!"))
        response.end()
      } else {
      response.statusCode = 200
      const specificUser = { user: body.filter(worker => (worker) && worker["username"] === username)[0] };
      response.write(JSON.stringify(specificUser));
      response.end();
      }
      }
    });

  }

  else if (/\/api\/pets\/[\w-]+/.test(url) && method === "GET") {
    const username = url.match(/\/[\w-]+$/)[0].slice(1)
        
    fs.readFile("./pets.json", "utf8", (err, data) => {
      if (err){
        response.write(err)
        response.end()
      } else {
      const body = JSON.parse(data);
      if (!body.some(worker => (worker) && worker["username"] === username)){
        response.statusCode = 404
        response.write(JSON.stringify("I can find no such user!"))
        response.end()
      } else {
      response.statusCode = 200
      const specificPets = {}
      specificPets[`Pets of user ${username}`] = body.filter(worker => (worker) && worker["username"] === username)[0]["pets"];
      response.write(JSON.stringify(specificPets));
      response.end();
      }
      }
    });

  }

  else if (/\/api\/interests\/[\w-]+/.test(url) && method === "GET") {
    const username = url.match(/\/[\w-]+$/)[0].slice(1)
        
    fs.readFile("./interests.json", "utf8", (err, data) => {
      
      if (err){
        response.write(err)
        response.end()
      } else {
      const body = JSON.parse(data);
      if (!body.some(worker => (worker) && worker["username"] === username)){
        response.statusCode = 404
        response.write(JSON.stringify("I can find no such user!"))
        response.end()
      } else {
      response.statusCode = 200
      const specificInterests = {}
      specificInterests[`Interests of user ${username}`] = body.filter(worker => (worker) && worker["username"] === username)[0]["interests"];
      response.write(JSON.stringify(specificInterests));
      response.end();
      }
      }
    });

  }

}
);

newServer.listen(8080, () => {
  console.log("listening!");
});
