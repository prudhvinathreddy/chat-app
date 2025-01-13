import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss'],
})
export class AppComponent {
  user$ = this.usersService.currentUserProfile$;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private usersService: UsersService
  ) {}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
