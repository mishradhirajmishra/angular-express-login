import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthModule} from "./auth/auth.module"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import {UserModule  } from "./user/user.module";
import { AuthGuard } from './auth.guard';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AuthModule,
    UserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [Title,AuthGuard,AuthService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
