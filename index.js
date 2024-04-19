require("dotenv").config();
const conn = require ("./db/conn");

const Usuario = require("./models/Usuario");

const express = require("express");
app.use(

    express.unlercoad({
        extended:true,
    })
);
app.use(express.json());

const app = express();

app.get("/usuarios/novo", (req, res) => {
res.sendFile(`${__dirname}/views/formUsuario.html`);
});

conn.
sync()
then(() => {
    console.log("Conectado e sincronizado!");
})

.catch((err) => {
console.log("Erro!" + err) 

})