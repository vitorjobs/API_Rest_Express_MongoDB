import expres from "express"

const app = expres()

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

export default app