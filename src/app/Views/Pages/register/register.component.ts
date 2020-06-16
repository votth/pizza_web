import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-register',
  template: `
  <div class="card-body-main">
    <div class="card align-items-center">
        <h2 class="h2 text-capitalize p-5">Regisztráció</h2>
        <form [formGroup]="registerForm">
            <p>Form valid: {{ registerForm.valid }}</p>
            <div class="form-group">
                <label>Teljes név</label>
                <div class="form-row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Keresztnév" [formControl]="registerForm.controls['firstname']">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Vezetéknév" [formControl]="registerForm.controls['lastname']">
                    </div>
                </div>
            </div>
            
            <!-- Testing for feedback error -->
            <div class="form-group" [ngClass]="{'has-error':!registerForm.controls['firstname'].valid}">
            <label>First Name:</label>
            <input class="form-control" type="text" placeholder="John" [formControl]="registerForm.controls['firstname']">
            </div>
            <!-- We are using the ngClass directive to conditionally add a class to our div if the form is invalid -->
            <div class="form-group" [ngClass]="{'has-error':!registerForm.controls['lastname'].valid}">
              <label>Last Name</label>
              <input class="form-control" type="text" placeholder="Doe" [formControl]="registerForm.controls['lastname']">
            </div>

            <button type="submit" class="btn btn-primary" [disabled]="!registerForm.valid">Regisztráció</button>
        </form>
        <br/><br/>
    </div>
  </div>
`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm : FormGroup;

    firstname: string;
    lastname: string;
    fullname: string;
    nickname: string;
    email: string;
    password: string;
    passwordagain: string;
  
    constructor(private userService: UserService) { 
      
    }

    // constructor(fb: FormBuilder){
    //   this.registerForm = fb.group({
    //     'firstname' : [null, Validators.required],
    //     'lastname' : [null, Validators.required],
    //   })
    // }

    registerClick(): void {
      this.fullname = this.firstname + ' ' + this.lastname;
      this.password = JSON.stringify(Md5.hashStr(this.password));
      this.passwordagain = JSON.stringify(Md5.hashStr(this.passwordagain));
      this.userService.registerUser(this.fullname, this.nickname, this.email, this.password);
      console.log(this.fullname);
      console.log(this.nickname);
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordagain);
    }

    submitForm(value: any){
      console.log(value);
    }

    ngOnInit(): void {
    }
    
}
