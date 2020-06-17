import { Injectable } from '@angular/core';
import { User } from '../Models/Users';
import { ShoppingBasket } from '../Models/ShoppingBasket';
import { users } from '../HardDatabase/DatabaseHelper';

@Injectable({
  providedIn: 'root'
})

// Ez a service felel a userek kezeléséért.
export class UserService {

  user: User;

  constructor() {
    // Backendről user lista inicializálás (ha még nincs).
    if (!localStorage.getItem('users')) {
      this.storeUsers(users);
    }
  }

  // User regisztrálása az adatbázisba, eltárolás.
  registerUser(name: string, nickName: string, email: string, passwordHash: string): void {
    const userList = JSON.parse(localStorage.getItem('users')); // Tárolt lista lekérése.

    const idCount = userList.length;
    this.user = new User(idCount, name, nickName, email, passwordHash); // Új user generálása.

    userList.push(this.user); // Új user listához adása.

    this.storeUsers(userList); // Frissült lista eltárolása.
  }

  // User loggedI in kezelés a GUARD-hoz.
  loginUser(user: User) {
    localStorage.setItem('loggedIn', JSON.stringify(true));
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getLoggedInUser(): User {
    let loggedInUser: User;
    if (localStorage.getItem('loggedInUser')) {
      loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      return loggedInUser;
    } else {
      loggedInUser = new User();
      return loggedInUser;
    }
  }

  // User keresése az adatbázisban.
  findUser(email: string, passwordHash: string): User {
    const userList: User[] = JSON.parse(localStorage.getItem('users'));
    for (const user of userList) {
      console.log('checking:');
      console.log(user);
      if (user.email === email && user.passwordHash === passwordHash) {
        console.log(user);
        console.log('found');
        return user;
      }
    }
    return undefined;
  }

  findUserByEmail(email: string): User {
    const userList: User[] = JSON.parse(localStorage.getItem('users'));
    for (const user of userList) {
      console.log('checking:');
      console.log(user);
      if (user.email === email) {
        console.log(user);
        console.log('found');
        return user;
      }
    }
    return undefined;
  }

  // Userlista tároló
  storeUsers(userList: User[]): void {
    localStorage.setItem('users', JSON.stringify(userList));
  }

}
