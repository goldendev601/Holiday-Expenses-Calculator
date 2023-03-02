import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IExpense } from 'src/app/types/expense.type';

@Component({
  selector: 'app-settle-button',
  templateUrl: './settle-button.component.html',
  styleUrls: ['./settle-button.component.css']
})
export class SettleButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick () {
    this.onClick.emit()
  }
}
