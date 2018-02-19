import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'account-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    constructor() {}

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    usernameFormControl = new FormControl('', [Validators.required]);
    passFormControl = new FormControl('', [Validators.required]);
    hide = true;

    getEmailErrorMessage() {
      return this.emailFormControl.hasError('required') ? 'This field is required' :
        this.emailFormControl.hasError('email') ? 'Not a valid email' :
          '';
    }

    getUsernameErrorMessage() {
      return this.usernameFormControl.hasError('required') ? 'This field is required' :
          '';
    }

    getPassErrorMessage() {
      return this.passFormControl.hasError('required') ? 'This field is required' :
          '';
    }
}
