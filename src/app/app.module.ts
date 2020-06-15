import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Views/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './Views/page-not-found/page-not-found.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { MealListComponent } from './Views/meal-list/meal-list.component';
import { DrinkListComponent } from './Views/drink-list/drink-list.component';
import { CurrencyHufPipe } from './Pipes/currency-huf.pipe';
import {FormsModule} from '@angular/forms';
import { FiveStarComponent } from './Views/five-star/five-star.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    MealListComponent,
    DrinkListComponent,
    CurrencyHufPipe,
    FiveStarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent, pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
