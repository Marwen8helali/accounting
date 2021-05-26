import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})

export class DateRangePickerComponent implements OnInit {
  range : FormGroup;
 
  constructor() { }

  ngOnInit(): void { 
    this.range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  }

}
