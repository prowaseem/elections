import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// custom validators
import validateCNIC from '../helpers/validators/validateCNIC';
import validateMOBILE from '../helpers/validators/validateMOBILE';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      cnic: [
        null,
        Validators.compose([
          validateCNIC,
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13)
        ])
      ],
      mobile: [
        null,
        Validators.compose([
          validateMOBILE,
          Validators.required
        ])
      ],
    });
  }
  get cnic() {
    return this.loginForm.get('cnic') as FormControl;
  }
  get mobile() {
    return this.loginForm.get('mobile') as FormControl;
  }
  send() {
    if (!this.loginForm.valid) {
      this.toastr.error('Your information is incorrect.', 'Alert');
      return;
    }
    console.log(this.loginForm);
  }

  ngOnInit() {
  }

}
