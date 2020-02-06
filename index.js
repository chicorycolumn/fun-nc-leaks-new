const https = require("https");
const fs = require("fs");

function getPeople() {
  const options = {
    hostname: "nc-leaks.herokuapp.com",
    path: "/api/people",
    method: "GET"
  };

  const request = https.request(options, response => {
    let body = "";
    response.on("data", packet => {
      // executes the callback you give it with the packets
      body += packet.toString();
    });
    response.on("end", () => {
      // when you pass response.on the arg 'end', it executes the callback you give it only when all data packets come in.
      const parsedBody = JSON.parse(body);
      fs.writeFile("./people.js", body, err => {
        console.log("finished writing to new file!");
      });
    });
  });
  request.end(); // executes the request ./newfile.txt
}

getPeople();
