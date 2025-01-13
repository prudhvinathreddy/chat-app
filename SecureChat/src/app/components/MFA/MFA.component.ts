import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-verification',
  templateUrl: './MFA.component.html',
  styleUrls: ['./MFA.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginForm.valid) {
      // Form submission logic
      console.log('Form submitted:', this.loginForm.value);
    } else {
      // Form invalid
      console.log('Form is invalid.');
    }
  }
}
