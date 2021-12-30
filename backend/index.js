const express = require('express')
const connectToDatabase = require('./db');
const app = express()
const port = 3000

connectToDatabase();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/u/login', (req, res) => {
//     res.send('Hello login!')
// })

app.use('/u/auth',require('./Router/Auth'));
app.use('/u/notes',require('./Router/Notes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})