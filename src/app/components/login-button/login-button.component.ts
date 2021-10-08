import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: '<button class="btn btn-success" (click)="auth.loginWithRedirect()">Log in</button>'
})
export class LoginButtonComponent {

  constructor(public auth: AuthService) {}

}
