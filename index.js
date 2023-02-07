const express = require('express');
const app = express();
app.use(express.json())


const categories = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'Java' },
]

app.get('/api/categories', (req, res) => {
  res.send(categories)
})

app.get('/api/categories/:id', (req, res) => {
  const category = categories.filter(lesson => lesson.id === +req.params.id)
  res.send(category)
})

app.post('/api/categories', (req, res) => {
  const category = {
    id: categories.length + 1,
    name: req.body.name
  }
  categories.push(category)
  res.status(201).send(category)
})

app.put('/api/categories/:id', (req, res) => {
  const category = categories.filter(lesson => lesson.id === +req.params.id)
  console.log(category.name);
  category[0].name = req.body.name
  res.send(category).status(201)
})

app.delete('/api/categories/:id', (req, res) => {
  const category = categories.filter(lesson => lesson.id === +req.params.id)

  const categoryIndex = categories.indexOf(category)
  categories.splice(categoryIndex, 1)
  res.send(category)
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})