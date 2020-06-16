import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Views/Components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './Views/Pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './Views/Pages/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatePizzaComponent } from './Views/Pages/create-pizza/create-pizza.component';
import {MealListComponent} from './Views/meal-list/meal-list.component';
import {CurrencyHufPipe} from './Pipes/currency-huf.pipe';
import {FiveStarComponent} from './Views/five-star/five-star.component';
import {DrinkListComponent} from './Views/drink-list/drink-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    MealListComponent,
    DrinkListComponent,
    CurrencyHufPipe,
    FiveStarComponent,
    CreatePizzaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent, pathMatch: 'full'},
      {path: 'create-pizza', component: CreatePizzaComponent},
      {path: 'drinks', component: DrinkListComponent},
      {path: '**', component: PageNotFoundComponent},
    ]),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
