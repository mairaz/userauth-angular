import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userauth-angular';
  form!: FormGroup;

  errors: string[] = []
  messagePerErrorCode: any = {
    min: 'The minimum length is 10 characters.',
    uppercase: 'At least one upper case character.',
    digits: 'At least one numeric character.'
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['']
    })
  }

  signup() {
    if (this.form.valid) {
      const payload = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.authService.signup(payload).subscribe((res: any) => {
        this.errors = []
      },
        (error) => { this.errors = error.error.errors })
    }

  }
}
