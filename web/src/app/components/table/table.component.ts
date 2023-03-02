import { Component, Input, OnInit } from '@angular/core';
import { IExpense } from 'src/app/types/expense.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() expenses: IExpense[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
