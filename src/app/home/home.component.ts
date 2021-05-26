import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/img/th.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/img/businessman-workplace.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/img/presentation-hichem-amouri.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/img/lc-expertise-comptable-laurent-challouet.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/img/thth.jpg"}
  ];
    

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
