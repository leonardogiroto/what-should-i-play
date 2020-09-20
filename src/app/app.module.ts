import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { GameCardComponent } from './components/game-card/game-card.component';

import { AngularMaterialModule } from './material.module';
import { AppService } from './app.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    GameCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
