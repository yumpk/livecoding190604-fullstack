const express = require("express");
const app = express();
const { portNumber, db } = require("./conf");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const msg = "Welcome on LC-Fullstack!";
  console.log(msg);
  res.status(200).send(msg);
});

app.post("/answer", (req, res) => {
  let msg = "Called the POST/answer route!";
  console.log(msg);

  const email = req.body.email;
  const content = req.body.content;

  console.log(`Received email=${email} and content=${content}`);
  db.query(
    "INSERT INTO `answers` (`email`, `content`) VALUES('" +
      email +
      "', '" +
      content +
      "');",
    (err, rows, fields) => {
      if (err) throw err;
      msg = "Answer recorded!";
    }
  );
  res.status(200).send(msg);
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
