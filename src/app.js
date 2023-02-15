import express, { json } from "express"

const app = express()
app.use(express.json())

const livros = [
  {id: 1, "Titulo": "Senhor dos aneis"},
  {id: 2, "Titulo": "Senhor"},
]

app.get('/', (req, res) =>{
  res.status(200).send("Curos de Node.JS")
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  // Enviar para o Array o conteúdo que vier no body
  livros.push(req.body)
  res.status(201).send("Livro Cadastrado com Sucesso")
})

export default app