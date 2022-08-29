const url = require("url");
const { bodyParser } = require("./libs/bodyParser.js");
const database = [];

//  Get all users
exports.getUsers = function(req, res) {
    let response = [
        {
            "message": "All users"
        },
        database
    ]
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
}

// Crear usuarios
exports.createUsers = async function(req, res) {
    await bodyParser(req);
    database.push(req.body);
    let response = [
        {
            "message": "Created a users"
        },
        database,
    ];
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

// Update one users
exports.updateUsers = async function(req, res) {
    const urlParse = url.parse(req.url, true);

    const idQuery = urlParse.path.split("?")[1];
    const key = idQuery.split("=")[0];
    const value = idQuery.split("=")[1];

    if (key === "id") {
        await bodyParser(req);
        database[value - 1] = req.body;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({"message": "An user has been updated"}));
    } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({"message": "Wrong request query"}));
    }

}

// Delete one user
exports.deleteUsers = async function(req, res) {
    const urlParse = url.parse(req.url, true);

    const idQuery = urlParse.path.split("?")[1];
    const key = idQuery.split("=")[0];
    const value = idQuery.split("=")[1];

    if (key === "id") {
        database.splice(value - 1, 1);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({"message": "An user has been deleted"}));
    } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({"message": "Wrong request query"}));
    }

}
