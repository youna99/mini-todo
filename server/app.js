const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = require('./routes/todo');
app.use('/api', todoRouter); // 기본 주소 : localhost:PORT/api

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('*', (_, res) => {
  res.send('404 Error!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
