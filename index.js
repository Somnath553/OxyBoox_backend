const connectToMongoose =require('./db');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const port =process.env.PORT||8000;
connectToMongoose();
app.use(express.json());
app.use('/api/user',require('./routes/user'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/books',require('./routes/book'));
app.get('/', function (req, res) {
  res.write(`<h1>coonected</h1>`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port} and http://localhost:${port}`)
})