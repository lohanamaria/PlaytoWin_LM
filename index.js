require("dotenv").config();
const conn = require ("./db/conn");

const Usuario = require('./models/usuario');
const Jogo = require('./models/Jogo');
const Aquisicao = require('./models/Aquisicao');
const Conquista = require('./models/Conquista');

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

//app.use(express.unlercoad({unlercoad: true}));
//app.use(express.json());
//app.use("/")

app.use(bodyParser.urlencoded({ extended: true }));


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
}


const express = require("express");
app.use(

    express.unlercoad({
        extended:true,
    })
);
app.use(express.json());

const app = express();

app.get("/usuarios/novo", (req, res) => {
res.render(`${__dirname}´formUsuario`);
});

app.get("/", (req, res) => {
res.render(`formJogo`);
});

app.post("/usuarios", async (req, res) =>
  const usuarios  = await Usuario.findAll({raw:true})
  res.render(´usuarios´, {usuarios});
});


app.post("usuarios/novo", async (req, res) => { 
const nickname = req.body.nickname;
const nome = reg.body.nome;

const dadosUsuario = { 
nickname,
nome,

  };
const usuario = Usuario.create(dadosUsuario);

res.send("Usuário inserido sob o id + usuario" + usuario.id);
});

app.get("/usuarios/:id/atualizar", (req, res) =>
  { 
    const id = req.params.id;
    const usuario = Usuario.findByPk(id, {raw:true});
    res.render("formUsuario", { usuario });   
  } )

app.listen(8000, () => { 
console.log("Server rodando na porta 8000!");

});

conn.
sync()
then(() => {
    console.log("Conectado e sincronizado!");
})

.catch((err) => {
console.log("Erro!" + err) 

})
