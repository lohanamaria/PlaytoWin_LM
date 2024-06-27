require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
// const bodyParser = require("body-parser");
const conn = require("./db/conn");
const Usuario = require("./models/Usuario");
// const Jogo = require("./models/Jogo"); // Se necessário, descomente e defina o modelo
// const Aquisicao = require("./models/Aquisicao"); // Se necessário, descomente e defina o modelo
// const Conquista = require("./models/Conquista"); // Se necessário, descomente e defina o modelo

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/usuarios/novo", (req, res) => {
    res.render("formUsuario");
});

app.post("/usuarios/novo", async (req, res) => {
    try {
        const { nickname, nome } = req.body;
        const usuario = await Usuario.create({ nickname, nome });
        res.send("Usuário inserido sob o id " + usuario.id);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao inserir usuário.");
    }
});


app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ raw: true });
        res.render("usuarios", { usuarios });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar usuários.");
    }
});

app.get("/usuarios/:id/atualizar", async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findByPk(id, { raw: true });
        res.render("formUsuario", { usuario });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar usuário.");
    }
});

app.post("/usuarios/:id/atualizar", async (req, res) => {
    try {
        const id = req.params.id;
        const { nickname, nome } = req.body;
        const registrosAfetados = await Usuario.update({ nickname, nome }, { where: { id } });
        if (registrosAfetados > 0) {
            res.redirect("/usuarios");
        } else {
            res.send("Erro ao atualizar usuário.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao atualizar usuário.");
    }
});

app.post("/usuarios/excluir", async (req, res) => {
    try {
        const id = req.body.id;
        const registrosAfetados = await Usuario.destroy({ where: { id } });
        if (registrosAfetados > 0) {
            res.redirect("/usuarios");
        } else {
            res.send("Erro ao excluir usuário.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao excluir usuário.");
    }
});


app.get('/formJogo', (req, res) => {
    res.sendFile(__dirname + '/views/formJogo.html');
});


app.post('/cadastrarJogo', async (req, res) => {
    try {
        const { titulo, descricao, precoBase } = req.body;
        const jogo = await Jogo.create({
            titulo,
            descricao,
            precoBase
        });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar o jogo.');
    }
});

app.listen(8000, () => {
    console.log("Server rodando na porta 8000!");
});

conn.sync()
    .then(() => {
        console.log("Conectado e sincronizado!");
    })
    .catch((err) => {
        console.log("Erro!" + err);
    });
