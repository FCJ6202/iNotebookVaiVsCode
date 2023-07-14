const express = require('express')
var cors = require('cors')
const connectToDatabase = require('./db');
const app = express()
const port = process.env.PORT || 4000;
 
app.use(cors());

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
app.use('/uploads',express.static('uploads'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})