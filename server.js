import app from './src/app.js'
// const http = require("http")

const port = process.env.PORT || 3000;

// const rotas = {
//   '/': 'Curso de NodeJs',
//   '/livros': 'Entrei na Página de Livros',
//   '/autores': 'Listagem de Autores',
//   '/produtores': 'Listagem de Produtores'
// }


// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end(rotas[req.url]);
// })

// Apontamento do Servidor com Log
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})