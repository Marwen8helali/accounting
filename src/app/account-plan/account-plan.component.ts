import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-account-plan',
  templateUrl: './account-plan.component.html',
  styleUrls: ['./account-plan.component.css']
})
export class AccountPlanComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Debit', 'credit', 'Alternative'];
  constructor() { }
  

  ngOnInit(): void {
  }

}
