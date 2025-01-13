import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-page/login-page.component';
import { SignUpComponent } from './components/sign-up-page/sign-up-page.component';
import { HomeComponent } from './components/home-page/home-page.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile-page/profile-page.component';
import { SecretMessageEmbedderComponent } from './components/Image-Steganography/Image-Steganography.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'is',
    component: SecretMessageEmbedderComponent,
    ...canActivate(redirectToLogin),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
