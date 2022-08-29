const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  const apiOptions = require("./controller.js");
  const urlParse = url.parse(req.url, true);

  console.log(`Request type: ${req.method} | Endpoint: ${urlParse.pathname}`);
  switch (req.method) {
    case "GET":
      if (urlParse.pathname === "/users") {
        apiOptions.getUsers(req, res);
      }
      break;
    case "POST":
      if (urlParse.pathname === "/users") {
        apiOptions.createUsers(req, res);
      }
      break;
    case "PUT":
      apiOptions.updateUsers(req, res);
      break;
    case "DELETE":
      apiOptions.deleteUsers(req, res);
    default:
      return;
  }
});
