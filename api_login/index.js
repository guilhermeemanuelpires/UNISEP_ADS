import express from "express";

const app = express();

app.use(express.json());

const usuarios = [];

app.post("/cadastro", (request, response) => {
    const { nome, usuario, senha } = request.body;

    usuarios.push({ nome, usuario, senha });

    return response.send({ msg: "Usuário cadastrado com sucesso!" });
});

app.post("/login", (request, response) => {
    const { usuario, senha } = request.body;

    const data = usuarios.find(i => i.usuario == usuario);

    if (data) {
        if (data.senha == senha) {
            return response.send({ msg: "Login realizado com sucesso!" })
        } else {
            return response.send({ msg: "Usuário ou senha inválidos!" })
        }
    } else {
        return response.send({ msg: "Usuário ou senha inválidos!" })
    }

});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080!");
});