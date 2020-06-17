import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Views/Components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './Views/Pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './Views/Pages/welcome/welcome.component';
import { CreatePizzaComponent } from './Views/Pages/create-pizza/create-pizza.component';
import { RegisterComponent } from './Views/Pages/register/register.component';
import { ResetPasswordComponent } from './Views/Pages/reset-password/reset-password.component';
import { BasketComponent } from './Views/Pages/basket/basket.component';

import { CurrencyHufPipe } from './Pipes/currency-huf.pipe';
import { MealListComponent } from './Views/meal-list/meal-list.component';
import { FiveStarComponent } from './Views/five-star/five-star.component';
import { DrinkListComponent } from './Views/drink-list/drink-list.component';
import { ListsComponent } from './Views/lists/lists.component';
import { IngredientByIdPipe } from './Pipes/ingredient-by-id.pipe';

import { AuthGuard } from './Guards/auth.guard';
import { UserService } from './Services/user.service';


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
      { path: '', component: WelcomeComponent, pathMatch: 'full'},
      { path: 'create-pizza', component: CreatePizzaComponent, canActivate: [AuthGuard]},
      { path: 'register', component: RegisterComponent},
      { path: 'reset-password', component: ResetPasswordComponent},
      { path: 'menu', component: ListsComponent},
      { path: 'basket', component: BasketComponent},
      { path: '**', component: PageNotFoundComponent},
    ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
