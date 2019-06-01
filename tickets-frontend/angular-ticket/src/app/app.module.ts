import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketMainViewComponent } from './ticket-main-view/ticket-main-view.component';
import { CreateNewTicketComponent } from './ui/create-new-ticket/create-new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketMainViewComponent,
    CreateNewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
