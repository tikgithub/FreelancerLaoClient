import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { HeaderComponent } from './widget/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './pages/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { PostajobComponent } from './pages/postajob/postajob.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HelpComponent } from './pages/help/help.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatDividerModule} from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PostajobComponent,
    AboutusComponent,
    HelpComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers:
    [
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
