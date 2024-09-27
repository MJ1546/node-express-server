
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());


 const arr = [{name: "Manjunath", age: 25}, {name: "Naruto", age: 19}];

app.get('/', (req, res) => {
  res.status(200).send(arr);
});

app.get('/saveEmployee', (req, res) => {
  let emp = {
    name: res.body.name,
    age: res.body.age
  }
  arr.push(emp);
  res.status(200).send("Data Saved Successfully..!!");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
