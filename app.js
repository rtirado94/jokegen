var express = require("express");
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static("public" + "src"));

app.set("view engine", "jsx");

app.get("/express_backend", function(req, res) {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(port, () => {
  console.log("app running " + port);
});
