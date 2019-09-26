import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Account } from './account/account.component';
import { CalculatorComponent } from './calculator/calculator.component';
//decorator
// module is nothing but container. componets - declarations, services- provider, other modules - imports
@NgModule({
  declarations: [
    AppComponent,
    Account,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
