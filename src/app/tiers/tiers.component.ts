import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Fournisseur', 'Client', 'Banque', 'Organisation sociale', 'état', 'autre tiers'];
  constructor() { }

  ngOnInit(): void {
  }

}
