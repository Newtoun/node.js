import http from "http";
import fs from "fs";
import rotas from "./routes.js";

fs.writeFile("./mensagem.txt", "testando essa modo", "utf-8", (erro) => {
  if (erro) {
    console.log("falha na escrita", erro);
    return;
  }
  console.log("arquivo criado com sucesso");
});

const mensagem = fs.readFile("./mensagem.txt", "utf-8", (erro, conteudo) => {
  if (erro) {
    console.log("teve erro na escrita", erro);
    return;
  }
  console.log("sem erro na leitura");
  initServer(conteudo);
});

function initServer(mensagem) {
  const servidor = http.createServer((req, res) => {
    rotas(req, res, { mensagem });
  });

  const door = 3000;
  const host = "localhost";

  servidor.listen(door, host, () => {
    console.log(`servidor executando em http://${host}:${door}/`);
  });
}
