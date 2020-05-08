import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Layout Components
 */
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { TrialsComponent } from './features/trials/trials.component';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';
import { LoginComponent } from './features/login/login.component';

/**
 * Fixed components
 */
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

const layoutComponents = [
  AppComponent,
  TrialsComponent,
  HowItWorksComponent,
  LoginComponent,
  NavbarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [layoutComponents],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
