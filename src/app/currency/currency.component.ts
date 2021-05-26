import { Component, OnInit } from '@angular/core';
import { DataCurrencyService } from '../data-currency.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
   // add NgbModalConfig and NgbModal to the component providers
   providers: [NgbModalConfig, NgbModal]
})
export class CurrencyComponent implements OnInit {

  data:any
rates=[]
info:any
countries: any[];

  currencyIndexRate: any;
  currencyIndexSymbole: any;
  currencyIndexflag: any;
  currencyIndexName: any;
  currencyIndexCName: any;

  constructor(private _data: DataCurrencyService, config: NgbModalConfig, private modalService: NgbModal){
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content:any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {

    this._data.getPrices().subscribe(res => {

      this.data=res
      this.rates=res.response.rates
      

      this._data.getinfo().subscribe(async response =>{
        
        this.info=response
            // console.log(this.info)
            // console.log(this.data)
          var result: any[]=[]
          this.info.forEach((country:any) => {
              let flag = country.flag
              let code = country.currencies[0].code
              let CurrencyName = country.currencies[0].name
              let currency = country.currencies[0].code
              let CountryName = country.name
              let rate = this.rates[currency]
         
            result.push([
              {
                "rate": rate,
                "CountryName": CountryName,
                "flag": flag,
                "code": code,
                "CurrencyName": CurrencyName
              }
            ])    
          });
            this.countries=result
            //console.log("countries",this.countries)
      }) 
  });  

  

}
CurrencyChoice(){
  console.log("nice") 
  

      }
 
CurrencyChoix(index :any ){
  console.log(index) 
  console.log(this.countries[index]) 
  this.currencyIndexName = this.countries[index][0].CountryName
  this.currencyIndexflag = this.countries[index][0].flag
  this.currencyIndexSymbole = this.countries[index][0].code
  this.currencyIndexRate = this.countries[index][0].rate
  this.currencyIndexCName = this.countries[index][0].CurrencyName
  return (
  this.currencyIndexName,
  this.currencyIndexflag,
  this.currencyIndexSymbole,
  this.currencyIndexRate,
  this.currencyIndexCName
  )
}


  

}
