import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      cnic: [null, Validators.required],
      mobile: null
    });
  }
  get cnic() {
    return this.loginForm.get('cnic') as FormControl;
  }
  get mobile() {
    return this.loginForm.get('mobile') as FormControl;
  }
  send() {
    console.log(this.loginForm.getRawValue());
  }

  ngOnInit() {
  }

}
