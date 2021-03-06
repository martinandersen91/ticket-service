import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketMainViewComponent } from './ticket-main-view/ticket-main-view.component';
import { CreateNewTicketComponent } from './ui/create-new-ticket/create-new-ticket.component';
import { TicketsListComponent } from './ui/tickets-list/tickets-list.component';
import { TicketThumbComponent } from './ui/ticket-thumb/ticket-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketMainViewComponent,
    CreateNewTicketComponent,
    TicketsListComponent,
    TicketThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
