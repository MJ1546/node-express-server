
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({"name": "Manjunath", "age": 25});
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
