import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataCurrencyService } from './data-currency.service';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { CurrencyComponent } from './currency/currency.component';
import { AccountingPeriodComponent } from './accounting-period/accounting-period.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TiersComponent } from './tiers/tiers.component';
import { KeyComptableComponent } from './key-comptable/key-comptable.component' ;
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { RefComptaComponent } from './ref-compta/ref-compta.component';
import { HomeComponent } from './home/home.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountPlanComponent } from './account-plan/account-plan.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';

const routes: Routes = [ 
  {path: 'home' , component: HomeComponent},
  {path: 'Ref.comptable' , component: RefComptaComponent},
  {path: 'AccountPlan' , component: AccountPlanComponent},
  {path: '**' , component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    NavbarComponent,
    AccountingPeriodComponent,
    DateRangePickerComponent,
    TiersComponent,
    KeyComptableComponent,
    RefComptaComponent,
    HomeComponent,
    NotFoundComponent,
    AccountPlanComponent,
    FooterComponent,
    PopUpComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule, 
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatCarouselModule.forRoot(),
    RouterModule.forRoot(routes),
    NgbModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [DataCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
