import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
            <button type="submit" class="btn btn-primary" [disabled]="!registerForm.valid">Regisztráció</button>
        </form>
        <br/><br/>
    </div>
</div>
`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    registerForm : FormGroup;

    constructor(fb: FormBuilder){
      this.registerForm = fb.group({
        'firstname' : [null, Validators.required],
        'lastname' : [null, Validators.required],
      })
    }

    submitForm(value: any){
      console.log(value);
    }

}
