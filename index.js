var express = require("express");
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static("public" + "src"));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log("app running" + port);
});
