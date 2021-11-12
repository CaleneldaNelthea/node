const express = require("express");
const bodyParser = require("body-parser");
// boyparser to use data send from index

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//__dirname gives the full path of the current folder
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight / (height * height);
  var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi > 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
  res.send(interpretation);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
