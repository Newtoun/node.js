import fs from "fs";
export default function rotas(req, res, dado) {
  res.setHeader("Content-Type", "ap´lication/json", "utf-8");

  if (req.method === "GET" && req.url === "/") {
    const { mensagem } = dado;
    res.statusCode = 200;
    const resposta = {
      mensagem: conteudo,
    };
    res.end(JSON.stringify(resposta));
    return;
  }

  if (req.method === "PUT" && req.url === "/arquivos") {
    const corpo = [];

    req.on("data", (parte) => {
      corpo.push(parte);
    });
    req.on("end", () => {
      const arquivo = JSON.parse(corpo);
      res.statusCode = 400;

      if (!arquivo?.nome) {
        const resposta = {
          erro: {
            mensagem: `o atributo nome nao foi encontrado para resolver o arquivo`,
          },
        };
        res.end(JSON.stringify(resposta));
        return;
      }

      fs.writeFileSync(
        `${arquivo.nome}.txt`,
        arquivo?.conteudo ?? "",
        "utf8",
        (erro) => {
          if (erro) {
            console.log("falha ao criar o arquivo", erro);
            res.statusCode = 500;
            const resposta = {
              erro: {
                mensagem: `Falha ao criar o arquivo ${arquivo.nome}`,
              },
            };

            res.end(JSON.stringify(resposta));

            return;
          }
          res.statusCode = 201;
          const resposta = {
            mensagem: `arquivo ${arquivo.nome} criado com sucesso`,
          };

          res.end(JSON.stringify(resposta));
          return;
        }
      );
    });
    req.on("error", (erro) => {
      console.log("falha ao processar requisição", erro);
      res.statusCode = 400;
      const resposta = {
        erro: {
          mensagem: "falha ao processar a requisição",
        },
      };
      res.end(JSOM.stringify(resposta));
      return;
    });
    return;
  }

  res.statusCode = 404;
  const resposta = {
    erro: {
      mensagem: "Rota nao encontrada",
      url: req.url,
    },
  };

  res.end(JSON.stringify(resposta));
}
