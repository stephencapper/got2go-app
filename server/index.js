import 'dotenv/config'
import express from "express";
import Restroom from '../database/index.js';

const app = express();

app.use(express.json());

app.post('/restrooms', (req, res) => {
  console.log(req.body)
  const restroom = new Restroom(req.body)
  restroom.save()
    .then(()=>(res.status(201).send()))
    .catch((err)=>{
      res.status(500).send(err)
    })
});

app.get('/restrooms', (_req, res) => {
  Restroom.find()
    .then((results)=>(res.status(200).json(results)))
    .catch(()=>(res.status(500).send()))
});

app.put('/restrooms', (req, res) => {
  Restroom.findOneAndUpdate({_id: req.body._id}, req.body)
    .then(()=>(res.status(201).send()))
    .catch(()=>(res.status(500).send()))
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening on port:", port);
});
