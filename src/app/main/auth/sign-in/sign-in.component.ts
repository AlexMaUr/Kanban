import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { validationErrors } from '../../../shared/constants/validation-errors.const';
import { ApplicationService } from '../../../core/services/application.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  errors = validationErrors;

  get emailControl(): AbstractControl {
    return this.signInForm.get('email');
  }

  get passwordControl(): AbstractControl {
    return this.signInForm.get('password');
  }

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl( '', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.email.pattern),
        ],
      ),
      password: new FormControl( '', [
          Validators.required,
          Validators.minLength(this.applicationService.validation.password.minlength),
          Validators.maxLength(this.applicationService.validation.password.maxlength),
          Validators.pattern(this.applicationService.validation.password.pattern),
        ],
      ),
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value);
    }
  }
}
