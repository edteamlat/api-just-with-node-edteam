const hostname = "127.0.0.1";
const port = "3000";

// importar el archivo de rutas
const server = require("./route.js");

server.listen(port, hostname, () => {
    // esto se ejecuta cuando se hace un petición al servidor
    console.log(`Server running at http://${hostname}:${port}`)

});
