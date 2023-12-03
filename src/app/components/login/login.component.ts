import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  loginForm: FormGroup;

  ngOnInit(): void {
    var passwordRegularExpression = /^[A-Za-z]\w{7,14}$/;
    this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(passwordRegularExpression)])
    })

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  submitLogin() {
    this.authService.login(this.loginForm.value)
    .subscribe(result => {
      this.router.navigate(['admin']);
    },
    error => {
      alert(error.message);
    })
  }
}
