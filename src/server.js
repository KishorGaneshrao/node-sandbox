import express from 'express';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs';
import { people } from './people';

let app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("server is listening on port 3000");
})

app.get('/hello', (req, res) => {
  res.send("Hello World!");
})

app.get('/people', (req, res) => {
  res.json(people);
})

app.get('/people/:name', (req, res) => {
  let { name } = req.params;
  let person = people.find(it => it.name.toLowerCase === name.toLowerCase);
  res.json(person);
})

app.get('/file-data', async (req, res) => {
  let data = await fs.readFile(__dirname + '/people-data.json');
  let people = JSON.parse(data);
  res.json(people);
})

app.post('/people', (req, res) => {
  let newPerson = req.body;
  people.push(newPerson);
  res.json(people);
})