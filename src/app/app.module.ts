import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import ngx-translate-messageformat-compiler
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

// modules
import { FooterComponent, HeaderComponent, PrivacyComponent } from './components';
import { HomeComponent } from './home/home.component';

// import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
// import { FlexLayoutModule } from "@angular/flex-layout";
// 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // components
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // material stuff for sidenav
   // MatToolbarModule,
   // MatSidenavModule,
   // MatListModule,
   // MatIconModule,
   // MatButtonModule,
   // FlexLayoutModule,
   // BrowserAnimationsModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      // compiler configuration
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

