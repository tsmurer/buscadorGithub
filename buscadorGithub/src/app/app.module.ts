import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './services/github-api.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
