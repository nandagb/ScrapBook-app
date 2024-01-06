import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  imageUrl: string = ''

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.imageUrl = 'assets/images/meditation.png';
  }

  submitForm() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  

}
