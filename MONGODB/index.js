const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
// app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.status(200);
  res.send("hello world...!"+req.url,req.body);



});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
