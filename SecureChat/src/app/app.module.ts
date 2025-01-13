import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home-page/home-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up-page/sign-up-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ProfileComponent } from './components/profile-page/profile-page.component';
import { MatListModule } from '@angular/material/list';
import {} from '@angular/material/form-field';
import {} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DateDisplayPipe } from './pipes/date-display.pipe';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { SecretMessageEmbedderComponent } from './components/Image-Steganography/Image-Steganography.component';
import { EmailVerificationComponent } from './components/MFA/MFA.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    SignUpComponent,
    ProfileComponent,
    DateDisplayPipe,
    SecretMessageEmbedderComponent,
    EmailVerificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
