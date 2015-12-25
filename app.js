var express    = require('express');
var bodyParser = require('body-parser');
// var cors       = require('cors');

var app = express();
// app.use(cors);
// app.options('/get', cors());
// app.options('/post', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var items = [];

items.push({
  msg: "hello",
  timestamp: Math.round(new Date().getTime()/1000)
});

items.push({
  msg: "This is a test.",
  timestamp: Math.round(new Date().getTime()/1000)
});

items.push({
  msg: "Don't be afraid.",
  timestamp: Math.round(new Date().getTime()/1000)
});

items.push({
  msg: "Show me your code.",
  timestamp: Math.round(new Date().getTime()/1000)
});

items.push({
  msg: "hahaha.",
  timestamp: Math.round(new Date().getTime()/1000)
});

app.get("/get", function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,HEAD, OPTIONS");
  res.send(items);
});

app.post("/post", function(req, res) {
  var msg       = req.body.msg;
  var timestamp = Math.round(new Date().getTime()/1000);

  items.shift();
  items.push({
    msg: msg,
    timestamp: timestamp
  });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,HEAD, OPTIONS");
  res.send(items);
});

app.listen(2333, function() {
  console.log("listen at port 2333");
});