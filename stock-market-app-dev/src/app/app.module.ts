import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockDataComponent } from './pages/stock-data/stock-data.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent,
    FooterComponent,
    HeaderComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
