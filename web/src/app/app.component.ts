import { Component, OnInit } from '@angular/core';
import { SettleService } from './services/settle.service';
import { IExpense } from './types/expense.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator';
  expenses: IExpense[] = [];
  json_data = "";


  constructor(private settleService: SettleService) {
  }
  ngOnInit(): void {
    
  }

  addExpense (expense: IExpense) {
    this.expenses.push(expense);
  }

  settleUp () {
    this.settleService.up(this.expenses).subscribe(data => {
      console.log(data);
      this.json_data = JSON.stringify(data, null, 4)
    });
  }
}
