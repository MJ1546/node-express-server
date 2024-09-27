// import 'dotenv/config';
const cors  =  require('cors');
const express =  require('express');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var arr = [{name: "Manjunath", age: 25}, {name: "Naruto", age: 19}];

app.get('/', (req, res) => {
  res.status(200).send(arr);
});

app.post('/saveEmployee', (req, res) => {
  let emp = {
    name: req.body.name,
    age: req.body.age
  }
  arr.push(emp);
  res.status(200).send("Data Saved Successfully..!!");
});

app.listen(process.env.PORT || 8083, () =>
  console.log(`Example app listening on port 8083!`),
);
