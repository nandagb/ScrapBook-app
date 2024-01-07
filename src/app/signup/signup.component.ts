import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private fb: FormBuilder, private router: Router) {}
  
  imageUrl: string = ''

  signupForm: FormGroup = new FormGroup({});

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });

    this.imageUrl = 'assets/images/boy-and-dog.png';
  }

  submitForm() {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }
}
