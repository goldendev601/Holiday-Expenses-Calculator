import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../types/expense.type';

@Injectable({
  providedIn: 'root'
})
export class SettleService {

  constructor(
    private http: HttpClient
  ) { }

  up (expenses: IExpense[]) {
    const headers = { 'Content-Type': 'application/json' };
    const body = { expenses: expenses };
    const baseURL = 'http://localhost:8000/payouts/'
    return this.http.post<any>(baseURL, body, { headers })
  }
}
