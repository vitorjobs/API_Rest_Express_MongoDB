import express, { json } from "express"

const app = express()
app.use(express.json())

const livros = [
  {id: 1, "titulo": "Senhor dos aneis"},
  {id: 2, "titulo": "Senhor"},
]

app.get('/', (req, res) =>{
  res.status(200).send("Curos de Node.JS")
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  // buscar conteúdo do ARRAY
  let index = buscaLivro(req.params.id)
  res.status(200).json(livros[index])
})

app.post('/livros', (req, res) => {
  // Enviar para o Array o conteúdo que vier no body
  livros.push(req.body)
  res.status(201).send("Livro Cadastrado com Sucesso")
})

app.put('/livros/:id', (req, res) => {
  // Atualizar conteúdo do ARRAY
  let index = buscaLivro(req.params.id)
  livros[index].titulo = req.body.titulo
  res.status(201).json(livros)
})

// Buscar elementos no array

function buscaLivro(id){
  // findeIndex para buscar dentro do array
  // Verifica se o ID encontrado no array livros é o mesmo ID que foi passado no parâmetro.
  return livros.findIndex(livro=> livro.id == id)
}

export default app