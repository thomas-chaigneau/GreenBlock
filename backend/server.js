const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const url = 'mongodb://toto:toto666@ds249992.mlab.com:49992/hackathondeath';

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) { throw err; }
  console.log('DB OKKKK')
});

let DataSchema = new mongoose.Schema({
  webSite: {
    type: String
  },
  Octel: {
    type: Number
  }
});

let DataModel = mongoose.model('Data', DataSchema );


app.post('/datawebSite', async (req, res) => {
  // console.log('rrrrr')
  // console.log(req.body.Octel[0].value, typeof req.body.Octel[0].value);
  // console.log(typeof parseInt(req.body.octel));
  const bidule = {
    webSite: req.body.webSite,
    Octel: parseInt(req.body.Octel[0].value),
  };
  console.log(bidule)
  const newBidule = await new DataModel(bidule);
  newBidule.save();
  res.send(bidule);

})

// app.post("/leaderboard", async (req, res) => {
//   const score = req.body.score;
//   console.log(score);
//   const newScore = await new leaderboardModel(score);
//   newScore.save();
//   console.log(newScore);
//   res.send("done");
// });


app.get('/', (req, res) => {
  res.send('coucou le hack').status(200);
})


app.listen(port, () => {
console.log('running server on ' + port);
});