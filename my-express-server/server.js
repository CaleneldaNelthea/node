
const express = require("express");

const app = express();

//req = request, res = response
app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: test@email.com");
});

app.get("/about", function(req, res) {
  res.send("I am the owner of this site");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>code>/li><li>Linux</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
