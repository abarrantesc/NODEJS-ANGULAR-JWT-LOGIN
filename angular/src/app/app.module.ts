import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SidenavModule } from './sidenav/sidenav.module'


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

//Components
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DefaultButtonComponent } from './shared/default-button/default-button.component';
import { SignupComponent } from './pages/signup/signup.component';
//SERVICES
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import {AuthGuard} from './services/auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignupComponent,
    DefaultButtonComponent,
        ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false
    }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SidenavModule,
  ],
  providers: [CookieService,AuthGuard,
    {provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true}],
bootstrap: [AppComponent]
})
export class AppModule { }
