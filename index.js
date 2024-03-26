require("dotenv").config();
const conn = require ("./db/conn");

const Usuario = require("./models/Usuario");

conn.
sync()
then(() => {
    console.log("Conectado e sincronizado!");
})

.catch((err) => {
console.log("Erro!" + err) 

})