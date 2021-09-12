const express = require("express");
const app = express();
const main = require("./routers/main");

const port = 3000;

app.use("/", main);

app.listen( port, () => console.log("Servidor funcionando en el puerto " + port));