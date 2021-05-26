import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
   // add NgbModalConfig and NgbModal to the component providers
   providers: [NgbModalConfig, NgbModal]
})
export class PopUpComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content:any) {
    this.modalService.open(content);
  }
  ngOnInit(): void {
   
  }

}





