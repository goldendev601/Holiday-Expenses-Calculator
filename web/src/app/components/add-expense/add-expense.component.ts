import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IExpense } from 'src/app/types/expense.type';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  @Output() onClick = new EventEmitter<IExpense>();

  name: string = '';
  amount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick () {
    this.onClick.emit({
      name: this.name,
      amount: this.amount
    })
  }
}
