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
import { ResultsComponent } from './pages/results/results.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { NotFoundDialogComponent } from './components/not-found-dialog/not-found-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    BuscadorComponent,
    ResultsComponent,
    UserCardComponent,
    NotFoundDialogComponent
  ],
  entryComponents: [
    NotFoundDialogComponent
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
    GithubApiService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
