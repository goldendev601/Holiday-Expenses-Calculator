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
  let owes = [];
  let owed = [];
  const payouts = [];
  if (data) {
    expenses = data.expenses;
    expenses_by_person = {};
    for (const expense of expenses) {
      if (expenses_by_person[expense.name]) {
        expenses_by_person[expense.name] += expense.amount
      } else {
        expenses_by_person[expense.name] = expense.amount
      }
    }
    sum = expenses.reduce((prev, expense) => prev + parseFloat(expense.amount), 0)

    equalShare = sum / Object.keys(expenses_by_person).length;

    let owed_total = 0;

    for (const name in expenses_by_person) {
      if (expenses_by_person[name] < equalShare) {
        owes.push({
          name: name,
          amount: expenses_by_person[name]
        })
      } else if (expenses_by_person[name] > equalShare) {
        owed.push({
          name: name,
          amount: expenses_by_person[name]
        })

        owed_total += expenses_by_person[name];
      }
    }

    console.log(owes, owed)
    for(const owes_i of owes) {
      const owe_amount = equalShare - owes_i['amount'];
      for (const owed_i of owed) {
        const amount = owed_i['amount'] / owed_total * owe_amount
        payouts.push({
          'owes': owes_i['name'],
          'owed': owed_i['name'],
          'amount': amount
        })
      }
    }
  }



  let result_json = {
    total: sum,
    equalShare: equalShare,
    payouts: payouts
  }
  
  res.json(result_json);
});