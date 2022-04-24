import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {RegisterComponent} from './Views/Pages/register/register.component';
import {ResetPasswordComponent} from './Views/Pages/reset-password/reset-password.component';
import {BasketComponent} from './Views/Pages/basket/basket.component';

import {CurrencyHufPipe} from './Pipes/currency-huf.pipe';
import {MealListComponent} from './Views/Components/meal-list/meal-list.component';
import {FiveStarComponent} from './Views/Components/five-star/five-star.component';
import {DrinkListComponent} from './Views/Components/drink-list/drink-list.component';
import {ListsComponent} from './Views/Pages/lists/lists.component';
import {IngredientByIdPipe} from './Pipes/ingredient-by-id.pipe';

import {AuthGuard} from './Guards/auth.guard';
import {AppComponent} from './app.component';
import {NavBarComponent} from './Views/Components/nav-bar/nav-bar.component';
import {PageNotFoundComponent} from './Views/Pages/page-not-found/page-not-found.component';
import {WelcomeComponent} from './Views/Pages/welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {CreatePizzaComponent} from './Views/Pages/create-pizza/create-pizza.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './Services/user.service';

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
    CreatePizzaComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ListsComponent,
    IngredientByIdPipe,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path: '', component: WelcomeComponent, pathMatch: 'full' },
    { path: 'create-pizza', component: CreatePizzaComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'menu', component: ListsComponent },
    { path: 'basket', component: BasketComponent },
    { path: '**', component: PageNotFoundComponent },
], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
