import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../../match-validator/must-match.validator'
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  textBtnConfig = {
    text: 'Registrarse'
  };

  signupForm: FormGroup;
  submitted = false;

  user:{}

  constructor(private formBuilder: FormBuilder,private services:AuthService,private router: Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get formValidation() {
    return this.signupForm.controls;
  }

  onSubmit() {
   
 
    this.user = {
      email: this.signupForm.get('email').value,
      password:this.signupForm.get('password').value
    }
    this.submitted = true;


    if (this.signupForm.invalid) {
      return;
    }

    this.services.singUp(this.user).subscribe(res=>{
     this.router.navigate(['/listTasks']);
    },
    err =>{
      console.log(err)
    })

  }
}
