import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class DataCurrencyService {

  result:any;
  
  constructor(private _http: HttpClient) { }

  getPrices():Observable<any>{
    return this._http.get('https://api.currencyscoop.com/v1/latest?api_key=b939ee8fb1ec40b92e4f85851e2eeafc')
     //.map(result => this.result = result.json());
  }
  
  getinfo(){
    return this._http.get('https://restcountries.eu/rest/v2/')
   
  }
  


 

 



}
