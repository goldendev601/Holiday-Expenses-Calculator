var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();

var jsonParser = bodyParser.json()

app.use(cors())

app.listen(8000, () => {
 console.log("Server running on port 8000");
});



app.post("/payouts", jsonParser, (req, res, next) => {
  let data = req.body;
  let expenses = [];
  let sum = 0;
  let equalShare = 0;
  if (data) {
    expenses = data.expenses;
    expenses.forEach(async (expense) => {
      sum += parseInt(expense.amount);
    });
    equalShare = sum / expenses.length;
  }

  let result_json = {
    total: sum,
    equalShare: equalShare
  }
  
  res.json(result_json);
});