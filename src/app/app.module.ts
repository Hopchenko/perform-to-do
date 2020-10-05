import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './modules/header/header.module';
import { TasksCatalogModule } from './modules/tasks-catalog/tasks-catalog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    TasksCatalogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
