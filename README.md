# Formação NodeJs Com Express - `ALURA`

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

- JavaScript
- NodeJS
- Express
- Nodemon (em tempo de desenvolvimento)
<!-- --MongoDB -->





## Diferença entra ``Required`` e ``Import``

* Tem uma forma de fazer isso que o require para importar um modo, uma funcionalidade que está de acordo com o CommonJS e tem o import que é mais atual que está de acordo com o ECMAScript 6. Nesse primeiro momento vou usar o require, mas a partir do momento que começarmos a usar o Express todo o nosso projeto já vai ser utilizado com o import e vou voltar a falar sobre isso


## Significado das Coisas: 
* `WriteHeade()` Retorna o cabeçalho da resposta com o status e tipo de conteúdo (json, text, html, xml)
  ```bash
    res.writeHead(200, {'Content-Type': 'text/plain'});
  ```
  
* `req.ulr` retornar o npme do recurso passando após a URL:
  ```bash 
    res.end(rotas[req.url]);
  ```

* ```bash  
  const rotas = {
  '/': 'Curso de NodeJs',
  '/livros': 'Entrei na Página de Livros',
  '/autores': 'Listagem de Autores'
  }

* ```bash 
  server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })